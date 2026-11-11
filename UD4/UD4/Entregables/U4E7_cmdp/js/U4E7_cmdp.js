class Conductor{
    //Inicializamos los atributos privados de la clase conductor.
    #nombre;
    #licencia;
    //Constructor con párametros que inicia los atributos
    constructor(nombre, licencia){
        this.#nombre=nombre;
        this.#licencia=licencia;
    }
    // Métodos Get para consultar los atributos fuera de la clase.
    get nombre(){
        return this.#nombre;
    }
    get licencia(){
        return this.#licencia;
    }
}
class Bus{
    #capacidad;
    #pasajeros;
    #conductor;
    //Constructor con único parámetro de capacidad
    constructor(capacidad){
        this.#capacidad=capacidad;
        this.#pasajeros=0;//Inicia en 0
        this.#conductor=null; // Sin conductor de momento.
    }
    // Métodos Get para consultar los atributos fuera de la clase.
    get capacidad(){
        return this.#capacidad;
    }
    get pasajeros(){
        return this.#pasajeros;
    }
    get conductor(){
        return this.#conductor;
    }
    //Método subir pasado por parámatro la cantidad que desea subir.
    subir(cantidad){
        let plazasDisponibles=this.#capacidad-this.#pasajeros // Plazas que quedan disponibles dentro del autobús.
        let subidos=0; // variable inicializada
        if(plazasDisponibles>=cantidad){ // Si hay plazas que personas que quieren subir.
            this.#pasajeros+=cantidad; // Suma los pasajeros,
            subidos=cantidad; // Personas que han subido
        }else{ // Hay más personas que quieren subir que plazas disponibles.
            subidos=plazasDisponibles; // Las personas subidas son las plazas disponibles que había. 
            this.#pasajeros=this.#capacidad // Los pasajerso pasa a ser toda la capacidad del autobús.
        }
        console.log("Han subido "+ subidos+" personas, y hay "+ this.#pasajeros +" personas en el autobús.")
    }
    //Método para bajar pasado por parámetro la cantidad que desea bajar.
    bajar(cantidad){
        let bajados=0; // variable inicializada
        if (this.#pasajeros>=cantidad){ // Si hay más personas que la cantidad que quiere bajar.
            this.#pasajeros-=cantidad; // Resta los pasajeros por la cantidad que desea bajar.
            bajados=cantidad; // Las personas bajadas son la cantidad que quiere bajar.
        }else{ //Si hay más cantidad que personas en el autobus
            bajados=this.pasajeros; // Las personas bajadas seran todos los pasajeros que iban dentro
            this.#pasajeros=0; // Pasa a haber 0 personas en el autobus.
        }
        console.log("Han bajado "+bajados+" personas, y hay "+this.#pasajeros+" personas en el autobús.");
    }
    // Método para recibir por parametro un conductor y comprobar si viene de la instancia de la clase Conductor.
    asignarConductor(conductor){
        if(conductor instanceof Conductor){ // Comprueba que viene de la instancia de la clase Conductor.
            this.#conductor=conductor; // El conductor pasa a ser el conductor pasado por parámetro.
            console.log(conductor.nombre+" con número de licencia "+conductor.licencia+" ha sido asignado.");
        }else{ // Si no es de la instancia de la clase Conductor se lanza la excepción.
            throw new Error("El conductor recibido no es el correcto, tiene que ser una instancia de Conductor.");
        }
    }
}
class Flota{
    #autobuses;
    constructor(){
        this.#autobuses=[];
    }
    agregarBus(bus){
        if (bus instanceof Bus){
            this.#autobuses.push(bus);
        }else{
            throw new Error("Error al insertar el autobus, comprueba que sea de la instancia de la clase de Bus");
        }
    }
    obtenerDisponibes(){
        let busesDisponibles=this.#autobuses.filter(bus=>bus.pasajeros<bus.capacidad);
        return busesDisponibles;
    }
    hayCompletos(){
        let hayCompletos=this.#autobuses.some(plazasDisponibles=>plazasDisponibles===0);
        return hayCompletos;
    }
    todosConPasajeros(){
        let todosConPasajeros=this.#autobuses.every(bus=>bus.pasajeros>0);
        return todosConPasajeros;
    }
    buscarVacio(){
        let vacio=this.#autobuses.find(bus=>bus.pasajeros===0);
        return vacio;
    }
    totalPasajero(){
        let pasajeros=this.#autobuses.reduce((suma, bus)=>{
            return suma+bus.pasajeros;
        },0);
        return pasajeros;
    }
}

// let conductor1=new Conductor("Jose", 1234);
// let bus101=new Bus(40);
// bus101.asignarConductor(conductor1);
// bus101.subir(25);
// bus101.subir(10);
// bus101.subir(10);
// bus101.bajar(15);
// bus101.bajar(30);


const bus101=new Bus(40);
const bus102 = new Bus(30);
const bus103 = new Bus(50);
const bus104 = new Bus(20);
const bus105 = new Bus(45);

bus101.subir(25);
bus102.subir(30);
bus103.subir(10);
bus104.subir(20);
bus105.subir(35);

const flota = new Flota();

flota.agregarBus(bus101);
flota.agregarBus(bus102);
flota.agregarBus(bus103);
flota.agregarBus(bus104);
flota.agregarBus(bus105);

console.log(flota.obtenerDisponibes());
console.log(flota.hayCompletos());
console.log(flota.todosConPasajeros());
console.log(flota.buscarVacio());
console.log(flota.totalPasajero());

// Carlos Martínez Del Pino.