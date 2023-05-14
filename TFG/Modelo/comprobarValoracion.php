<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_usuario = $_SESSION['id_usuario'];
$id_juego = $_GET['id_juego'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT valoraciones.id, graficos, optimizacion, jugabilidad, comentario, j.id
FROM valoraciones JOIN juegos AS j on j.id=valoraciones.id_juego WHERE id_juego LIKE '$id_juego' AND id_usuario LIKE '$id_usuario'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los articulos.
$Juegos = array();

// Almacenamos los articulos en un array
foreach ($consulta_fin as $juegos) {
    $array = array("id" => $juegos[0], "graficos" => $juegos[1], "optimizacion" => $juegos[2], "jugabilidad" => $juegos[3], 
    "comentario" => $juegos[4], "id_juego" => $juegos[5]);
    array_push($Juegos, $array);
}

// Pasamos los articulos del array a formato json.
echo json_encode($Juegos);

?>