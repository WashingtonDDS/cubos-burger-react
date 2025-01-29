import hamburgerImage from "../../assets/hamburger.png";
import drinksImage from "../../assets/coca-cola.png";
import { TProduct, TProductProps } from "../../interfaces/product.interface";
import styles from "./product.module.css";
import { formatPrice } from "../../utils/formatPrice";
import { makeRequest } from "../../utils/makeRequest";
import { TProductInCart } from "../../interfaces/productCart.interface";

export function Product({ item }: Readonly<TProductProps>): JSX.Element {
  const verifyProductInCart = async (product: TProduct): Promise<boolean> => {
    const productInCart = (await makeRequest(
      "/cart",
      "GET"
    )) as TProductInCart[];
    const existProductInCart = productInCart.filter(
      (item) => item.idProduct === product.id
    );
    return existProductInCart.length > 0;
  };
  const { title, description, price, category } = item;
  return (
    <div className={styles.product}>
      {category !== "bebidas" ? (
        <img
          src={hamburgerImage}
          alt="hamburguer"
          className={styles.product__image}
        />
      ) : (
        <img
          src={drinksImage}
          alt="bebidas"
          className={styles.product__image}
        />
      )}

      <h3 className={styles.product__title}>{title}</h3>
      <p className={styles.product__description}>{description}</p>
      <h2 className={styles.product__price}>{formatPrice(price)}</h2>
      <button
        onClick={() => verifyProductInCart(item)}
        className={`${styles.product__button} button--primary button`}
      >
        add ao carrinho
      </button>
    </div>
  );
}
