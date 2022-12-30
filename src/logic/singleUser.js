export let err;
export let userData;
export const requestUserInfo = (url, name) => {
  if ((url && name > 10) || !(url && name) || (url && name <= 0)) {
    err =
      "Is not valid ID number \n refresh the browser and inter a valid ID number";
    alert(err);
  } else if (url + name) {
    fetch(url + name)
      .then((response) => response.json())
      .then((data) => {
        userData = data;
      })
      .catch((err) => console.log(err));
  }
};
