<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id_usu = $_SESSION['id_usuario'];
$nombreJuego = $_GET['nombreJuego'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT j.id, j.nombre, j.precio, j.descripcion, j.genero, j.n_jugadores, j.img, j.certificaciones
FROM juegos AS j JOIN juegos_favoritos AS jf on j.id=jf.id_juego WHERE j.nombre LIKE '%$nombreJuego%' AND jf.id_usuario='$id_usu'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los articulos.
$JuegosFav = array();

// Almacenamos los articulos en un array
foreach ($consulta_fin as $juegos) {
    $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
    "img" => $juegos[6], "certificaciones" => $juegos[7]);
        array_push($JuegosFav, $array);
}

// Pasamos los articulos del array a formato json.
echo json_encode($JuegosFav);

?>