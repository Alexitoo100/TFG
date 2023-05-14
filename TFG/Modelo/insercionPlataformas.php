<?php
session_start();

function guidv4($data = null) {
    // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);

    // Set version to 0100
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    // Set bits 6-7 to 10
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

    // Output the 36 character UUID.
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$nombre = $_POST['plataformas'];
$plataformas = explode(",", $nombre);

$contador = 0;
$array_ids = array();

foreach ($plataformas as $nombre_plataforma) {

// Hacemos la consulta a la base de datos sobre la tabla plataformas.
$consulta="SELECT * FROM plataformas WHERE nombre like '$nombre_plataforma'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if ($tuplas == '') {
        $uuid_random = guidv4();
        $insercion_plataformas="INSERT INTO plataformas (id, nombre) 
            VALUES ('$uuid_random', '$nombre_plataforma');";

            array_push($array_ids, $uuid_random);
            // Realizamos la insercion.
            $resultados_plataformas=mysqli_query($conexion, $insercion_plataformas);

    } else {
        if ($nombre_plataforma === $tuplas[1]) {
            $contador++;
        } 
    }
}

echo $contador . '/' . json_encode($array_ids);

mysqli_close($conexion);
?>