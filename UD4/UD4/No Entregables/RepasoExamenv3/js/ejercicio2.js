class Equipo{
    #codigo;
    #modelo;
    #antiguedad;
    #autonomia;
    #valor;
    #disponible;
    constructor(codigo, modelo, antiguedad, autonomia, valor){
        this.#codigo=codigo;
        this.#modelo=modelo;
        this.#antiguedad=antiguedad;
        this.#autonomia=autonomia;
        this.#valor=valor;
        this.#disponible=true;
    }
    mostrarInfo(){
        let resultado;
        if(this.#disponible===true){
            resultado="está disponible"
        }else{
            resultado="no está disponible";
        }
        return "Equipo con "+this.#codigo+" modelo "+this.#modelo+" con una antiguedad de "+this.#antiguedad+" años, además de tener un valor de "+this.#valor+"€ y actualemtente "+ resultado;
    }
    necesitaRevision(){
        if(this.#antiguedad>4||this.#autonomia>30){
            return true;
        }else{
            return false;
        }
    }
    requiereAutorizacion(){
        if(this.#valor>1000){
            return true;
        }else{
            return false;
        }
    }
    puedePrestarse(minimo){
        if(this.#disponible===true && this.#autonomia>=minimo){
            return true;
        }else{
            return false;
        }
    }
    cambiarDisponibilidad(estado){
        this.#disponible=estado;
    }
}
class Usuario{
    #nombre;
    #dni;
    #autorizado;
    #minimoAutonomia;
    #equipoAsignado;
    constructor(nombre, dni, autorizado, minimoAutonomia){
        this.#nombre=nombre;
        this.#dni=dni;
        this.#autorizado=autorizado;
        this.#minimoAutonomia=minimoAutonomia;
        this.#equipoAsignado=null;
    }
    asignarEquipo(equipo){
        if(equipo instanceof Equipo){
            this.#equipoAsignado=equipo;
            return true;
        }else{
            return false;
        }
    }
    puedeRetirar(){
        if(this.#equipoAsignado===null){
            return false;
        }
        if(!this.#equipoAsignado.puedePrestarse()){
            return false;
        }
        if(this.#equipoAsignado.requiereAutorizacion()){
            return this.#autorizado;
        }
        return true;
    }
    mostrarResumen(){
        let resultado;
        if(this.asignarEquipo!==null){
            resultado=" con equipo asignado"+this.asignarEquipo+" ";
        }else{
            resultado=" sin equipo asignado "
        }
        return "Usuario con nombre "+this.#nombre+" y con dni "+ this.#dni+" con autorización"+this.#autorizado+" y un mínimo de autonomía de "+this.#minimoAutonomia+resultado+" y puede retirar"+this.puedeRetirar();
    }
}
class Inventario{
    #equipos;
    constructor(){
        this.#equipos=[];
    }
    agregarEquipo(equipo){
        if(equipo instanceof Equipo){
            this.#equipos.push(equipo);
            return true;
        }else{
            return false;
        }
    }
    mostrarInventario(){
        
    }
}