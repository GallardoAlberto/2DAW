let persona = new Object();
persona.altura = 160;
persona.peso = 55;
persona.sexo = "F";
persona.calcular = () =>{
    let operacion = persona.peso / Math.pow(persona.altura,2)*10000;
    cadena = "Su IMC es: "
    operacion = operacion.toFixed(2);
    console.log(cadena + operacion);
    return operacion;
}

persona.comprobar = comprobar();

function comprobar(){
    if(persona.sexo == "F"){
        if(persona.calcular() <= 24){
            console.log("Su IMC no supera el recomendable, no debe ir al médico.");
        }else{
            console.log("Su IMC supera el recomendable, debe ir al médico.");
        }
    }
    if(persona.sexo == "M"){
        if(persona.calcular() <= 25){
            console.log("Su IMC no supera el recomendable, no debe ir al médico.");
        }else{
            console.log("Su IMC supera el recomendable, debe ir al médico.");
        }
    }
}
