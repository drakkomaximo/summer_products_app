export type ProductState = Product[];

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "UPDATE_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: number };

export type CartState = CartItem[];

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | {
      type: "CHANGE_QUANTITY";
      payload: { productId: number; quantity: number };
    };

export type Product = {
  id: number;
  image: ProductImage;
  name: string;
  description: string;
  price: number;
};

export type ProductImage = {
  imageUrl: string;
  imageName: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};