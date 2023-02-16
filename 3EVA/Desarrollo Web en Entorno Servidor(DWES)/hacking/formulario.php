<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>

    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="post">
        <label>ID: </label>
        <input type="text" name="id">
        <input type="submit">
    </form>

    <?php

    // PROTECCION ATAQUE XSS

    if (isset($_POST["id"])) {
        // convierte cualquier carácter que pueda ser 
        // utilizado para injectar código HTML o JavaScript 
        // en entidades HTML, lo que lo hace seguro para su 
        // uso en la página web

        // htmlspecialchars($_POST["id"]);

        // elimina todas las etiquetas HTML y
        // PHP de una cadena de texto.
        
        // strip_tags($_POST["id"]);

    }
    ?>
</body>

</html>