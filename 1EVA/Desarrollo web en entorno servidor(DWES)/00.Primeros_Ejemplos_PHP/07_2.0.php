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

        $cont = 0;
        $contNum1 = 0;
        $contNum2 = 0;
        $contNum3 = 0;

        $error_persona = array(
            1, 2, 3
        );

        for ($i=0; $i < 500 ; $i++) { 
            if($cont % 10 == 0){
                $contNum1++;
                $error_personaAsociativo = array(
                    $error_persona[0] => $contNum1,
                    $error_persona[1] => $contNum2,
                    $error_persona[2] => $contNum3,
                );
            }
            if($cont % 2 != 0){
                $contNum2++;
                $error_personaAsociativo = array(
                    $error_persona[0] => $contNum1,
                    $error_persona[1] => $contNum2,
                    $error_persona[2] => $contNum3,
                );
            }
            if($cont % 3 == 0){
                $contNum3++;
                $error_personaAsociativo = array(
                    $error_persona[0] => $contNum1,
                    $error_persona[1] => $contNum2,
                    $error_persona[2] => $contNum3,
                );
            }
            $cont++;
        }

        foreach($error_personaAsociativo as $valor1 => $valor2){
            print $valor1 . " => " . $valor2 . "<br>";
        }
        
    ?>
</body>
</html>