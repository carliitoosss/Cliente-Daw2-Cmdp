let numero1=prompt("Introduce el primer numero");
if(isNaN(numero1)){ // Comprueba si es un valor numérico o no.
    alert("Error, no es un valor numérico.");
}else{
    if(numero1===null){//Comprueba si el usuario ha pulsado cancelar o no.
        alert("El usuario ha reusado responder.");
    }else{
        let numero2=prompt("Introduce el segundo numero");
        if(isNaN(numero2)){
            alert("Error, no es un valor numérico.");
        }else{
            if(numero2===null){
                alert("El usuario ha reusado responder.");
            }else{
                let operacion=prompt("¿Qué operación quieres realizar?\n1.Suma\n2.Resta\n3.División\n4.Multiplicación");
                if(isNaN(operacion)){
                    alert("Error, no es un valor numérico.");
                }else{
                    let suma=(numero1,numero2)=>(numero1+numero2);//Función flecha para hacer la suma.
                    let resta=(numero1,numero2)=>(numero1-numero2);//Función flecha para hacer la resta.
                    function division(numero1,numero2){//Función para hacer la división.
                        if(numero2!==0){ //Comprueba si el valor del número dos, es distinto de 0.
                             return numero1/numero2;
                        }else{//Si es exactamente 0 no hace la operacion, y devuelve esa cadena de aviso.
                             return "No se puede dividir entre 0";
                        }
                    }
                    let multiplicacion=(numero1,numero2)=>(numero1*numero2);//Función flecha para hacer la operación.

                    let resultado=0;//Declara variable para mostrarla luego por consola, dependiendo de la condición.
                    if(Number(operacion)===1){//Opcion 1-Sumar
                        resultado=suma(Number(numero1),Number(numero2));//Pasa a number, para que no falle con las operaciones.
                    }else if(Number(operacion)===2){//Opcion 2-resta
                        resultado=resta(Number(numero1),Number(numero2));
                    }else if(Number(operacion)===3){//Opcion 3-división
                        resultado=division(Number(numero1),Number(numero2));
                    }else if(Number(operacion)===4){//Opcion 4-operación
                        resultado=multiplicacion(Number(numero1),Number(numero2));
                    }else{//Si pasa un valor distinto de los posibles se muestra mensaje de error.
                        alert("El valor introducido no es válido.");
                    }
                    console.log(resultado);//Muestra resultado.
                }
            }
        }
    }
}
    



