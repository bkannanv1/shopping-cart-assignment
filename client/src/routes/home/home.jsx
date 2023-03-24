import React from "react";
import { useLoaderData } from "react-router-dom";
import { getBannerAndCategories } from "../../api/endpoints";
import { LinkButton } from "../../components/button";
import { getAvailableCategories } from "../utils";
import styles from "./home.module.css";

export async function loader() {
  const { banners, categories } = await getBannerAndCategories();
  return { banners, categories };
}

export function Home() {
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
      <img
        className={`${styles.categoryImage} ${imageOrder}`}
        src={imageUrl}
        alt={`${name}-image`}
      />
      <div className={`${styles.categoryInfoWrapper} ${infoOrder}`}>
        <p>{name}</p>
        <p>{description}</p>
        <LinkButton to={`products/${key}`}>{name}</LinkButton>
      </div>
    </div>
  );
}
