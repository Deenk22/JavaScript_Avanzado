function inicializar() {
  console.log(`Onload se ha llamado`);
  //const divContainer = document.getElementById("container");

  new Menu([
    { url: "index.html", etiqueta: "Home" },
    { url: "login.html", etiqueta: "Login" },
    { url: "registro.html", etiqueta: "Registro" },
  ]).render();

  const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTML"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ];

  new usuario(users).render();

  // const result = [];
  // for (const usuario of users) {
  //   divContainer.innerHTML += `<li>Nombre:<strong>${usuario.name}</strong>, Edad:<strong>${usuario.age}</strong> </li>`;
  // }

  // console.log(result);
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const iniciarSesion = document.getElementById("iniciarSesion");

  if (email === "smj_personal@hotmail.com" && password === "12345") {
    iniciarSesion.innerHTML = "<p>Has iniciado sesion</p>";
    console.log(`Has iniciado sesion`);
  } else {
    error.innerHTML = "<p>Email o contraseña incorrectos</p>";
    console.log(`Algo mal estas haciendo`);
  }

  // if (email === "smj_personal@hotmail.com"){
  //   console.log(`Correcto`);
  // } else {
  //   errorEmail.innerHTML = "<p>Correo incorrecto</p>"
  // };

  // if (password === "12345"){
  //   console.log(`Correcto`);
  // } else {
  //   errorPassword.innerHTML = "<p>Contraseña Incorrecta/p>"
  // }
}

function Menu(links) {
  // propiedades
  (this.links = links),
    // metodos
    (this.render = function () {
      let menuDiv = document.getElementById("menu");
      for (const link of this.links) {
        menuDiv.innerHTML += `<a href='${link.url}'>${link.etiqueta}</a>`;
      }
    });
}

function usuario(usuarios) {
  this.usuarios = usuarios;
  this.render = function () {
    let divUsuarios = document.getElementById("container");
    for (const u of usuarios) {
      divUsuarios.innerHTML += `<li><strong>Nombre:</strong> ${u.name}  <strong>Edad:</strong> ${u.age}</li>`;
    }
  };
}

// function usuario(usuarios) {
//   this.usuarios = usuarios;
//   this.render = function () {
//     let userDiv = document.getElementById("container");
//     userDiv.innerHTML = "<ul>";
//     for (const u of usuarios) {
//       userDiv.innerHTML += `<li>${u.this.usuarios}</li>`;
//     }
//     userDiv.innerHTML = "</ul>";
//   };
// }
