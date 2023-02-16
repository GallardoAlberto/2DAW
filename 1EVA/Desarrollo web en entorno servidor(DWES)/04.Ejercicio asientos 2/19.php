<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <form action="index.php" method="POST">
        <label for="">Introduzca el número de asientos: </label>
        <input type="number" name = "asiento">
        <p>Para reservarlo pulse <input type="submit" value="aquí"></p>
    </form>
    <?php
    $fichero = fopen("asientos.txt", "r+");

    // lee la primera posicion del fichero y la convierte a un numero
    $numero_asientos = intval(fread($fichero, 1));

    // si el numero de asientos libres es mayor a 0 empezara a ejecutarse
    if($numero_asientos > 0){
        // posiciona el cursor donde el usuario marca el asiento
        fseek($fichero, $_POST['asiento']);
        // si esa posicion es 0 esta ocupado
        if(intval(fread($fichero, 1)) > 0){
            print "Asiento ocupado";
        }else{
            // sino se posiciona donde a pasado el usuario
            fseek($fichero, $_POST['asiento']);
            // escribe un uno en la posicion que se encuentra el fichero.
            fwrite($fichero, "1", 1);
            // vuelve al principio
            rewind($fichero);
            // modifica el numero de asientos libres que hay
            fwrite($fichero, strval($numero_asientos-1),1);
            print "Asiento reservado";
            
        }

    }

    fclose($fichero);
?>

</body>
</html>
