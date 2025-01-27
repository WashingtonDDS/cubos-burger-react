import styles from './cart.module.css';
import { ProductInCart } from '../../components/ProductInCart';

export function Cart(): JSX.Element {
 

  return (
    <main className='main__container container'>
      <section className={styles.products}>
        <h1 className={styles.products__title}>Carrinho</h1>
        <div className={styles.products__body}>          
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />     
        </div>
        <h1 className={styles.products__total}>Total: R$ 100,00</h1>
      </section>
    </main>
  )
}