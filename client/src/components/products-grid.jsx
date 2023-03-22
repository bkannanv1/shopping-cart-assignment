import React from "react";
import styles from "./product-grid.module.css";

function ProductsGrid({ products }) {
  return products.map((product) => {
    const { id } = product;
    return <ProductCard key={id} product={product} />;
  });
}

function ProductCard({ product }) {
  const { name, imageURL, description, price, stock, sku } = product;

  return (
    <div className={styles.wrapper}>
      <img src={imageURL} alt={`Picuture of ${name}`} />
      <div className={styles.infoWrapper}>
        <p>{description}</p>
        <button>Buy Now @ Rs.{price}</button>
      </div>
    </div>
  );
}

export { ProductsGrid };
