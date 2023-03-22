const getAvailableCategories = (categories) =>
  categories
    .filter((category) => category.enabled)
    .sort((a, b) => a.order - b.order);

export { getAvailableCategories };
