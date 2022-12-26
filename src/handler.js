import { createUser } from "./component.js";
import { requestUserInfo } from "./logic.js";
import { errorMessage } from "./template.js";
import { container } from "./template.js";
import { urlApi } from "./template.js";
import { userData } from "./logic.js";

export const startApp = (userNames) => {
  requestUserInfo(urlApi, userNames);
  setTimeout(() => {
    if (userData.data) {
      errorMessage.style.display = "block";
      container.style.display = "none";
    } else {
      errorMessage.style.display = "none";
      container.style.display = "grid";
      container.innerHTML = createUser();
    }
  }, 1000);
};
