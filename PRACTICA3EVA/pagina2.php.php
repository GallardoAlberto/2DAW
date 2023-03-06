<?php
// Iniciar sesión
session_start();

// Si la variable de sesión no existe, se inicializa en 1
if (!isset($_SESSION['numPregunta'])) {
    $_SESSION['numPregunta'] = 0;
}

// 1. Conexión a la base de datos con medidas de seguridad
$host = 'localhost'; 
$user = 'root';
$password = ''; 
$database = 'colegio'; 

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// 2. Consulta de las 10 preguntas a partir del número actual de pregunta con medidas de seguridad
$numPregunta = $_SESSION['numPregunta'];
$sql = "SELECT idPregunta, pregunta, respuesta FROM preguntas WHERE idPregunta BETWEEN ? + 1 AND ? LIMIT 10";
$stmt = $conn->prepare($sql);
$limite = $numPregunta + 10;
$stmt->bind_param("ii", $numPregunta, $limite);
$stmt->execute();
$resultado = $stmt->get_result();


echo "<form action='cuestionarioP1.php' method='POST'>";

while ($fila = $resultado->fetch_assoc()) {
    $idPregunta = $fila['idPregunta'];
    $pregunta = $fila['pregunta'];
    $respuesta = $fila['respuesta'];

    echo "<label for='pregunta$idPregunta'>$pregunta</label>";
    echo "<input type='hidden' name='idPregunta[]' value='$idPregunta'>";
    echo "<input type='text' id='pregunta$idPregunta' name='respuesta[]' value='$respuesta' pattern='[NS]{1}' title='Ingrese solo N o S' required><br>";
}

// 3. Mostrar las preguntas en un formulario para editar las respuestas con medidas de seguridad
if (isset($_POST['idPregunta']) && isset($_POST['respuesta'])) {
    $idPreguntas = $_POST['idPregunta'];
    $respuestas = $_POST['respuesta'];

    for ($i = 0; $i < count($idPreguntas); $i++) {
        $idPregunta = $idPreguntas[$i];
        $respuesta = $respuestas[$i];

        // Actualizar la respuesta en la base de datos con medidas de seguridad
        $sql = "UPDATE preguntas SET respuesta=? WHERE idPregunta=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $respuesta, $idPregunta);
        $stmt->execute();
    }
}


echo "<input type='submit' value='SIGUIENTE'>";
echo "</form>";

// 4. Actualizar la variable de sesión con el número de la siguiente pregunta
$_SESSION['numPregunta'] += 10;

// 5. Redirigir a la página de resolución si se han mostrado todas las preguntas
if ($_SESSION['numPregunta'] >= 31) {
    header("Location: resolucion.php");
    exit;
}

// 6. Cerrar la conexión
$conn->close();

?>
