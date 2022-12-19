"use strict"

// event listener
document.querySelector("add").addEventListener("click", add);
//document.querySelector("reset").addEventListener("click", reset);
//document.querySelector("deletar").addEventListener("click", deletar);
//document.querySelector("play").addEventListener("click", agregar);

// modelo de datos
let nombres = [];

function add() {
    let input = document.querySelector('#nombre')
    let nombre = input.value;

// agrego un elemento
nombres.push(nombre);
console.log(nombres);

// muestro el elemento
mostrar();

// vaciar el imput
input.value = "";
}

function mostrar() {
    let lista = document.querySelector('.listado');
    lista.innerHTML = "";

    for (let elementoActual of nombres) {
    lista.innerHTML += "<li>" + elementoActual + "</li>";
}

}

