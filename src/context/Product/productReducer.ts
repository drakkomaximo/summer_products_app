import { ProductState, ProductAction } from "../../interfaces";

export const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "UPDATE_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product
      );

    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
};
