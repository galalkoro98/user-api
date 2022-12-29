export const urlApi = "https://jsonplaceholder.typicode.com/users/";
export const container = getElement(".user-container");
export const searchInput = getElement(".search-input");
export const searchButton = getElement(".search-button");
export const errorMessage = getElement(".error");
export const resetBtn = getElement("search-reset");
export const getAllUsers = document.getElementById('')

function getElement(element) {
  return document.querySelector(element);
}
