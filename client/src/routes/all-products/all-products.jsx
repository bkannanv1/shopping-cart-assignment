import React from "react";
import styles from "./all-products.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { ProductsGrid } from "../../components/products-grid";

export default function AllProducts() {
  const { categories, products } = useRouteLoaderData("products");

  return <ProductsGrid products={products} />;
}
