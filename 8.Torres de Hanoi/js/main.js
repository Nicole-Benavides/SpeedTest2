// Obtener referencias a los elementos
var names = prompt("Por favor ingrese su nombre para empezar a jugar");
const objetos = document.querySelectorAll('.objeto');
const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');
const resultado = document.getElementById('resultado');
var nombre = document.querySelector("#nombre");
var contadorr = document.querySelector(".contador");

// Contador de eventos de arrastre
let contadorArrastre = 0;

// Función para actualizar el contador en el elemento HTML
function actualizarContadorEnHTML() {
    contadorr.innerHTML = `${contadorArrastre} Movimientos`;
}

// Función para verificar si el contenedor final contiene los tres objetos
function verificarContenedorFinal() {
    const contenedorFinal = document.querySelector('.final');
    const elementosContenedorFinal = contenedorFinal.querySelectorAll('.objeto');
    
    // Si el contenedor final contiene los tres objetos, agregar la clase "Activo" al elemento "resultado"
    if (elementosContenedorFinal.length === 3) {
        resultado.classList.add('Activo');
        nombre.innerHTML = names;
    } else {
        resultado.classList.remove('Activo');
    }
}

// Agregar un controlador de eventos para el evento "dragstart" en los objetos
objetos.forEach(objeto => {
    objeto.addEventListener('dragstart', (e) => {
        // Incrementar el contador de eventos de arrastre
        contadorArrastre++;
        
        // Actualizar el contador en el elemento HTML
        actualizarContadorEnHTML();
        
        // Obtener el valor del objeto arrastrado
        const valorObjetoArrastrado = parseInt(objeto.dataset.valor);

        // Obtener el contenedor padre del objeto
        const contenedorPadre = objeto.parentElement;

        // Obtener el primer elemento del contenedor
        const primerElemento = contenedorPadre.querySelector('.objeto');

        // Verificar si el objeto arrastrado es el primer elemento del contenedor
        if (primerElemento === objeto) {
            // Al iniciar el arrastre, almacenar el ID y el valor del objeto en los datos de transferencia
            const objetoId = objeto.id;
            e.dataTransfer.setData('text/plain', objetoId);
            e.dataTransfer.setData('text/valor', valorObjetoArrastrado);
        } else {
            // Cancelar el arrastre si no es el primer elemento del contenedor
            e.preventDefault();
        }
    });
});

// Agregar controladores de eventos para los contenedores (inicial, intermedio y final)
contenedores.forEach(contenedor => {
    // Agregar un controlador de eventos para el evento "dragover" en los contenedores
    contenedor.addEventListener('dragover', (e) => {
        // Prevenir el comportamiento predeterminado para permitir soltar elementos
        e.preventDefault();
    });

    // Agregar un controlador de eventos para el evento "drop" en los contenedores
    contenedor.addEventListener('drop', (e) => {
        // Prevenir el comportamiento predeterminado para evitar que se abra una URL
        e.preventDefault();

        // Obtener el ID y el valor del objeto desde los datos de transferencia
        const objetoId = e.dataTransfer.getData('text/plain');
        const objetoArrastrado = document.getElementById(objetoId);

        // Verificar si el contenedor ya contiene elementos y obtener el valor del primer elemento
        const elementosContenedor = contenedor.querySelectorAll('.objeto');
        const primerElementoValor = elementosContenedor.length > 0 ? parseInt(elementosContenedor[0].dataset.valor) : Infinity;
        const valorObjetoArrastrado = parseInt(e.dataTransfer.getData('text/valor'));

        // Verificar si el movimiento es válido (objeto con valor menor o igual al primer elemento)
        if (valorObjetoArrastrado <= primerElementoValor) {
            // Mover el objeto al contenedor actual antes del primer hijo existente
            contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);

            // Verificar si el contenedor final contiene los tres objetos
            verificarContenedorFinal();
        } else {
            // Mostrar una alerta cuando el movimiento no es válido
            alert('No puedes soltar este elemento en el contenedor, ya que es mayor que el elemento existente.');
        }
    });
});

// Verificar al cargar la página si el contenedor final contiene los tres objetos
verificarContenedorFinal();












// // Obtener referencias a los elementos
// var names = prompt("Por favor ingrese su nombre para empezar a jugar");
// const objetos = document.querySelectorAll('.objeto');
// const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');
// const resultado = document.getElementById('resultado');
// var nombre = document.querySelector("#nombre");
// var contadorr = document.querySelector(".contador");

// // Contador de eventos de arrastre
// let contadorArrastre = 0;

// // Función para mostrar el contador en la consola
// function mostrarContadorEnConsola() {
//     console.log(`Eventos de arrastre: ${contadorArrastre}`);
// }

// // Función para verificar si el contenedor final contiene los tres objetos
// function verificarContenedorFinal() {
//     const contenedorFinal = document.querySelector('.final');
//     const elementosContenedorFinal = contenedorFinal.querySelectorAll('.objeto');
    
//     // Si el contenedor final contiene los tres objetos, agregar la clase "Activo" al elemento "resultado"
//     if (elementosContenedorFinal.length === 3) {
//         resultado.classList.add('Activo');
//         nombre.innerHTML = names;
//     } else {
//         resultado.classList.remove('Activo');
//     }
// }

// // Agregar un controlador de eventos para el evento "dragstart" en los objetos
// objetos.forEach(objeto => {
//     objeto.addEventListener('dragstart', (e) => {
//         // Incrementar el contador de eventos de arrastre
//         contadorArrastre++;
        
//         // Mostrar el contador en la consola
//         mostrarContadorEnConsola();
        
//         // Obtener el valor del objeto arrastrado
//         const valorObjetoArrastrado = parseInt(objeto.dataset.valor);

//         // Obtener el contenedor padre del objeto
//         const contenedorPadre = objeto.parentElement;

//         // Obtener el primer elemento del contenedor
//         const primerElemento = contenedorPadre.querySelector('.objeto');

//         // Verificar si el objeto arrastrado es el primer elemento del contenedor
//         if (primerElemento === objeto) {
//             // Al iniciar el arrastre, almacenar el ID y el valor del objeto en los datos de transferencia
//             const objetoId = objeto.id;
//             e.dataTransfer.setData('text/plain', objetoId);
//             e.dataTransfer.setData('text/valor', valorObjetoArrastrado);
//         } else {
//             // Cancelar el arrastre si no es el primer elemento del contenedor
//             e.preventDefault();
//         }
//     });
// });

// // Agregar controladores de eventos para los contenedores (inicial, intermedio y final)
// contenedores.forEach(contenedor => {
//     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

//     // Agregar un controlador de eventos para el evento "drop" en los contenedores
//     contenedor.addEventListener('drop', (e) => {
//         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
//         e.preventDefault();

//         // Obtener el ID y el valor del objeto desde los datos de transferencia
//         const objetoId = e.dataTransfer.getData('text/plain');
//         const objetoArrastrado = document.getElementById(objetoId);

//         // Verificar si el contenedor ya contiene elementos y obtener el valor del primer elemento
//         const elementosContenedor = contenedor.querySelectorAll('.objeto');
//         const primerElementoValor = elementosContenedor.length > 0 ? parseInt(elementosContenedor[0].dataset.valor) : Infinity;
//         const valorObjetoArrastrado = parseInt(e.dataTransfer.getData('text/valor'));

//         // Verificar si el movimiento es válido (objeto con valor menor o igual al primer elemento)
//         if (valorObjetoArrastrado <= primerElementoValor) {
//             // Mover el objeto al contenedor actual antes del primer hijo existente
//             contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);

//             // Verificar si el contenedor final contiene los tres objetos
//             verificarContenedorFinal();
//         } else {
//             // Mostrar una alerta cuando el movimiento no es válido
//             alert('No puedes soltar este elemento en el contenedor, ya que es mayor que el elemento existente.');
//         }
//     });
// });

// // Verificar al cargar la página si el contenedor final contiene los tres objetos
// verificarContenedorFinal();













// // Obtener referencias a los elementos
// var names = prompt("Por favor ingrese su nombre para empezar a jugar");
// const objetos = document.querySelectorAll('.objeto');
// const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');
// const resultado = document.getElementById('resultado');
// var nombre = document.querySelector("#nombre");

// // Función para verificar si el contenedor final contiene los tres objetos
// function verificarContenedorFinal() {
//     const contenedorFinal = document.querySelector('.final');
//     const elementosContenedorFinal = contenedorFinal.querySelectorAll('.objeto');
    
//     // Si el contenedor final contiene los tres objetos, agregar la clase "Activo" al elemento "resultado"
//     if (elementosContenedorFinal.length === 3) {
//         resultado.classList.add('Activo');
//         nombre.innerHTML = names;
//     } else {
//         resultado.classList.remove('Activo');
//     }
// }

// // Agregar un controlador de eventos para el evento "dragstart" en los objetos
// objetos.forEach(objeto => {
//     objeto.addEventListener('dragstart', (e) => {
//         // Obtener el valor del objeto arrastrado
//         const valorObjetoArrastrado = parseInt(objeto.dataset.valor);

//         // Obtener el contenedor padre del objeto
//         const contenedorPadre = objeto.parentElement;

//         // Obtener el primer elemento del contenedor
//         const primerElemento = contenedorPadre.querySelector('.objeto');

//         // Verificar si el objeto arrastrado es el primer elemento del contenedor
//         if (primerElemento === objeto) {
//             // Al iniciar el arrastre, almacenar el ID y el valor del objeto en los datos de transferencia
//             const objetoId = objeto.id;
//             e.dataTransfer.setData('text/plain', objetoId);
//             e.dataTransfer.setData('text/valor', valorObjetoArrastrado);
//         } else {
//             // Cancelar el arrastre si no es el primer elemento del contenedor
//             e.preventDefault();
//         }
//     });
// });

// // Agregar controladores de eventos para los contenedores (inicial, intermedio y final)
// contenedores.forEach(contenedor => {
//     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

//     // Agregar un controlador de eventos para el evento "drop" en los contenedores
//     contenedor.addEventListener('drop', (e) => {
//         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
//         e.preventDefault();

//         // Obtener el ID y el valor del objeto desde los datos de transferencia
//         const objetoId = e.dataTransfer.getData('text/plain');
//         const objetoArrastrado = document.getElementById(objetoId);

//         // Verificar si el contenedor ya contiene elementos y obtener el valor del primer elemento
//         const elementosContenedor = contenedor.querySelectorAll('.objeto');
//         const primerElementoValor = elementosContenedor.length > 0 ? parseInt(elementosContenedor[0].dataset.valor) : Infinity;
//         const valorObjetoArrastrado = parseInt(e.dataTransfer.getData('text/valor'));

//         // Verificar si el movimiento es válido (objeto con valor menor o igual al primer elemento)
//         if (valorObjetoArrastrado <= primerElementoValor) {
//             // Mover el objeto al contenedor actual antes del primer hijo existente
//             contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);

//             // Verificar si el contenedor final contiene los tres objetos
//             verificarContenedorFinal();
//         } else {
//             // Mostrar una alerta cuando el movimiento no es válido
//             alert('No puedes soltar este elemento en el contenedor, ya que es mayor que el elemento existente.');
//         }
//     });
// });

// // Verificar al cargar la página si el contenedor final contiene los tres objetos
// verificarContenedorFinal();
























// Obtener referencias a los elementos
// const objetos = document.querySelectorAll('.objeto');
// const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');

// // Agregar un controlador de eventos para el evento "dragstart" en los objetos
// objetos.forEach(objeto => {
//     objeto.addEventListener('dragstart', (e) => {
//         // Obtener el valor del objeto arrastrado
//         const valorObjetoArrastrado = parseInt(objeto.dataset.valor);

//         // Obtener el contenedor padre del objeto
//         const contenedorPadre = objeto.parentElement;

//         // Obtener el primer elemento del contenedor
//         const primerElemento = contenedorPadre.querySelector('.objeto');

//         // Verificar si el objeto arrastrado es el primer elemento del contenedor
//         if (primerElemento === objeto) {
//             // Al iniciar el arrastre, almacenar el ID y el valor del objeto en los datos de transferencia
//             const objetoId = objeto.id;
//             e.dataTransfer.setData('text/plain', objetoId);
//             e.dataTransfer.setData('text/valor', valorObjetoArrastrado);
//         } else {
//             // Cancelar el arrastre si no es el primer elemento del contenedor
//             e.preventDefault();
//         }
//     });
// });

// // Agregar controladores de eventos para los contenedores (inicial, intermedio y final)
// contenedores.forEach(contenedor => {
//     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

//     // Agregar un controlador de eventos para el evento "drop" en los contenedores
//     contenedor.addEventListener('drop', (e) => {
//         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
//         e.preventDefault();

//         // Obtener el ID y el valor del objeto desde los datos de transferencia
//         const objetoId = e.dataTransfer.getData('text/plain');
//         const objetoArrastrado = document.getElementById(objetoId);

//         // Verificar si el contenedor ya contiene elementos y obtener el valor del primer elemento
//         const elementosContenedor = contenedor.querySelectorAll('.objeto');
//         const primerElementoValor = elementosContenedor.length > 0 ? parseInt(elementosContenedor[0].dataset.valor) : Infinity;
//         const valorObjetoArrastrado = parseInt(e.dataTransfer.getData('text/valor'));

//         // Verificar si el movimiento es válido (objeto con valor menor o igual al primer elemento)
//         if (valorObjetoArrastrado <= primerElementoValor) {
//             // Mover el objeto al contenedor actual antes del primer hijo existente
//             contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);
//         } else {
//             // Mostrar una alerta cuando el movimiento no es válido
//             alert('No puedes soltar este elemento en el contenedor, ya que es mayor que el elemento existente.');
//         }
//     });
// });


















// // Obtener referencias a los elementos
// const objetos = document.querySelectorAll('.objeto');
// const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');

// // Agregar un controlador de eventos para el evento "dragstart" en los objetos
// objetos.forEach(objeto => {
//     objeto.addEventListener('dragstart', (e) => {
//         // Al iniciar el arrastre, almacenar el ID y el valor del objeto en los datos de transferencia
//         const objetoId = objeto.id;
//         const valorObjeto = objeto.dataset.valor;
//         e.dataTransfer.setData('text/plain', objetoId);
//         e.dataTransfer.setData('text/valor', valorObjeto);
//     });
// });

// // Agregar un controlador de eventos para el evento "dragover" en los contenedores
// contenedores.forEach(contenedor => {
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

//     // Agregar un controlador de eventos para el evento "drop" en los contenedores
//     contenedor.addEventListener('drop', (e) => {
//         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
//         e.preventDefault();

//         // Obtener el ID y el valor del objeto desde los datos de transferencia
//         const objetoId = e.dataTransfer.getData('text/plain');
//         const valorObjeto = parseInt(e.dataTransfer.getData('text/valor'));

//         // Verificar si el contenedor ya contiene elementos y obtener el valor del primer elemento
//         const elementosContenedor = contenedor.querySelectorAll('.objeto');
//         const primerElementoValor = elementosContenedor.length > 0 ? parseInt(elementosContenedor[0].dataset.valor) : Infinity;

//         // Verificar si el movimiento es válido (objeto con valor menor o igual al primer elemento)
//         if (valorObjeto <= primerElementoValor) {
//             // Mover el objeto al contenedor actual antes del primer hijo existente
//             const objetoArrastrado = document.getElementById(objetoId);
//             contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);
//         } else {
//             // Mostrar una alerta cuando el movimiento no es válido
//             alert('No puedes soltar este elemento en el contenedor, ya que es mayor que el elemento existente.');
//         }
//     });
// });
















// // Obtener referencias a los elementos
// const objetos = document.querySelectorAll('.objeto');
// const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');

// // Agregar un controlador de eventos para el evento "dragstart" en los objetos
// objetos.forEach(objeto => {
//     objeto.addEventListener('dragstart', (e) => {
//         // Al iniciar el arrastre, almacenar el ID y el valor del objeto en los datos de transferencia
//         const objetoId = objeto.id;
//         const valorObjeto = objeto.dataset.valor;
//         e.dataTransfer.setData('text/plain', objetoId);
//         e.dataTransfer.setData('text/valor', valorObjeto);
//     });
// });

// // Agregar controladores de eventos para los contenedores (inicial, intermedio y final)
// contenedores.forEach(contenedor => {
//     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

// // Agregar un controlador de eventos para el evento "drop" en los contenedores
// contenedores.forEach(contenedor => {
//     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

//     // Agregar un controlador de eventos para el evento "drop" en los contenedores
//     contenedor.addEventListener('drop', (e) => {
//         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
//         e.preventDefault();

//         // Obtener el ID y el valor del objeto desde los datos de transferencia
//         const objetoId = e.dataTransfer.getData('text/plain');
//         const valorObjeto = parseInt(e.dataTransfer.getData('text/valor'));

//         // Verificar si el contenedor ya contiene elementos y obtener el valor del primer elemento
//         const elementosContenedor = contenedor.querySelectorAll('.objeto');
//         const primerElementoValor = elementosContenedor.length > 0 ? parseInt(elementosContenedor[0].dataset.valor) : Infinity;

//         // Verificar si el movimiento es válido (objeto con valor menor o igual al primer elemento)
//         if (valorObjeto <= primerElementoValor) {
//             // Mover el objeto al contenedor actual antes del primer hijo existente
//             const objetoArrastrado = document.getElementById(objetoId);
//             contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);
//         } else {
//             // Mostrar una alerta cuando el movimiento no es válido
//             alert('No puedes soltar este elemento en el contenedor, ya que es mayor que el elemento existente.');
//         }
//     });
// });
// });













//      // Obtener referencias a los elementos
//      const objetos = document.querySelectorAll('.objeto');
//      const contenedores = document.querySelectorAll('.inicial, .intermedio, .final');
 
//      // Agregar un controlador de eventos para el evento "dragstart" en los objetos
//      objetos.forEach(objeto => {objeto.addEventListener('dragstart', (e) => {
//              // Al iniciar el arrastre, almacenar el ID del objeto en los datos de transferencia
//              e.dataTransfer.setData('text/plain', objeto.id);
//          });
//      });
 
//      // Agregar controladores de eventos para los contenedores (inicial, intermedio y final)
// contenedores.forEach(contenedor => {
//     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
//     contenedor.addEventListener('dragover', (e) => {
//         // Prevenir el comportamiento predeterminado para permitir soltar elementos
//         e.preventDefault();
//     });

//     // Agregar un controlador de eventos para el evento "drop" en los contenedores
//     contenedor.addEventListener('drop', (e) => {
//         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
//         e.preventDefault();

//         // Obtener el ID del objeto desde los datos de transferencia
//         const objetoId = e.dataTransfer.getData('text/plain');

//         // Mover el objeto al contenedor actual antes del primer hijo existente
//         const objetoArrastrado = document.getElementById(objetoId);
//         contenedor.insertBefore(objetoArrastrado, contenedor.firstChild);
//     });
// });
    
















     
    
    // // Obtener una referencia al elemento objeto
    // const objeto = document.getElementById('objeto1');

    // // Agregar un controlador de eventos para el evento "dragstart" en el objeto
    // objeto.addEventListener('dragstart', (e) => {
    //     // Al iniciar el arrastre, almacenar el ID del objeto en los datos de transferencia
    //     e.dataTransfer.setData('text/plain', objeto.id);
    // });

    // // Agregar controladores de eventos para los contenedores (inicial y final)
    // const contenedores = document.querySelectorAll('.inicial, .final, .intermedio');
    
    // contenedores.forEach((contenedor) => {
    //     // Agregar un controlador de eventos para el evento "dragover" en los contenedores
    //     contenedor.addEventListener('dragover', (e) => {
    //         // Prevenir el comportamiento predeterminado para permitir soltar elementos
    //         e.preventDefault();
    //     });

    //     // Agregar un controlador de eventos para el evento "drop" en los contenedores
    //     contenedor.addEventListener('drop', (e) => {
    //         // Prevenir el comportamiento predeterminado para evitar que se abra una URL
    //         e.preventDefault();
            
    //         // Obtener el ID del objeto desde los datos de transferencia
    //         const objetoId = e.dataTransfer.getData('text/plain');
            
    //         // Mover el objeto al contenedor actual
    //         const objetoArrastrado = document.getElementById(objetoId);
    //         contenedor.appendChild(objetoArrastrado);
    //     });
    // });