function inicializar() {

  // Me daba error en navegador > Login is not a function / Creo que debe ser 
  // algo relacionado con el evento onclick del boton. Solucionarlo!

  const registroFrom = new formularioRegistro();
  registroFrom.render();

  new Menu([

    { url: "index.html", etiqueta: "Home" },
    { url: "login.html", etiqueta: "Login" },
    { url: "registro.html", etiqueta: "Registro" },

  ]).render();
};


// function login(){
// }

function Menu(links) {

      this.links = links,
      
      this.render = function () {

      let menuDiv = document.getElementById("menu");
      for (const link of this.links) {
      menuDiv.innerHTML += `<a href='${link.url}'>${link.etiqueta}</a>`;

      };

  };

};

// function extraerDatos() {

//   if (localStorage.getItem("email")){
//     const traer = JSON.parse(localStorage.getItem("email"));
//     console.log(traer);
//   } else {
//     console.log(`No hay datos`);
//   };

// };

// function guardarDatos(){

//   let datos = {
//     edad: 38,
//   };

//   localStorage.setItem("email", JSON.stringify(datos));

// };


// extraerDatos();
// guardarDatos();


// localStorage.setItem("usuario", "Santi");
// const localStorage = window.localStorage;
// localStorage.setItem("usuario", "Santi");
// localStorage.setItem("email", "email");

//JSON.stringify
//localStorage.setItem("key", JSON.stringify(array));
//let localstoragearr = JSON.parse(localStorage.getItem("key"))
//if (localStorage.getItem("key") === null) {
    // El item no existe
//}
//datosFormulario.push(DatosFinales);
//localStorage.setItem("valores_de_input", JSON.stringify(datosFormulario));

function formularioRegistro() {

  this.render = function () {

    const registro = document.getElementById("registro");
    registro.innerHTML = `<div class="formulario">

      <label for="nombre">
          Nombre
              <input type="text" name="nombre" id="nombre" placeholder="Nombre">
      </label>

      <label for="apellido">
          Apellidos
              <input type="text" name="apellido" placeholder="Apellidos">
      </label>
      
      <label for="email">
          Email
              <input type="email" name="email" id="email" placeholder="Email">            
      </label>

      <label for="password">
          Password
              <input type="password" name="password" id="password" placeholder="Password">
      </label>

      <label for="password2">
          Repeat
              <input type="password" name="password" id="password2" placeholder="Repeat Password">
      </label>

      <div class="btn">
          <button id="registr" class="button">Pulsa aqui para registrarte</button>
      </div>
      
  </div> `;

    const registerButton = document.getElementById("registr");
    registerButton.addEventListener("click", this.registro);

  };

  this.registro = function () {

    let datos = [{}];

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const error = document.getElementById("error");

    if (password !== "" && email !== "" && password === password2){
      localStorage.setItem(nombre, email);
      datos.push(email);
      window.location.href = "index.html";
    } else {
      error.innerHTML = "<p>Rellena bien los campos, siento no ser tan específico :)</p>";
    };

    //Crear las condiciones con el correo decir que tenga un @ que no empiece por la @ y que empiecepor letra o algo asi.

  };

};












