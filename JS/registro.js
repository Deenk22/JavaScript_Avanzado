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
          Repeat Password
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

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const error = document.getElementById("error");
    
    // En esta linea se asigna a la constante baseDatos el objeto localStorage que es una interfaz proporcionada por el navegador que permite almacenar datos.
    
    const baseDatos = window.localStorage;
    let usuarios = JSON.parse(baseDatos.getItem("usuarios")) || [];
  
    if (password !== "" && email !== "" && password === password2){

      // Usamos el método o función "FIND" del array "usuarios" para hacer la comprobación. Si el susuario existe, la constante comprobacion obtendra un valor y nos saltará el mensaje de rror... en caso contrario será "UNDEFINED" y pasará directamente al ELSE.

      const comprobacion = usuarios.find((newUsuario) => newUsuario.email === email);

      if (comprobacion){
        error.innerHTML = "<p>El email ya ha sido registrado</p>"
      } else {
        usuarios.push({email,password});
        baseDatos.setItem("usuarios", JSON.stringify(usuarios))
        window.location.href = "index.html";
      }

    } else {
      error.innerHTML = "<p>Rellena bien los campos, siento no ser tan específico :)</p>";

    };

  };

};














