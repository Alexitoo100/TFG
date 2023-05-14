<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id_usuario = $_POST['id_usuario'];
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
        // Consulta para obtener la fila si es que existe.
            $actualizacion="UPDATE usuarios SET username = '$nombre_usuario', nombre = '$nombre', apellidos = '$apellidos', correo = '$correo', 
            password = '$md5_password', tipo = '$tipo' WHERE id = '$id_usuario'";
            
            // Realizamos la consulta.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
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