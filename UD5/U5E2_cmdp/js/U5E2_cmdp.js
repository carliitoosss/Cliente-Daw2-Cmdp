let frame=document.querySelector(".seccionimagenes");
let alto_frame=parseInt(getComputedStyle(frame).height);
console.log(alto_frame);
let div_colores=document.querySelectorAll(".cambiarColor");
let images_central=document.querySelector(".seccionimagenes img");
let images_laterales=document.querySelectorAll(".logos img");
let lupas=document.querySelectorAll(".lupas img");
lupas[0].addEventListener("click", aumentar);
lupas[1].addEventListener("click", reducir);



for (const imagen of images_laterales) {
    imagen.addEventListener("click", cambia_imagen);
}


for (const div of div_colores) {
    div.addEventListener("mouseover", cambia_color);
}
function cambia_color(e){
    // console.log(e.currentTarget.id);
    // frame.classList.remove("rojo","negro","amarillo","verde","rosa", "azul");
    // frame.classList.add(e.currentTarget.id);
    let color=getComputedStyle(e.currentTarget).backgroundColor;
    frame.style.borderColor=color; // estilo aplicado en linea
    console.log(getComputedStyle(e.currentTarget).width)
}
function cambia_imagen(e){
    let ruta=e.currentTarget.getAttribute("src");
    console.log(ruta);
    images_central.setAttribute("src", ruta);
}
function aumentar(){
    if(alto_frame>images_central.getAttribute("height")){
        let tam=Number(images_central.getAttribute("height"));
    console.log(tam);
    images_central.setAttribute("height", tam+30);
    }    
}
function reducir(){
    if(images_central.getAttribute("height")>30){
        let tam=Number(images_central.getAttribute("height"));
        console.log(tam);
        images_central.setAttribute("height", tam-30);
    }
    
}