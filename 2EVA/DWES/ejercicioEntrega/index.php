<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title></title>
</head>

<body>

    <h1>Empieza a ver nuestro catálogo</h1>

    <form action="categoria_Acción.php" method="post">
        <input type="submit" value="Comenzar">
    </form>
    <?php

    session_start();

    // Creo un objeto que va ha guardar como una clase por cada categoría del JSON creado

    class Paginas
    {
        public $nombreJuego;
        public $categoria;

        public function __construct($nombre, $categoria)
        {
            $this->nombreJuego = $nombre;
            $this->categoria = $categoria;
        }
    }

    // Leo todo el contenido del JSON
    $jsonString = file_get_contents('juegos.json');
    // obtengo el contenido del JSON
    $jsonData = json_decode($jsonString, true);

    // creo un array con los juegos que hay
    $juegos = array();
    $categoriasFav = array();

    function añadir($categoria){
        global $categoriasFav;
        array_push($categoriasFav, $categoria);
    }
    // leo los datos y los meto en el array de juego, cada uno va ha ser un objeto distinto
    foreach ($jsonData as $datos) {
        $juegos[] = new Paginas($datos['Juego'], $datos['categoria']);
    }

    // creo un array con las categorias que hay
    $categorias = array();
    foreach ($juegos as $juego) {
        // recorro el array de juegos creado anteriormente con los datos de nuestra clase
        // si no existe en el array se añade la nueva categoria
        if (!in_array($juego->categoria, $categorias)) {
            $categorias[] = $juego->categoria;
        }
    }

    sort($categorias);

    // leemos cada categoria
    foreach ($categorias as $i => $categoria) {

        
        // añadimos un nuevo archivo por cada categoria y escribimos su contenido

        // Situa el indice del foreach en la siguiente categoria
        $indice = ($i + 1) % count($categorias);
        $siguiente_categoria = $categorias[$indice];
        $categoria_final = 'exitPage';

        if ($indice != 0) {
            $archivo = fopen("categoria_" . $categoria . ".php", "w");
        } else {
            $archivo = fopen("categoria_" . $categoria_final . ".php", "w");
        }

        if ($indice != 0) {
            $contenido = "<!DOCTYPE html>\n
            <html>\n
            <head>\n
            </head>\n
            <link rel='stylesheet' href='style.css'>\n

            <body>\n
            <h1> Juegos de la Categoria " . $categoria . "</h1>\n
            <ul>\n";
            foreach ($juegos as $juego) {
                if ($juego->categoria == $categoria) {
                    $contenido .= "<li>" . $juego->nombreJuego . "</li>\n";
                }
            }
        } else {
            $contenido = "<!DOCTYPE html>\n
            <html>\n
            <head>\n
            </head>\n
            <link rel='stylesheet' href='style.css'>\n

            <body>\n
            <h1> Juegos seleccionados </h1>\n
            <ul>\n";
            foreach ($categoriasFav as $cat) {
                $contenido .= "<li>" . $cat . "</li>\n";
                
            }
        }
        if ($indice == 0) {
            $contenido = "<!DOCTYPE html>\n
            <html>\n
            <head>\n
            </head>\n
            <link rel='stylesheet' href='style.css'>\n

            <body>\n
            <h1> Juegos seleccionados </h1>\n
            <ul>\n";
            foreach ($categoriasFav as $favs) {
                $contenido .= "<li>" . $favs . "</li>\n";
            }
            $botones = "
            <br\n>
            <form action='index.php' method='post'>\n
                <p>
                <input type='submit' value='Inicio'>\n
                </p>    
            
            </form>\n
            ";
        } else {
            $botones = "
        <br\n>
        <form action='categoria_" . $siguiente_categoria . ".php' method='post'>\n
            <p>
            <input type='button' value='+' name='categoria' onclick=' " . añadir($categorias[$i]) . "'>\n
            <input type='submit' value='Siguiente'>\n
            </p>    
        
        </form>\n
        ";
        }

        fwrite($archivo, $contenido);
        fwrite($archivo, $botones);

        fclose($archivo);
    }

    ?>
</body>

</html>