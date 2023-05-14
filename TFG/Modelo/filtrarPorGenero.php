<?php
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

$genero = $_GET['genero'];

// Consulta para obtener la fila si es que existe.
$consulta="SELECT juegos.id, juegos.nombre, precio, descripcion, genero, n_jugadores, img, certificaciones, p.nombre, d.nombre FROM juegos JOIN juegos_plataformas 
AS jp on juegos.id=jp.id_juegos JOIN plataformas AS p on p.id=jp.id_plataformas 
JOIN juegos_desarrolladoras AS jd on juegos.id=jd.id_juegos JOIN desarrolladoras AS d on d.id=jd.id_desarrolladoras WHERE genero LIKE '$genero'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$consulta_fin=mysqli_fetch_all($resultados_consulta);

mysqli_close($conexion);

// Definimos un array para almacenar los juegos.
$Juegos = array();

// Almacenamos los juegos en un array
foreach ($consulta_fin as $juegos) {
    
    $array = array("id" => $juegos[0], "nombre" => $juegos[1], "precio" => $juegos[2], "descripcion" => $juegos[3], "genero" => $juegos[4], "n_jugadores" => $juegos[5],
    "img" => $juegos[6], "certificaciones" => $juegos[7], "plataforma" => $juegos[8], "desarrolladora" => $juegos[9]);
    
        array_push($Juegos, $array);
}

  // Pasamos los juegos del array a formato json.
    echo json_encode($Juegos);

?>