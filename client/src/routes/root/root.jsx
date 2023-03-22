import { Outlet, Link } from "react-router-dom";
import styles from "./root.module.css";

export default function Root() {
  return (
    <div className={styles.wrapper}>
      <header id="header" className={styles.header}>
        <div className={styles.navWrapper}>
          <div>Image</div>
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/products`}>Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.buttonWrapper}>
          <div className="auth-buttons">
            <Link to="/signin">Sign In</Link>
            <Link to="/register">Register</Link>
          </div>
          <button>Cart button</button>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Copyright</footer>
    </div>
  );
}
