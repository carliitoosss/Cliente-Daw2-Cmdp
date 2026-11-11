class Alumno{
    #nombre; // Propiedad privada.
    #nota;
    constructor(nombre, nota){
        this.#nombre=nombre;
        this.#nota=nota;
    }
    get nombre(){
        return this.#nombre;
    }
    get nota(){
        return this.#nota;
    }
    set nombre(nombre){
        this.#nombre=nombre;
    }
    set nota(nota){
        if(nota>=0 && nota<=10){
            this.#nota=nota;
        }else{
            throw new Error("Valor no válido.");
        }
    }
    saludar(){
        console.log("Hola soy el alumno: ", this.nombre);
    }
}
class Grupo{
    constructor(nombre){
        this.nombre=nombre;
        this.alumnos=[];
    }
    agregarAlumno(alumno){
        this.alumnos.push(alumno);
    }
}
let alumno1=new Alumno("Martín", 4);
let alumno2= new Alumno("Alicia",8);
let alumnos=[];
alumnos.push(alumno1);
alumnos.push(alumno2);
console.log(alumnos);
let aprobados=alumnos.filter(alumno=>alumno.nota>=5);
let hayAprobados=alumnos.find(alumno=>alumno.nota>=5);
console.log(hayAprobados);
// let hayAprobados=alumnos.some(alumno=>alumno.nota>=); otra manera de hacerlo.
let todosAprobados=alumno.every(alumno=>alumno.nota>=5);


// let Alumno2=new Alumno(3,"perro");
// console.log(Alumno2.nombre);
// console.log(Alumno2.nota);