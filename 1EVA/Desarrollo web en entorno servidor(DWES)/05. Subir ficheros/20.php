<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>		
	<!-- Necesario para enviar archivos, si no no funcionara -->
    <form action="index.php" method="POST" enctype="multipart/form-data">
        <label for="">Nombre: </label>
        <input type="text" name="nombre">
        <br><br>
		<label for="">Provincia: </label>
		<input type="text" name="provincia">
        <br><br>
		<label for="">C.V</label>
		<input type="file" name="archivo">
        <br><br>
		<input type="submit">
		<br><br>

	</form>

    <?php
		$archivo = $_FILES['archivo']['type'];
		$tamaño = $_FILES['archivo']['size'];
		if(strpos($archivo, 'pdf') || strpos($archivo, 'doc')){
			print "Tipo de docuemento valido <br>";
            if($tamaño > 1000){
                print "Archivo demasiado grande, error al subir el documento.";
            }else{
                print move_uploaded_file($_FILES['archivo']['name'], "/Carpeta"). "Archivo subido con exito";
            }
		}else{
			print "Documento no válido, error al subir documento.";

		}

	?>

</body>
</html>

