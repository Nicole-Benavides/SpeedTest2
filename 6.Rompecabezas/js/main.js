// Obtener todos los botones dentro de elementos con la clase "piezas"
const botones = document.querySelectorAll('.piezas button');

// Configurar eventos de arrastrar para los botones
botones.forEach(boton => {
    // Al iniciar el arrastre, establecer el ID del botón como dato de arrastre
    boton.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', boton.id);
    });
});

// Obtener todos los contenedores con la clase "piezas-r"
const contenedores = document.querySelectorAll('.piezas-r');

// Configurar eventos de arrastrar y soltar para los contenedores
contenedores.forEach(cont => {
    // Prevenir el comportamiento predeterminado de arrastrar y soltar
    cont.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Al soltar un botón en un contenedor
    cont.addEventListener('drop', (e) => {
        e.preventDefault();
        const botonId = e.dataTransfer.getData('text/plain');
        const boton = document.getElementById(botonId);

        // Verificar si el contenedor es el correcto antes de agregar el botón
        if (cont.id === `cont-${botonId.split('boton')[1]}`) {
            cont.appendChild(boton);

            // Verificar si todos los botones están en los contenedores después de soltar un botón
            verificarJuegoTerminado();
        }
    });
});

// Función para verificar si todos los botones están en los contenedores
function verificarJuegoTerminado() {
    // Obtener todos los contenedores con la clase "piezas-r"
    const contenedores = document.querySelectorAll('.piezas-r');
    let todosContienenBoton = true;

    // Verificar si algún contenedor no contiene un botón
    contenedores.forEach(cont => {
        if (cont.children.length === 0) {
            todosContienenBoton = false;
            return; // Salir del bucle si uno de los contenedores no contiene un botón
        }
    });

    // Mostrar una alerta si todos los contenedores contienen botones
    if (todosContienenBoton) {
        alert('¡Juego terminado!');
    }
}

// Cuando el documento HTML se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los contenedores con la clase "piezas"
    const piezasContainers = document.querySelectorAll(".piezas");
    
    // Obtener todos los botones dentro de elementos con la clase "piezas"
    const botones = document.querySelectorAll(".piezas button");

    // Obtener una lista de botones en orden aleatorio
    const botonesAleatorios = Array.from(botones).sort(() => Math.random() - 0.5);

    // Iterar sobre los contenedores y asignar un botón aleatorio a cada uno
    piezasContainers.forEach((container, index) => {
        const botonAleatorio = botonesAleatorios[index];
        container.appendChild(botonAleatorio);
    });
});
