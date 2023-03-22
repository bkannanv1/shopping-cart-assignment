import { Outlet } from "react-router-dom";
import styles from "./root.module.css";

export default function Root() {
  console.log(styles);
  return (
    <div className={styles.wrapper}>
      <header id="header" className={styles.header}>
        <div className={styles.navWrapper}>
          <div>Image</div>
          <nav>
            <ul>
              <li>
                <a href={`/`}>Home</a>
              </li>
              <li>
                <a href={`/products`}>Products</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.buttonWrapper}>
          <div className="auth-buttons">
            <a href="/signin">Sign In</a>
            <a href="/register">Register</a>
          </div>
          <button>Cart button</button>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet /> Main Area
      </main>
      <footer className={styles.footer}>Copyright</footer>
    </div>
  );
}
