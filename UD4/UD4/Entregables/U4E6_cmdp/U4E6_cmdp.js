class Bandeja{
    #tipo
    #cantidad
    #variedad
    constructor(tipo, variedad, cantidad){
        this.#tipo= tipo;
        this.#variedad = variedad;
        this.#cantidad = cantidad;
    }    

    get tipo(){
        return this.#tipo;
    }

    get variedad(){
        return this.#variedad;
    }

    get cantidad(){
        return this.#cantidad;
    }

    restar(cantidad){
        if (this.#cantidad>=cantidad) {
            this.#cantidad=this.#cantidad-cantidad;
            return 0;
        }else{
            let faltan= cantidad - this.#cantidad;
            this.#cantidad=0;
            return faltan;
        }
    }
    reponer(cantidad){
        const capacidadBandeja = 50;
        if((this.#cantidad + cantidad)<=capacidadBandeja){
           this.#cantidad = this.#cantidad + cantidad;
           return 0;
        }else {
            this.#cantidad = capacidadBandeja;
            let sobra = this.#cantidad + cantidad - capacidadBandeja;
            return sobra;
        }
    }

    toString(){
        return "Bandeja de " + this.#cantidad + " " + this.#tipo + " de " + this.#variedad;
    }

}

let bandeja1 = new Bandeja ("Caracolas", "Crema", 15);
let bandeja2 = new Bandeja ("Tocino", "Con Azúcar", 10);
let bandeja3 = new Bandeja ("Riñoncitos", "Chocolate Negro", 15);

// console.log(bandeja1.toString());
// console.log(bandeja2.toString());
// console.log(bandeja3.toString());

class LaPlata{
    #mostrador
    constructor(){
        this.#mostrador = [];
    }
    get mostrador(){
       return this.#mostrador;
    }
    ponerBandejaEnMostrador(bandeja){
        let existe = this.#mostrador.find(b => b.variedad === bandeja.variedad && b.tipo === bandeja.tipo);
        if (existe === undefined) {
            this.#mostrador.push(bandeja);
            return true;
        }
        return false;
    }

    venderPasteles(tipo, variedad, cantidad) {
     let bandeja = this.#mostrador.find(bandeja => bandeja.tipo === tipo && bandeja.variedad === variedad);

        if(bandeja !== undefined) {
            let resultado = bandeja.restar(cantidad);
            if(resultado === 0){
                return cantidad;
            }else{
                return cantidad - resultado;
            }
            
        } else {
            return 0;
        }

    }

    visualizarMostrador(){
        for (const bandeja of this.#mostrador) {
            console.log(bandeja.toString());
        }
    }
}

function completarMostrador(confiteria){
   for (const bandeja of confiteria.mostrador) {
        bandeja.reponer(50 - bandeja.cantidad);
   }
}

let confiteria = new LaPlata();
confiteria.ponerBandejaEnMostrador(bandeja1);
confiteria.ponerBandejaEnMostrador(bandeja2);
confiteria.ponerBandejaEnMostrador(bandeja3);
// confiteria.visualizarMostrador();
// bandeja1.reponer(15);
// confiteria.visualizarMostrador();
// bandeja1.reponer(30);
// confiteria.visualizarMostrador();

// console.log(confiteria.venderPasteles("Caracolas", "Crema", 2));

// confiteria.visualizarMostrador();

console.log(confiteria.venderPasteles("Caracolas", "Crema", 60));

confiteria.visualizarMostrador();
bandeja1.reponer(20);
console.log(confiteria.venderPasteles("Caracolas","Crema",5));
confiteria.visualizarMostrador();

completarMostrador(confiteria);
confiteria.visualizarMostrador();