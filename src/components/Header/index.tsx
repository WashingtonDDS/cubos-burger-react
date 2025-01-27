import styles from './header.module.css';
import logoImage from '../../assets/cubos-burger.png';

export function Header(): JSX.Element {

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} container`}>
        <a href='/'>
          <img src={logoImage} className={styles.logoImage} alt="logo cubos burger" />
        </a>
        <a href="/cart" className={styles.goToCart}>
          Carrinho
        </a>
      </div>
    </header>
  )
}