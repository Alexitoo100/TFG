<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);
$id_usu = $_SESSION['id_usuario'];
$id_juego = $_POST['id_juego'];
// Consulta para obtener la fila si es que existe.
$consulta="DELETE FROM juegos_favoritos WHERE id_juego='$id_juego' AND id_usuario='$id_usu'";

// Realizamos la consulta.
$resultado_borrado=mysqli_query($conexion, $consulta);

mysqli_close($conexion);
?>