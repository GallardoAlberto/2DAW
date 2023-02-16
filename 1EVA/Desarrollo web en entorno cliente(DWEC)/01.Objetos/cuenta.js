let cuenta = {
    numeroCuenta: Number(prompt("Número de cuenta: ")),
    nombreTitular: prompt("Nombre del títular: "),
    nacionalidad: prompt("Nacionalidad: "),
    dni: prompt("DNI: "),
    banco: prompt("Banco: "),
    swift: prompt("SWIFT: "),
    sucursal: prompt("Sucursal: "),
    saldo : 0,

    datosTitular : function(){
        return `Títular: ${cuenta.nombreTitular} <br> DNI: ${cuenta.dni} <br> Nacionalidad: ${cuenta.nacionalidad}`;
    },
    
    datosBanco : function(){
        return `<br> Banco: ${cuenta.banco} <br> Código SWIFT: ${cuenta.swift}`;
    }
}

let ingreso = Number(prompt("Dinero a ingresar"));

cuenta.ingresar = () =>{
    return `${cuenta.saldo = cuenta.saldo + ingreso} saldo actual`;
}


document.write(cuenta.datosTitular());
document.write(cuenta.datosBanco());
alert(cuenta.ingresar());
