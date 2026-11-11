let aleatorio = Math.floor(Math.random() * 10 + 1);

let numeroAdivinar = prompt("Introduce un número para adivinarlo:");

let numeroAdivinar2=Number(numeroAdivinar);
console.log(aleatorio);

while(numeroAdivinar2!==aleatorio && numeroAdivinar!==null){ //Mientras que no adivine el numero ni le de a cancelar sigue en el bucle
    if(isNaN(numeroAdivinar2)){ // Controlamos que no escriba texto
        alert("Por favor introduce un numero.");
    }else{
        if (numeroAdivinar2 > aleatorio) { //Para cuando el numero a adivinar sea más pequeño
            alert("El número aleatorio es más pequeño.");
        } else { //Para cuando el numero a adivinar sea más grande
            alert("El número aleatorio es más grande.");
        }
    }
    numeroAdivinar = prompt("Por favor vuelve a introducir un numero."); // Volvemos a preguntar porque ni ha cancelado y tampoco ha acertado
    numeroAdivinar2=Number(numeroAdivinar);

}

if(numeroAdivinar===null){ // Si ha cancelado lanzamos la alerta
    alert("El usuario ha reusado contestar.");
}
if(numeroAdivinar2===aleatorio){ // Si ha acertado lanzamos la alerta.
    alert("Acertaste");
}

// Carlos Martínez Del Pino.