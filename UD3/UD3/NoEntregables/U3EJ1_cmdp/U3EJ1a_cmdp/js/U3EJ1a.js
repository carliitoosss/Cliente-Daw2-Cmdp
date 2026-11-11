let fechaActual=new Date();
let fechaFinal=new Date(2027, 1, 8, 10, 45,0);

let diferencia = fechaFinal-fechaActual;
diferencia = diferencia / (1000 *60 *60 *24);
diferencia=parseInt(diferencia);
console.log(diferencia);