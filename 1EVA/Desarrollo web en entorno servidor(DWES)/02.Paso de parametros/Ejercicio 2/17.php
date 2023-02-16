<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <form action="17.php" method="POST">
        <input type="text" name = "buscar">
        <input type="submit">
    </form>
    <?php
        $fichero = fopen("enfermedades.txt", "r");

        $tdah = fgetcsv($fichero, "<br>");
        $definicionTdah = fgetcsv($fichero, "<br>");
        $personasTdah = fgetcsv($fichero, "<br>");
        $sida = fgetcsv($fichero, "<br>");
        $definicionSida = fgetcsv($fichero, "<br>");
        $personasSida = fgetcsv($fichero, "<br>");
        $ebola = fgetcsv($fichero, "<br>");
        $definicionEbola = fgetcsv($fichero, "<br>");
        $personasEbola = fgetcsv($fichero, "<br>");

        if($_POST['buscar'] == "TDAH"){
            foreach($tdah as $valor){
                print "<br> <br>" . $valor . "<br> <br>";
            }
            foreach($definicionTdah as $valor){
                print $valor;
            }
            foreach($personasTdah as $valor){
                print "<br>" . $valor;
            }
        }
        if($_POST['buscar'] == "SIDA"){
            foreach($sida as $valor1){
                print "<br> <br>" . $valor1 . "<br> <br>";
            }
            foreach($definicionSida as $valor1){
                print $valor1;
            }
            foreach($personasSida as $valor1){
                print "<br>" . $valor1;
            }
        }
        if($_POST['buscar'] == "EBOLA"){
            foreach($ebola as $valor2){
                print "<br> <br>" . $valor2 . "<br> <br>";
            }
            foreach($definicionEbola as $valor2){
                print $valor2;
            }
            foreach($personasEbola as $valor2){
                print "<br>" . $valor2;
            }
        }
    ?>
</body>
</html>