let nombre=prompt("¿Cómo te llamas?");
let edad=prompt("¿Cuántos años tienes?");
if (edad>=18) { //Comprobamos si es mayor de edad o no, y dependiendo si es mayor de edad o no lanzamos una alerta u otra.
    alert("Hola"+" "+nombre+"\nEres mayor de edad y has vivido "+(edad*365));// Mayor de edad.
}else{
    alert("Hola"+" "+nombre+"\nEres menor de edad y has vivido "+(edad*365)); //Menor de edad.
}
// Carlos Martínez Del Pino
