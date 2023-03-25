export const getPromise = (url) => {
  return fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const fetchData = async (url) => {
  const response = await getPromise(url);
  return await response.json();
};

export const fetchDataParallely = async (promises) => {
  const response = await Promise.all(promises);
  return response;
};

export const getPromisesForJson = (responses) => {
  return responses.map((response) => response.json());
};
