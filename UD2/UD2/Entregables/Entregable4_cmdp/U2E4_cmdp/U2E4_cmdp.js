let tipoPizza=prompt("¿Quieres una pizza vegetariana?, Escribe Sí o No:");
while(tipoPizza!=="Sí" && tipoPizza!=="No" ){ // Hasta que no escriba, Si o No, hagas lo que hagas va a seguir en el bucle.
     tipoPizza=prompt("¿Quieres una pizza vegetariana?, Escribe Sí o No:");
}
    if(tipoPizza==="Sí"){ //Una vez escribas Sí sale del bucle y entra en esta condición.
        let ingrediente=prompt("Ingredentientes vegeterianos:\n1.Pimiento.\n2.Tofu.");
        while(ingrediente!=="Pimiento" && ingrediente!=="Tofu" && ingrediente !==null){ //Hacemos lo mismo que en el while anterior, pero ahora puedes cancelar, y sale del bucle.
            alert("Introduce bien el ingrediente por favor."); // Lanzamos la alerta de que tiene que elegir el ingrediente correctamente.
            ingrediente=prompt("Ingredentientes vegeterianos:\n1.Pimiento.\n2.Tofu.");
        }
        if (ingrediente==="Pimiento") { // Una vez elegido el ingrediente correctamente sale del bucle.
            alert("Pizza Vegetariana elegida. Ingrendientes:\n1.Pimiento\n2.Tomate\n3.Mozzarella."); 
        }else if(ingrediente==="Tofu"){
            alert("Pizza Vegetariana elegida. Ingrendientes:\n1.Tofu\n2.Tomate\n3.Mozzarella.");
        }
    }else if(tipoPizza==="No"){// Misma lógica que arriba. 
        let ingrediente=prompt("Ingredentientes no vegeterianos:\n1.Pepperoni.\n2.Jamón.\n3.Salmón.");
        while(ingrediente!=="Pepperoni" && ingrediente!=="Jamón" && ingrediente!=="Salmón" && ingrediente !==null){
            alert("Introduce bien el ingrediente por favor.");
            ingrediente=prompt("Ingredentientes no vegeterianos:\n1.Pepperoni.\n2.Jamón.\n3.Salmón.");
        }
        if(ingrediente==="Jamón"){
            alert("Pizza no Vegetariana elegida. Ingrendientes:\n1.Jamón\n2.Tomate\n3.Mozzarella.");
        }else if(ingrediente==="Pepperoni"){
            alert("Pizza no Vegetariana elegida. Ingrendientes:\n1.Pepperoni\n2.Tomate\n3.Mozzarella.");
        }else if(ingrediente==="Salmón"){
            alert("Pizza no Vegetariana elegida. Ingrendientes:\n1.Salmón\n2.Tomate\n3.Mozzarella.");
        }
    }

// Carlos Martínez Del Pino.
