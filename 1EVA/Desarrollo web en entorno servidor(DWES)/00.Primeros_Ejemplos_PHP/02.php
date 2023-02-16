<!-- Ejercicio2:
Calcular el máximo entre 2 números dados. -->

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
        $num1 = 300;
        $num2 = 200;

        if($num1 > $num2){
            print "<p> El número " . $num1 . " es mayor que ". $num2;
        }else{
            print "<p> El número " . $num2 . " es mayor que ". $num1;
        }
    ?>
</body>
</html>