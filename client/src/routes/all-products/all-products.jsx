import React from "react";
import styles from "./all-products.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { ProductsGrid } from "../../components/products-grid";
import { addCartItems } from "../../api/endpoints";

export async function action({ request }) {
  let formData = await request.formData();
  const itemId = formData.get("item");
  return addCartItems(itemId);
}

export default function AllProducts() {
  const { products } = useRouteLoaderData("products");

  return <ProductsGrid products={products} />;
}
