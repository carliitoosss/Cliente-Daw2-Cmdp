let nombreUsuario=prompt("Introduce tu nombre:");
let contraseñaFija="MeGustaProgramar"; //Creamos la contraseña para luego comparar de manera más comoda con la otra contraseña.
while(nombreUsuario==="" && nombreUsuario!==null){ //Comprobamos que mientras el nombre de usuario sea vacio o no le haya dado a cancelar siga en el bucle.
    nombreUsuario=prompt("Por favor, introduce tu nombre:"); // Siempre se nos va a repetir mientras no le demos a cancelar o completemos el campo.
    
}
if (nombreUsuario===null) { // Una vez salimos del bucle puede ser por que hayamos completado el campo o porque hayamos cancelado, esta condicion es para cuando cancelamos.
    alert("El usuario ha reusado contestar");
      
}else{ // Si hemos completado el campo hacemos lo siguiente:
    let contraseñaAPoner=prompt("Introduce tu contraseña:");
    while (contraseñaAPoner!==contraseñaFija && contraseñaAPoner!==null) { // Mismo bucle que con el nombre de usario, pero con la contraseña del usuario. 
        contraseñaAPoner=prompt("Por favor, introduce tu contraseña:"); // Siempre se nos va a repetir mientras no le demos a cancelar o completemos el campo.
    }
    if (contraseñaAPoner===null) {
        alert("El usuario ha reusado contestar");
    }
    if (nombreUsuario!="" && contraseñaAPoner===contraseñaFija) { // Última comprobación de que completados los campos de forma existosa.
        alert("Se ha guardado correctamente la información."); // Cuando hayamos completado los dos campos de manera exitosa.
    }
}
// Carlos Martínez Del Pino.


