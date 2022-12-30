import { startApp } from "../handlers/singleUserHandler.js";
import { searchButton } from "../template.js";
import { searchInput } from "../template.js";

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userNames = searchInput.value.toLowerCase();
  startApp(userNames);
});
