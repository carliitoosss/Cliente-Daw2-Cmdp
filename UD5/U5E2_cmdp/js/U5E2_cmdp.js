let frame=document.querySelector(".seccionimagenes"); // coge el frame.
let alto_frame=parseInt(getComputedStyle(frame).height); // coge el alto del frame.
let div_colores=document.querySelectorAll(".cambiarColor"); // coge los colores del div.
let images_central=document.querySelector(".seccionimagenes img"); // coge la imagen que hay en el centro del frame.
let images_laterales=document.querySelectorAll(".logos img"); // coge las imagenes que hay en el lateral.
let lupas=document.querySelectorAll(".lupas img"); // coge las dos imagenes de lupa que hay en el lateral derecho.
lupas[0].addEventListener("click", aumentar); // lupa de aumenta y añade un evento al pulsar. 
lupas[1].addEventListener("click", reducir); // lupa de recudir y añade un evento al pulsar.



for (const imagen of images_laterales) { // recorre las imagenes laterales.
    imagen.addEventListener("click", cambia_imagen); // añade evento por cada imagen.
}


for (const div of div_colores) { // recorre las colores.
    div.addEventListener("mouseover", cambia_color); // añade evento al pasar por encima por cada color.
}
function cambia_color(e){ // funcion event para cambiar de color.
    // console.log(e.currentTarget.id);
    // frame.classList.remove("rojo","negro","amarillo","verde","rosa", "azul");
    // frame.classList.add(e.currentTarget.id);
    let color=getComputedStyle(e.currentTarget).backgroundColor; // cogemos el valor del color.
    frame.style.borderColor=color; // estilo aplicado en linea
    console.log(getComputedStyle(e.currentTarget).width) // coge la anchura de los div de cada color. (Ejemplo de clase).
}
function cambia_imagen(e){ // funcion event para cambiar la imagen al centro del frame.
    // IMPORTANTE USAR GETATTRIBUTE PARA CONSEGUIR LA RUTA RELATIVA.
    let ruta=e.currentTarget.getAttribute("src"); // coge la ruta cuando pulsamos en la imagen deseada.
    console.log(ruta); // comprobamos la ruta que coge
    images_central.setAttribute("src", ruta); //envia a que la imagen central pasa a ser la clickeada mediante la ruta.
}
function aumentar(){ // funcion para aumentar
    if(alto_frame>images_central.getAttribute("height")){ // comprueba que no sobrepasa el frame
        let tam=Number(images_central.getAttribute("height")); // coge el tamaño de la imagen central.
        images_central.setAttribute("height", tam+30); // añadimos el nuevo tamaño a la imagen central "+30"
    }    
}
function reducir(){ // funcion para reducir.
    if(images_central.getAttribute("height")>30){ // comprueba que no disminuya menos de 30 px.
        let tam=Number(images_central.getAttribute("height"));
        images_central.setAttribute("height", tam-30); // añadimos el nuevo tamaño a la imagen central "-30".
    }
}
// Carlos Martínez Del Pino.