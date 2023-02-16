<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <form action="18.php" method="POST">
        <label for="">Introduzca el número de asientos: </label>
        <input type="number" name = "asiento">
        <p>Para reservarlo pulse <input type="submit" value="aquí"></p>
    </form>

    <?php
    $fichero = fopen("asientos.txt", "r");

    $txt = fgetcsv($fichero);
    $txt1 = fgetcsv($fichero);
    $txt2 = fgetcsv($fichero);

    // lo paso a tipo String
    $cadena = implode($txt);
    $cadena1 = implode($txt1);
    $cadena2 = implode($txt2);

    // creo un array y quito los espacios en blanco
    $array = (explode(" ", $cadena));
    $array1 = (explode(" ", $cadena1));
    $array2 = (explode(" ", $cadena2));

    $asientos = array_merge($array , $array1, $array2);
    
    $eleccion = $_POST['asiento'];
    print "Asiento " . $eleccion . " - ";

    if($asientos[$eleccion] == 1){
        print "Asiento ocupado, Intentalo de nuevo...<br>";
    }else{
        print "Gracias por su compra<br>";
        $asientos[$eleccion] = 1;
    }

    foreach($asientos as $valor){
        print $valor . " ";
    }
    
    fclose($fichero);

?>
</body>
</html>
