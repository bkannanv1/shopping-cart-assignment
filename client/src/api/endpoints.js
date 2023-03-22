import {
  fetchData,
  getPromise,
  fetchDataParallely,
  getPromisesForJson,
} from "./utils";

const URL = "http://localhost:5000";

// const getBanners = async () => {
//   return await fetchData(`${URL}/banners`);
// };

const getCategories = async () => {
  return await fetchData(`${URL}/categories`);
};

const getBannerAndCategories = async () => {
  const promises = [
    getPromise(`${URL}/banners`),
    getPromise(`${URL}/categories`),
  ];
  const response = await fetchDataParallely(promises);
  const json = await fetchDataParallely(getPromisesForJson(response));
  return { banners: json[0], categories: json[1] };
};

const getProductsAndCategories = async () => {
  const promises = [
    getPromise(`${URL}/products`),
    getPromise(`${URL}/categories`),
  ];
  const response = await fetchDataParallely(promises);
  const json = await fetchDataParallely(getPromisesForJson(response));
  return { products: json[0], categories: json[1] };
};

export { getBannerAndCategories, getProductsAndCategories };
