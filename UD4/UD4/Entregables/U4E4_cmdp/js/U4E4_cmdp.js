
/*
 * BINGO DE 90 BOLAS
 * Fase 1 - Juego por consola con Node.js
 */

// Cartón fijo del bingo.
// Los null representan las casillas vacías.
const CARTON_FIJO = [
    [3, null, 24, null, 42, null, 63, null, 83],
    [null, 12, null, 34, 49, 56, null, 75, null],
    [8, 17, null, 38, null, 58, null, null, 89]
];

// Guardamos las bolas que van saliendo.
let bolasExtraidas = [];

// Guardamos los números del cartón que hemos marcado.
let numerosMarcados = [];

// Controlamos si ya hemos cantado línea o bingo.
let lineaCantada = false;
let bingoCantado = false;

// Guardamos si hay algún premio pendiente de cantar.
let premioPendiente = null;


// EXTRAER BOLA
function extraerBola() {
    let continuar = true;

    // Si ya han salido las 90 bolas, no extraemos más.
    if (bolasExtraidas.length === 90) {
        return null;
    } else {
        let bola = 0;

        // Seguimos buscando hasta encontrar una bola que no haya salido.
        while (continuar) {

            // Generamos un número aleatorio entre 1 y 90.
            bola = Math.floor(Math.random() * 90) + 1;

            // Comprobamos que la bola no haya salido antes.
            if (!bolasExtraidas.includes(bola)) {

                // Guardamos la bola extraída.
                bolasExtraidas.push(bola);

                // Salimos del bucle porque ya tenemos una bola válida.
                continuar = false;
            }
        }

        // Devolvemos la bola que ha salido.
        return bola;
    }
}


// MARCAR NÚMERO
function marcarNumero(numero) {

    // Recorremos las filas del cartón.
    for (let i = 0; i < CARTON_FIJO.length; i++) {

        // Recorremos cada casilla de la fila.
        for (let j = 0; j < CARTON_FIJO[i].length; j++) {

            // Comprobamos si el número está en el cartón.
            if (CARTON_FIJO[i][j] === numero) {

                // Comprobamos que haya salido y que no esté marcado.
                if (!numerosMarcados.includes(numero) &&
                    bolasExtraidas.includes(numero)) {

                    // Añadimos el número a los marcados.
                    numerosMarcados.push(numero);
                }
            }
        }
    }
}


// COMPROBAR LÍNEA
function comprobarLinea() {

    // Recorremos las tres filas del cartón.
    for (const linea of CARTON_FIJO) {

        // Quitamos los null y nos quedamos con los números.
        let numeros = linea.filter(n => n !== null);

        // Comprobamos si todos los números de esta fila han salido.
        if (numeros.every(n => bolasExtraidas.includes(n))) {

            // Si la fila está completa, tenemos línea.
            return true;
        }
    }

    // Si ninguna fila está completa, no tenemos línea.
    return false;
}


// COMPROBAR BINGO
function comprobarBingo() {

    // Recorremos todas las filas del cartón.
    for (const filas of CARTON_FIJO) {

        // Quitamos las casillas vacías de cada fila.
        let numeros = filas.filter(n => n !== null);

        // Si falta algún número de una fila, todavía no hay bingo.
        if (!numeros.every(n => bolasExtraidas.includes(n))) {
            return false;
        }
    }

    // Si todas las filas están completas, tenemos bingo.
    return true;
}


// ACTUALIZAR PREMIOS
function actualizarPremios() {

    // Solo buscamos premios si no hay otro pendiente.
    if (premioPendiente === null) {

        // Comprobamos si tenemos línea y todavía no la hemos cantado.
        if (comprobarLinea() === true && lineaCantada === false) {

            // Guardamos que hay una línea pendiente.
            premioPendiente = "linea";
        }

        // Si no hay línea nueva, comprobamos si tenemos bingo.
        else if (comprobarBingo() === true && bingoCantado === false) {

            // Guardamos que hay un bingo pendiente.
            premioPendiente = "bingo";
        }
    }
}


// CANTAR LÍNEA
function cantarLinea() {

    // Comprobamos que haya una línea pendiente.
    if (premioPendiente === "linea") {

        // Indicamos que ya hemos cantado línea.
        lineaCantada = true;

        // Quitamos el premio pendiente.
        premioPendiente = null;

        // Devolvemos true porque hemos cantado línea.
        return true;
    }

    // Si no había línea pendiente, devolvemos false.
    return false;
}


// CANTAR BINGO
function cantarBingo() {

    // Comprobamos que haya un bingo pendiente.
    if (premioPendiente === "bingo") {

        // Indicamos que ya hemos cantado bingo.
        bingoCantado = true;

        // Quitamos el premio pendiente.
        premioPendiente = null;

        // Devolvemos true porque hemos cantado bingo.
        return true;
    }

    // Si no había bingo pendiente, devolvemos false.
    return false;
}


// REINICIAR PARTIDA
function reiniciarPartida() {

    // Vaciamos las bolas extraídas y los números marcados.
    bolasExtraidas = [];
    numerosMarcados = [];

    // Indicamos que todavía no hemos cantado ningún premio.
    lineaCantada = false;
    bingoCantado = false;

    // Dejamos los premios pendientes vacíos.
    premioPendiente = null;
}


// JUGAR BINGO
function jugarBingo() {

    // Reiniciamos las variables antes de empezar.
    reiniciarPartida();

    // Seguimos jugando mientras no se haya cantado bingo.
    while (bingoCantado !== true) {

        // Extraemos una bola nueva.
        let bola = extraerBola();

        // Mostramos la bola que ha salido.
        console.log("Bola " + bola + " extraida");

        // Marcamos el número si pertenece al cartón.
        marcarNumero(bola);

        // Comprobamos si hay algún premio nuevo.
        actualizarPremios();

        // Si tenemos una línea pendiente, la cantamos.
        if (premioPendiente === "linea") {
            console.log("Linea encontrada!!");
            cantarLinea();
        }

        // Si tenemos un bingo pendiente, lo cantamos.
        if (premioPendiente === "bingo") {
            console.log("BINGOOO!!!!");
            cantarBingo();
        }

        // Al cantar bingo, bingoCantado pasa a true
        // y el while termina en la siguiente comprobación.
    }
}


// Iniciamos la partida.
jugarBingo();

// Carlos Martínez Del Pino.