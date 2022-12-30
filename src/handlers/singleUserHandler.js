import { createUser } from "../components/singleUser.js";
import { requestUserInfo } from "../logic/singleUser.js";
import { container } from "../template.js";
import { urlApi } from "../template.js";

// import { err } from "../logic/singleUser.js";

export const startApp = (userNames) => {
  requestUserInfo(urlApi, userNames);

  setTimeout(() => {
    container.innerHTML = createUser();
  }, 1000);
};
