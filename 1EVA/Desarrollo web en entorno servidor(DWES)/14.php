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
    $frutas = array("d" => "limón", "a" => "naranja", "b" => "banana", "c" => "manzana");

    function cambiarClave(&$elemento1, $clave, $prefijo)
    {
        $elemento1 = "$prefijo: $elemento1";
    }

    function mostrarNuevaClave($elemento2, $clave)
    {
        echo "$clave. $elemento2<br />\n";
    }

    echo "Antes ...:\n";
    array_walk($frutas, 'mostrarNuevaClave');

    array_walk($frutas, 'cambiarClave', 'fruta');
    echo "... y después:\n";

    array_walk($frutas, 'mostrarNuevaClave');
    ?>
</body>

</html>