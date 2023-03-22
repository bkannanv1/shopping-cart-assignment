import React from "react";
import styles from "./products-root.module.css";
import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getProductsAndCategories } from "../../api/endpoints";

export async function loader() {
  const { products, categories } = await getProductsAndCategories();
  return { products, categories };
}

export default function ProductsRoot() {
  const { products, categories } = useLoaderData();

  return (
    <div>
      List of Categories
      <ul>
        {categories
          .filter((category) => category.enabled)
          .map((category) => {
            const { name, id, key } = category;
            return (
              <li key={id}>
                <NavLink to={key}>{name}</NavLink>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
}
