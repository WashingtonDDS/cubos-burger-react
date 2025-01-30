// import { ChangeEvent } from "react";

export type TProductInCart = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  idProduct: string;
  quantity: number;
};

export type TProductInCartProps = {
  item: TProductInCart;
  // deleteProduct: (productInCart: TProductInCart) => void;
  // updateQuantityProductInCart: (
  //   event: ChangeEvent<HTMLSelectElement>,
  //   productInCart: TProductInCart
  // ) => void;
};
