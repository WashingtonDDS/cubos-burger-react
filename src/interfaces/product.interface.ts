export type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
};

export type TProductProps = {
  item: TProduct;
};
