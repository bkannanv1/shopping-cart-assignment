import * as RadixDialog from "@radix-ui/react-dialog";
import styles from "./dialog.module.css";
import { getSelectedProduct } from "../routes/utils";
import { useFetcher } from "react-router-dom";

function Dialog({ open, onOpenChange, products, cartItems }) {
  const fetcher = useFetcher();

  if (!products) {
    return <div> Loading ... </div>;
  }

  const cartDataDisplay = cartItems.map((item) => {
    return {
      ...getSelectedProduct(item.id, products),
      quantity: item.quantity,
    };
  });

  const totalPrice = cartDataDisplay.reduce((acc, current) => {
    const { quantity, price } = current;
    return acc + price * quantity;
  }, 0);

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.dialogOverlay} />
        <RadixDialog.Content className={styles.dialogContent}>
          <RadixDialog.Title className={styles.dialogTitle}>
            My Cart
          </RadixDialog.Title>

          <RadixDialog.Description className={styles.dialogDescription}>
            Cart Items
          </RadixDialog.Description>

          <RadixDialog.Close asChild>
            <button className={styles.iconButton} aria-label="Close">
              Close
            </button>
          </RadixDialog.Close>

          {cartDataDisplay.length > 0
            ? cartDataDisplay.map((item) => (
                <CartItem item={item} key={item.id} fetcher={fetcher} />
              ))
            : null}

          <div>Total: {totalPrice}</div>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <RadixDialog.Close asChild>
              <button>Save changes</button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

function CartItem({ item, fetcher }) {
  const { imageURL, quantity, id, name, price } = item;
  return (
    <div className={styles.cartItemWrapper}>
      <img
        className={styles.cartImage}
        src={imageURL}
        alt={`Image of ${name}`}
      />
      <div className={styles.nameSection}>
        <p>{name}</p>
        <div className={styles.quantitySection}>
          <fetcher.Form method="post">
            <button name="remove" value={id}>
              -
            </button>
            {quantity}
            <button name="add" value={id}>
              +
            </button>
          </fetcher.Form>
        </div>
      </div>
      <p>Price : {price}</p>
    </div>
  );
}

export { Dialog };
