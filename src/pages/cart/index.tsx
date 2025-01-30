import styles from "./cart.module.css";
import { ProductInCart } from "../../components/ProductInCart";
import { useLoaderData } from "react-router-dom";
import { TProductInCart } from "../../interfaces/productCart.interface";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/formatPrice";

export function Cart(): JSX.Element {
  const productsInCart = useLoaderData() as TProductInCart[];
  const [total, setTotal] = useState<string>("R$ 0");
  const calcTotal = () => {
    const total = productsInCart.reduce(
      (acc: number, item: TProductInCart) =>
        (acc += item.quantity * item.price),
      0
    );
    setTotal(formatPrice(total));
  };
  useEffect(() => calcTotal(), []);
  return (
    <main className="main__container container">
      <section className={styles.products}>
        <h1 className={styles.products__title}>Carrinho</h1>
        <div className={styles.products__body}>
          {productsInCart.map((item) => (
            <ProductInCart key={item.id} item={item} />
          ))}
        </div>
        <h1 className={styles.products__total}>Total: {total}</h1>
      </section>
    </main>
  );
}
