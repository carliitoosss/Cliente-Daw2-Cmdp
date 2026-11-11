class Socio{
    constructor(numSocio, dni, nombre, apellidos, fechaNac, localidad){
        this.numSocio=numSocio;
        this.dni=dni;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.fechaNac=fechaNac;
        this.localidad=localidad;
    }
    modificarLocalidad(nuevaLocalidad){
        this.localidad=nuevaLocalidad;
    }
    obtenerCategoria(){
        let fechaActual=new Date();
        let anioFechaActual= fechaActual.getFullYear();
        let anioFechaNac=this.fechaNac.getFullYear();
        let edad = anioFechaActual-anioFechaNac;

        let categoria="";

        if(edad>=8&&edad<=9){
            categoria="Benjamín";
        }else if (edad>=10&&edad<=11) {
            categoria="Alevín";
        } else if (edad>=12&&edad<=13){
            categoria="Infantil";
        }else{
            categoria="Sin categoría";
        }
        return categoria;
    }
    mostrarInformacion(){
        console.log("Numero de Socio: "+this.numSocio+"\nDNI: "+this.dni+"\nNombre: "+this.nombre+"\nApellidos: "+this.apellidos+"\nFecha Nacimiento: "+this.fechaNac+"\nLocalidad: "+this.localidad+"\nCategoría: "+this.obtenerCategoria()+"\n");
    }
}
const socios = [];

function altaSocio(numero,dni,nombre,apellidos,fechaNac,localidad){
    let socio=new Socio(numero,dni,nombre,apellidos,new Date(fechaNac),localidad);
    socios.push(socio);
}
function mostrarSocio(){
    for (const socio of socios) {
        socio.mostrarInformacion();
    }
}
function buscarSocio(dni){
    let socioBuscado=socios.find(socio=>socio.dni===dni);
    return socioBuscado;
}
function buscarPorLocalidad(localidad){
    let localidadBuscada=socios.filter(socio=>socio.localidad===localidad);
    for (const socio of localidadBuscada) {
        socio.mostrarInformacion();
    }
    return localidadBuscada;
}
altaSocio(1,"11111111A","Saúl","Rodríguez Varilla","2014-8-22","Bollullos");
altaSocio(2,"22222222B","Paco","Navarro alés","2018-2-26","Bollullos");
altaSocio(3,"33333333C","Mario","Jurado de la Mota","2007-3-22","Bormujos");
altaSocio(4,"44444444D","Carlos","Martínez del Pino","2007-2-11","Umbrete");
altaSocio(5,"55555555E","David","Reyes","2016-5-16","Villanueva");
console.log("Mostrando todos los socios del club.");
mostrarSocio();
console.log("Modificando localidad a un socio.");
socios[1].modificarLocalidad("Ginés");//Al socio que este en la posición 1 del array cambia localidad.
socios[1].mostrarInformacion(); //Muestra la información del socio modificado.
console.log("Mostrando un socio en específico por su dni.");
let socioBuscadoGlobal=buscarSocio("44444444D");
socioBuscadoGlobal.mostrarInformacion();
// let socioBuscadoGlobal2=buscarSocio("44444444F");
// socioBuscadoGlobal2.mostrarInformacion(); Error de busqueda por DNI.
console.log("Mostrando todos los socios de una misma localidad.");
buscarPorLocalidad("Bollullos");
// buscarPorLocalidad("Sevilla";) Error de busqueda por localidad.

//Carlos Martínez Del Pino.