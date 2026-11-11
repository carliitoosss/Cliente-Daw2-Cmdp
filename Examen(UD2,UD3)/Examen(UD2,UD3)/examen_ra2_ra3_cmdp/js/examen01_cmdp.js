let nombre=localStorage.getItem("tecnico");
let seguirProgramando=true;
while(seguirProgramando===true){ //Bucle booleano para indicar cuando queremos acabar el programa.
    if(nombre===null){//Comprueba si hay elemento en el localStorage con esa clave.
        nombre=prompt("Introduce tu alias: ");
        while(nombre!==null && (nombre.trim()===""||nombre.length!==8)){//Hasta que no añada un nombre válido no saldra del bucle.
            alert("Error. Pruebe de nuevo\nNo puedes dejar vacío, y tienes que poner exactamente 8 carácteres.");
            nombre=prompt("Introduce tu alias.");
        }
        if(nombre===null){ // Comprueba si el usuario ha pulsado cancelar.
            alert("El usuario ha reusado responder.");
            seguirProgramando=false;//Acabamos programa.
        }else{
            let resultado=confirm("¿Estás seguro que deseas guardarlo?");// Devuelve true/false
            if(resultado===true){//En el caso de que confirme.
                nombre=nombre.toUpperCase();
                localStorage.setItem("tecnico",nombre);
            }else{//En el caso de que cancele
                alert("El técnico ha cancelado.");
                seguirProgramando=false;
            }
        }
    }else{
        alert("Bienvenido de nuevo, " + nombre);
    }
    if(seguirProgramando===true){//Al acabar el programa antes, si pulsa cancelar, seguirá ejecutandose si no se pone esta condición.
        let incidencias=prompt("Introduce el número de intentos fallidos de acceso en el servidor: ");
        incidencias=Number(incidencias);
        while(isNaN(incidencias)||(incidencias<0||incidencias>100)){// Al igual que antes, hasta que no añada un numero entre ese rango no saldrá del bucle.
            alert("ERROR.\nRecuerda que solo puedes introducir números, y comprendidos entre 0 y 100.");
            incidencias=prompt("Introduce el número de intentos fallidos de acceso en el servidor: ");
            incidencias=Number(incidencias);
        }
        let nivelRiesgo="";//Declara variable para luego añadir la cadena según la coondición.
        if(incidencias>=0&&incidencias<=4){
            nivelRiesgo="BAJO";
        }else if(incidencias>=5&&incidencias<=14){
            nivelRiesgo="MEDIO";
        }else if(incidencias>=15&&incidencias<=29){
            nivelRiesgo="ALTO";
        }else if(incidencias>=30&&incidencias<=100){
            nivelRiesgo="CRÍTICO";
        }
        alert("CYBER DEFENSE 2027\nIntentos fallidos: "+incidencias+"\nNIVEL DE RIESGO: "+nivelRiesgo);

        let dia=prompt("Introduce el dia de la próxima revisión de seguridad.");
        let mes=prompt("Introduce el mes de la próxima revisión de seguridad.");
        let diasSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];//Array con los dias de la semana.
        let fecha=new Date(2027,(mes-1),dia,0,0,0); //Añade menos 1 ya que los meses empieza en la posición 0 y termina en la 11.
        let anio=fecha.getFullYear();//Devuelve el año de la fecha
        let numeroDiaSemana=fecha.getDay();//Devuelve el dia de la semana de la fecha
        let nombreDiaSemana=diasSemana[numeroDiaSemana];//Va a coger la posicion del dia que nos ha devuelto la fecha.
        console.log("PRÓXIMA REVISIÓN");
        console.log("Fecha: "+dia+"/"+mes+"/"+anio);
        console.log("Día de la semana: "+nombreDiaSemana);

        let contadorAlertas=sessionStorage.getItem("alertas");
        if(contadorAlertas===null){ // Si no existe, da el valor a 1.
            sessionStorage.setItem("alertas",1);
        }else{ // Si existe, consulta el valor y lo suma cada vez que recargue la página, una vez modificado se vuelve a enviar el valor.
            contadorAlertas=Number(sessionStorage.getItem("alertas"));
            contadorAlertas++;
            sessionStorage.setItem("alertas",contadorAlertas);
        }

        console.log(incidencias);
        let maxIntentos=localStorage.getItem("maxIntentos");

        if(maxIntentos===null){
            localStorage.setItem("maxIntentos",incidencias);
        }else{
            maxIntentos=Number(localStorage.getItem("maxIntentos"));
            if(incidencias>maxIntentos){//Si el intento actual es mayor que el anterior, actualiza resultado y muestra mediante alert.
                localStorage.setItem("maxIntentos",incidencias);
                alert("¡NUEVO MÁXIMO DE INTENTOS DETECTADO!");
            }else{// Si el intento actual es inferior o igual.
                alert("El número de intentos fallidos es igual o inferior al anterior.");
            }
        }
        alert("ALERTA-"+String(incidencias));
        console.log("========================");
        console.log("   CYBER DEFENSE 2027   ");
        console.log("========================");
        console.log("Técnico: "+localStorage.getItem("tecnico"));
        console.log("Referencia: "+"ALERTA-"+String(incidencias));
        console.log("Nivel de riesgo: "+nivelRiesgo);
        console.log("Alertas analizadas en esta sesión: "+sessionStorage.getItem("alertas")); 
        console.log("Máximo histórico de intentos: "+localStorage.getItem("maxIntentos"));
        console.log("Próxima revisión: "+dia+"/"+mes+"/"+anio);
        console.log("Día de la semana: "+nombreDiaSemana);
    }
    seguirProgramando=false;
}
//Carlos Martínez Del Pino.