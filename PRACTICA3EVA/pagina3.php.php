<?php
// Iniciar sesión
session_start();

// 1. Conexión a la base de datos con medidas de seguridad
$host = 'localhost'; // Cambiar por el nombre del servidor
$user = 'root'; // Cambiar por el nombre de usuario
$password = ''; // Cambiar por la contraseña
$database = 'colegio'; // Cambiar por el nombre de la base de datos

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// 2. Consultar el número de preguntas con respuestas 'S' con medidas de seguridad
$sql = "SELECT COUNT(*) AS numS FROM preguntas WHERE respuesta = ?";
$stmt = $conn->prepare($sql);
$respuestaS = 'S';
$stmt->bind_param("s", $respuestaS);
$stmt->execute();
$resultado = $stmt->get_result();
$fila = $resultado->fetch_assoc();
$numS = $fila['numS'];

// 3. Calcular el porcentaje de preguntas con respuestas 'S' con medidas de seguridad
$sql = "SELECT COUNT(*) AS numPreguntas FROM preguntas";
$stmt = $conn->prepare($sql);
$stmt->execute();
$resultado = $stmt->get_result();
$fila = $resultado->fetch_assoc();
$numPreguntas = $fila['numPreguntas'];

$porcentajeS = round(($numS / $numPreguntas) * 100, 2);

// 4. Mostrar el resultado
echo "El número de preguntas con respuestas 'S' ha sido de $numS";
echo "<br>que representa el $porcentajeS% del total de preguntas.";

// 5. Cerrar la conexión
$stmt->close();
$conn->close();

// 6. Cerrar la sesión
session_destroy();
?>
