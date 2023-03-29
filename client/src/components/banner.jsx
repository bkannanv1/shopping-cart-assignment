import Glider from "react-glider";
import "glider-js/glider.min.css";
import styles from "./banner.module.css";

function Banner({ banners }) {
  return (
    <div className={styles.wrapper}>
      <Glider draggable hasArrows hasDots slidesToShow={1}>
        {banners.map((banner, index) => {
          const { id, bannerImageUrl, bannerImageAlt } = banner;
          return (
            <BannerCard
              key={id}
              bannerImageUrl={bannerImageUrl}
              bannerImageAlt={bannerImageAlt}
              index={index}
            />
          );
        })}
      </Glider>
    </div>
  );
}

function BannerCard({ bannerImageUrl, bannerImageAlt, index }) {
  const [fileName, extension] = bannerImageUrl.split(".");
  const smallURL = `${fileName}-small.${extension}`;

  return (
    <div>
      <img
        src={bannerImageUrl}
        alt={bannerImageAlt}
        srcSet={`${smallURL} 450w, ${bannerImageUrl} 1080w`}
        /**
         * Produced by running: https://github.com/ausi/respimagelint
         */
        sizes="(min-width: 1440px) 1080px, (min-width: 580px) calc(73.33vw + 39px), (min-width: 540px) calc(-260vw + 1904px), calc(90.91vw + 27px)"
        width="1200px"
        height="300px"
        loading={index > 2 ? "lazy" : "eager"}
      />
    </div>
  );
}

export { Banner };
