<?php
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

        // Variables a usar
        $uuid_random = guidv4();
        $username = $_POST['username'];
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $correo = $_POST['correo'];
        $password = $_POST['password'];
        $password_md5 = md5($password);

        $host="localhost";
        $database="tfg";
        $usu="tfg";
        $pass="tfg";

            // Hacemos la conexion al servidor.
            $conexion=mysqli_connect($host, $usu, $pass, $database);

            // Hacemos la consulta a la base de datos sobre la tabla usuarios.
            $consulta="SELECT * FROM usuarios WHERE correo like '$correo' OR username like '$username'";

            // Realizamos la consulta.
            $resultados_consulta=mysqli_query($conexion, $consulta);

            // Metemos los resultados en un array.
            $tuplas=mysqli_fetch_row($resultados_consulta);

            if ($username === '' || $nombre === '' || $apellidos === '' || $correo === '' || $password === '') {
                echo "empty";
            } else {
                if ($tuplas == '') {
                    // Hacemos la inserción cogiendo los valores introducidos y los metemos en los que hay en la tabla.
                    $insercion_usu="INSERT INTO usuarios (id, username, nombre, apellidos, correo, password, tipo) 
                    VALUES ('$uuid_random', '$username', '$nombre', '$apellidos', '$correo', '$password_md5', 0);";
                    $resultados_insercion=mysqli_query($conexion, $insercion_usu);

                        echo "true";
                } else {

                    if ($correo === $tuplas[4] && $username === $tuplas[1]) {
                        echo "ambos";
                    } else if ($correo === $tuplas[4]) {
                        echo "correo";
                    } else if ($username === $tuplas[1]) {
                        echo "username";
                    } 
            }
        }
        
            // Cerramos la conexión establecida con la base de datos.
            mysqli_close($conexion);

?>