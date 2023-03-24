import { Outlet, Link } from "react-router-dom";
import { Cart } from "../../components/cart";
import styles from "./root.module.css";
import { getCartItems, updateItemInCart } from "../../api/endpoints";

export async function loader() {
  const cartItems = getCartItems();
  return { cartItems };
}

export async function action({ request }) {
  let formData = await request.formData();
  const addId = formData.get("add");
  const removeId = formData.get("remove");
  const { id, action } = addId
    ? { action: "add", id: addId }
    : { action: "remove", id: removeId };
  updateItemInCart(id, action);
  return null;
}

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
          <Cart />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Copyright</footer>
    </div>
  );
}
