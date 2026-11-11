let dato=prompt("Introduce un dato que tu quieras: ");
let seguirPrograma=true;
console.log(typeof dato);
 while(seguirPrograma===true){ // Sigue en el bucle hasta que nosotros no se lo decimos, y solo nosotros queremos para cuando cancelemos.
    if(isNaN(dato)===true){ //Para cuando es una cadena de caracteres.
        alert("El dato introducido es un caracter");
        dato=prompt("Introduce un dato que tu quieras: ");
    }else if(dato===""){//Cuando es una cadena vacía.
        alert("El dato introducido es una cadena vacía");
        dato=prompt("Introduce un dato que tu quieras: ");
    }else if(dato===null){//Cuando cancele el usuario, aquí ponemos la variable en false para que salga del bucle.
        alert("Programa terminado.");
        seguirPrograma=false;
    }else{
        let datoNumber=Number(dato); // Creamos una nueva variable para poder cambiarla a number, y no tengamos problemas.
        if(datoNumber>100){//Para cuando sea mayor que 100
            alert("Numero mayor que 100.");
            dato=prompt("Introduce un dato que tu quieras: ");
            datoNumber=Number(dato);
        }else if(datoNumber<100 && datoNumber!==0){ //Para cuando sea menor que 100, aquí he tenido que poner que sea distinto de 0 ya que cuando poniamos 0 entraba en esta condición.
            alert("Numero menor que 100");
            dato=prompt("Introduce un dato que tu quieras: ");
            datoNumber=Number(dato);
        }else if(datoNumber===0){ //Para cuando sea igual a 0.
            alert("Numero igual a 0.");
            dato=prompt("Introduce un dato que tu quieras: ");
            datoNumber=Number(dato);
        }else if(dato===null){ //Para cuando cancele.
        alert("Programa terminado.");
        seguirPrograma=false;
        }
    }
}
//Carlos Martínez Del Pino.