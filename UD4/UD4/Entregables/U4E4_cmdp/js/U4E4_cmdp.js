const CARTON_FIJO = [ 
    [3, null, 24, null, 42, null, 63, null, 83],

    [null, 12, null, 34, 49, 56, null, 75, null],

    [8, 17, null, 38, null, 58, null, null, 89] 
];

let bolasExtraidas = [];

let numerosMarcados = [];

let lineaCantada = false;

let bingoCantado = false;

let premioPendiente = null;

function extraerBola(){
    let continuar=true;
    if(bolasExtraidas.length===90){
        return null;
    }else{
        let bola=0;
        while(continuar){
            bola=Math.floor(Math.random()*90)+1;
            if (!bolasExtraidas.includes(bola)){
                bolasExtraidas.push(bola);
                continuar=false;
            }
        }
        return bola;
    }
}
function marcarNumero(numero){
    for (let i = 0; i < CARTON_FIJO.length; i++) {
        for (let j = 0; j < CARTON_FIJO[i].length; j++) {
            if(CARTON_FIJO[i][j]===numero){
                if(!numerosMarcados.includes(numero)){
                    numerosMarcados.push(numero);
                }
            }
        }
    }
}

// function comprobarLinea(){
//     for (let i = 0; i < numerosMarcados.length; i++) {
//         let contadorNumeroLinea=0;
//         for (let j = 0; j < numerosMarcados.length; j++) {
//             if(CARTON_FIJO[i][j]!==null){
//                 if(bolasExtraidas.includes(CARTON_FIJO[i][j])){
//                     contadorNumeroLinea++;
//                     if(contadorNumeroLinea===5){
//                         lineaCantada=true;
//                     }
//                 }           
//             }
//         }   
//     }
//     if(lineaCantada===false){
//        return false;
//     }else{
//         return true;
//     }
// }

function comprobarLinea(){ //Nos ahorramos mucho código.
    for (const linea of CARTON_FIJO) {
        let numeros=linea.filter(n=>n!==null);//Esto nos crea un nuevo array, cogiendo solamente los numeros, y olvidamos los nulos.
        if(numeros.every(n=>bolasExtraidas.includes(n))){ // Comprueba que todos los elementos del array numeros, esta en el array de bolas extraida.
            return true;
        }
    }
    return false;
}

function comprobarBingo(){
    for(const filas of CARTON_FIJO){
        let numeros = filas.filter(n=>n!==null)
        for(const columnas of numeros){
            if(columnas.every(n=>bolasExtraidas(n))){
                filaCompletada++;
            }
        }
    }
}