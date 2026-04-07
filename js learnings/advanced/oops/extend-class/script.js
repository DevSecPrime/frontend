class User {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    return `Your current role is ${this.role}`;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name}: ${text}`;
    h1.style.color = "green";
    document.body.appendChild(h1);
  }
}

//Admin can use all the properties and method using extend keyword
//But Note: User class cant use admin`s property
class Admin extends User {
  constructor(name, address, email) {
    super(name, address, email); // super is used to get the parent class
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach((ele) => {
      ele.remove();
    });
  }
}

let u1 = new User("prime", "surat", "prime.works@gmail.com");
let u2 = new User("leli", "surat", "lei.works@gmail.com");

let a1 = new Admin("MeAdmin", "hurat", "admin@a.com");
