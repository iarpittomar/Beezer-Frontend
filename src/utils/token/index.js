export const setTokenToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const getToken = () => {
  return window.localStorage.getItem('token');
};

export const removeToken = () => {
  window.localStorage.removeItem('token');
};
