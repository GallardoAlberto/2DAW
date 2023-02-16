<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $fichero = fopen("13.txt", "r");

    $txt = fgetcsv($fichero);

    // lo paso a tipo String
    $cadena = implode($txt);

    // creo un array y quito los espacios en blanco

    $array = array_filter(explode(" ", $cadena));

    foreach($array as $valor){

        // Si el valor es igual de derecha a izquierda, se sustituye el valor por true
        if($valor == strrev($valor)){
            print substr_replace($valor, "true, ",0 );
        }else{
            print $valor . ", " ;
        }
    }
    fclose($fichero);
    ?>
</body>
</html>