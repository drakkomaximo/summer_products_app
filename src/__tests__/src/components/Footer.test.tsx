import { Footer } from "../../../components";
import { render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("should show title all the time", () => {
    expect(screen.getByText("Created by drakkomaximo © 2023")).toBeDefined();
  });

  test("should show part of the content at the start", () => {
    expect(screen.queryByText(/drakkomaximo/)).toBeDefined();
  });
});
