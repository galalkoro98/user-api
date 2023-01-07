import { createUser } from "../components/singleUser.js";
import { requestUserInfo } from "../logic/singleUser.js";
import { container, urlApi, error } from "../template.js";
import { err } from "../logic/singleUser.js";

export const startApp = (userNames) => {
  requestUserInfo(urlApi, userNames);

  setTimeout(() => {
    if (err) {
      container.innerHTML = createUser();
    } else {
      container.innerHTML = createUser();
    }
  }, 1000);
};
