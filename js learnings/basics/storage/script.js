const users = [
  {
    name: "John Doe",
    username: "johndoe",
    image: "https://source.unsplash.com/100x100/?man,1",
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    image: "https://source.unsplash.com/100x100/?woman,2",
  },
  {
    name: "Michael Johnson",
    username: "mjohnson",
    image: "https://source.unsplash.com/100x100/?man,3",
  },
  {
    name: "Emily Davis",
    username: "emilyd",
    image: "https://source.unsplash.com/100x100/?woman,4",
  },
  {
    name: "Chris Brown",
    username: "chrisb",
    image: "https://source.unsplash.com/100x100/?man,5",
  },
];

const usersContainer = document.getElementById("usersContainer");
const searchInput = document.getElementById("searchInput");
const noResult = document.getElementById("noResult");

// 🔷 Function to create user card
function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("user-card");

  const img = document.createElement("img");
  img.src = user.image;

  const name = document.createElement("div");
  name.classList.add("user-name");
  name.textContent = user.name;

  const username = document.createElement("div");
  username.classList.add("user-username");
  username.textContent = "@" + user.username;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(username);

  return card;
}

// 🔷 Render Users
function renderUsers(userList) {
  usersContainer.innerHTML = "";

  if (userList.length === 0) {
    noResult.style.display = "block";
    return;
  } else {
    noResult.style.display = "none";
  }

  userList.forEach((user) => {
    const card = createUserCard(user);
    usersContainer.appendChild(card);
  });
}

// 🔷 Search Functionality
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(value) ||
      user.username.toLowerCase().includes(value),
  );

  renderUsers(filteredUsers);
});

// 🔷 Initial Render
renderUsers(users);
