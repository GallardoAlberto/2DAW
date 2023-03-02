<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>

    <form action="index.php" method="get">
        <div>
            <label>Usuario:</label><br>
            <input type="text" name="user">
        </div>
        <div>
            <label>Contraseña:</label><br>
            <input type="password" name="pass">
        </div>
        <input type="submit">
    </form>

    <?php

    session_start();

    if (isset($_GET['user']) && isset($_GET['pass'])) {
        // Codificar la información de inicio de sesión utilizando urlencode()
        $user = urlencode($_GET['user']);
        $pass = urlencode($_GET['pass']);

        $_SESSION['user'] = $user;
        $_SESSION['pass'] = $pass;

        // conectar a la bbdd

        $localhost = 'localhost';
        $user = 'root';
        $pass = '';
        $bbdd = 'usuario';

        $conexion = mysqli_connect($localhost, $user, $pass, $bbdd);

        // hacer la consulta para verificar si el Usuario existe
        // Aquí, mysqli_real_escape_string() se utiliza para escapar la variable de sesión y prevenir posibles ataques de inyección de SQL.
        $usuario = mysqli_real_escape_string($conexion, $_SESSION['user']);
        $contrasenia = mysqli_real_escape_string($conexion, $_SESSION['pass']);

        $consulta_usuarios = mysqli_query($conexion, "SELECT * FROM informacion WHERE usuario = '$usuario' AND contraseña = '$contrasenia'");

        // verificar si la consulta devolvió al menos un registro utilizando la función mysqli_num_rows()
        if (mysqli_num_rows($consulta_usuarios) > 0) {
            header("Location: pagina1.php");
        } else {
            print '<p>Este usuario no existe, introduce otro</p>';
        }

        // cerrar conexion bbdd

        mysqli_close($conexion);
    } else {
        session_destroy();
    }
    ?>
</body>

</html>