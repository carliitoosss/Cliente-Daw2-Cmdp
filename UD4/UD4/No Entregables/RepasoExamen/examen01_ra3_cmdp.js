let entrada=[3, -1, "hola", 0, 7, null, 2, -5];

function filtraNumerosPositivos(entrada){
    let arrayFiltrado=entrada.filter(n=> typeof n==='number'&& n>0);
    return arrayFiltrado;
}
let resultado = filtraNumerosPositivos(entrada);
console.log(resultado);

let frases=[
    "Me gusta el helado",
    "Odio madrugar",
    "El sol brilla",
    "Que aburrido es estudiar"
];
let prohibidas=["Odio", "aburrido"];

function contienePalabrasProhibidas(frases, prohibidas){
    return frases.filter((frase)=>{
        let tieneProhibida = prohibidas.some((palabra)=>{
            return frase.includes(palabra);
        });
        return !tieneProhibida;
    });
}
let resultado2 = contienePalabrasProhibidas(frases, prohibidas);
console.log(resultado2);