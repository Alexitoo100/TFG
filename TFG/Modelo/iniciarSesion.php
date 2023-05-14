<?php
session_start();
$host="localhost";
$database="tfg";
$usu="tfg";
$pass="tfg";

// Variables a usar
$correo = $_POST['correo'];
$password = $_POST['password'];
$password_md5 = md5($password);

// Hacemos la conexion al servidor.
$conexion=mysqli_connect($host, $usu, $pass, $database);

// Hacemos la consulta a la base de datos sobre la tabla usuarios.
$consulta="SELECT * FROM usuarios WHERE correo like '$correo' and password like '$password_md5'";
$consulta2="SELECT * FROM usuarios WHERE username like '$correo' and password like '$password_md5'";

// Realizamos la consulta.
$resultados_consulta=mysqli_query($conexion, $consulta);
$resultados_consulta2=mysqli_query($conexion, $consulta2);

// Metemos los resultados en un array.
$tuplas=mysqli_fetch_row($resultados_consulta);
$tuplas2=mysqli_fetch_row($resultados_consulta2);

// Comprobamos si los inputs estan vacios.
if ($correo == '' || $password == '') {
    echo 'empty';
} else {
if ($tuplas == '') {
    if ($tuplas2 == '') {
        echo "false";
        // Si los inputs estan rellenados comprobamos que su información coincide en la base de datos e iniciamos sesion si es así.
    } else if ($correo === $tuplas2[1] && $password_md5 === $tuplas2[5]) {
        session_destroy();
        session_start();
        $tipo = $tuplas2[6];
        $id = $tuplas2[0];
        $correo =  $tuplas2[4];
        $usuario = $tuplas2[1];
        $nombre = $tuplas2[2];
    
        $_SESSION['usuario'] = $usuario;
        $_SESSION['nombre'] = $nombre;
        $_SESSION['passwd'] = $password_md5;
        $_SESSION['tipo'] = $tipo;
        $_SESSION['id_usuario'] = $id;
        $_SESSION['correo'] = $correo;
    
        echo 'true';
    } else {
        echo "false";
    }

} else if ($correo === $tuplas[4] && $password_md5 === $tuplas[5]) {
    session_destroy();
    session_start();
    $tipo = $tuplas[6];
    $id = $tuplas[0];
    $correo =  $tuplas[4];
    $usuario = $tuplas[1];
    $nombre = $tuplas[2];

    $_SESSION['usuario'] = $usuario;
    $_SESSION['nombre'] = $nombre;
    $_SESSION['passwd'] = $password_md5;
    $_SESSION['tipo'] = $tipo;
    $_SESSION['id_usuario'] = $id;
    $_SESSION['correo'] = $correo;

    echo 'true';
} else {
    echo "false";
}
}
// Cerramos la conexión establecida con la base de datos.
mysqli_close($conexion); 
?>