<!-- Ejercicio7:
Dado un array tradicional que contiene los números de error que un grupo de personas cometieron ayer o cualquier día. Crea un array asociativo que contenga como clave el error( un nº) y como valor el nº de veces que se repitió.
Consejillo: Esboza en el papel los arrays y lo que vas a hacer con ellos.
Muéstra el array asociativo creado y de paso averigua qué error se repitió más.
Alguna de las funciones que puedes utilizar son:
COUNT(unArray)    devuelve     el nº de elementos que tiene unArray
ARRAY_KEY_EXISTS(unaClaveCualquiera,unArrayAsociativo)         devuelve    true  o false
ARSORT(unArray)   devuelve   unArray ordenado por su valor de mayor a menor y conservando el valor de  las claves
 -->

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio ARRAY ASOCIATIVO</title>
</head>
<body>
    <?php

        $arrayerrores = array(
            1,2,3,1,1,1,1,2,2,3,3,2,3,2,1,1
        );
        $contadorErrores = array_count_values($arrayerrores);

        foreach($contadorErrores as $valor1 => $valor2){
            print $valor1 . " => " . $valor2 . "<br>";
        }

        $cantidad = max($contadorErrores);
        $valor = array_search($cantidad, $contadorErrores);
        print "Mayor número de errores ----". $valor . " => " . $cantidad;

        
    ?>
</body>
</html>