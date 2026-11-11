class Videojuego{
    constructor(nombre, plataforma, horasJugadas){
        this.nombre=nombre;
        this.plataforma=plataforma;
        this.horasJugadas=horasJugadas;
    }
    mostrarInformacion(nombre,plataforma,horasJugadas) {
        console.log("Titulo: "+this.nombre+", Plataforma: "+this.plataforma+", Horas jugadas: "+this.horasJugadas);    
    }
    jugar(horas){
        this.horasJugadas=this.horasJugadas+horas;
    }
    cambiarPlataforma(nuevaPlataforma){
        this.plataforma=nuevaPlataforma;
    }
}

let Videojuego1=new Videojuego("Uncharted4:El Legado Perdido", "PlayStation", 67);
let Videojuego2=new Videojuego("The Last of Fust", "PlayStation", 120);
Videojuego1.mostrarInformacion();
Videojuego2.mostrarInformacion();
Videojuego1.jugar(20);
Videojuego2.cambiarPlataforma("Steam");
Videojuego1.mostrarInformacion();
Videojuego2.mostrarInformacion();

class Disco{
    constructor(){
        this.nombre="";
        this.artsta="";
        this.anio=0;
        this.tipo="";
        this.localizacion=0;
        this.prestado=false;
    }
}