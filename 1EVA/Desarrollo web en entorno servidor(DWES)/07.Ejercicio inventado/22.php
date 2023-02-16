<?php

$nombre1 = $_POST["nombre1"];
$apellido1 = $_POST["apellido1"];
$inicial1 = substr($nombre1, 0, 1);
$longitud1 = strlen($nombre1);
$array1 = str_split($nombre1 . " " . $apellido1);
array_filter($array1);

foreach ($array1 as $valor) {
    print $valor;
}
print '<br><br>';
print "La inicial del nombre 1 es: " . $inicial1;
print '<br>';
print "La cantidad de letras que tiene el nombre 1 son: " . $longitud1;

// convertimos el nombre a String

$cadena1 = implode($array1);

print '<br><br>';

$nombre2 = $_POST["nombre2"];
$apellido2 = $_POST["apellido2"];
$inicial2 = substr($nombre2, 0, 1);
$longitud2 = strlen($nombre2);
$array2 = str_split($nombre2 . " " . $apellido2);

foreach ($array2 as $valor) {
    print $valor;
}
print '<br><br>';
print "La inicial del nombre 2 es: " . $inicial2;
print '<br>';
print "La cantidad de letras que tiene el nombre 2 son: " . $longitud2;
print '<br><br>';

$cadena2 = implode($array2);
array_filter($array2);

$mayor = strcmp($nombre1, $nombre2);

if($longitud1 > $longitud2){
    print $nombre1 . " tiene " . $mayor . " letras más que " . $nombre2;
}else if($longitud2 > $longitud1){
    print $nombre2 . " tiene " . $mayor . " letras más que " . $nombre2;
}else{
    print "Tienen el mismo número de letras.";
}
print '<br><br>';

$archivo = $_FILES['archivo']['type'];

if(strpos($archivo, 'jpeg') || strpos($archivo, 'jpg') || strpos($archivo, 'png')){
    print move_uploaded_file($_FILES['archivo']['name'], "/Carpeta"). "¡Archivo subido con exito!";
}else{
    print "Documento no válido, error al subir documento.";

}
print '<br><br><h2> Prueba con estos otros nombres : </h2>';

$fichero = fopen('nombres.txt', 'r');

while(!feof($fichero)){
    print fgets($fichero) . '<br>';
}
rewind($fichero);

?>
