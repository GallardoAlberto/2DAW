<!-- Ejercicio4:
Inserta en este fichero Word la tabla correspondiente al array 
$horasClasePorMod igual que yo lo hice para el array asociativo $horasDeClase -->

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
        
        $horasClasePorMod = array (
            "DWES" => 8,
            "DWEC" => 6,
            "DIW" => 6,
            "INGLES" => 2,
            "EIE" => 3,
            "DAW" => 4
        );

        $horasClaseDia = array(
            'L' => array(
                'DWES' => 1,
                'DWEC' => 0,
                'EIE' => 1,
                'INGLES' => 1,
                'DIW' => 3,
                'DAW' => 0

            ),

            'M' => array(
                'EIE' => 0,
                'DIW' => 0,
                'DWES' => 1,
                'DWEC' => 2,
                'INGLES' => 1,
                'DAW' => 2
            ),
                
            'X' => array(
                'DWES' => 2,
                'DWEC' => 1,
                'EIE' => 2,
                'DIW' => 1,
                'INGLES' => 0,
                'DAW' => 0
            ),

            'J' => array(
                'DWES' => 3,
                'DWEC' => 3,
                'EIE' => 0,
                'DIW' => 0,
                'INGLES' => 0,
                'DAW' => 0
            ),

            'V' => array(
                'DWEC' => 0,
                'EIE' => 0,
                'INGLES' => 0,
                'DAW' => 2,
                'DIW' => 2,
                'DWES' => 2
            ));

    ?>
</body>
</html>