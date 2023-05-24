function inicializar (){
    const loginFrom = new formularioLogin();
    loginFrom.render();
}

function login() {
}

function formularioLogin() {

    this.render = function () {
  
      const login = document.getElementById("registro");
      login.innerHTML = 
      
      `<div class="formulario">

      <label for="nombre">
          Nombre
              <input type="text" name="nombre" id="nombre" placeholder="Nombre">
      </label>

      <label for="apellido">
          Apellidos
              <input type="text" name="apellido" placeholder="Apellidos">
      </label>

      <label for="tel">
          Telefono
              <input type="tel" name="telefono" id="telefono" placeholder="Telefono">
      </label>

      <label for="email">
          Email
              <input type="email" name="email" id="email" placeholder="Email">            
      </label>

      <label for="password">
          Password
              <input type="password" name="password" id="password" placeholder="Password">
      </label>

      <div class="btn">
          <button id="login" class="button" onclick="login()">Pulsa aqui para registrarte</button>
      </div>
      
  </div> `;
  
      const loginButton = document.getElementById("login");
      loginButton.addEventListener("click", this.login);  
  
    };


    this.login = function (){

            const nombre = document.getElementById("nombre").value;
            const telefono = document.getElementById("telefono").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const error = document.getElementById("error");
            const iniciarSesion = document.getElementById("iniciarSesion");
        
            if (email === "smj_personal@hotmail.com" && password === "12345"){
                iniciarSesion.innerHTML = "<p>Te has registrado correctamente</p>"
                console.log(`Has iniciado sesion`);
            } else {
                error.innerHTML = "<p>Email o contraseña incorrectos</p>";
            };
        
            // if (isNaN(telefono)){
            //     console.log(`Solo Números`);
            //     error.innerHTML = "<p>Solo números en campo: Telefono.</p>"
            // } else if (!isNaN(nombre)){
            //     console.log(`No aceptamos valores numéricos en campo: Nombre`);
            //     error.innerHTML = "<p>Solo letras en campo: Nombre.</p>"
            // };
        
            // if (email === "smj_personal@hotmail.com" && password === "12345"){
            //     iniciarSesion.innerHTML = "<p>Has iniciado sesion</p>"
            //     console.log(`Has iniciado sesion`);
            // } else {
            //     error.innerHTML = "<p>Email o contraseña incorrectos</p>"
            //     error.innerHTML = "<p>Debes rellenar todos los campos</p>"
        
            // };
        
        
        } ;
    };


