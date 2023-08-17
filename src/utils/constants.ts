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
    price: 1999,
  },
  {
    id: 'test2',
    image: {
      imageUrl: "https://picsum.photos/id/102/200/300",
      imageName: "product_2.jpg",
    },
    name: "Producto 2",
    description: "Descripción del Producto 2",
    price: 2499,
  },
  {
    id: 'test3',
    image: {
      imageUrl: "https://picsum.photos/id/103/200/300",
      imageName: "product_3.jpg",
    },
    name: "Producto 3",
    description: "Descripción del Producto 3",
    price: 1299,
  },
  {
    id: 'test4',
    image: {
      imageUrl: "https://picsum.photos/id/104/200/300",
      imageName: "product_4.jpg",
    },
    name: "Producto 4",
    description: "Descripción del Producto 4",
    price: 3499,
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
At Sumer Labs, we are committed to providing you with a seamless and secure experience. By using our services, you agree to our Terms and Conditions, which outline the rules and guidelines governing your interactions with our platform. These terms cover various aspects, including your rights and responsibilities, user behavior, data usage, and intellectual property. We value your privacy and have detailed our Privacy Policy to ensure your personal information is handled responsibly. By continuing to use our services, you acknowledge that you've read and understood both our Terms and Conditions and Privacy Policy. Feel free to reach out to our dedicated support team if you have any questions or concerns.
`;

export const privacyPolicy = `
At Sumer Labs, safeguarding your privacy is a top priority. Our Privacy Policy outlines how we collect, use, and protect your personal information when you use our services. We are committed to maintaining the confidentiality of your data and ensuring its secure handling. This policy explains the types of information we collect, the purposes for which we use it, and the options you have to control your data. We take measures to ensure compliance with data protection regulations and respect your choices when it comes to managing your information. By using our services, you acknowledge and consent to the practices described in our Privacy Policy. Your trust is important to us, and we encourage you to review our policy to understand how we work to protect your privacy.
`

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
