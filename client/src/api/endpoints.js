import { getPromise, fetchDataParallely, getPromisesForJson } from "./utils";

const URL = "http://localhost:5000";

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

const BAZAAR_KEY = "users";

// TODO: Error handling
const registerUser = (newUser) => {
  try {
    const existingUsersRaw = window.localStorage.getItem(BAZAAR_KEY);
    const existingUsers = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];

    const isUserAlreadyAvailable = existingUsers.find(
      (user) => user.email === newUser.email
    );
    if (isUserAlreadyAvailable) {
      return {
        ok: false,
        message: `User with the email "${newUser.email}" is already registered! Please Sign In.`,
      };
    }

    const updatedUsers = [...existingUsers, newUser];
    const serializedValue = JSON.stringify(updatedUsers);
    window.localStorage.setItem(BAZAAR_KEY, serializedValue);
    return {
      ok: true,
      message: "Success!",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Unable to register the user",
    };
  }
};

// TODO: Error handling
const loginUser = (userInfo) => {
  try {
    const existingUsersRaw = window.localStorage.getItem(BAZAAR_KEY);
    const existingUsers = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];

    const isValidUser = existingUsers.find(
      (existingUser) =>
        existingUser.email === userInfo.email &&
        existingUser.password === userInfo.password
    );
    if (!isValidUser) {
      return {
        ok: false,
        message: "Email or Passord is Incorrect!",
      };
    }

    return {
      ok: true,
      message: "Success!",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Unable to Login the user",
    };
  }
};

const BAZAAR__CART_KEY = "cart";

const getCartItems = () => {
  const existingCartRaw = window.sessionStorage.getItem(BAZAAR__CART_KEY);
  const cartData = existingCartRaw ? JSON.parse(existingCartRaw) : [];
  return cartData;
};

const addCartItems = (itemId) => {
  const items = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 4,
    },
  ];

  const existingCartRaw = window.sessionStorage.getItem(BAZAAR__CART_KEY);
  const existingCartItems = existingCartRaw ? JSON.parse(existingCartRaw) : [];

  const alreadyAddedItem = existingCartItems.find((item) => item.id === itemId);

  let updatedItems = [];
  if (alreadyAddedItem) {
    updatedItems = existingCartItems.map((item) => {
      if (item.id === alreadyAddedItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  } else {
    updatedItems = [
      ...existingCartItems,
      {
        id: itemId,
        quantity: 1,
      },
    ];
  }

  window.sessionStorage.setItem(BAZAAR__CART_KEY, JSON.stringify(updatedItems));
  return updatedItems;
};

const updateItemInCart = (itemId, action) => {};

export {
  getBannerAndCategories,
  getProductsAndCategories,
  registerUser,
  loginUser,
  getCartItems,
  addCartItems,
};
