let box = document.querySelector(".box");

window.addEventListener("mousemove", (event) => {
  console.log({ clientX: event.clientX }); //for X axis
  console.log({ clientY: event.clientY });

  box.style.top = `${event.clientY + 5}px`;
  box.style.left = `${event.clientX + 5}px`;
});
