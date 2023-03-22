import React from "react";
import { useLoaderData } from "react-router-dom";
import { getBannerAndCategories } from "../api/endpoints";
import styles from "./index.module.css";

export async function loader() {
  const { banners, categories } = await getBannerAndCategories();
  return { banners, categories };
}

export default function Index() {
  const { banners, categories } = useLoaderData();

  return (
    <div>
      <h1>Welcome to Bazaar</h1>

      {banners
        .filter((banner) => banner.order === 1)
        .map((banner) => {
          const { id, bannerImageUrl, bannerImageAlt } = banner;
          return (
            <BannerCard
              key={id}
              bannerImageUrl={bannerImageUrl}
              bannerImageAlt={bannerImageAlt}
            />
          );
        })}
      <CategoriesView categories={categories} />
    </div>
  );
}

function BannerCard({ bannerImageUrl, bannerImageAlt }) {
  return (
    <div>
      <img src={bannerImageUrl} alt={bannerImageAlt} />
    </div>
  );
}

function CategoriesView({ categories }) {
  return categories
    .filter((category) => category.enabled)
    .map((category, index) => {
      return (
        <CategoryCard key={category.id} order={index} category={category} />
      );
    });
}

function CategoryCard({ category, order }) {
  const { name, imageUrl, description } = category;

  const [imageOrder, infoOrder] =
    order % 2 === 0
      ? [styles.oddPosition, styles.evenPosition]
      : [styles.evenPosition, styles.oddPosition];

  return (
    <div className={styles.categoryWrapper}>
      <img
        className={`${styles.categoryImage} ${imageOrder}`}
        src={imageUrl}
        alt={`${name}-image`}
      />
      <div className={`${styles.categoryInfoWrapper} ${infoOrder}`}>
        <p>{name}</p>
        <p>{description}</p>
        <button>Explore {name}</button>
      </div>
    </div>
  );
}
