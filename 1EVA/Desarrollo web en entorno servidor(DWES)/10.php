<!-- Dado un nº aleatorio (debes ver si funciona con varios números) comprobar si es capicua. -->
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

        $numero = 1331;

        $part1 = substr($numero, 0, strlen($numero)/2);
        print $part1 . "<br>";

        $part2 = substr($numero, strlen($numero)/2, strlen($numero));
        print $part2 . "<br>";

        if($part1 == $part2 || $part1 == strrev($part2)){
            print "Capicua";
        }else{
            print "No es capicua";
        }

    ?>
</body>
</html>