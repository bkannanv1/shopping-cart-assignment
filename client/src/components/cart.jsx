import * as React from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import styles from "./cart.module.css";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import FocusLock from "react-focus-lock";

const Dialog = React.lazy(() =>
  /**
   * Dynamically import a named export
   */
  import("./dialog").then((module) => ({ default: module.Dialog }))
);

function Cart() {
  const [cartOpen, setCartOpen] = React.useState(false);

  const { cartItems } = useLoaderData();

  const numberOfItems = cartItems.length;

  const cartQuantity = numberOfItems > 0 ? `(${numberOfItems})` : "";

  const fetcher = useFetcher();

  function handleCartOpen() {
    setCartOpen(true);
    if (!fetcher.data) {
      fetcher.load("/products");
    }
  }

  return (
    <>
      {cartOpen && (
        <React.Suspense fallback={<span>Dialog Loading ...</span>}>
          <FocusLock returnFocus>
            <Dialog
              open={cartOpen}
              onOpenChange={setCartOpen}
              products={fetcher.data?.products}
              cartItems={cartItems}
            />
          </FocusLock>
        </React.Suspense>
      )}
      <button className={styles.cartButton} onClick={handleCartOpen}>
        <div className={styles.cartLogoWrapper}>
          <CartIcon className={styles.cartIcon} />
        </div>
        <p>{cartQuantity} items</p>
      </button>
    </>
  );
}

export { Cart };
