import * as React from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
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
          <Dialog
            open={cartOpen}
            onOpenChange={setCartOpen}
            products={fetcher.data?.products}
            cartItems={cartItems}
          />
        </React.Suspense>
      )}
      <button onClick={handleCartOpen}>Cart {cartQuantity}</button>
    </>
  );
}

export { Cart };
