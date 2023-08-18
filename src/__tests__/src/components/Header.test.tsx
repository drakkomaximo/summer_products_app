import { Header } from "../../../components";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider, ProductProvider } from "../../../context";

describe("Header Component", () => {
  test("should default title 'Product List' if title prop is undefined", () => {
    render(
      <MemoryRouter>
        <ProductProvider>
          <CartProvider>
            <Header />
          </CartProvider>
        </ProductProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("Product List")).toBeDefined();
  });

  test("should show title all the time", () => {
    const props = {
      title: "Header Title",
    };
    render(
      <MemoryRouter>
        <ProductProvider>
          <CartProvider>
            <Header {...props} />
          </CartProvider>
        </ProductProvider>
      </MemoryRouter>
    );
    expect(screen.getByText(/Header Title/i)).toBeDefined();
  });

  test("should show cart counter in 0", () => {
    render(
      <MemoryRouter>
        <ProductProvider>
          <CartProvider>
            <Header />
          </CartProvider>
        </ProductProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("0")).toBeDefined();
  });
});
