import React from "react";
import styles from "./products-grid.module.css";
import { useFetcher } from "react-router-dom";
import { Button } from "../components/button";

function ProductsGrid({ products }) {
  return products.map((product, index) => {
    const { id } = product;
    return <ProductCard key={id} product={product} index={index} />;
  });
}

function ProductCard({ product, index }) {
  const { name, imageURL, description, price, id } = product;
  const fetcher = useFetcher();

  return (
    <div className={styles.cardWrapper}>
      <p className={styles.title}>{name}</p>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={imageURL}
            alt={`Picuture of ${name}`}
            width="150"
            height="150"
            loading={index > 8 ? "lazy" : "eager"}
          />
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.description}>{description}</p>
          <div className={styles.buyLaptop}>
            <fetcher.Form method="post">
              <p className={styles.mrp}>MRP Rs.{price}</p>
              <Button name="item" value={id}>
                Buy Now
              </Button>
            </fetcher.Form>
          </div>
          <div className={styles.buyMobile}>
            <fetcher.Form method="post">
              <Button className={styles.card_button} name="item" value={id}>
                Buy Now @ Rs.{price}
              </Button>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductsGrid };
