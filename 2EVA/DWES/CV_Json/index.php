<?php

// Leer el contenido del archivo JSON en una variable
$archivo = file_get_contents('datos.json');

// Codificar el contenido del archivo JSON en una cadena de texto
$datos_json = json_encode($archivo);

//Paso a un array Asociativo el archivo.
$array = json_decode($archivo);

echo "¿Cúal es el nombre de los curriculums que nos han entregado? <br>";
foreach ($array as $valor) {
    echo  $valor->nombre . "\n";
  }


 $cont = 0;

echo "Cuantos son de Collado Villalba?";
foreach ($array as $valor) {
    if($valor->codPostal == 28400){
        $cont++;
    }
  }

 echo $cont;

?>