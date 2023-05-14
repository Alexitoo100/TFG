<?php
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$id_juego = $_GET['id'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT SUM(graficos), SUM(optimizacion), SUM(jugabilidad)
FROM valoraciones WHERE id_juego LIKE '$id_juego'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar las valoraciones.
$Valoraciones = array();

// Almacenamos las valoraciones en un array
foreach ($consulta_fin as $valoracion) {
    
    $array = array("graficos" => $valoracion[0], "optimizacion" => $valoracion[1], "jugabilidad" => $valoracion[2]);
    
        array_push($Valoraciones, $array);
}

  // Pasamos las valoraciones del array a formato json.
    echo json_encode($Valoraciones);

?>