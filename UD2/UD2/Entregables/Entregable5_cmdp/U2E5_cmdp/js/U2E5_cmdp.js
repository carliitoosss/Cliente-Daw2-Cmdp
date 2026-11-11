let mensaje=prompt("¿Cuántos dados deeas tirar?(1-4)");
let numTiradas=Number(mensaje);// Pasamos a numero en otra variable para evitar errores.
let seguirPrograma=true;
while(seguirPrograma===true){
    while((numTiradas<1 || numTiradas>4) && mensaje!==null){ //Recorremos que hasta que no enviemos numero correcto entre los valores o que cancele.
        mensaje=prompt("¿Cuántos dados deeas tirar?(1-4). Por favor un valor entre 1-4.");
        numTiradas=Number(mensaje);
    }
    if(mensaje===null){ // Si cancela salta el alert y termina programa.
        alert("El usuario ha resusado de responder.");
        seguirPrograma=false;
    }
    else if(numTiradas>=1 && numTiradas<=4){ // Si envia un valor correcto
        for(let i=1;i<numTiradas;i++){ // recorremos
            let dado1=Math.floor(Math.random()* 6+1);// Generamos numeros aleatorios.
            let dado2=Math.floor(Math.random()* 6+1);
            alert("Dado 1: " + dado1 + " - " + "Dado 2: " + dado2);
        }
        mensaje = prompt("¿Cuántos dados deseas tirar? (1-4)");//Volvemos a preguntar para que no termine el programa.
        numTiradas = Number(mensaje);
    }
}

//Carlos Martínez Del Pino