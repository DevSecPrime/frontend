let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  let isValid = true;
  if (!emailRegex.test(emailInput.value)) {
    document.querySelector("#emailError").textContent = "Enter valid email";
    document.querySelector("#emailError").style.visibility = "visible";
    isValid = false;
  }

  if (!passwordRegex.test(passwordInput.value)) {
    console.log({ passwordInput: passwordInput.value });
    document.querySelector("#passwordError").textContent =
      "Enter valid password";
    document.querySelector("#passwordError").style.visibility = "visible";
    isValid = false;
  }

  if (isValid) {
    console.log("here");
    let span = document.createElement("span");
    // document.querySelector("#resultMessage").textContent = "";
    span.style.color = "green";
    span.textContent = "Everything works correctly";
    document.querySelector(".container").append(span);
  }
});
