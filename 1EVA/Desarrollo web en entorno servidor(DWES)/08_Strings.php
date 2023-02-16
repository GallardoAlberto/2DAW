<!-- Dada la siguiente cadena(string) de ejemplo :
“Paqui 910235521;Rocio 924502311;Paco 959564265;Teresa 913225648;Pedro 914222545”

Se pide:

    • Visualizar en el navegador el nombre de la persona junto con su teléfono.
      
    • Mostrar cuántas personas son de Madrid y cuántas no. 


Se pueden utilizar las siguientes funciones:

strstr--→ extrae subcadenas
explode---→para partir una cadena -->

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
        $cadena = "Paqui 910235521;Rocio 924502311;Paco 959564265;Teresa 913225648;Pedro 914222545";
        $cont = 0;
        $contN = 0;
        // explode (separador , cadena);
        $tlf = (explode(';', $cadena));
        
        for ($i=0; $i < count($tlf) ; $i++) { 
            print $tlf[$i] . "<br><br>"; 

            // preg_match("/letraQueBuscas/, cadena")
            if (preg_match("/91/", $tlf[$i])){
                $cont++;
            }else{
                $contN++;
            }
        }

        print "Son " . $cont . " números de Madrid y " . $contN . " de otros lados.";

    ?>
</body>
</html>