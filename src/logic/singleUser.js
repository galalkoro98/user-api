export let err;
export let user;
export const requestUserInfo = (url, name) => {
  if ((url && name > 10) || !(url && name) || (url && name <= 0)) {
    err =
      "Is not valid ID number click the reset button and inter a valid ID number";
    // alert(err);
  } else if (url + name) {
    fetch(url + name)
      .then((response) => response.json())
      .then((data) => {
        user = data;
      })
      .catch((err) => console.log(err));
  }
};
