<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>

    <div>
    <h1>Registrate</h1>
    <form action="<?= $_SERVER['PHP_SELF']?>" method="POST">


        <label>Usuario</label>
        <input type="text" name="usuario" required>
        <br>

        <label>Constraseña</label>
        <input type="password" name="contraseña" required>
        <br>

        <label>Correo electrónico</label>
        <input type="mail" name="correo" required>
        <br>

        <label>Nombre</label>
        <input type="text" name="nombre" required>
        <br>

        <input type="submit" value="Registrarse">

    </form>

    <p>¿Ya tienes una cuenta?, <a href="login.php">Inicia sesión</a></p>
    </div>
    
    <?php

        // inicio una sesion
        session_start();

        $users =[
            "nombre" => $_POST['usuario'],
            "contraseña" => $_POST['contraseña']
        ];

        array_push($users, $_POST['usuario'], $_POST['contraseña']);

        if(isset($_POST['usuario']) && isset($_POST['contraseña']) && isset($_POST['correo']) && isset($_POST['nombre'])){
            $_SESSION['usuario'] = $_POST['usuario'];
            $_SESSION['contraseña'] = $_POST['contraseña'];
            $_SESSION['correo'] = $_POST['correo'];
            $_SESSION['nombre'] = $_POST['nombre'];
        }
        
        var_dump($users);
    ?>
</body>
</html>