import { user } from "../logic/singleUser.js";
import { err } from "../logic/singleUser.js";

export const createUser = () => {
  if (err) {
    let errCard;
    errCard = `
    
    <div class="error">
    <h1>Error: </h1>
    <p>${err}</p>
    </div>
    `;
    return errCard;
    // return err;
  } else {
    let userCards;
    userCards = `<div class="container-info">
      
      <div class="container-div">
      <div class="user-info">
      <ul> 
      <h1>User Info: </h1>
      <li class="idNumber"><h2>ID:</h2>${user.id} </li>
      <li class="name"><h2>Name:</h2> ${user.name}</li>
      <li class="userName"><h2>UseName</h2> ${user.username}</li>
      </ul>
      </div>
      
      <div class="address-info">
      <ul>
      <h1>Address Info: </h1>
      <li class="street"><h2>Street:</h2> ${user.address.street}</li>
      <li class="suite"><h2>Suite:</h2>${user.address.suite} </li>
      <li class="city"><h2>City:</h2> ${user.address.city}</li>
      <li class="zipCode"><h2>ZipCode</h2>${user.address.zipcode}</li>
      </ul>
    </div>
  
       <div class="geo-info">
       <ul>
       <h1>Geographical Info: </h1>
       <li class="lat"><h2>Lat:</h2> ${user.address.geo.lat}</li>
       <li class="lng"><h2>Lng:</h2>${user.address.geo.lng}</li>
       </ul>
       </div>
   
      <div class="contact-info">
      <ul>
      <h1>Contact Info: </h1>
      <li class="phone"><h2>Phone</h2> ${user.phone}</li>
      <li class="website"><h2>Website:</h2> ${user.website}</li>
      <li class="email"><h2>Email:</h2> ${user.email}</li>
      </ul>
      </div>
  
      <div class="company-info">
      <ul>
      <h1>Company Info: </h1>
      <li class="name"><h2>Company name:</h2> ${user.company.name}</li>
      <li class="catchPhrase"><h2>CatchPhrase:</h2>${user.company.catchPhrase}</li>
      <li class="bs"><h2>BS:</h2> ${user.company.bs}</li>
      </ul>
      </div>
  
  
      </div>
    
      </div>
      `;
    return userCards;
  }
};
