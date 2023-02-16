let cuenta = new Object()

    cuenta.numeroCuenta= Number(prompt("Número de cuenta= "));
    cuenta.nombreTitular= prompt("Nombre del títular= ");
    cuenta.nacionalidad= prompt("Nacionalidad= ");
    cuenta.dni= prompt("DNI= ");
    cuenta.banco= prompt("Banco= ");
    cuenta.swift= prompt("SWIFT= ");
    cuenta.sucursal= prompt("Sucursal= ");
    cuenta.saldo = 0;
    
cuenta.datosTitular = function(){
    return `Títular: ${cuenta.nombreTitular} <br> DNI: ${cuenta.dni} <br> Nacionalidad: ${cuenta.nacionalidad}`;
}

cuenta.datosBanco = function(){
    return `<br> Banco: ${cuenta.banco} <br> Código SWIFT: ${cuenta.swift}`;
}

let ingreso = Number(prompt("Dinero a ingresar"));

cuenta.ingresar = () =>{
    return `${cuenta.saldo = cuenta.saldo + ingreso} saldo actual`;
}


document.write(cuenta.datosTitular());
document.write(cuenta.datosBanco());
alert(cuenta.ingresar());
