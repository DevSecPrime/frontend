// let h1 = document.createElement("h1");
// h1.textContent = "Hi Goku!!";
// document.body.append(h1);

// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "HI its me goku!";
// ul.append(li);

// let img = document.createElement('img')
// img.setAttribute('src',"example.com")
// let div = document.querySelector('div');
// div.prepend(img)

// let ul = document.querySelector('ul');
// let li = document.querySelector("li");

// ul.removeChild(li)

// let li = document.querySelectorAll("ul li:nth-child(2n)")
// // console.log(li)

// li.forEach((elem)=>{
//     elem.classList.add("highlight")
// })

// let p = document.querySelector('p')
// p.addEventListener("click",function(){
//     p.style.color = "red";
// })

// document.querySelector("input").addEventListener("input", (event) => {
//   // console.log("typed");

//   if (event.data) {
//     console.log(event.data);
//   }
// });

// let select = document.querySelector("select");
// let text = document.querySelector("#dataChanged");

// select.addEventListener("change", function (event) {
//   console.log(event.target.value);
//  text.textContent = `${event.target.value} device selected`
// });

// let key = document.querySelector("h1");
// window.addEventListener("keydown", (e) => {
//   if (e.key !== " ") {
//     key.textContent = `${e.key}`;
//   }
// });

let btn = document.querySelector("#uploadBtn");
let fileInput = document.querySelector("#fileInp");

btn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  console.log({ event });

  const file = event.target.files[0];

  if (file) {
    console.log("here");
    console.log({ fileNme: file.name });
    btn.textContent = `${file.name}`;
  }
});
