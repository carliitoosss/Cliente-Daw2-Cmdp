class Coche{
    #matricula;
    #marca;
    #modelo;
    #anio;
    #precioDia;
    #alquilado;
    constructor(matricula, marca, modelo, anio, precioDia){
        this.#matricula=matricula;
        this.#marca=marca;
        this.#modelo=modelo;
        this.#anio=anio;
        this.#precioDia=precioDia;
        this.#alquilado=false;
    }
    get matricula(){
        return this.#matricula;
    }
    get marca(){
        return this.#marca;
    }
    get modelo(){
        return this.#modelo;
    }
    get anio(){
        return this.#anio;
    }
    get precioDia(){
        return this.#precioDia;
    }
    get alquilado(){
        return this.#alquilado;
    }
    mostrarInfo(){
        return"Coche "+this.#marca+" "+this.#modelo+"("+this.#anio+")"+" con matricula "+this.#matricula+" con un precio de "+this.#precioDia+" al dia actualmente "+this.#alquilado;
    }
    esAntiguo(){
        let fechaActual=new Date();
        let anioActual=fechaActual.getFullYear();
        let diferencia=anioActual-this.#anio;
        if(diferencia>8){
            return true;
        }else{
            return false;
        }
    }
    esEconomico(){
        if(this.#precioDia<=50){
            return true;
        }else{
            return false;
        }
    }
    puedeAlquilarse(presupuesto){
        if(this.#alquilado===false&&presupuesto>=this.#precioDia){
            return true;
        }else{
            return false;
        }
    }
}
class Cliente{
    #nombre;
    #dni;
    #presupuestoDiario;
    #cocheAsignado;
    constructor(nombre, dni, presupuestoDiario){
        this.#nombre=nombre;
        this.#dni=dni;
        this.#presupuestoDiario=presupuestoDiario;
        this.#cocheAsignado=null;
    }
    asignarCoche(coche){
        if(coche instanceof Coche){
            this.#cocheAsignado=coche;
            let infoCoche=coche.mostrarInfo();
            console.log(infoCoche+" asignado correctamente a "+this.#nombre+" con dni "+this.#dni);
        }else{
            console.log("El coche pasado no es instancia de la clase Coche.");
        }
    }
    puedeAlquilar(){
        if(this.#cocheAsignado!==null){
            if(this.#cocheAsignado.puedeAlquilarse(this.#presupuestoDiario)){
                return "Puede alquilar";
            }else{
                return "No puede alquilar";
            }
        }else{
            return "NO hay ningún coche asignado";
        }
    }
    mostrarResumen(){
        let resultado;
        if(this.#cocheAsignado!==null){
            resultado=" con matricula "+this.#cocheAsignado.matricula+" ";
        }else{
            resultado=" sin coche asignado ";
        }
        console.log(this.#nombre+" con "+this.#dni+" y un presupuesto de "+this.#presupuestoDiario+"€ diarios"+resultado+this.puedeAlquilar());
    }
}
class Garaje{
    #coches;
    constructor(){
        this.#coches=[];
    }
    agregarCoche(coche){
        if(coche instanceof Coche){
            this.#coches.push(coche);
            return coche.mostrarInfo()+" asignado correctamente."
        }else{
            return "El coche pasado no es instancia de la clase Coche."
        }
    }
    mostrarGaraje(){
        for (const coche of this.#coches) {
            console.log(coche.mostrarInfo());
        }
    }
    cochesPorPresupuesto(presupuesto){
        let cocheFiltrado=this.#coches.filter(coche=>coche.puedeAlquilarse(presupuesto));
        return cocheFiltrado;
    }
}

let c1=new Coche("1234ABC", "Seat", "Ibiza", 2015, 40);
let c2= new Coche("5678DEF", "Toyota", "Corolla", 2022, 65);
let c3 = new Coche("9012GHI", "Renault", "Clio", 2020, 50);
let cliente1=new Cliente("Ana Pérez", "11111111A", 50);
let cliente2=new Cliente("Luis García", "22222222B", 50);
let cliente3= new Cliente("Eva López", "33333333C", 70);

cliente1.asignarCoche(c1);
cliente2.asignarCoche(c2);
console.log(" ");
console.log(cliente1.puedeAlquilar());
console.log(cliente2.puedeAlquilar());
console.log(cliente3.puedeAlquilar());
console.log(c3.esEconomico())
console.log(c3.puedeAlquilarse(50));
console.log(" ");
let garaje=new Garaje();

garaje.agregarCoche(c1);
garaje.agregarCoche(c2);
garaje.agregarCoche(c3);

garaje.mostrarGaraje();
console.log(" ");

let cochesFiltrados=garaje.cochesPorPresupuesto(50);
cochesFiltrados.forEach(coche => {
    console.log(coche.mostrarInfo());
});
console.log(" ");
console.log(c1.esAntiguo());
console.log(c3.esAntiguo());
