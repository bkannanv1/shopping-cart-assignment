import React from "react";
import styles from "./all-products.module.css";
import { useRouteLoaderData } from "react-router-dom";

export default function AllProducts() {
  const { categories, products } = useRouteLoaderData("products");

  return (
    <div>
      <h1>All Products Listed</h1>
    </div>
  );
}
