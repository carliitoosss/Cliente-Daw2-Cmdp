let resultado=document.querySelector("#resultado"); // div resultado.
let alumnos=["Carlos","Javi", "Olga"];
let h5=document.querySelector("h5");
h5.textContent="HOLA, MUNDO";
let parrafo=document.createElement("p"); // creo la etiqueta
parrafo.textContent="Hola profesora."; // le añado contenido tipo texto
parrafo.classList.add("rojo")
resultado.append(parrafo); //añado al árbol DOM
let lista=document.createElement("ul");
for (const alumno of alumnos) {
    // let parrafo=document.createElement("p");
    // parrafo.textContent=alumno;
    // parrafo.classList.add("verde");
    // resultado.append(parrafo);

    let elemento_lista=document.createElement("li");
    elemento_lista.textContent=alumno;
    elemento_lista.classList.add("verde");
    lista.append(elemento_lista);
}
resultado.append(lista);

// parrafo.remove();

resultado.replaceChildren();
