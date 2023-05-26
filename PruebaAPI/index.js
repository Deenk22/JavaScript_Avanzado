// Función inicializar, todos sabemos lo importante que es poner esto como primera línea de nuestro código de js verdad? jeje (Recuerda que debe ir en el body de HTML).

// function inicializar(){ 

// XMLHttpRequest > es una interfaz proporcionada por JavaScript que permite realizar solicitudes HTTP asincrónicas desde un navegador web. Es una API fundamental para realizar solicitudes AJAX (Asynchronous JavaScript and XML) y obtener respuestas del servidor sin tener que recargar la toda página.

// Cuando declaramos XMLHttpRequest a una variable, podemos acceder a todos sus métodos y propiedades proporcionados por el objeto XMLHttpRequest.

// const http = new XMLHttpRequest();

// Algunos de los métodos más comunes son ;

// - XMLHRequest
// - Open()
// - Send()
// - SetRequestHeader

// Alguno de sus eventos más comunes ; 

// - onReadyStateChange
// - onload
// - onError

http.onreadystatechange = function(){
    
// En este clg mostramos el estado actual de la solicitud en la consola de nuestro navegador. 

    console.log(this.readyState);

// Diferentes valores posibles de "this.readyState" ;    

// 0 (UNSENT): La solicitud no ha sido inicializada.
// 1 (OPENED): La conexión con el servidor ha sido establecida.
// 2 (HEADERS_RECEIVED): Se han recibido los encabezados de respuesta del servidor.
// 3 (LOADING): Se está cargando la respuesta del servidor.
// 4 (DONE): La operación está completa y la respuesta está lista.
    
    if(this.readyState === 4 && this.status === 200){

// En esta sentencia IF estamos verificando si "this.readyState" está completa y la respuesta está lista y si "this.status" si el código del estado de la respuesta es 200 (indicando con esto, que ha sido una respuesta exitosa).

// Este clg muestra la respuesta del servidor en la consola del navegador.

        console.log(this.responseText);

// Convertimos la respuesta del navegador > de un formato JSON a un objeto JavaScript y le asignamos ese valor a la variable datos. De esta manera podremos trabajar de manera más conveniente con los datos recibidos.

        const datos = JSON.parse(this.responseText);

// Creamos una nueva instancia de "registroDatos" (Constructor Function) y pasamos como argumento datos.entries. Recordamos que "this.responseText" era un objeto con dos propiedades "Count y Entries" y nosotros querìamos hacer referencia a "Entries". 

// En esta línea el navegador me da un error... una vez ya ha imprimido todo el contenido, salta el error de ".render()" no es una función.

        new registroDatos (datos.entries).render();
        };
    };


// Abrimos la solicitud GET.

    http.open("GET", "https://api.publicapis.org/entries");

// Enviamos la solicitud.    
    http.send();

// }; // Cierre inicializar

// Creamos la Function Constructor y le pasamos como argumento nuestra matriz "datos"

    function registroDatos (datos){ 
        this.datos = datos;

        this.render = function(){

// Asignamos a una variable a la id de nuestro div en el código HTML. 

        let listaCompleta = document.getElementById("lista");

// Creamos un bucle para iterar en todos los elementos del array "datos" ponemos "this.datos" porque es el valor actual de "datos".     

        for (const datosInvididuales of this.datos){

// Insertamos en nuestro código HTML una lista con todos los datos del array "datos" junto con la propiedad requerida.           

            listaCompleta.innerHTML += `<li> ${datosInvididuales.API}, ${datosInvididuales.Description}, ${datosInvididuales.Category} </li>`  

        }; // Cierre bucle For
    }; // Cierre .render function.
}; // Cierre Constructor.
















































//     }console.log(this.responseText);function ListaEntradas(entradas){    this.entradas = entradas;
//     this.render = function(){
//         let listaDiv = document.getElementById("entradas");
//         listaDiv.innerHTML = "<ol>";
//         for(const entrada of this.entradas){
//         listaDiv.innerHTML += `<li> ${entrada.API} ${entrada.Description}  ${entrada.Category} </li>`;
//         }
//         listaDiv.innerHTML +=  "</ol>";
//     }
// };

// const entradas = JSON.parse(this.responseText);
// new ListaEntradas(entradas.entries).render();