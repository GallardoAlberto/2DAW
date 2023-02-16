<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <?php

        // apartado 1
        $dinero = 0;
        $comis_trimes = array(
            "Ibercaja" => 30,
            "BBVA" => 40,
            "Sabadell" => 30,
            "Caixabanc" => 30,
            "Santander" => 60,
            "Bankia" => 42
        );

        foreach($comis_trimes as $valor1 => $valor2){
            if($valor1 == "BBVA"){
                $dinero = $dinero + ($valor2 * 4);
            }
            if($valor1 == "Sabadell"){
                $dinero = $dinero + ($valor2 * 4);
            }
        }
        print $dinero . "<br>";

        // apartado 2
        print min($comis_trimes);

    ?>
</body>
</html>