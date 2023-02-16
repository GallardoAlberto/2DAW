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

        $gastosTrim1 = array(
            "comida" => 300,
            "luz" => 120,
            "agua" => 80,
            "alquiler" => 600,
            "ocio" => 150
        );

        $gastosTrim2 = array(
            "comida" => 330,
            "luz" => 100,
            "agua" => 90,
            "alquiler" => 600,
            "ocio" => 120
        );

        $gastosTrim3 = array(
            "comida" => 290,
            "luz" => 125,
            "agua" => 85,
            "alquiler" => 600,
            "ocio" => 160
        );

        $gastosTrim4 = array(
            "comida" => 320,
            "luz" => 100,
            "agua" => 80,
            "alquiler" => 600,
            "ocio" => 90
        );

        print "Escribe en el navegador el nombre de todos los gastos que tenemos <br><br>";
        foreach($gastosTrim1 as $valor1 => $valor2){
           print $valor1 . "<br> ";
        }

        print "<br>Dime el importe máximo para los gastos del 2º trimestre <br><br>";

        $mayor = 0;
        foreach($gastosTrim2 as $valor3 => $valor4){
            if($mayor < $valor4){
                $mayor = $valor4 . "<br>";
            }
        }
        print $mayor;

        print "<br>Ordena los gastos del primer trimestre de mayor a menor y muéstralos con echos<br><br>";
       
        arsort($gastosTrim1);
        foreach($gastosTrim1 as $valor5 => $valor6){
            print $valor6 . " => " . $valor5 . "<br>";
        }

        print "<br>Ordena los gastos del segundo trimestre de menor a mayor y muéstralos con echos<br><br>";
        asort($gastosTrim1);
        foreach($gastosTrim1 as $valor7 => $valor8){
            print $valor8 .  " => " . $valor7 . "<br>";
        }

        print "<br><br> Saca los gastos anuales ordenados alfabéticamente<br>";     
 
    ?>
</body>
</html>