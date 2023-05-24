function inicializar() {
  // Creamos una variable y le asignamos la función constructora
  const registroFrom = new formularioRegistro();
  registroFrom.render();

  const localStorage = window.localStorage;
  console.log(localStorage.getItem("usuario"));

  new Menu([
    { url: "index.html", etiqueta: "Home" },
    { url: "login.html", etiqueta: "Login" },
    { url: "registro.html", etiqueta: "Registro" },
  ]).render();
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
          <button id="registr" class="button" onclick="login()" >Pulsa aqui para registrarte</button>
      </div>
      
  </div> `;

    const loginButton = document.getElementById("registr");
    loginButton.addEventListener("click", this.registro);
  };

  this.registro = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const error = document.getElementById("error");

    if (password !== "" && email !== "" && password === password2) {
      window.location.href = "index.html";
    } else {
      error.innerHTML = "<p>Algo has hecho mal</p>";
    }

    //Crear las condiciones con el correo decir que tenga un @ que no empiece por la @ y que empiecepor letra o algo asi.
  };
}
