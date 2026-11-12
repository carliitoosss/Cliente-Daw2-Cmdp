let entrada = [25, -4, "50", 0, 150, 99, null, true, 100, 7];

function filtrarPreciosValidos(entrada){
    let filtradosNumeros=entrada.filter(n=>typeof n==='number'&&(n>0&&n<=100)); // Consultamos por el tipo y entre un rango limitado.
    return filtradosNumeros;
}
// Dos maneras distinas de mostrar por pantalla
let resultado = filtrarPreciosValidos(entrada);
console.log(resultado);
console.log(filtrarPreciosValidos(entrada));

let comentarios = [
 "Este producto es EXCELENTE", "Odio esta aplicación",
 "Me encanta programar", "Es un servicio Aburrido",
 "JavaScript es divertido", "NO ME GUSTA nada"
];
let prohibidas = ["odio", "aburrido", "no me gusta"];

function filtrarComentarios(comentarios, prohibidas){
    return comentarios.filter((comentario)=>{
        let tieneProhibida=prohibidas.some((palabra)=>{
            return comentario.toLowerCase().includes(palabra.toLowerCase());
        });
        return !tieneProhibida;
    });
}  
console.log(filtrarComentarios(comentarios, prohibidas));
