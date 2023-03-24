import React from "react";
import styles from "./products-root.module.css";
import { Outlet, useLoaderData } from "react-router-dom";
import { getProductsAndCategories } from "../../api/endpoints";
import { getAvailableCategories } from "../utils";
import { NavLink } from "../../components/nav-link";

export async function loader() {
  const { products, categories } = await getProductsAndCategories();
  return { products, categories };
}

export function ProductsRoot() {
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
