<?php
session_start();

    if(isset($_SESSION['usuario'])) {
        if(isset($_SESSION['usuario'])) {
            $nombre = $_SESSION['usuario'];
            $tipo = $_SESSION['tipo'];

                echo ($nombre . "-" . $tipo);
        }
    } else {
        $_SESSION['usuario'] = 'anonimo';
        $_SESSION['nombre'] = 'anonimo';
        $_SESSION['tipo'] = '2';
        $_SESSION['correo'] = 'anonimo@anonimo.es';
        $nombre = $_SESSION['usuario'];
        $tipo = $_SESSION['tipo'];
                echo ($nombre . "-" . $tipo);
    }

?>