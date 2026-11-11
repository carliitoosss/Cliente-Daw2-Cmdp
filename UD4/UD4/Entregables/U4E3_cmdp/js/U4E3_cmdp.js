let puntaciones=[120, 85, 200, 150, 60, 175, 90, 230];
function agregarPuntuacion(puntuacion){
    puntaciones.push(puntuacion);
}
function buscarPuntuacion(encontrar){
    let encontrado=puntaciones.find(n=>n===encontrar);
    return encontrado;
}

function eliminarPuntuacion(eliminar){
    let posicion=puntaciones.indexOf(eliminar);
    if(posicion>=0){
        puntaciones.splice(posicion,1);
    }else{
        console.log("No se ha encontrado el valor.");
    }
}
function filtrarPuntuacionesAltas(){
    let filtrado=puntaciones.filter(n=>n>=150);
    return filtrado;
}
function ordenarPuntuaciones(){
    puntaciones.sort((a,b) => b-a);
}
function aplicarBonificacion(){
    let nuevosPuntos=puntaciones.map(n=>Math.round(n*1.10));
    return nuevosPuntos;
}
let nuevosPuntos=aplicarBonificacion();
function calcularTotal(){
    let totalPuntos=nuevosPuntos.reduce((suma, puntos)=>{
        return suma + puntos;
    },0);
    return totalPuntos;
}
function hayPuntuacionExcelente(){
    let puntacionExacta=nuevosPuntos.some(n=>n>=200);
    return puntacionExacta;
}
function superanMinimo(){
    let puntuacionesMinima=nuevosPuntos.every(n=>n>=50);
    return puntuacionesMinima;
}
function generarInforme(){
    let informe=nuevosPuntos.join("-");
    return informe;
}
console.log("Array Original: "+puntaciones);
agregarPuntuacion(180);
console.log("\nDespués de agregar la puntuación: "+puntaciones);
let encontrado=buscarPuntuacion(150);
console.log("\nBuscamos el numero: "+encontrado);
eliminarPuntuacion(60);
console.log("\nDespués de eliminar una puntuación: "+puntaciones);
let filtrado=filtrarPuntuacionesAltas();
console.log("\nArray filtrado por puntuaciones altas: "+filtrado);
ordenarPuntuaciones();
console.log("\nPuntuaciones ordenadas de mayor a menor: "+puntaciones);
nuevosPuntos=aplicarBonificacion();
console.log("\nBonificación aplicada del 10%: "+nuevosPuntos);
let totalPuntos=calcularTotal();
console.log("\nTotal de puntos:"+totalPuntos);
let puntacionExacta=hayPuntuacionExcelente();
if(puntacionExacta===true){
    puntacionExacta="Se ha encontrado la puntuación que queriamos.";
}else{
    puntacionExacta="No se ha encontrado la puntacion que queriamos.";
}
console.log(puntacionExacta);
let puntuacionesMinima=superanMinimo();
if(puntuacionesMinima===true){
    puntuacionesMinima="Todas las posiciones superan el mínimo de puntos.";
}else{
    puntuacionesMinima="No superan todas las posiciones el mínimo de puntos.";
}
console.log(puntuacionesMinima);
let informe=generarInforme();
console.log("\nInforme generado: "+informe);