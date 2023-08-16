import { Product } from "../interfaces";

export const fakeProducts: Product[] = [
  {
    id: 'test1',
    image: {
      imageUrl: "https://picsum.photos/id/101/200/300",
      imageName: "product_1.jpg",
    },
    name: "Producto 1",
    description: "Descripción del Producto 1",
    price: 19.99,
  },
  {
    id: 'test2',
    image: {
      imageUrl: "https://picsum.photos/id/102/200/300",
      imageName: "product_2.jpg",
    },
    name: "Producto 2",
    description: "Descripción del Producto 2",
    price: 24.99,
  },
  {
    id: 'test3',
    image: {
      imageUrl: "https://picsum.photos/id/103/200/300",
      imageName: "product_3.jpg",
    },
    name: "Producto 3",
    description: "Descripción del Producto 3",
    price: 12.99,
  },
  {
    id: 'test4',
    image: {
      imageUrl: "https://picsum.photos/id/104/200/300",
      imageName: "product_4.jpg",
    },
    name: "Producto 4",
    description: "Descripción del Producto 4",
    price: 34.99,
  },
  {
    id: 'test5',
    image: {
      imageUrl: "https://picsum.photos/id/106/200/300",
      imageName: "product_5.jpg",
    },
    name: "Producto 5",
    description: "Descripción del Producto 5",
    price: 29.99,
  },
];
