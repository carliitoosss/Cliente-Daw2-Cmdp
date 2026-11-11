let nombre = localStorage.getItem("agente");
let seguirProgramando=true;
while(seguirProgramando===true){
    if(nombre===null){
    nombre=prompt("Introduce tu nombre: ");
        while(nombre!==null && nombre===""){
            alert("Error. Introduce de nuevo tu nombre.");
            nombre=prompt("Introduce tu nombre:");
        }
        if(nombre===null){
            alert("El usuario ha reusado responder.");
            seguirProgramando=false;
        }else{
            localStorage.setItem("agente",nombre);
        }
    }else{
        alert("Bienvenido de nuevo "+nombre);
    }
    if(seguirProgramando===true){
        let fechaActual=new Date();
        let diasSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        let nombreMes=["Enero","Febrero","Marzo","Abril","Mayo","Junio",
            "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        let diaMes=fechaActual.getDate();
        let anio=fechaActual.getFullYear();
        let numeroDiaSemana=fechaActual.getDay();
        let nombreDiaSemana=diasSemana[numeroDiaSemana];
        let numeroMes=fechaActual.getMonth();
        let nombreExactoMes=nombreMes[numeroMes];
        console.log("FECHA DE OPERACIÓN");
        console.log("--------------------");
        console.log("Dia de la semana: "+nombreDiaSemana);
        console.log("Día del mes: "+diaMes);
        console.log("Mes: "+nombreExactoMes);
        console.log("Año: "+anio);
        console.log(" ");
        console.log("Hoy es "+nombreDiaSemana+", "+diaMes+" de "+nombreExactoMes+" de "+anio);
        let fechaOperacion=new Date(2027,5,15,0,0,0);
        let diferencia=fechaOperacion-fechaActual;
        diferencia=diferencia/(1000*60*60*24);
        diferencia=parseInt(diferencia);
        console.log("Faltan "+diferencia+" días para la operación final.");

        let contraseña=prompt("Introduce la contraseña: ");
        let contraseñaCorrecta="agente007";
        if(contraseña!==null){
            contraseña=contraseña.trim().toLowerCase();
        }
        while(contraseña!==contraseñaCorrecta&&contraseña!==null){
            alert("Código incorrecto. Pruebe de nuevo.");
            contraseña=prompt("Introduce la contraseña: ");
            if(contraseña!==null){
            contraseña=contraseña.trim().toLowerCase();
            }   
        }
        if(contraseña===null){
            alert("El usuario ha reusado contestar.");
            seguirProgramando=false;
        }else{
            console.log("Primera prueba superada.");
        }
        if(seguirProgramando===true){
            let pregunta=prompt("¿En qué mes estamos actualmente?");
            let contador=0;
            if(pregunta!==null){
                pregunta=pregunta.trim().toLowerCase();
            }
            while(pregunta!==nombreExactoMes.toLowerCase()&&pregunta!==null){
                alert("Error, vuelve a probar.");
                pregunta=prompt("¿En qué mes estamos actualmente?");
                contador++;
                if(pregunta!==null){
                pregunta=pregunta.trim().toLowerCase();
                }
            }
            if(pregunta===null){
                alert("El usuario ha reusado responder.");
                seguirProgramando=false;
            }else{
                console.log("¡¡Prueba Superada!!");
            }
            if(seguirProgramando===true){
                sessionStorage.setItem("misionCompletada","SI");
                alert("======================\nMISIÓN COMPLETADA\n======================"+
                    "\nAgente: "+ nombre+
                    "\nFecha: "+ nombreDiaSemana+", "+diaMes+" de "+nombreExactoMes+" de "+anio+
                    "\nintentos fallidos: "+ contador+
                    "\nEstado: ACCESO AUTORIZADO"
                );
            }
        }      
    }
    seguirProgramando=false;
}
