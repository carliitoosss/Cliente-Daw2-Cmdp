let botones=document.querySelectorAll("button"); // coge todos los botones.
let textos=document.querySelectorAll("h1"); // coge todos los h1.
for (const boton of botones) { // recorre los botones.
    boton.addEventListener("click", cambiarColor); // añade un evento al boton seleccionado.    
}

function cambiarColor(e){ // funcion de cambiar el color.
    let color=getComputedStyle(e.currentTarget).backgroundColor;// coge el color que tiene asociado el boton.
    for (const texto of textos) { // recorre los h1
        texto.style.color=color; // cambia el color de los h1 al color del boton.
    }
}