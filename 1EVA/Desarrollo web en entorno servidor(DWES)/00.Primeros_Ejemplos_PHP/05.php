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
        $nombre_peso = array(
         "Alberto" => 85,
         "Rulo" => 70,
         "Victor" => 60,
         "Peter" => 100,
         "Moleiro" => 80,
         "Gustavo" => 85,
         "Alex" => 50,
         "Sebastian" => 70
        );

        $cont = 0;

        $mayor = 0;
        // bucle foreach, lee todos los valores = resultado, no se puede hacer con el bucle for normal porque no le podemos asignar valor
        foreach($nombre_peso as $valor1 => $valor2){    
            $cont++;
            print "<h1>" . $cont ." - " . $valor1 . " - " . $valor2 . "<br> </h1>";

            
            if ($valor2 > $mayor) {
                $personaFuerte = $valor1;
                $mayor = $valor2;
            }
        }
        
        print "<br><h1>" . $personaFuerte ." - " . $mayor .", tienes que bajar un poco de peso </h1>";
        
    ?>
</body>
</html>