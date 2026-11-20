let botonGenerar= document.querySelector("#btn-generar"); // coge el boton de generar los label y inputs.
botonGenerar.addEventListener("click", añadirElementos); // Añade un evento al boton cuando pulsemos en el.
let form=document.querySelector(".campos-generados"); // coge el div para añadir los label e input
let botonListar=document.querySelector(".boton-principal"); // coge el boton para añadir los inputs a formato lista
botonListar.addEventListener("click", listarElementos); // Añade evento al boton
let lista=document.querySelector("#lista"); // coge la lista para añadir los inputs
let botonesEliminar=document.querySelectorAll(".botones-eliminar button"); // coge los botones eliminar el primero y ultimo.
botonesEliminar[0].addEventListener("click", borrarPrimero); // Añade evento al boton de eliminar el primero.
botonesEliminar[1].addEventListener("click", borrarUlitimo); // Añade evento al boton de eliminar el último.

function añadirElementos(){ // Funcion de añadir elementos.
    form.replaceChildren(); // Si hay algun campo borramos los existente
    let numeroElementos=document.querySelector("#cantidad"); // coge la cantidad que le quiere dar el usuario a los campos.
    for(let i=1; i<=numeroElementos.value;i++){ // Recorre desde 1 hasta el numero introducido por el usuario.
        let labeles=document.createElement("label"); // Crea los elementos label por cada iteración.
        let inputs=document.createElement("input"); // Crea los elementos input por cada iteración.
        labeles.textContent="Elemento "+i; // Texto que tendra el label.
        form.append(labeles, inputs); // Añade al div los labeles deseados e input deseados.
    }
}

function listarElementos(){ // funcion cuando pulsemos el boton de añadir elementos.
    let inputs=document.querySelectorAll(".campos-generados input"); // coge todos los inputs creado con la funcion anteriormente definida.
    for (const input of inputs) { // recorre los inputs creados
        let elemento=document.createElement("li"); // para cada iteraccion/objeto input crea un li nuevo.
        elemento.textContent=input.value; // le da el valor que haya elegido el usuario a través del input.
        lista.append(elemento); // Añade li a la lista por cada iteración.
    }
    form.replaceChildren(); // borra los label e input del div.
}

function borrarPrimero(){ // funcion cuando pulsemos el botón de eliminar primero.
    let elementosListas=document.querySelectorAll("li"); // coge todos los elementos li creado anteriormente que haya en la lista
    elementosListas[0].remove(); // Elimina li de la posicion 0, es decir el primero que haya.
}

function borrarUlitimo(){ // funcion cuando pulsemos el botón de eliminar primero.
    let elementosListas=document.querySelectorAll("li");
    let tam=elementosListas.length; // variable para saber cuantos li tenemos.
    elementosListas[tam-1].remove(); // elimina li de la posicion ultima gracias a saber el tamaño.
}
// Carlos Martínez Del Pino