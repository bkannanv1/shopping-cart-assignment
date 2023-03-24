import { addCartItems } from "../api/endpoints";

const getAvailableCategories = (categories) =>
  categories
    .filter((category) => category.enabled)
    .sort((a, b) => a.order - b.order);

const getSelectedProduct = (itemId, products) =>
  products.find((product) => product.id === itemId);

export { getAvailableCategories, getSelectedProduct };
