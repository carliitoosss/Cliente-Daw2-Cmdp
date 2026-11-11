let seguirProgramando=true;
let nombre=localStorage.getItem("nombre");
let lenguaje=localStorage.getItem("lenguaje");
let visitas=localStorage.getItem("visitas");
let contadorVisitas=0;

while(seguirProgramando===true){ // A menos que nosotros le indiquemos que se acaba, el programa sigue.

if(nombre===null){ // Si no hay nombre existente en el localStore que haga lo siguiente

    nombre=prompt("Introduce tu nombre: ");
    while(nombre!==null && !isNaN(nombre)){
        nombre=prompt("Introduce tu nombre:");
    }

    if(nombre===null){ // El usuario ha pulsado cancelar.
        alert("El usuario ha reusado contestar");
        seguirProgramando=false; // acabamos programa
    }else{
       localStorage.setItem("nombre", nombre); // Guardamos el resultado en caso que este todo correcto.
    }
    
}else{
    alert("Bienvenido de nuevo, " + nombre);
}
if(seguirProgramando===true){ // Le decimos que si sigue siendo true siga programando, ya que anteriormente le hemos dicho que acabe el programa.
    if(lenguaje===null){ // Si no hay lenguaje existente en el localStorage que haga lo siguiente.
    lenguaje=prompt("¿Cuál es tu lenguaje de programación favorito?");
    localStorage.setItem("lenguaje", lenguaje); // Guardamos el resultado
    }

if(visitas===null){// Si no hay visitas existente en el localStorage que haga lo siguiente.
    localStorage.setItem("visitas",1); // le damos el valor a uno.
}else{
    visitas=Number(localStorage.getItem("visitas")); // Consultamos el valor, y lo pasamos a number.
    visitas=visitas+1; // Añadimos una visita por cada vez que vuelva el usuario.
    localStorage.setItem("visitas",visitas); //Volvemos a guardar el resultado con los nuevos valores.
}
alert("Usuario: "+localStorage.getItem("nombre", nombre) + "\n" +
    "Lenguaje favorito: "+localStorage.getItem("lenguaje", lenguaje) + "\n" +
    "Visitas en esta sesión: "+localStorage.getItem("visitas",visitas) + "\n" 
)
}
seguirProgramando=false; // Acabamos el programa.
}

// Carlos Martínez Del Pino.