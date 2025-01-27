
import { Product } from '../../components/Product';
import styles from './home.module.css';

export function Home(): JSX.Element {


  return (
    <main className='main__container container'>
      <section className={styles.products}>
        <h1 className={styles.products__title}>Hamburguer</h1>
        <div className={styles.products__body}>
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      <hr className={styles.space} />
      <section className={styles.products}>
        <h1 className={styles.products__title}>Bebidas</h1>
        <div className={styles.products__body}>
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </main>
  )
}