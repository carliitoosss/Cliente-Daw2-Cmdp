let diaCumple=prompt("Introduce tu dia de cumple:");
diaCumple=Number(diaCumple);
let mesCumple=prompt("Introduce tu mes de cumple:");
mesCumple=Number(diaCumple)-1;
let contadorDiasCumple=0;

for(let i=2027; i<2080 ;i++){
    
    let fecha=new Date(i,mesCumple,diaCumple);
    if(fecha.getDay()=== 6){
        contadorDiasCumple++;
    }
}
console.log(contadorDiasCumple);