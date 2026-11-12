class Camion{
    constructor(matricula, marca, modelo, anio, capacidadCarga){
        this.matricula=matricula;
        this.marca=marca;
        this.modelo=modelo;
        this.anio=anio;
        this.capacidadCarga=capacidadCarga;
    }
    mostrarInfo(){
        return "Mostrando camión con matricula: "+this.matricula+", marca: "+this.marca+", modelo: "+this.modelo+", anio: "+this.anio+", capacidad de carga: "+this.capacidadCarga;
    }
    esAntiguo(){
        let fechaActual= new Date();
        let anioActual= fechaActual.getFullYear();
        let diferencia= anioActual-anio;
        if(diferencia>10){
            return true;
        }else{
            return false;
        }
    }
    puedeTransportar(peso){
        if(this.capacidadCarga>=peso){
            return true;
        }
    }
    requierePermisoEspecial(){
        if(this.capacidadCarga>=3500){
            return true;
        }
    }
}
class Conductor{
    constructor(nombre, dni, tienePermisoEspecial,){
        this.nombre=nombre;
        this.dni=dni;
        this.tienePermisoEspecial=tienePermisoEspecial;
        this.camionAsignado=null;
    }
    asignarCamion(camion){
        if(camion instanceof Camion){
            this.camionAsignado=camion;
            console.log(this.nombre+" con dni "+this.dni+" ha sido asignado.");
        }else{
            throw new Error("El camión recibido no es el correcto, tiene que ser una instancia de Camión.");
        }
    }
    puedeConducir(){
        if(this.camionAsignado.capacidadCarga){
            if(this.camionAsignado.capacidadCarga>=3500 && this.tienePermisoEspecial===true){
                return true;
            }
        }
        return false;
    }
    mostrarResumen(){
        return "Conductor: "+ this.nombre+"\n Dni: "+this.dni+"\n Permiso especial: "+ this.tienePermisoEspecial+"\n Camión asignado: "+this.camionAsignado.matricula+"\nPuede conducir ese camión: "+this.puedeConducir();
    }
}
class Flota{
    constructor(){
        this.camiones=[];
    }
    agregarCamion(camion){
        if(camion instanceof Camion){
            this.camiones.push(camion);
            console.log("Camión con matricula "+camion.matricula+" ha sido añadido a la flota.");
        }else{
            throw new Error("El camión recibido no es el correcto, tiene que ser una instancia de Camión.");
        }
    }
    mostrarFlota(){
        for (const camion of this.camiones) {
            console.log(camion.mostrarInfo());
        }
    }
    camionesPorCapacidad(cantidad){
        let camionesPesados=this.camiones.filter(n=>n.capacidadCarga>=cantidad);
        return camionesPesados;
    }
}
let camion1 = new Camion("1234XYZ", "Volvo", "FH16", 2015, 6000);
let camion2 = new Camion("5678ABC", "Mercedes", "Actros", 2018, 3500);

let conductor1 = new Conductor("Carlos López", "11112222A", false);
let conductor2 = new Conductor("Sofía Ramírez", "33334444B", true);

conductor1.asignarCamion(camion1);
conductor2.asignarCamion(camion2);

let flota = new Flota();
flota.agregarCamion(camion1);
flota.agregarCamion(camion2);

console.log(conductor1.mostrarResumen());
console.log(conductor2.mostrarResumen());
flota.mostrarFlota();

console.log("Camiones con capacidad superior a 4000kg:");
let camionesGrandes = flota.camionesPorCapacidad(4000);
camionesGrandes.forEach(camion => {
    console.log(camion.mostrarInfo());
});
