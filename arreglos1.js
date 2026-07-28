//Arreglo que almacena edades
let arregloIzquierdo = [];
let arregloDerecho = [];


// Funcion agregarEdad
function agregarEdad() {
    const input = document.getElementById("edad");
    const edad = parseInt(input.value);

    if (isNaN(edad)) {
        alert("Por favor ingrese una edad válida");
        return;
    }

    arregloIzquierdo.push(edad);
    input.value = "";
    pintarArregloIzquierda();
}

// Funcion pintarArregloIzquierda

function pintarArregloIzquierda() {
    const tabla = document.getElementById("tablaIzquierda");
    tabla.innerHTML = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        const fila = "<tr>" +
            "<td>" + arregloIzquierdo[i] + "</td>" +
            "<td>" +
                "<button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button>" +
            "</td>" +
            "<td>" +
                "<button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button>" +
            "</td>" +
        "</tr>";

        tabla.innerHTML += fila;
    }
}

//Funcion eliminarIzquierdo
function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

//Funcion pintarArregloDerecha
function pintarArregloDerecha() {
    const tabla = document.getElementById("tablaDerecha");
    tabla.innerHTML = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        const fila = "<tr>" +
            "<td>" +
                "<button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button>" +
            "</td>" +
            "<td>" + arregloDerecho[i] + "</td>" +
            "<td>" +
                "<button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button>" +
            "</td>" +
        "</tr>";

        tabla.innerHTML += fila;
    }
}

//Funcion eliminarDerecho
function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}

//Funcion moverHaciaDerecha
function moverHaciaDerecha(indice) {
    const valor = arregloIzquierdo[indice];
    arregloDerecho.push(valor);
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

//Funcion moverHaciaIzquierda
function moverHaciaIzquierda(indice) {
    const valor = arregloDerecho[indice];
    arregloIzquierdo.push(valor);
    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

pintarArregloIzquierda();
pintarArregloDerecha();