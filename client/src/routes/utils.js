import { addCartItems } from "../api/endpoints";

const getAvailableCategories = (categories) =>
  categories
    .filter((category) => category.enabled)
    .sort((a, b) => a.order - b.order);

async function addToCartAction({ request }) {
  let formData = await request.formData();
  const itemId = formData.get("item");
  return addCartItems(itemId);
}

export { getAvailableCategories, addToCartAction };
