import hamburgerImage from "../../assets/hamburger.png";
import { TProductProps } from "../../interfaces/product.interface";
import styles from "./product.module.css";

export function Product({ item }: Readonly<TProductProps>): JSX.Element {
  const { title, description, price } = item;
  return (
    <div className={styles.product}>
      <img
        src={hamburgerImage}
        alt="hamburguer"
        className={styles.product__image}
      />
      <h3 className={styles.product__title}>{title}</h3>
      <p className={styles.product__description}>{description}</p>
      <h2 className={styles.product__price}>{price}</h2>
      <button className={`${styles.product__button} button--primary button`}>
        add ao carrinho
      </button>
    </div>
  );
}
