<?php

// Leer el contenido del archivo JSON en una variable
$archivo = file_get_contents('excursiones.json');

// Codificar el contenido del archivo JSON en una cadena de texto
$datos_json = json_encode($archivo);

//Paso a un array Asociativo el archivo.
$array = json_decode($archivo);

foreach ($array as $valor) {
    echo "Ruta: " . $valor->nombreRuta . "\n";
    echo "Precio: " . $valor->precio . "\n";
    echo "Participantes: " . $valor->numParticipantes . "\n";
    echo "Completa: " . $valor->completa . "\n";
    echo "Itinerario: " . implode(", ", $valor->itinerario) . "\n <br>";
  }
?>