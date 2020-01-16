/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/alecdye
*/

// --- .get request for github data from author's account ---
// axios.get("https://api.github.com/users/alecdye")
//   // --- Everything is working :)
//   .then(response => {
//     console.log(response)
//   })
//   // --- Something broke :(
//   .catch(function (error) {
//     if (error.response) {
//       // request reached server and server replied with status code
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // request made but no reply came back
//       console.log(error.request);
//     } else {
//       // something happened while setting up the request
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/alecdye/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "alecdye"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
// --- function to take github api and create a user card
function createCard(user) {
  // --- create elements
  let newCard = document.createElement('div'),
    cardCont = document.createElement('div'),
    newImg = document.createElement('img'),
    name = document.createElement('h3'),
    userName = document.createElement('p'),
    location = document.createElement('p'),
    linkCont = document.createElement('p'),
    link = document.createElement('a'),
    countFollowers = document.createElement('p'),
    countFollowing = document.createElement('p'),
    bio = document.createElement('p')

  // --- append elements to parents
  newCard.append(newImg);
  newCard.append(cardCont);
  cardCont.append(name);
  cardCont.append(userName);
  cardCont.append(location);
  cardCont.append(linkCont);
  linkCont.append(link);
  cardCont.append(countFollowers);
  cardCont.append(countFollowing);
  cardCont.append(bio);

  // --- assigning classes
  newCard.classList.add('card');
  cardCont.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');

  // note: adding classes to html element for existing css style, not assigning css styles to html elements.
  // newImg.classList.add('.card img');
  // name.classList.add('.card .name');
  // userName.classList.add('.card .username');
  // location.classList.add('.card p');
  // linkCont.classList.add('.card p');
  // countFollowers.classList.add('.card p');
  // countFollowing.classList.add('.card p');
  // bio.classList.add('.card p');

  // --- assigning textContent to elements
  newImg.src = user.data.avatar_url;
  name.textContent = user.data.name;
  userName.textContent = user.data.login;
  location.textContent = user.data.location;
  linkCont.textContent = "Profile: ";
  link.textContent = user.data.html_url;
  // link.src = user.data.html_url;
  linkCont.textContent = user.data.html_url;
  countFollowers.textContent = `Followers: ${user.data.followers}`;
  countFollowing.textContent = `Following: ${user.data.following}`;
  bio.textContent = `Bio: ${user.data.bio}`;

  // --- return function
  return newCard;
}

// --- appending newly created cards to existing html DOM
const entry = document.querySelector('.cards');

// --- calling the function and passing in an array of user data
followersArray.forEach(user => {
  axios.get("https://api.github.com/users/" + user)
    .then(response => {
      entry.append(createCard(response))
    })
    .catch(function (error) {
      if (error.response) {
        // request reached server and server replied with status code
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // request made but no reply came back
        console.log(error.request);
      } else {
        // something happened while setting up the request
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
})
/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
