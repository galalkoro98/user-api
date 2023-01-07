export let userData;
export const requestAllUsers = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      userData = data;
    })
    .catch((err) => console.log(err));
};
