import Glider from "react-glider";
import "glider-js/glider.min.css";
import styles from "./banner.module.css";

function Banner({ banners }) {
  return (
    <div className={styles.wrapper}>
      <Glider draggable hasArrows hasDots slidesToShow={1}>
        {banners.map((banner) => {
          const { id, bannerImageUrl, bannerImageAlt } = banner;
          return (
            <BannerCard
              key={id}
              bannerImageUrl={bannerImageUrl}
              bannerImageAlt={bannerImageAlt}
            />
          );
        })}
      </Glider>
    </div>
  );
}

function BannerCard({ bannerImageUrl, bannerImageAlt }) {
  return (
    <div>
      <img
        src={bannerImageUrl}
        alt={bannerImageAlt}
        width="1000"
        height="300"
      />
    </div>
  );
}

export { Banner };
