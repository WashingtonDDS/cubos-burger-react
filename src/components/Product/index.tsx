import hamburgerImage from '../../assets/hamburger.png';
import styles from './product.module.css';

export function Product(): JSX.Element {
  
  return (
    <div className={styles.product}>
      <img
        src={hamburgerImage}
        alt="hamburguer"
        className={styles.product__image} />
      <h3 className={styles.product__title}>
        Hamburguer 2 queijos
      </h3>
      <p className={styles.product__description}>
      Pão - Carne 180g - Mussarela - Cheedar
      </p>
      <h2 className={styles.product__price}>
        R$ 36,00
      </h2>
      <button      
        className={`${styles.product__button} button--primary button`}>
        add ao carrinho
      </button>
    </div>
  )
}