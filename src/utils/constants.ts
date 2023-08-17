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
    price: 2999,
  },
  {
    id: 'test6',
    image: {
      imageUrl: "https://picsum.photos/id/106/200/300",
      imageName: "product_5.jpg",
    },
    name: "Producto 5",
    description: "Descripción del Producto 5",
    price: 2999,
  },
  {
    id: 'test7',
    image: {
      imageUrl: "https://picsum.photos/id/106/200/300",
      imageName: "product_5.jpg",
    },
    name: "Producto 5",
    description: "Descripción del Producto 5",
    price: 2999,
  },
];

export const termsAndConditionsContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo vel lectus tincidunt fermentum in a urna.
Vestibulum eu nisi at nisl fringilla dapibus a non turpis. Nullam vel eros nec tortor ullamcorper bibendum.
Fusce in nunc convallis, commodo sapien eu, vestibulum tellus. Sed consectetur, eros ac scelerisque tincidunt,
velit tellus tincidunt sapien, id tristique purus nunc vel est.

Duis laoreet justo ut dictum gravida. Vivamus a eros et libero auctor fringilla id ut turpis.
Aliquam non nisl vel tortor hendrerit volutpat. Ut vel ligula ullamcorper, egestas arcu ut, gravida nisi.
Integer in libero vel justo condimentum sollicitudin.

Morbi et nunc ac nulla efficitur condimentum. Sed semper purus nec urna hendrerit, a malesuada mi vestibulum.
Proin consectetur odio in eros pharetra, sed suscipit risus tristique. Sed eu eleifend quam, eu cursus elit.
`;

export const enum ROUTES {
  NOTFOUND = '*',
  HOME = '/',
  CREATEPRODUCT = '/create-product',
  SHOPPINGCART = '/shopping-cart',
  PRODUCTDETAILS = '/product-details',
  EDITPRODUCT = '/edit-product',
}

export const enum PREFIXPRICES {
  NOONE = '',
  US = '$',
  EU = '€',
  CN = '¥'
}
