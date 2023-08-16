export type ProductState = Product[];

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "UPDATE_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: string }

export type CartState = CartItem[];

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | {
      type: "CHANGE_QUANTITY";
      payload: { productId: string; quantity: number };
    };

export type Product = {
  id: string;
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