// Se trata de realizar una página web que permite calcular el sueldo neto de los empleados de una empresa. Los datos de los empleados se van solicitando y se calcula su sueldo neto (sueldo bruto - retención). Una vez calculado el sueldo neto, se visualiza y se pregunta al usuario si desea continuar, finalizando el programa cuando se pulsa el botón Cancel. (2)


// Para realizar estas acciones utilizaremos un objeto (1) con la siguiente estructura:

// Atributos

// identificador: Identifica al empleado.
// nombre: contiene el nombre del empleado.

// bruto: Contiene el sueldo bruto del empleado. Debe ser un número comprendido entre 1500 y 4500. (0,5)

// retencion: Contiene el porcentaje a  descontar del sueldo bruto para obtener el neto. Debe ser un número comprendido entre 2 y 25. (0,5)


// Métodos

// calcularNeto: Calcula y devuelve el sueldo neto. (sueldoNeto=sueldoBruto-sueldoBruto*retencion/100)


// El objeto se creará siguiendo las indicaciones siguientes:


// Se utilizará función constructora en la cuál únicamente  se definirán los atributos identificador y nombre. (2)

// El resto de atributos (bruto y retencion) y el método calcularNeto, se definen modificando el prototipo.(2)

// El método se define mediante una función externa. (2)


let cont = 0;

do{
    class empleado{
        constructor(identificador, nombre) {
            this.identificador = identificador;
            this.nombre = nombre;
        }
    }
    
    empleado.prototype.bruto = Number(prompt("Sueldo bruto del empleado"));
    
    while(empleado.prototype.bruto < 1500 || empleado.prototype.bruto > 4500){
        empleado.prototype.bruto = Number(prompt("Sueldo bruto del empleado(Entre 1500 y 4500"));
    }
    
    empleado.prototype.retencion = Number(prompt("Porcentaje a descontar del sueldo"));
    
    while(empleado.prototype.retencion < 2 || empleado.prototype.retencion > 25){
        empleado.prototype.retencion = Number(prompt("Porcentaje a descontar del sueldo(Entre 2 y 25"));
    }
    
    empleado.prototype.calcularNeto = () =>{
        empleado.neto = empleado.prototype.bruto - empleado.prototype.bruto * empleado.prototype.retencion / 100;
        return alert(empleado.neto);
    }
    
    empleado.prototype.calcularNeto();
    
    empleado.prototype.retencion = empleado.prototype.retencion + "%";

    cont++;
    var nombre = prompt("Nombre");

    var nuevoTrabajador = new empleado(`Identificador - ${cont}`, nombre);

    for (const key in nuevoTrabajador) {
        document.write(nuevoTrabajador[key] + '<br>');
    }
    document.write('<br><br><br>')
    
}while(confirm("Desea continuar: ") == true)


