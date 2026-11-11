/* REPASO JAVASCRIPT - SIMULACRO FINAL
 * Documentación añadida para estudiar. Las instrucciones originales se conservan sin cambios.
 * Autor: Carlos Martínez Del Pino.
 * Objetivo: identificación, fecha, contraseña, reto y resultado final.
 */
// Recupera el comandante si ya estaba guardado de una visita anterior.
let nombre=localStorage.getItem("comandante");
// Bandera booleana para controlar si se debe continuar con el ejercicio.
let seguirProgramando=true;
// Control general del programa; sus etapas se ejecutan mientras la bandera sea true.
while(seguirProgramando===true){
    // null significa que no hay un comandante almacenado todavía.
    if(nombre===null){
    // prompt() devuelve texto, o null si el usuario pulsa Cancelar.
        nombre=prompt("Introduce tu nombre: ");
    // Se repite únicamente para respuestas vacías o con espacios; se permite cancelar.
        while(nombre!==null && nombre.trim()===""){
            alert("Error, vuelve a intentarlo");
            nombre=prompt("Introduce tu nombre: ");
        }
    // Si se pulsa Cancelar, se desactiva la continuación del programa.
        if(nombre===null){
            alert("El usuario ha reusado responder.");
            seguirProgramando=false;
        }else{
    // localStorage persiste entre recargas y nuevas aperturas del mismo origen.
            localStorage.setItem("comandante",nombre);
        }
    }else{
        alert("Bienvenido de nuevo, comandante "+nombre);
    }
    // Esta condición evita iniciar nuevas pruebas después de una cancelación.
    if(seguirProgramando===true){
    // Fecha actual tomada del reloj del dispositivo.
        let fechaActual=new Date();
    // Date(año, mes, día, hora, minuto, segundo): los meses comienzan en 0.
        let fechaFinal=new Date(2027,11,20,0,0,0);
    // getFullYear: año; getDate: día del mes, de 1 a 31.
        let anio=fechaActual.getFullYear();
        let diaMes=fechaActual.getDate();
    // getDay() devuelve 0-6: domingo a sábado.
        let diasSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    // getMonth() devuelve 0-11: enero a diciembre.
        let nombreMes=["Enero","Febrero","Marzo","Abril","Mayo","Junio",
            "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    // El índice devuelto por getDay() coincide con la posición del array.
        let numeroDiaSemana=fechaActual.getDay();
        let nombreDiaSemana=diasSemana[numeroDiaSemana];
    // El índice devuelto por getMonth() coincide con la posición del array.
        let numeroMes=fechaActual.getMonth();
        let nombreExactoMes=nombreMes[numeroMes];
        console.log("-------------------");
        console.log("INFORMACIÓN DE LA MISIÓN");
        console.log("-------------------");
        console.log("Comandante: "+nombre);
        console.log("Fecha: "+nombreDiaSemana+", "+diaMes+" de "+nombreExactoMes+" de "+ anio);
        console.log(" ");
    // Restar dos objetos Date devuelve la diferencia en milisegundos.
        let diferencia=fechaFinal-fechaActual;
    // Convierte milisegundos a días usando 1000 * 60 * 60 * 24.
        diferencia=diferencia/(1000*60*60*24);
    // parseInt() trunca la parte decimal; no redondea hacia arriba.
        diferencia=parseInt(diferencia);
        console.log("Quedan "+diferencia+" días para el rescate espacial.");

    // Primera prueba: contraseña introducida por el usuario.
        let contraseña=prompt("Introduce la contraseña: ");
        let contraseñaCorrecta="rescate2027";
    // IMPORTANTE: no llames a métodos de cadena cuando el dato sea null.
        if(contraseña!==null){
    // trim() quita espacios exteriores; toLowerCase() pasa a minúsculas.
            contraseña=contraseña.trim().toLowerCase();
        }
    // El while se repite solo si no se ha cancelado y la clave no coincide.
        while(contraseña!==null&&contraseña!==contraseñaCorrecta){
            alert("Contraseña incorrecta. Intente de nuevo.");
            contraseña=prompt("Introduce la contraseña: ");
            if(contraseña!==null){
                contraseña=contraseña.trim().toLowerCase();
            }
        }
    // La cancelación hace que la siguiente etapa no se ejecute.
        if(contraseña===null){
            alert("El usuario ha reusado responder.")
            seguirProgramando=false;
        }else{
            console.log("Primera prueba superada.");
        }
    // Segunda etapa protegida por la bandera del programa.
        if(seguirProgramando===true){
            let pregunta=prompt("¿Qué día de la semana es hoy?");
    // Contador de respuestas erróneas; comienza en cero.
            let contador=0;
            if(pregunta!==null){
                pregunta=pregunta.trim().toLowerCase();
            }
    // Compara dos cadenas normalizadas; recuerda los paréntesis de toLowerCase().
            while(pregunta!==null&&pregunta!==nombreDiaSemana.toLowerCase()){
                alert("Error. Intente de nuevo");
    // Cada intento incorrecto incrementa el contador exactamente en uno.
                contador++;
                pregunta=prompt("¿Qué día de la semana es hoy?");
                if(pregunta!==null){
                    pregunta=pregunta.trim().toLowerCase();
                } 
            }
    // Tras salir del while distinguimos éxito de cancelación.
            if(pregunta===null){
                alert("El usuario ha reusado responder.");
                seguirProgramando=false;
            }else{
                console.log("Segunda prueba superada.");
            }
    // Solo cuando las pruebas se han superado, se crea el identificador.
            if(seguirProgramando===true){
    // substring(0,3) toma los índices 0, 1 y 2 (hasta tres letras).
                let siglasNombre=nombre.substring(0,3);
    // Convierte las siglas a mayúsculas.
                siglasNombre=siglasNombre.toUpperCase();
    // Los meses reales son 1-12, pero getMonth devuelve 0-11.
                let codigoMes=numeroMes+1;
    // % 100 obtiene el resto de dividir el año por 100 (2026 -> 26).
                let codigoAnio=anio%100;
    // El operador + concatena las partes cuando interviene una cadena.
                let id= siglasNombre+codigoMes+codigoAnio;
    // sessionStorage conserva el dato en la sesión de la pestaña.
                sessionStorage.setItem("rescateSuperado","SI");
    // El carácter \n introduce un salto de línea dentro del mensaje.
                alert("==========================\nRESCATE CONSEGUIDO\n=========================="+
                    "\nComandante: "+nombre+
                    "\nCódigo: "+id+
                    "\n"+
                    "\nFecha: "+nombreDiaSemana+", "+diaMes+" de "+nombreExactoMes+" de "+ anio+
                    "\n"+
                    "\nIntentos fallidos: "+contador+
                    "\n"+
                    "\nESTADO: MISIÓN COMPLETADA"
                );
            }

        }
    }
    // El recorrido principal se cierra y no vuelve a iniciar la misión.
    seguirProgramando=false;
}
