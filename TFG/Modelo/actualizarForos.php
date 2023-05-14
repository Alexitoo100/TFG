<?php
session_start();

$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Variables a usar
$id_foro = $_POST['id_foro'];
$nombre = $_POST['nombre'];
$integrantes = $_POST['integrantes'];
$propietario = $_POST['propietario'];
$tematica = $_POST['tematica'];

// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consulta="SELECT * FROM foro WHERE nombre like '$nombre'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);

    if ($tuplas == '') {
        // Consulta para obtener la fila si es que existe.
            $actualizacion="UPDATE foro SET nombre = '$nombre', n_integrantes = '$integrantes', propietario = '$propietario', tematica = '$tematica'
            WHERE id = '$id_foro'";
            
            // Realizamos la consulta.
            $resultado_actualizacion=mysqli_query($conexion, $actualizacion);
            echo "true";

    } else {

        if ($nombre === $tuplas[1]) {
            echo "exist";
        } 
    }


mysqli_close($conexion);
?>