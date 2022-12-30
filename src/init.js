import "../src/listener/singleUserListener.js";

import { urlApi } from "./template.js";

document.getElementById("allUsers").addEventListener("click", getAllUsers);

function getAllUsers() {
  fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      let info = `<h1>users info</h1>`;
      data.forEach((userData) => {
        info += `
          <div class="container-info">

          <div class="container-div">
          <div class="user-info">
          <ul>
          <h1>User Info: </h1>
          <li class="idNumber"><h2>ID:</h2>${userData.id} </li>
          <li class="name"><h2>Name:</h2> ${userData.name}</li>
          <li class="userName"><h2>UseName</h2> ${userData.username}</li>
          </ul>
          </div>

          <div class="address-info">
          <ul>
          <h1>Address Info: </h1>
          <li class="street"><h2>Street:</h2> ${userData.address.street}</li>
          <li class="suite"><h2>Suite:</h2>${userData.address.suite} </li>
          <li class="city"><h2>City:</h2> ${userData.address.city}</li>
          <li class="zipCode"><h2>ZipCode</h2>${userData.address.zipcode}</li>
          </ul>
        </div>

           <div class="geo-info">
           <ul>
           <h1>Geographical Info: </h1>
           <li class="lat"><h2>Lat:</h2> ${userData.address.geo.lat}</li>
           <li class="lng"><h2>Lng:</h2>${userData.address.geo.lng}</li>
           </ul>
           </div>

          <div class="contact-info">
          <ul>
          <h1>Contact Info: </h1>
          <li class="phone"><h2>Phone</h2> ${userData.phone}</li>
          <li class="website"><h2>Website:</h2> ${userData.website}</li>
          <li class="email"><h2>Email:</h2> ${userData.email}</li>
          </ul>
          </div>

          <div class="company-info">
          <ul>
          <h1>Company Info: </h1>
          <li class="name"><h2>Company name:</h2> ${userData.company.name}</li>
          <li class="catchPhrase"><h2>CatchPhrase:</h2>${userData.company.catchPhrase}</li>
          <li class="bs"><h2>BS:</h2> ${userData.company.bs}</li>
          </ul>
          </div>

          </div>

          </div>
        `;
      });

      document.getElementById("all").innerHTML = info;
    });
}

document.getElementById("reset").onclick = function () {
  document.getElementById("all").innerHTML = "";
//   document.getElementById("er").innerHTML = "";
  document.getElementById("input").innerHTML = "";
};
