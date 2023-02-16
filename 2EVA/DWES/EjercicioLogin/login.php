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
    <h1>Inicia sesión</h1>
    <form action="<?= $_SERVER['PHP_SELF']?>" method="POST">

        <label>Usuario</label>
        <input type="text" name="usuario">
        <br>

        <label>Constraseña</label>
        <input type="password" name="contraseña">
        <br>

        <input type="submit" value="Acceder">

    </form>

    <p>Registrate <a href="index.php">aquí</a>, si no lo estás ya.</p>
    </div>
    
    <?php

        // inicio una sesion
        session_start();

        if(isset($_POST['usuario']) && isset($_POST['contraseña'])){
            function comprobarAcceso(){
                if($_POST['usuario'] == $_SESSION['usuario'] && $_POST['contraseña'] == $_SESSION['contraseña'] ){
                    Header("Location: bienvenida.php");
                }else{
                    echo "Datos incorrectos.";
                }
            }

            comprobarAcceso();
        }
        
    ?>
</body>
</html>