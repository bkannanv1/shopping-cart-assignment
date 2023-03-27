import * as RadixDialog from "@radix-ui/react-dialog";
import styles from "./dialog.module.css";
import { getSelectedProduct } from "../routes/utils";
import { useFetcher } from "react-router-dom";
import { Button, IconButton } from "./button";
import { X, Minus, Plus } from "react-feather";

export function Dialog({ open, onOpenChange, products, cartItems }) {
  const fetcher = useFetcher();

  if (!products) {
    return <div> Loading Products... </div>;
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

  const areCartItmesAvailable = cartDataDisplay.length > 0;

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.dialogOverlay} />
        <RadixDialog.Content
          className={styles.dialogContent}
          style={{
            "--cart-bg": !areCartItmesAvailable
              ? "white"
              : "hsl(0deg 0% 93.33%)",
          }}
        >
          <RadixDialog.Title className={styles.dialogTitle}>
            My Cart
          </RadixDialog.Title>

          <RadixDialog.Close asChild>
            <button className={styles.iconButton} aria-label="Close">
              <X />
            </button>
          </RadixDialog.Close>

          <div
            className={`${styles.contentWrapper} ${
              !areCartItmesAvailable ? styles.noItems : ""
            }`}
          >
            {areCartItmesAvailable ? (
              cartDataDisplay.map((item) => (
                <CartItem item={item} key={item.id} fetcher={fetcher} />
              ))
            ) : (
              <div className={styles.noItemsWrapper}>
                <p>No items in your Cart!</p>
                <p>Your favorite items are just a click away</p>
              </div>
            )}
          </div>

          <div
            className={styles.buttonWrapper}
            style={{
              "--btn-spacing": areCartItmesAvailable
                ? "space-between"
                : "center",
            }}
          >
            {areCartItmesAvailable && (
              <p>Promo code can be applied on payment page</p>
            )}
            <RadixDialog.Close asChild>
              <Button>
                {areCartItmesAvailable && <span>Proceed to Checkout</span>}
                {areCartItmesAvailable && <span>Rs. {totalPrice}</span>}
                {!areCartItmesAvailable && <span>Start Shopping</span>}
              </Button>
            </RadixDialog.Close>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

function CartItem({ item, fetcher }) {
  const { imageURL, quantity, id, name, price } = item;
  const totalPrice = quantity * price;
  return (
    <div className={styles.cartItemWrapper}>
      <img
        className={styles.cartImage}
        src={imageURL}
        alt={`Image of ${name}`}
      />
      <div className={styles.nameSection}>
        <p className={styles.name}>{name}</p>
        <div className={styles.quantitySection}>
          <fetcher.Form method="post">
            <IconButton name="remove" value={id}>
              <Minus size={"12"} />
            </IconButton>
            {quantity}
            <IconButton name="add" value={id}>
              <Plus size={"12"} />
            </IconButton>
          </fetcher.Form>
          x Rs. {price}
        </div>
      </div>
      <p className={styles.priceSection}>Rs : {totalPrice}</p>
    </div>
  );
}
