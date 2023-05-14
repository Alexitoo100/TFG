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
$uuid_random = guidv4();
$nombre_usuario = $_POST['username'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$correo = $_POST['correo'];
$password = $_POST['password'];
$md5_password = md5($password);
$tipo = $_POST['tipo'];

// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consulta="SELECT * FROM usuarios WHERE correo like '$correo' OR username like '$nombre_usuario'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if ($tuplas == '') {
        $insercion_usu="INSERT INTO usuarios (id, username, nombre, apellidos, correo, password, tipo) 
            VALUES ('$uuid_random', '$nombre_usuario', '$nombre', '$apellidos', '$correo', '$md5_password', '$tipo');";
            
            // Realizamos la insercion.
            $resultados_insercion=mysqli_query($conexion, $insercion_usu);
            echo "true";

    } else {

        if ($correo === $tuplas[4] && $nombre_usuario === $tuplas[1]) {
            echo "ambos";
        } else if ($correo === $tuplas[4]) {
            echo "correo";
        } else if ($nombre_usuario === $tuplas[1]) {
            echo "username";
        } 
    }


mysqli_close($conexion);
?>