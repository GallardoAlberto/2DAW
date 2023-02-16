function operacion(){
    ope = prompt("Que operación quieres hacer: ");

    while(ope != "sumar" && ope != "restar" && ope != "multiplicar" && ope != "dividir"){
        ope = prompt("operación no válida, intente otra ");
    }

    return ope;

}

function numero(){
    num = Number(prompt("Introduce un número"));
    while(!Number(num)){
        num = Number(prompt("SOLO NÚMEROS"));
    }

    return num;
}

calculo = () =>{
    
    operacion = operacion();

    if(operacion == "sumar"){
        return alert(numero() + numero()) ;
    }

    if(operacion == "restar"){
        return alert(numero() - numero());
    }

    if(operacion == "multiplicar"){
        return alert(numero() * numero());
    }

    if(operacion == "dividir"){
        return alert(numero() / numero());
    }
}

calculo();