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

        $cont = 0;
        $fichero = fopen("11_ejercicioFicheros.csv" , "r");

        $txt1 = fgetcsv($fichero, ";");
        $txt2 = fgetcsv($fichero, ";");
        $txt3 = fgetcsv($fichero, ";");

        for ($i=0; $i < 5 ; $i++) { 
            print $txt1[$i] . "<br>" . $txt2[$i] .  "<br>" . $txt3[$i] . "<br>";         
            
            if(strstr($txt1[$i], "Paqui") == true){
                $cont++;
            }
            if(strstr($txt2[$i], "Paqui") == true){
                $cont++;
            }
            if(strstr($txt3[$i], "Paqui") == true){
                $cont++;
            }
        }

        print $cont . " Paquis";
    ?>
</body>
</html>