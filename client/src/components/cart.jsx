import * as Dialog from "@radix-ui/react-dialog";
import styles from "./cart.module.css";
import { useLoaderData } from "react-router-dom";

function Cart() {
  const { cartItems } = useLoaderData();

  const numberOfItems = cartItems.length;

  const cartQuantity = numberOfItems > 0 ? `(${numberOfItems})` : "";
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Cart {cartQuantity}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Title className={styles.dialogTitle}>My Cart</Dialog.Title>
          <Dialog.Description className={styles.dialogDescription}>
            You won't find it cheaper anywhere
          </Dialog.Description>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button>Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className={styles.iconButton} aria-label="Close">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
  //   return (
  //     <RDialog.Root>
  //       <RDialog.Trigger asChild>
  //         <button className="Button violet">Cart</button>
  //       </RDialog.Trigger>
  //       <RDialog.Portal>
  //         <RDialog.Overlay className="DialogOverlay" />
  //         <RDialog.Content className="DialogContent">
  //           <RDialog.Title className="DialogTitle">Edit profile</RDialog.Title>
  //           <RDialog.Description className="DialogDescription">
  //             Make changes to your profile here. Click save when you're done.
  //           </RDialog.Description>
  //           <fieldset className="Fieldset">
  //             <label className="Label" htmlFor="name">
  //               Name
  //             </label>
  //             <input className="Input" id="name" defaultValue="Pedro Duarte" />
  //           </fieldset>
  //           <fieldset className="Fieldset">
  //             <label className="Label" htmlFor="username">
  //               Username
  //             </label>
  //             <input className="Input" id="username" defaultValue="@peduarte" />
  //           </fieldset>
  //           <div
  //             style={{
  //               display: "flex",
  //               marginTop: 25,
  //               justifyContent: "flex-end",
  //             }}
  //           >
  //             <RDialog.Close asChild>
  //               <button className="Button green">Save changes</button>
  //             </RDialog.Close>
  //           </div>
  //           <RDialog.Close asChild>
  //             <button className="IconButton" aria-label="Close">
  //               Close
  //             </button>
  //           </RDialog.Close>
  //         </RDialog.Content>
  //       </RDialog.Portal>
  //     </RDialog.Root>
  //   );
}

export { Cart };
