import { startApp } from "../handlers/allUsersHandler.js";
import { allUserButton } from "../template.js";

allUserButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userNames = allUserButton.value;
  startApp(userNames);

  // setTimeout(() => {
  //   allUserButton.style.display = "none";
  // }, 1000);

  // setTimeout(() => {
  //   allUserButton.style.display = "block";
  // }, 1000);

  // setTimeout(() => {
  //   allUserButton.style.display = "none";
  // }, 2000);
});
