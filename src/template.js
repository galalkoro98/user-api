export const urlApi = "https://jsonplaceholder.typicode.com/users/";
export const allUserButton = getElement(".all-users");
export const searchInput = getElement(".search-input");
export const searchButton = getElement(".search-button");
export const resetBtn = getElement(".search-reset");
export const container = getElement(".user-container");
export const error = getElement(".error");

function getElement(element) {
  return document.querySelector(element);
}
