/*let lastScrollTop = 0; // Posición anterior del scroll
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Ocultar el header cuando se baja
        header.style.top = "-8rem"; // Ajusta la altura según tu header
    } else {
        // Mostrar el header cuando se sube
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita que el valor sea negativo
});*/

let menuvis = false;
function mosocMenu(){
    if(menuvis){
        document.getElementById("menu").classList = "";
        menuvis = false;
    }else{
        document.getElementById("menu").classList = "resp";
        menuvis = true;
    }
}
function seleccionar(){
    document.getElementById("menu").classList = "";
    menuvis = false;
}

/* para habilidades dinamicas */
document.addEventListener("DOMContentLoaded", function() {
    const circulos = document.querySelectorAll(".circulo");

    circulos.forEach(function(circulo) {
        const nivel = circulo.getAttribute("data-nivel");
        circulo.style.setProperty("--nivel", nivel * 3.6);  // 3.6 para ajustar 100% a 360 grados
    });
});

/*para descargar CV*/
function downloadFile() {
    const fileUrl = '../documents/PRACTICA.pdf'; // Ruta del archivo en el servidor
    const fileName = 'PRACTICA.pdf'; // Nombre que se usará para descargar el archivo

    // Crear un enlace temporal
    const a = document.createElement('a');
    a.href = fileUrl;

    // Forzar la descarga
    a.download = fileName;

    // Simular el clic en el enlace
    a.click();
}