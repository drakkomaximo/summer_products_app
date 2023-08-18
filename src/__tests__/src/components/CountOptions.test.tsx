import { render, screen } from "@testing-library/react";
import { CountOptions } from "../../../components";

describe("CountOptions Component", () => {
  const handleQuantityChangeMock = vi.fn()

  test("should render the quantity value correctly", () => {
    const props = {
      quantity: 5,
      handleQuantityChange: handleQuantityChangeMock,
    };
    render(<CountOptions {...props} />);
    expect(screen.getByText("5")).toBeDefined();
  });
});
