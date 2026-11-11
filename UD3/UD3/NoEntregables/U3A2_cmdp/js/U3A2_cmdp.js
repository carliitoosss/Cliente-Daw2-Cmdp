let nombre=localStorage.getItem("nombre"); //Comprueba si hay un usuario existente.
let seguirProgramando=true;
while(seguirProgramando===true){// A menos que indiquemos que se acabe el programa no sale del bucle.
    if(nombre===null){ //Si no hay usuario existente que haga lo siguiente
        nombre=prompt("Introduce tu nombre.");
        while(nombre!==null && nombre===""){ //A menos que ponga correctamente el nombre o pulse cancelar sigue en el bucle.
            alert("Por favor introduce tu nombre. No puedes dejar la cadena vacía.");
            nombre=prompt("Introduce tu nombre");
            
        }
        if(nombre===null){ //Si ha pulsado cancelar
            alert("El usuario ha reusado responder");
            seguirProgramando=false;//Para el programa.
        }else{
            localStorage.setItem("nombre", nombre);//Manda el resultado al localStorage
        }
    }else{
        alert("Bienvenido de nuevo, "+nombre+" atrapado.");//Si ya hay un usuario activo.
    }
    if(seguirProgramando===true){//Comprueba que el programa sigue funcionando.
        let fechaActual=new Date();//Declara la fecha actual de cuando lo ejecutes.
        let anio=fechaActual.getFullYear();// Consigue el año de la fecha actual.
        let diaNumero=fechaActual.getDate();//Consigue el numero del dia del mes de la fecha actual
        let diasSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]; //Declara el array con los distintos dias de la semana.
        let nombreSemana=""; //Declara String para luego rellenarlo con el for
        let nombreMes=["Diciembre","Enero","Febrero","Marzo","Abril","Mayo","Junio",
            "Julio","Agosto","Semptiembre","Octubre","Noviembre"];//Declara el array de los nombre de los meses del año.
        let nombreExactoMes="";//Declara String para luego rellenarlo con el for
        for(let i=0;i<diasSemana.length;i++){ //Recorre desde 0 ya que los arrays empiezan en la posición 0 hasta el final del array.
            if(fechaActual.getDay()===i){ //Comprueba si el número del mes actual coincide con el valor de i del bucle for.
                nombreSemana=diasSemana[i];// Coge el valor del mes donde este situado i
            }
        }
        for(let i=0;i<nombreMes.length;i++){ //Recorre desde 0 ya que los arrays empiezan en la posición 0 hasta el final del array.
            if(fechaActual.getMonth()===i){ //Comprueba si el número del mes actual coincide con el valor de i del bucle for.
                nombreExactoMes=nombreMes[i+1];// Coge el valor del mes donde este situado i, se suma 1 para que no nos de el mes anterior debido a las posiciones.
            }
        }
        // Se puede hacer de las dos poniendola del tiron en el console.log() o mediante una variable.
        console.log("Hoy es "+nombreSemana+", "+diaNumero+" de "+nombreExactoMes+" de "+anio);
        let fecha=nombreSemana+", "+diaNumero+" de "+nombreExactoMes+" de "+anio;
        
        let contraseña=prompt("Introduce una contraseña: ");
        let contraseñaCorrecta="escapejs";//Declara la contraseña correcta.
        let contraseñaMinus=contraseña.toLowerCase();//Transforma la cadena a minúscula.
        let contraseñaSinStart=contraseñaMinus.trimStart();//Quita los espacios del princpio a la cadena transformada a minúscula.
        let contraseñaSinEspacios=contraseñaSinStart.trimEnd();//Quita los espacios del final a la cadena transformada a minúscula y sin espacios al principio.
        while(contraseñaSinEspacios!==contraseñaCorrecta && contraseña!==null){//Mientras no acierte seguirá en el bucle.
            alert("Contraseña Incorrecta, pruebe de nuevo.");
            contraseña=prompt("Introduce una contraseña: ");
            contraseñaMinus=contraseña.toLowerCase();
            contraseñaSinStart=contraseñaMinus.trimStart();
            contraseñaSinEspacios=contraseñaSinStart.trimEnd();
        }
        if(contraseña===null){//Comprueba de si ha pulsado cancelar o no el usuario.
            alert("El usuario ha reusado responder.");
            seguirProgramando=false;//Termina el programa.
        }else{
            let pregunta=prompt("¿Qué día de la semana es hoy?");
            //Hacemos de manera distanta a la otra para ver en el examen que se puede hacer de las dos maneras.(Guardando en variables o no).
            pregunta=pregunta.trimStart();//Quita los espacios del principio.
            pregunta=pregunta.trimEnd();//Quita los espacios del final.
            pregunta=pregunta.toLowerCase();//Transforma la cadena a minúscula.
            let contador=0;
            while(pregunta!==nombreSemana.toLowerCase()){//Mientras no acierte siga en el bucle.
                contador++;//Cada vez que falle incrementa el contador.
                alert("Intente de nuevo\n Numero de intentos: "+contador)
                pregunta=prompt("¿Qué día de la semana es hoy?");
                pregunta=pregunta.trimStart();
                pregunta=pregunta.trimEnd();
                pregunta=pregunta.toLowerCase();
            }
            if(pregunta===nombreSemana.toLowerCase()){//Comprueba que es exactamente igual, si se cumple, manda el console.log()
                console.log("¡¡Correcto!!");
            }
            sessionStorage.setItem("escapeSuperado", "Si");//Guarda el resultado en la sessionstorage.
            alert("ESCAPE CONSEGUIDO\nJugador: "+nombre+"\nFecha: "+fecha+"\nIntentos incorrectos: "+contador);
        }
    }
    seguirProgramando=false;// termina el programa, para que no siga en el bucle.
}
//Carlos Martínez Del Pino