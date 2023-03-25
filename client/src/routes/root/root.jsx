import { Outlet } from "react-router-dom";
import styles from "./root.module.css";
import { getCartItems, updateItemInCart } from "../../api/endpoints";
import { Header } from "../../components/header";

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

export function Root() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Copyright</footer>
    </div>
  );
}
