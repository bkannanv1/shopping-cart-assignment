import React from "react";
import styles from "./products-root.module.css";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { getProductsAndCategories } from "../../api/endpoints";
import { getAvailableCategories } from "../utils";
import { NavLink } from "../../components/nav-link";
import { Accordian } from "../../components/accordian";
import { useMediaQuery } from "../../hooks/use-media-query";

export async function loader() {
  const { products, categories } = await getProductsAndCategories();
  return { products, categories };
}

function CategoryLinks({ categories }) {
  return (
    <div className={styles.categories}>
      {getAvailableCategories(categories).map((category) => {
        const { name, id, key } = category;
        return (
          <React.Fragment key={id}>
            <NavLink to={key}>{name}</NavLink>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function ProductsRoot() {
  const { categories } = useLoaderData();
  const isInTabletAndAbove = useMediaQuery("(min-width: 550px)");

  const { categoryKey } = useParams();
  const pathText = categories.find(
    (category) => category.key === categoryKey
  ).name;

  return (
    <div className={styles.wrapper}>
      {isInTabletAndAbove ? (
        <CategoryLinks categories={categories} />
      ) : (
        <Accordian triggerText={pathText}>
          <CategoryLinks categories={categories} />
        </Accordian>
      )}
      <div className={styles.productsWrapper}>
        <Outlet />
      </div>
    </div>
  );
}
