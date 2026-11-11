let mensaje=prompt("¿Estás seguro que quieres hacer esto?");
if (mensaje==="Si" || mensaje==="si") { //Compruebo que pone exactamente la palabra Si.
    alert("ha respondido  "+mensaje); //Si dice Si, lanzamos la alerta.
}else if(mensaje===null){ //Comprobamos que ha dado al botón de cancelar, ya que si te devuelve null es porque ha cancelado.
    alert("Ha reusado contestar."); //Si cancela, lanzamos la alerta.
}
// Carlos Martínez Del Pino