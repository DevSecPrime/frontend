let form = document.querySelector("form");
let inputText = document.querySelector(".inputText");
let validationMessage = document.querySelector(".validationMessage");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inputText.value.length < 5) {
    console.log("i/p value: ", inputText.value);
    console.log("please enter 2 length");
    validationMessage.style.display = "block";
  } else {
    validationMessage.style.display = "none";
  }

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let mail = "aryan.";

  if (!regex.test(mail)) {
    console.log("invalid email");
  } else {
    console.log("Valid email");
  }
});
