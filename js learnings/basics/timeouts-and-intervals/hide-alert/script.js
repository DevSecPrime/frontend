let second = 3;
setInterval(() => {
  document.querySelector("#alertBox").classList.toggle("hide");
  console.log("hidden");
  // display = "none";
}, second * 1000);

document.querySelector("#showBtn").addEventListener("click", () => {
  document.querySelector("#alertBox").classList.toggle("hide");
});
