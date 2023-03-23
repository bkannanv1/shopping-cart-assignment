import React from "react";
import styles from "./product-grid.module.css";
import { useFetcher } from "react-router-dom";

function ProductsGrid({ products }) {
  return products.map((product) => {
    const { id } = product;
    return <ProductCard key={id} product={product} />;
  });
}

function ProductCard({ product }) {
  const { name, imageURL, description, price, stock, sku, id } = product;
  const fetcher = useFetcher();

  return (
    <div className={styles.wrapper}>
      <img src={imageURL} alt={`Picuture of ${name}`} />
      <div className={styles.infoWrapper}>
        <p>{description}</p>
        <fetcher.Form method="post">
          <button name="item" value={id}>
            Buy Now @ Rs.{price}
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export { ProductsGrid };
