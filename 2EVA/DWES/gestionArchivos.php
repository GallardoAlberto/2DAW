<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="<?= $_SERVER['PHP_SELF']?>" method="post">
        <label>Crear carpeta</label>
        <input type="checkbox" value="crearC" name="crearC">
        <br><br>
        <label>Eliminar carpeta</label>
        <input type="checkbox" value="eliminarC" name="eliminarC">
        <br><br>
        <label>Crear fichero</label>
        <input type="checkbox" value="crearA" name="crearA">
        <br><br>
        <label>Eliminar fichero</label>
        <input type="checkbox" value="eliminarA" name="eliminarA">
        <br><br>
        <label>Copiar fichero</label>
        <input type="checkbox" value="copiaA" name="copiaA">#
        <br><br>
        <label>Renombrar fichero</label>
        <input type="checkbox" value="renombrarA" name="renombrarA">#
        <br><br><br>

        <label>Crear array de ficheros de una carpeta</label>
        <input type="checkbox" value="renombrarA" name="renombrarA">#
        <br><br>
        <label>Nombre que quieres darle.</label>
        <input type="text" name="nombre">
        <br><br><br><br>
        <h1>#SOLO SI VAS A COPIAR O RENOMBRAR UN ARCHIVO</h1>
        <label>Nombre del archivo.</label>
        <input type="text" name="nombre2">
        <input type="submit">
    </form>
    <?php




        if(isset($_POST['nombre']) || isset($_POST['crearC']) && ($_POST['eliminarC']) && isset($_POST['crearA'])
        && ($_POST['eliminarA']) && isset($_POST['copiaA']) && ($_POST['nombre2']) && isset($_POST['renombrarA'])){
            
            $nombre = $_POST['nombre'];
            $crearCarpeta = $_POST['crearC'];
            $eliminarCarpeta = $_POST['eliminarC'];
            $crearFichero = $_POST['crearA'];
            $eliminarFichero = $_POST['eliminarA'];
            $copiarFichero = $_POST['copiaA'];
            $nombre2 = $_POST['nombre2'];
            $renombrarFichero = $_POST['renombrarA'];

            if($crearCarpeta == "crearC"){
                mkdir($nombre, 0777);
                if(is_dir($nombre)){
                    print "Este archivo ya existe";
                }
            }

            if($eliminarCarpeta == "eliminarC"){
                rmdir($nombre);
            }

            if($crearFichero == "crearA"){
                fopen($nombre, 'w');
                
            }

            if($eliminarFichero == "eliminarA"){
                @unlink($nombre) or die("No se ha podido borrar");
            }

            if($copiarFichero == "copiaA"){
                copy($nombre, $nombre2);
            }

            if($renombrarFichero == "renombrarA"){
                rename($nombre, $nombre2);

            }
        }
            


    ?>
</body>
</html>