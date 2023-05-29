function init (){

    let numUsuarios = 5;

    const http = new XMLHttpRequest();

    http.onreadystatechange = function() {

        console.log(this.readyState);

        if (this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            const usersData = JSON.parse(this.responseText);
            new Registro (usersData.data).render();
            console.log(usersData.data);
        };
    };

    let url = `https://dummyapi.io/data/v1/user?page=3&limit=${numUsuarios}`;

    http.open("GET", url, true );
    http.setRequestHeader ("app-id","6471e47edbbe9f32a0dd9387");
    http.send();

};

function Registro (usersData){

    this.usersData = usersData;

    this.render = function() {

        let divUsers = document.getElementById ("usersList");
        for (const user of this.usersData){

            divUsers.innerHTML += `<li><img src= "${user.picture}"> ${user.title} ${user.firstName} ${user.lastName}</li>`
            divUsers.innerHTML += "<li><a href='../HTML/detalleUsuario.html?id=" + user.id + "'>Info</a></li>"; 
        };
    };
};
