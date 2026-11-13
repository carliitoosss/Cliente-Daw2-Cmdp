let array1=[1,2,3,null,"perro",10,12];
// let array1Filtrado=array1.filter(n=>n!==null);
// console.log(array1Filtrado);
// let array2Filtrado=array1Filtrado.filter(n=>!isNaN(n)&&n!==null);
// console.log(array2Filtrado);
let array1Filtrado=array1.filter(n=>!isNaN(n)&&n!==null&&n>=5);
console.log(array1Filtrado);
let array2=["perro","casa","coche"];
let frases=["Me gusta mi coche", "Me gusta mi gato"];



let resultado=array2.some(palabra=>frases.some(frase=>frase.includes(palabra)));
let resultado2=frases.some(frase=>array2.some(palabra=>frase.includes(palabra)));

//Todas mis frases contienen todas las palabras
let resultado3=frases.every(frase=>array2.every(palabra=>frase.includes(palabra)));

// Todas mis frases tienen alguna de las la palabras.
let resultado4=frases.every(frase=>array2.some(palabra=>frase.includes(palabra)));

// Algunas de mis frases contienen todas las palabras
let resultado5=frases.some(frase=>array2.every(palabra=>frase.includes(palabra)));
console.log(resultado5);