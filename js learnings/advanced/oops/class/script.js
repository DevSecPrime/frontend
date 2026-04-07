class CreatePencil {
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }

  erase() {
    document.body.querySelectorAll("h1").forEach((ele) => {
      /// here this  --> key word is selected object from p1 or p2
      if (ele.style.color === this.color) {
        ele.remove();
      }
    });
  }
}

let p1 = new CreatePencil("Natraj", "black", 10);
let p2 = new CreatePencil("Doms", "red", 20);
