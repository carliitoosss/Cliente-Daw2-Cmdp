let cadena="Si quiere vivir, venga conmigo";
cadenaSinEspacios=cadena.replaceAll(" ","").trim();//Quita los espacios internos y externos.
let cadenaCompleta="";//Declara variable
for(let i=0;i<cadenaSinEspacios.length;i++){ // Recorre desde 0 hasta todas las posiciones del Array

    let aleatorio=Math.floor(Math.random()*(2+1));//Genera un numero aleatorio entre 0 y 2
    if(aleatorio===1){// Si el valor es 1, convierte a minúcula.
        cadenaCompleta+=cadenaSinEspacios[i].toLowerCase()+"-";
    }else{// Si es diferente a 1, convierte a mayúscula.
        cadenaCompleta+=cadenaSinEspacios[i].toUpperCase()+"-";
    }// Puede ponerse de la manera que tu quieras, es lo mismo.
}
let cadenaFinal=cadenaCompleta.slice(0,-1);//Elimina el último indice de la cadena.(Ponemos -1 para irnos a la última posición.)
console.log(cadenaFinal);
//Carlos Martínez Del Pino.
