function inicializar() {
  const loginFrom = new formularioLogin();
  loginFrom.render();
  loginFrom.login();
}

function login() {}

function formularioLogin() {
  this.render = function () {
    const login = document.getElementById("login_Page");
    login.innerHTML = `<div id="error" class="text"></div>
    <p>Email</p>
    <input type="email" id="email" class="input">
    <p>Password</p>
    <input type="password" id="password" class="input">
    <div class="btn">
    <button class="button" onclick="login()">Iniciar Sesion</button>
    </div>`;
  };

  this.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorNew = document.getElementById("login_Page");
    if (email === "smj_personal@hotmail.com" && password === "12345") {
      console.log(`Email correcto!`);
    } else {
      //errorNew.innerHTML = "<p>Que no!!!</p>";
      console.log(`Algo estas haciendo mal`);
    }
  };
}
