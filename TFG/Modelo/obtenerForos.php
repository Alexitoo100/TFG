<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Consulta para obtener la fila si es que existe.
$consulta="SELECT * FROM foro";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los foros.
$Foros = array();

// Almacenamos los foros en un array
foreach ($consulta_fin as $foro) {
    $array = array("id" => $foro[0], "nombre" => $foro[1], "n_integrantes" => $foro[2], "propietario" => $foro[3], "tematica" => $foro[4]);
    array_push($Foros, $array);
}

// Pasamos los foros del array a formato json.
echo json_encode($Foros);

?>