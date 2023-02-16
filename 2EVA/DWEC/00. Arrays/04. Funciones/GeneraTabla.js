function crearTabla(columnas = 10, filas = 4, color = "black"){
    document.write(`
    
    <style>
        table{
            width: 100%;
            border-collapse : collapse;
        }

    </style>

    <table>`);

    for (let i = 0; i < columnas; i++) {
        document.write(`<tr>`);
        for (let j = 0; j < filas; j++) {
            document.write(`<td style="border: 1px solid ${color}">
            
            </td>`);
        }
        document.write(`</tr>`);
    }

    document.write(`</table>`);
    document.write(`<br><br>`);

}

document.write

crearTabla();
crearTabla(20, 10);
crearTabla(10, 5, "green");


