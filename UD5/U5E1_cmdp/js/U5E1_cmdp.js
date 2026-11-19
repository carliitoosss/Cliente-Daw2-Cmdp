// Hecho por mi.
let boton1=document.getElementById("boton1"); // coge el boton por el id asociado al html.
boton1.addEventListener("click", cambiarColor); // añade un evento al boton seleccionado.
function cambiarColor(){
    boton1.style.backgroundColor = 'blue'; // cambia color de fondo a azul.
    boton1.style.color = 'white'; // cambia color de letra a blanco.
}
let boton2=document.getElementById("boton2");
boton2.addEventListener("click", cambiarColor2);
function cambiarColor2(){
    boton2.style.backgroundColor = 'black'; // cambia color de fondo a negro.
    boton2.style.color = 'white';
}
let boton3=document.getElementById("boton3");
boton3.addEventListener("click", cambiarColor3);
function cambiarColor3(){
    boton3.style.backgroundColor = 'purple'; // cambia color de fondo a morado.
    boton3.style.color = 'white';
}

//EL que me ha dado la IA:
/* function configurarBoton(selector, colorFondo) {
    let boton = document.getElementById(selector);
    boton.addEventListener("click", () => {
        boton.style.backgroundColor = colorFondo;
        boton.style.color = "white";
    });
}

configurarBoton("boton1", "blue");
configurarBoton("boton2", "black");
configurarBoton("boton3", "purple"); */
