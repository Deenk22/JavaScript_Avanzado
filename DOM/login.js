function inicializar() {
  const loginFrom = new formularioLogin();
  loginFrom.render();
}

function login() {

}

function formularioLogin() {

  this.render = function () {

    const login = document.getElementById("login_Page");
    login.innerHTML = 
    
    `<div id="error" class="text"></div>
    <p>Email</p>
    <input type="email" id="email" class="input" placeholder="Email">
    <p>Password</p>
    <input type="password" id="password" class="input" placeholder="Password">
    <div class="btn">
    <button id="login" class="button" onclick="login(login)">Iniciar Sesion</button>
    </div>`;

    const loginButton = document.getElementById("login");
    loginButton.addEventListener("click", this.login);  

  };

  this.login = function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
    const iniciarSesion = document.getElementById("iniciarSesion");

    if (email === "smj_personal@hotmail.com" && password === "12345"){
      iniciarSesion.innerHTML = `<p>Has iniciado sesion</p>`;
    } else {
      console.log(`Algo estas haciendo mal`);
      error.innerHTML = `<p>Email o contraseña incorrectos</p>`;
    };

  };

};




