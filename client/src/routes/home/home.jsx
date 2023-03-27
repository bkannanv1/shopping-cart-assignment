import React from "react";
import { useLoaderData } from "react-router-dom";
import { getBannerAndCategories } from "../../api/endpoints";
import { LinkButton } from "../../components/button";
import { getAvailableCategories } from "../utils";
import styles from "./home.module.css";
import { Banner } from "../../components/banner";

export async function loader() {
  const { banners, categories } = await getBannerAndCategories();
  return { banners, categories };
}

export function Home() {
  const { banners, categories } = useLoaderData();

  return (
    <div className={styles.homeContainer}>
      <Banner banners={banners} />
      <CategoriesView categories={categories} />
    </div>
  );
}

function CategoriesView({ categories }) {
  return getAvailableCategories(categories).map((category, index) => {
    return <CategoryCard key={category.id} order={index} category={category} />;
  });
}

function CategoryCard({ category, order }) {
  const { name, imageUrl, description, key } = category;

  const [imageOrder, infoOrder] =
    order % 2 === 0
      ? [styles.oddPosition, styles.evenPosition]
      : [styles.evenPosition, styles.oddPosition];

  return (
    <div className={styles.categoryWrapper}>
      <div className={`${styles.imgWrapper}  ${imageOrder}`}>
        <img
          className={`${styles.categoryImage}`}
          src={imageUrl}
          alt={`${name}-image`}
          width="200"
          height="180"
          loading="lazy"
        />
      </div>
      <div className={`${styles.categoryInfoWrapper} ${infoOrder}`}>
        <p>{name}</p>
        <p>{description}</p>
        <LinkButton to={`products/${key}`}>{name}</LinkButton>
      </div>
    </div>
  );
}
