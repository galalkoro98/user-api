export const urlApi = "https://jsonplaceholder.typicode.com/users/";
export const container = getElement(".user-container");
export const searchInput = getElement(".search-input");
export const searchButton = getElement(".search-button");
export const errorMessage = getElement(".error");

function getElement(element) {
  return document.querySelector(element);
}
