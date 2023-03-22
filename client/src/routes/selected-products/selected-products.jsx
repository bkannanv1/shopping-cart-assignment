import React from "react";
import styles from "./selected-products.module.css";
import {
  Outlet,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import { ProductsGrid } from "../../components/products-grid";

export async function loader({ params }) {
  const categoryId = params.categoryId;
  return { categoryId };
}

export default function SelectedProducts() {
  const { categoryId } = useLoaderData();
  const { categories, products } = useRouteLoaderData("products");

  return <ProductsGrid products={products} />;
}
