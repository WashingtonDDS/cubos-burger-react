import styles from "./cart.module.css";
import { ProductInCart } from "../../components/ProductInCart";
import { useLoaderData } from "react-router-dom";
import { TProductInCart } from "../../interfaces/productCart.interface";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { makeRequest } from "../../utils/makeRequest";

export function Cart(): JSX.Element {
  const productsInCartInitial = useLoaderData() as TProductInCart[];
  const [productsInCart, setProductInCart] = useState<TProductInCart[]>(
    productsInCartInitial
  );
  const [total, setTotal] = useState<string>("R$ 0");
  const calcTotal = () => {
    const total = productsInCart.reduce(
      (acc: number, item: TProductInCart) =>
        (acc += item.quantity * item.price),
      0
    );
    setTotal(formatPrice(total));
  };
  const deleteProduct = async (productInCart: TProductInCart) => {
    const deleteProduct = confirm(
      "Tem certeza que deseja excluir este produto?"
    );
    if (!deleteProduct) return;

    await makeRequest(`/cart/${productInCart.id}`, "DELETE");
    const newProductsInCart = productsInCart.filter(
      (item) => item.id !== productInCart.id
    );
    setProductInCart(newProductsInCart);
  };
  useEffect(() => calcTotal(), []);
  return (
    <main className="main__container container">
      <section className={styles.products}>
        <h1 className={styles.products__title}>Carrinho</h1>
        <div className={styles.products__body}>
          {productsInCart.map((item) => (
            <ProductInCart
              key={item.id}
              item={item}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
        <h1 className={styles.products__total}>Total: {total}</h1>
      </section>
    </main>
  );
}
