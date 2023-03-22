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
  const categoryKey = params.categoryKey;
  return { categoryKey };
}

export default function SelectedProducts() {
  const { categoryKey } = useLoaderData();
  const { categories, products } = useRouteLoaderData("products");

  const { id: categoryId } = categories.find(
    (category) => category.key === categoryKey
  );

  const productsForSelectedCategory = products.filter(
    (product) => product.category === categoryId
  );

  return <ProductsGrid products={productsForSelectedCategory} />;
}
