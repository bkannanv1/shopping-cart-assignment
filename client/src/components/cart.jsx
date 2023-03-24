import * as React from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import { Dialog } from "./dialog";

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
        <Dialog
          open={cartOpen}
          onOpenChange={setCartOpen}
          products={fetcher.data?.products}
          cartItems={cartItems}
        />
      )}
      <button onClick={handleCartOpen}>Cart {cartQuantity}</button>
    </>
  );
}

export { Cart };
