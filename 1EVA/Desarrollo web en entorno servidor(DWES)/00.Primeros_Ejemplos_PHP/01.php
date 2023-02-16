<!-- Ejercicio1:
Calcular el factorial de un nº dado(lo metemos a mano dentro de una variable y vamos dándo
distintos valores para comprobar que nos funciona��) -->

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
        $num = 7;
        $cont = 1;
        $acum = 1;

        for ($i=0; $i < $num ; $i++) { 
            $acum = $acum * $cont;
            $cont++;
            print "<p>" . $acum ."</p>  ";
        }
    ?>
</body>
</html>