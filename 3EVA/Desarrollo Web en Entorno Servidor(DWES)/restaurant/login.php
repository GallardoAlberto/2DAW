<?php
session_start();

// DB connection
$servername = "localhost";
$username = "root";
$password = "";
$bbdd = "restaurante";
$conn = new mysqli($servername, $username, $password, $bbdd);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verificamos si se ha enviado el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validamos los datos de entrada para evitar inyección SQL
    $user = htmlspecialchars($_POST["user"]);
    $pass = htmlspecialchars($_POST["pass"]);

    // Consulta para verificar si el usuario y la contraseña son correctos en la BBDD usando prepared statements para evitar inyección SQL
    $sql = "SELECT * FROM credenciales WHERE BINARY user = BINARY ? AND BINARY pass = BINARY ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Si los datos son correctos, creamos la sesión y redirigimos al usuario a la página de la carta
        $_SESSION["user"] = $user;
        header("Location: carta.php");
        exit();
    } else {
        // Si los datos son incorrectos, mostramos un mensaje de error genérico
        $error = "Usuario o contraseña incorrectos";
    }

    // Cerrar el prepared statement
    $stmt->close();
}

// Cerrar la conexión a la BBDD
$conn->close();
?>

<!DOCTYPE html>
<html>

<head>
    <title>Restaurante</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap');

        * {
            padding: 0;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
        }

        body {
            height: 100vh;
            display: flex;
            place-items: center;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .login {
            width: 400px;
            background-color: #f2f2f2;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        }

        h1 {
            padding: 30px;
            text-align: center;
            font-size: 28px;
            color: #444444;
            margin-bottom: 30px;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            font-weight: 600;
            font-size: 16px;
            color: #444444;
            margin-bottom: 10px;
        }

        input {
            box-sizing: border-box;
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #dddddd;
            margin: 20px auto;
            transition: 0.3s;
        }

        input:focus {
            border: 1px solid #6b8cff;
            box-shadow: 0px 0px 5px rgba(107, 140, 255, 0.5);
        }

        .boton:hover {
            background-color: #444444;
            color: white;
        }

        .error {
            color: red;
            padding: 20px 0;
        }
    </style>
</head>

<body>

    <div class="login">
        <h1>Inicia sesión</h1>
        <form method="POST">
            <label for="user">Usuario:</label>
            <input type="text" id="user" name="user" required>
            <br>
            <label for="pass">Contraseña:</label>
            <input type="password" id="pass" name="pass" required>
            <br>
            <input type="submit" class="boton">
        </form>
    </div>


    <?php if (isset($error)) : ?>
        <p class="error">Error al iniciar sesión.</p>
    <?php endif; ?>
</body>

</html>