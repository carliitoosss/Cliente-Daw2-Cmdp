let entrada=[10,8,"9",null,-2,5,12,"hola",0];
function limpiarNotas(entrada){
    let entradaFiltrada=entrada.filter(n=>typeof n==='number'&&(n>=0&&n<=10));
    return entradaFiltrada;
}
let entradaFiltrada=limpiarNotas(entrada);
console.log(entradaFiltrada);

function calcularMediaValida(entradaFiltrada){
    for (const nota of entradaFiltrada) {
        if(entradaFiltrada.length===0){
            return null;
        }else{
            let suma = suma + nota;
            let dividendo=entradaFiltrada.length;
            let media=suma/dividendo;
            // media=Math.round(media,2);
            media=media.toFixed();
            return media;
        }
        
    }
}
calcularMediaValida(entradaFiltrada);

let listaSospechosa=[0,10];
function tieneNotaSospechosas(entradaFiltrada, listaSospechosa){
    let booleano=listaSospechosa.some(numero=>entradaFiltrada.some(nota=>nota===numero));
    return booleano;
}
console.log(tieneNotaSospechosas(entradaFiltrada, listaSospechosa));