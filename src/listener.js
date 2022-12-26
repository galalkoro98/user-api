import { startApp } from "./handler.js";
import { container } from "./template.js";
import { searchButton } from "./template.js";
import { searchInput } from "./template.js";

let userNames;
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  userNames = searchInput.value.toLowerCase();
  startApp(userNames);
  container.classList.add("fade");

  setTimeout(() => {
    container.classList.remove("fade");
  }, 1000);
});
