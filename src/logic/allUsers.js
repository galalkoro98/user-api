import { urlApi } from "../template.js";
// import { userData } from "./singleUser";
export let user;
export const getAllUsers = () => {
  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      user = data;
      // console.log(user);
    });
};
