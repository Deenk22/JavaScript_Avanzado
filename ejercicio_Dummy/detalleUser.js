

//     let numUsuarios = 5;

//     const http = new XMLHttpRequest();

//     http.onreadystatechange = function() {

//         console.log(this.readyState);

//         if (this.readyState === 4 && this.status === 200){
//             console.log(this.responseText);
//             const usersData = JSON.parse(this.responseText);
//             // new Registro (usersData.data).render();
//             console.log(usersData.data);
//         };
//     };

//     let url = `https://dummyapi.io/data/v1/user?page=3&limit=${numUsuarios}`;

//     http.open("GET", url, true );
//     http.setRequestHeader ("app-id","6471e47edbbe9f32a0dd9387");
//     http.send();

function init (){

};

const userInfo = window.location.search;
console.log(userInfo);


// console.log(users);
// const urlParams = new URLSearchParams(user);
// let producto = urlParams.get('id');
// console.log(producto);




