 const datos= [45, "60", 0, 60, 100, 101, null, true,
-3, 59.5, 60, undefined];
function filtrarAutonomias(datos, minimo){
    let datosFiltrados=datos.filter(n=>typeof n==='number'&&(n>=minimo&&n<=100));
    return datosFiltrados;
}
let resultado=filtrarAutonomias(datos,0);
console.log(resultado);
 
const avisos = [
 "Equipo listo", "REVISAR bateria", "Sin incidencias",
 "Uso NO AUTORIZADO", "Zona de revision", "Entrega hoy"
];
const bloqueadas = ["ReViS", "no autorizado"];
function filtrarAvisos(avisos,bloqueadas){
    return avisos.filter((aviso)=>{
        let tieneProhibida = bloqueadas.some((bloqueada)=>{
            return aviso.toLowerCase().includes(bloqueada.toLowerCase());
        });
        return !tieneProhibida;
    });
}
resultado2=filtrarAvisos(avisos,bloqueadas);
console.log(resultado2);