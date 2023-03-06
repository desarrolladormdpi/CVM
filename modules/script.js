// Variables
// Selecciona el header__h1 mediante el id
const header_h1 = document.getElementById("header__h1");
const header_input = document.getElementById("header__input");

// Acomoda los altos del main__section-historial y main__section-conocimiento al hacer click en el nombre y apellido
function altoEstilo(min_resolucion, max_resolucion, tablet_alto_1, tablet_alto_2, pc_alto_1, pc_alto_2)
{
    // Selecciona el main__section-historial y main__section-conocimiento
    const main_section_historial = document.querySelector("#main__section-historial");
    const main_section_conocimiento = document.querySelector("#main__section-conocimiento");
    // si la resolución de pantalla es pantalla tablet (768 entre 1024)
    if((window.innerWidth >= min_resolucion) & (window.innerWidth < max_resolucion))
    {
        // Agregar top baja al main__section-historial y main__section-conocimiento (Pantalla Tablet)
        main_section_historial.style.top = tablet_alto_1;
        main_section_conocimiento.style.top = tablet_alto_2;
    }
    // Si la resolución es (Pantalla computadora)
    else if(window.innerWidth >= 1024)
    {
        // Agregar top baja al main__section-historial y main__section-conocimiento (Pantalla computadora)
        main_section_historial.style.top = pc_alto_1;
        main_section_conocimiento.style.top = pc_alto_2;
    }
}

// Cuando realizas un click en el header__h1
header_h1.onclick = function()
{
    // Obtener el estilo de un elemento
    obtener_estilo = window.getComputedStyle(header_input).getPropertyValue("display");
    // Selecciona el header__h1 mediante el id
    const enfocar_elemento = document.querySelector("#header__input");
    // Si el estilo que tiene en display es igual a ninguno
    if(obtener_estilo == "none")
    {
        // Mostrar el header__input
        header_input.style.display = "block";

        altoEstilo(768, 1024, "6.15rem", "26.8rem", "5.6rem", "26.2rem");

        // Realiza un enfocar header__input
        enfocar_elemento.focus();
    }
    else
    {
        // Ocultar el header__input
        header_input.style.display = "none";
        // Limpiar el header__input
        header_input.value = "";

        altoEstilo(768, 1024, "3.9rem", "24.5rem", "3.4rem", "23.9rem");
    }
}

// Al apretar la tecla enter
header_input.addEventListener("keyup", function(event)
{
    if((event.key == "Enter"))
    {
        if(validarDatos("#header__input"))
        {
            // Cambia el texto del header__h1 al que ingresaste
            header_h1.innerHTML = header_input.value;
            // Y oculta el header__input
            header_input.style.display = "none";

            altoEstilo(768, 1024, "6.15rem", "26.8rem", "5.6rem", "26.2rem");
            altoEstilo(768, 1024, "3.9rem", "24.5rem", "3.4rem", "23.9rem");
        }
        else
        {
            // Cambia el texto del header__h1
            header_h1.innerHTML = "Campo Vació";
        }
        // Limpia el header__input
        header_input.value = "";
    }
});

// Validar datos del header__input
function validarDatos(elemento)
{
    // Selecciona el header__h1 mediante el id
    const validar_dato = document.querySelector(elemento).value;
    // Si contiene datos retorna un verdadero
    return(!(!validar_dato.trim()));
}

// Utiliza la API matchMedia para el Uso de Media Queries en JavaScript 1
function verificarResolucion(resolucion)
{
    // Si la consulta de medios coincide
    if(resolucion.matches)
    {
        console.log(window.innerWidth);
        console.log("coincidencia");

        header_input.style.display = "none"
        altoEstilo(768, 1024, "6.15rem", "26.8rem", "5.6rem", "26.2rem");
        altoEstilo(768, 1024, "3.9rem", "24.5rem", "3.4rem", "23.9rem");
        // Limpiar el header__input
        header_input.value = "";
    }
}
// Llamar a la función de escucha en tiempo de ejecución
var movil = window.matchMedia("(max-width: 768px)");
var tablet1 = window.matchMedia("(min-width: 768px)");
var tablet2 = window.matchMedia("(max-width: 1024px)");
var computadora = window.matchMedia("(min-width: 1024px)");
// Adjunte la función de escucha en los cambios de estado
movil.addEventListener("change", verificarResolucion);
tablet1.addEventListener("change", verificarResolucion);
tablet2.addEventListener("change", verificarResolucion);
computadora.addEventListener("change", verificarResolucion);