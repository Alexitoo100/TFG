<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT id, username, nombre, apellidos, correo, password, tipo FROM usuarios";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los usuarios.
$Juegos = array();

// Almacenamos los usuarios en un array
foreach ($consulta_fin as $juegos) {
    $array = array("id" => $juegos[0], "username" => $juegos[1], "nombre" => $juegos[2], "apellidos" => $juegos[3], "correo" => $juegos[4], "password" => $juegos[5],
    "tipo" => $juegos[6]);
    array_push($Juegos, $array);
}

// Pasamos los usuarios del array a formato json.
echo json_encode($Juegos);

?>