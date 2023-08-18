import { CustomModal } from "../../../components";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CustomModal Component", () => {

  const props = {
    title: 'Test Title',
    message: 'Content of the modal'
  }

  beforeEach(() => {
    render(<CustomModal {...props} />);
  });

  test("should show title all the time", () => {
    expect(screen.getByText(/Test Title/i)).toBeDefined();
  });

  test("should no show part of the content at the start", () => {
    expect(screen.queryByText(/modal/i)).toBeNull()
  });

  test("should show message after click the btn title", () => {
    const button = screen.getByText(/Test Title/i)
    fireEvent.click(button)
    expect(screen.getByText(/modal/i)).toBeDefined();
  });

  test("should hide message after click the Close button", () => {
    const button = screen.getByText(/Test Title/i)
    fireEvent.click(button)
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    expect(screen.queryByText("Content of the modal")).toBeNull();
  });
});
