import React from "react";
import styles from "./selected-products.module.css";
import {
  Outlet,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";

export async function loader({ params }) {
  const categoryId = params.categoryId;
  return { categoryId };
}

export default function SelectedProducts() {
  const { categoryId } = useLoaderData();
  const { categories, products } = useRouteLoaderData("products");

  return (
    <div>
      <h1>Products for {categoryId}</h1>
    </div>
  );
}
