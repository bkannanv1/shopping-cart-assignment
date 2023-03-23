import React from "react";
import styles from "./products-root.module.css";
import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getProductsAndCategories } from "../../api/endpoints";
import { getAvailableCategories } from "../utils";

export async function loader() {
  const { products, categories } = await getProductsAndCategories();
  return { products, categories };
}

export default function ProductsRoot() {
  const { categories } = useLoaderData();

  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        <ul>
          {getAvailableCategories(categories).map((category) => {
            const { name, id, key } = category;
            return (
              <li key={id}>
                <NavLink to={key}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.products}>
        <Outlet />
      </div>
    </div>
  );
}
