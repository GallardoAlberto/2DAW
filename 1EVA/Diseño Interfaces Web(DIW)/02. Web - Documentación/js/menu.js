/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");
let $logo = document.getElementById("logo");
let $logo5 = document.getElementById("logo5");

/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        $nav.style.top = "0px";
        $nav.style.transition = "0.5s";
    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-130px";
        $nav.style.transition = "1.5s";
    }

    console.log(desplazamientoActual);

    /* --actulizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});