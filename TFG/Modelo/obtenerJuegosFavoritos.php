<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

$id_usu = $_SESSION['id_usuario'];

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id_juego FROM juegos_favoritos WHERE id_usuario LIKE '$id_usu'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los articulos.
$JuegosFavoritos = array();

// Almacenamos los articulos en un array
foreach ($consulta_fin as $juegos) {
    $array = array("id" => $juegos[0]);
    array_push($JuegosFavoritos, $array);
}

// Pasamos los articulos del array a formato json.
echo json_encode($JuegosFavoritos);

?>