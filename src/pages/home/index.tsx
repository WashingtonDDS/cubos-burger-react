import { useLoaderData } from "react-router-dom";
import { Product } from "../../components/Product";
import styles from "./home.module.css";
import { TProduct } from "../../interfaces/product.interface";

export function Home(): JSX.Element {
  const products = useLoaderData() as TProduct[];
  const hamburger = products.filter((item) => item.category === "hamburguer");
  const drinks = products.filter((item) => item.category === "bebidas");
  console.log(products);

  return (
    <main className="main__container container">
      <section className={styles.products}>
        <h1 className={styles.products__title}>Hamburguer</h1>
        <div className={styles.products__body}>
          {hamburger.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </section>
      <hr className={styles.space} />
      <section className={styles.products}>
        <h1 className={styles.products__title}>Bebidas</h1>
        <div className={styles.products__body}>
          {drinks.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
