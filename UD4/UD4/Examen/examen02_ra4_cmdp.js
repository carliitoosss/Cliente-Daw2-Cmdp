class Pelicula{
    // Inicializamos con atributos privados.
    #codigo;
    #genero;
    #titulo;
    #anio;
    #edadMinima;
    constructor(codigo, genero, titulo, anio, edadMinima){ // Constructor para inicializar la clase.
        this.#codigo=codigo;
        this.#genero=genero;
        this.#titulo=titulo;
        this.#anio=anio;
        this.edadMinima=edadMinima; // Sin # si no se salta el getter
    }
    // Metodos get y set.
    get codigo(){
        return this.#codigo;
    }
    get genero(){
        return this.#genero;
    }
    get titulo(){
        return this.#titulo;
    }
    get anio(){
        return this.#anio;
    }
    get edadMinima(){
        return this.#edadMinima;
    }
    set edadMinima(edadMinima){
        if(edadMinima>=0&&edadMinima<=18){ // Comprueba si está comprendida en el rango establecido 
            this.#edadMinima=edadMinima;
        }else{
            throw new Error("La edad introducida no esta en el rango establecido.")
        }
    }
    //Método mostrar información.
    mostrarInfo(){
        console.log("Pelicula "+this.#titulo+"-"+this.#genero+"("+this.#anio+") para todo publico mayor a "+ this.#edadMinima + " años con código "+ this.#codigo)
    }
    //Método para saber si es antigua.
    esAntigua(){
        let fechaActual=new Date(); // Cogemos la fecha actual
        let anioActual=fechaActual.getFullYear();
        let diferencia=anioActual-this.#anio;
        if(diferencia>20){
            return true;
        }else{
            return false;
        }
    }
    // Método para saber si es mayor de 16 o no la peli.
    esParaAdultos(){
        if(this.#edadMinima>=16){
            return true;
        }else{
            return false;
        }
    }
}
class Espectador{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
        this.peliculaReservada=null;
    }
    // Comprueba si la pelicula por parametro es de la clase pelicula.
    reservarPelicula(pelicula){
        if(pelicula instanceof Pelicula){
            this.peliculaReservada=pelicula; // pelicula reservada pasa a ser la pelicula pasada por parametro.
        }else{
            throw new Error("La pelicula pasada no pertenece a la instancia de la clase Pelicula");
        }
    }
    // Comprueba si puede ver o no una pelicula, dependiendo de si esta reservada o no cumple con la edad mínima.
    puedeVer(){
        if(this.peliculaReservada!==null && this.edad>=this.peliculaReservada.edadMinima){
            return true;
        }else{
            return false;
        }
    }
    // Muestra resumen del espectador
    mostrarResumen(){
        let resultado;
        if(this.peliculaReservada!==null){
            resultado=" con " + this.peliculaReservada.mostrarInfo();
        }else{
            resultado=" sin película reservada"
        }
        let resumen=this.nombre+" con "+this.edad+" años"+resultado;
        return resumen;   
    }
}
class Cartelera{
    constructor(){
        this.peliculas=[];
    }
    // Agrega una peliucla pasada por parámetro al array peliculas.
    agregarPelicula(pelicula){
        if(pelicula instanceof Pelicula){
            this.peliculas.push(pelicula);
        }else{
            throw new Error("La pelicula pasada no pertenece a la instancia de la clase Pelicula");
        }
    }
    // Muestra peliculas que hay en el array.
    mostrarCartelera(){
        for (const pelicula of this.peliculas) {
            pelicula.mostrarInfo();
        }
    }
    // Busca las peliculas que le pasen dependiendo la edad.
    peliculasPoredad(minEdad){
        let peliculasPoredad=this.peliculas.filter(pelis=>pelis.edadMinima>=minEdad);
        return peliculasPoredad;
    }
    // Busca pelicula por codigo.
    buscarPelicula(codigo){
        let peliculaEncontrada=this.peliculas.find(pelis=>pelis.codigo===codigo);
        return peliculaEncontrada;
    }
    // Elimina pelicula por código
    eliminarPelicula(codigo){
        for (const peli of this.peliculas) {
            let booleano=this.peliculas.some(peli=>peli.codigo===codigo);
            let posicion=this.peliculas.indexOf(peli=>peli.codigo===codigo)
            if(booleano===true){
                let peliculasEliminadas=this.peliculas.splice(posicion,1);
                console.log(peliculasEliminadas);
            }else{
                return false;
            }
        }
    }
}
let p1=new Pelicula("PL101", "Ciencia ficción", "Matrix", 1999, 13);
let p2=new Pelicula("PL102", "Terror", "La noche oscura", 2022, 18);
let p3=new Pelicula("PL103", "Comedia", "Un verano loco", 2019, 7);

let e1= new Espectador("Ana García", 20);
let e2= new Espectador("Luis Pérez", 15);

let cartelera= new Cartelera();
console.log("Agregando peliculas.");
console.log(" ");
cartelera.agregarPelicula(p1);
cartelera.agregarPelicula(p2);
cartelera.agregarPelicula(p3);
console.log(" ");
console.log("Reservando peliculas.");
console.log(" ");
e2.reservarPelicula(p2);
e1.reservarPelicula(p1);
console.log(" ");
console.log("Mostrando cartelera de todas las peliculas añadidas.");
console.log(" ");
cartelera.mostrarCartelera();
console.log(" ");
console.log("Mostrando resumen de los espectadores.");
console.log(" ");
e1.mostrarResumen();
e2.mostrarResumen();
console.log(" ");
console.log("Listando peliculas mayores de 16");
let pelisAdultos=cartelera.peliculasPoredad(16);
pelisAdultos.forEach(peli => {
    peli.mostrarInfo();
});
console.log(" ");
console.log("Buscando películas según su código.");
console.log(" ");
console.log(cartelera.buscarPelicula("PL101"));
console.log(cartelera.buscarPelicula("PL109"));
console.log(" ");
console.log("Eliminando película con código.");
console.log(" ");
cartelera.eliminarPelicula("PL103");
console.log(" ");
console.log("Mostrando cartelera de nuevo.");
console.log(" ");
cartelera.mostrarCartelera();
console.log(" ");
console.log("Mostrando si son antiguas o no.");
console.log(" ");
console.log(p1.esAntigua());
console.log(p2.esAntigua());
console.log(p3.esAntigua());
console.log(" ");
console.log("Mostrando si son para adultos o no.");
console.log(" ");
console.log(p1.esParaAdultos());
console.log(p2.esParaAdultos());
console.log(p3.esParaAdultos());
console.log(" ");
console.log("Validando la edad mínima");
p2.edadMinima=19;