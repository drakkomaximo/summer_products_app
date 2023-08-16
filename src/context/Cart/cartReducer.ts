import { CartAction, CartState } from "../../interfaces";

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { product: action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.product.id !== action.payload);

    case "CHANGE_QUANTITY":
      return state.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};
