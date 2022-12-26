export let userData;
export const requestUserInfo = (url, name) => {
  fetch(url + name)
    .then((response) => response.json())
    .then((data) => {
      userData = data;
    })
    .catch((err) => console.log(err));
};
