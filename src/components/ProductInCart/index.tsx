import styles from './productInCart.module.css';
import hamburgerImage from '../../assets/hamburger.png';

export function ProductInCart(): JSX.Element {

  return (
    <div className={styles.productInCart}>
      <div className={styles.productInCart__data}>
     
          <img
            src={hamburgerImage}
            alt="hamburguer"
            className={styles.productInCart__image} />


        <div className={styles.productInCart__info}>

          <h3 className={styles.productInCart__title}>
            Hamburguer 2 queijos
          </h3>

          <h2 className={styles.productInCart__price}>
            R$ 36,00
          </h2>
        </div>
      </div>
      <select        
        className={styles.productInCart__input}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button       
        className={`${styles.productInCart__button} button--primary button`}>
        excluir
      </button>
    </div>
  )
}