// Crea una página web que pida al usuario introducir un número (prompt). 
// Un cuadro de diálogo (alert) indicará si realmente era un número o no. (Utilizar Number e isNaN para la comprobación)

let valor = prompt("Introduce un número: ", 0);
console.log("Valor dado por el usuario ", valor);

if (Number(valor)){
    alert("Número");
}
if(isNaN(valor)){
    alert("No es un número");
}
