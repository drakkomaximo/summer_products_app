import { ProductsState, ProductAction } from "../../interfaces";

export const productReducer = (
  state: ProductsState,
  action: ProductAction
): ProductsState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product
          ),
        ],
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      };

    case "SELECT_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };

    case "CLEAN_PRODUCT":
      return {
        ...state,
        product: undefined,
      };

    default:
      return state;
  }
};
