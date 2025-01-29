import styles from "./cart.module.css";
import { ProductInCart } from "../../components/ProductInCart";
import { useLoaderData } from "react-router-dom";
import { TProductInCart } from "../../interfaces/productCart.interface";

export function Cart(): JSX.Element {
  const productsInCart = useLoaderData() as TProductInCart[];

  return (
    <main className="main__container container">
      <section className={styles.products}>
        <h1 className={styles.products__title}>Carrinho</h1>
        <div className={styles.products__body}>
          {productsInCart.map((item) => (
            <ProductInCart key={item.id} item={item} />
          ))}
        </div>
        <h1 className={styles.products__total}>Total: R$ 100,00</h1>
      </section>
    </main>
  );
}
