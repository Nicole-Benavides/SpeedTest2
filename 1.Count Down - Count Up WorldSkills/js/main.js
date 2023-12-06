function startCountdown() {

    // Obtenemos referencias a elementos HTML de los que vamos a cambiar atributos o capturar valores
    const contDatos = document.getElementById("datos"); // Contenedor de entrada de datos
    const contCountDown = document.getElementById("count-down"); // Contenedor del contador regresivo
    const campoHabilidad = document.getElementById("habilidad-input");// Campos del formulario
    const campoModulo = document.getElementById("modulo-input");// Campos del formulario
    const campoHoras = document.getElementById("horas-input"); // Campos del formulario
    const campoMinutos = document.getElementById("minutos-input"); // Campos del formulario
    const campoSegundos = document.getElementById("segundos-input"); // Campos del formulario 
    const showHabilidad = document.getElementById("nombre-habilidad"); // Elemento donde mostrar la habilidad
    const showModulo = document.getElementById("nombre-modulo");// Elemento donde mostrar el módulo
    const showHoras = document.getElementById("horas"); // Elemento donde mostrar las horas
    const showMinutos = document.getElementById("minutos"); // Elemento donde mostrar los minutos
    const showSegundos = document.getElementById("segundos"); // Elemento donde mostrar los segundos

    // Obtenemos los valores de entrada para horas, minutos y segundos
    let horas = campoHoras.value;
    let minutos = campoMinutos.value;
    let segundos = campoSegundos.value;

    // Mostramos los valores de habilidad y módulo en sus respectivos elementos
    showHabilidad.textContent  = campoHabilidad.value
    showModulo.textContent  = campoModulo.value

    // Ocultamos el contenedor de entrada de datos y mostra,os el contador regresivo
    contDatos.classList.add("disabled");
    contCountDown.classList.remove("disabled");

    // Iniciar el contador regresivo
    const countdownInterval = setInterval(function() {
        if (horas == 0 && minutos == 0 && segundos == 0) {
            clearInterval(countdownInterval);
            alert("Tiempo agotado");
            // Aquí puedes ejecutamos una acción cuando el contador llegue a cero.
        } else {
            segundos--;

            if (segundos < 0) {
                segundos = 59;
                minutos--;

                if (minutos < 0) {
                    minutos = 59;
                    horas--;

                    if (horas < 0) {
                        horas = 0;
                    }
                }
            }
            
            // Actualizamos los elementos de horas, minutos y segundos con los nuevos valores
            showHoras.textContent = horas.toString().padStart(2, "0");
            showMinutos.textContent = minutos.toString().padStart(2, "0");
            showSegundos.textContent = segundos.toString().padStart(2, "0");
        }
    }, 1000); // Actualiza cada segundo
}

document.getElementById("startButton").addEventListener("click", function() {
    startCountdown();
});
