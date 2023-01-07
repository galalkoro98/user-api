import { createAllUser } from "../components/allUsers.js";
import { requestAllUsers } from "../logic/allUsers.js";
import { container } from "../template.js";
import { urlApi } from "../template.js";

export const startApp = (userNames) => {
  requestAllUsers(urlApi, userNames);

  setTimeout(() => {
    container.innerHTML = createAllUser();
  }, 1000);
};
