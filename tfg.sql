-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2023 a las 07:52:31
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desarrolladoras`
--

CREATE TABLE `desarrolladoras` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `f_fundacion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `desarrolladoras`
--

INSERT INTO `desarrolladoras` (`id`, `nombre`, `f_fundacion`) VALUES
('190a0c94-f1ba-11ed-a05b-0242ac12', 'Nintendo', '23-09-1889'),
('19e6f39e-f708-499d-b18f-8362ad63', 'Marco Estudios', ''),
('a2b5c258-e751-11ed-a05b-0242ac12', 'Bungie Studios', '1991-05-17'),
('d1574345-0efc-4d37-97cb-9eaca2c3', ' Bandai', ''),
('ecb8d0a2-e751-11ed-a05b-0242ac12', 'Kaos Studios', '2011-03-15'),
('ef9a3284-e751-11ed-a05b-0242ac12', ' Digital Extremes', '1993');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `n_integrantes` int(10) NOT NULL,
  `propietario` varchar(50) NOT NULL,
  `tematica` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `foro`
--

INSERT INTO `foro` (`id`, `nombre`, `n_integrantes`, `propietario`, `tematica`) VALUES
('7c9a2336-c10e-4f24-ba93-5cf76118', 'Juegos de belleza', 21, 'fred', 'awdawdawd'),
('a4ff89cc-f0e6-4756-bfe6-758e4188', 'Juegos de Guerra', 24, 'Valverdiano', 'Guerra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `genero` varchar(25) NOT NULL,
  `n_jugadores` int(10) NOT NULL,
  `img` varchar(100) NOT NULL,
  `certificaciones` varchar(120) NOT NULL,
  `f_lanzamiento` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `nombre`, `precio`, `descripcion`, `genero`, `n_jugadores`, `img`, `certificaciones`, `f_lanzamiento`) VALUES
('5a3d914e-f1bb-11ed-a05b-0242ac12', 'Legend of Zelda: Tears of The Kingdom', 59.99, 'The Legend of Zelda: Breath of the Wild 2 es la segunda parte de Breath of the Wild, el título que revolucionó los mundos abiertos y el concepto de la saga Zelda en Nintendo Switch y Wii U. Desarrollada por Nintendo y producida y dirigida por Eiji Aonuma.', 'Aventura', 1, 'The-Legend-of-Zelda-Tears-of-the-Kingdom.jpg', 'PEGI 12', '12/05/2023'),
('82d1ba56-e6ba-11ed-a05b-0242ac12', 'Homefront', 14, 'Homefront es un videojuego de disparos en primera persona desarrollado por Kaos Studios y publicado por THQ, el jugador interpreta el rol de un miembro de un movimiento de resistencia que lucha contra la ocupación militar coreana de los Estados Unidos.', 'Accion', 2000, 'homefront_u95f.jpg', 'PEGI 18, Mature 17+', '15/03/2011'),
('bed780bb-260f-4afa-912e-77f5e6a4', 'Alejandro', 25.99, 'Algo ironico', 'Futbol', 1, 'unnamed.png', 'PEGI', '20-10-2004'),
('cabc6a2a-e6b8-11ed-a05b-0242ac12', 'Halo Reach', 25.99, 'Halo: Reach is a 2010 first-person shooter video game developed by Bungie and published by Microsoft Game Studios, originally for the Xbox 360. The fifth installment in the Halo series and a direct prequel to Halo.', 'Lucha', 4000, 'caja-reach-halo_u3my.png', 'PEGI 18, MATURE-17', '14/09/2010');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_desarrolladoras`
--

CREATE TABLE `juegos_desarrolladoras` (
  `id` varchar(32) NOT NULL,
  `id_juegos` varchar(32) NOT NULL,
  `id_desarrolladoras` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos_desarrolladoras`
--

INSERT INTO `juegos_desarrolladoras` (`id`, `id_juegos`, `id_desarrolladoras`) VALUES
('1e0eff14-e752-11ed-a05b-0242ac12', 'cabc6a2a-e6b8-11ed-a05b-0242ac12', 'a2b5c258-e751-11ed-a05b-0242ac12'),
('34b0c16c-e752-11ed-a05b-0242ac12', '82d1ba56-e6ba-11ed-a05b-0242ac12', 'ecb8d0a2-e751-11ed-a05b-0242ac12'),
('775f63e2-e752-11ed-a05b-0242ac12', '82d1ba56-e6ba-11ed-a05b-0242ac12', 'ef9a3284-e751-11ed-a05b-0242ac12'),
('fc11bfdc-f1ba-11ed-a05b-0242ac12', '5a3d914e-f1bb-11ed-a05b-0242ac12', '190a0c94-f1ba-11ed-a05b-0242ac12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_favoritos`
--

CREATE TABLE `juegos_favoritos` (
  `id` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL,
  `id_juego` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos_favoritos`
--

INSERT INTO `juegos_favoritos` (`id`, `id_usuario`, `id_juego`) VALUES
('087096e1-7d36-47a8-9923-5d98da57', 'f4ad81de-a0d3-45d0-a8e2-4afe085a', '5a3d914e-f1bb-11ed-a05b-0242ac12'),
('1c362795-3edb-4842-884f-7d6f6705', '2a6c7760-abc8-4226-bc5d-5ec91fa2', '82d1ba56-e6ba-11ed-a05b-0242ac12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos_plataformas`
--

CREATE TABLE `juegos_plataformas` (
  `id` varchar(32) NOT NULL,
  `id_juegos` varchar(32) NOT NULL,
  `id_plataformas` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos_plataformas`
--

INSERT INTO `juegos_plataformas` (`id`, `id_juegos`, `id_plataformas`) VALUES
('85317b36-f1bb-11ed-a05b-0242ac12', '5a3d914e-f1bb-11ed-a05b-0242ac12', '22caf3ca-f1b9-11ed-a05b-0242ac12'),
('a96ebf36-e74d-11ed-a05b-0242ac12', '82d1ba56-e6ba-11ed-a05b-0242ac12', '5257f960-e74d-11ed-a05b-0242ac12'),
('d75e19a0-e74d-11ed-a05b-0242ac12', 'cabc6a2a-e6b8-11ed-a05b-0242ac12', '5257f960-e74d-11ed-a05b-0242ac12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataformas`
--

CREATE TABLE `plataformas` (
  `id` varchar(32) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id`, `nombre`) VALUES
('22caf3ca-f1b9-11ed-a05b-0242ac12', 'Nintendo Switch'),
('2eeb5b2c-7417-46cf-97a1-817db8c2', ' PlayStation'),
('5257f960-e74d-11ed-a05b-0242ac12', 'XBOX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id` varchar(32) NOT NULL,
  `f_publicacion` date NOT NULL,
  `contenido` varchar(120) NOT NULL,
  `id_usuario` varchar(32) NOT NULL,
  `id_foro` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` varchar(32) NOT NULL,
  `username` varchar(50) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `password` varchar(32) NOT NULL,
  `tipo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `nombre`, `apellidos`, `correo`, `password`, `tipo`) VALUES
('2a6c7760-abc8-4226-bc5d-5ec91fa2', 'Admin', 'admin', 'admin', 'admin@admin.es', '5136b96817648b5b81008f6a984284a7', 1),
('2e4c33cc-ecd4-4f98-80b9-4bc6bbba', 'alexcooper100', 'Alejandro', 'Garcia Salon', 'alexito@alexito.es', 'c3f4d22fc5dd6970fb7f6a2a449de9f8', 0),
('30914afc-45d7-4606-ad10-f6595d36', 'Alexito', 'Alejandro', 'Garcia Salon', 'GARMIN@GARMIN.ES', 'ef3a55eddd43993a9252949d158fe4d9', 1),
('f4ad81de-a0d3-45d0-a8e2-4afe085a', 'reigen03', 'reigen', 'rafo', 'reigen03@gmail.com', '6a94bd0235ffae7bc5b7a17eb3a0bada', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_foro`
--

CREATE TABLE `usuarios_foro` (
  `id` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL,
  `id_foro` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

CREATE TABLE `valoraciones` (
  `id` varchar(32) NOT NULL,
  `graficos` float NOT NULL,
  `optimizacion` float NOT NULL,
  `jugabilidad` float NOT NULL,
  `comentario` varchar(120) NOT NULL,
  `f_validez` date NOT NULL,
  `id_juego` varchar(32) NOT NULL,
  `id_usuario` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `valoraciones`
--

INSERT INTO `valoraciones` (`id`, `graficos`, `optimizacion`, `jugabilidad`, `comentario`, `f_validez`, `id_juego`, `id_usuario`) VALUES
('272d2ecc-da97-45f4-9a24-4b15ead3', 0, 3, 2, '', '0000-00-00', '5a3d914e-f1bb-11ed-a05b-0242ac12', '2e4c33cc-ecd4-4f98-80b9-4bc6bbba'),
('b8799196-04ea-4547-bfb5-e1979d7f', 1, 1, 3, '', '0000-00-00', 'cabc6a2a-e6b8-11ed-a05b-0242ac12', 'f4ad81de-a0d3-45d0-a8e2-4afe085a'),
('df41cac2-fe0c-4963-8a48-cb64975f', 2, 1, 2, '', '0000-00-00', '5a3d914e-f1bb-11ed-a05b-0242ac12', '2a6c7760-abc8-4226-bc5d-5ec91fa2'),
('fed812c1-7f25-458e-83d8-4ed34557', 4, 2, 5, '', '0000-00-00', '82d1ba56-e6ba-11ed-a05b-0242ac12', 'f4ad81de-a0d3-45d0-a8e2-4afe085a');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `desarrolladoras`
--
ALTER TABLE `desarrolladoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `juegos_desarrolladoras`
--
ALTER TABLE `juegos_desarrolladoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_juegos` (`id_juegos`),
  ADD KEY `fk_plataformas` (`id_desarrolladoras`);

--
-- Indices de la tabla `juegos_favoritos`
--
ALTER TABLE `juegos_favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_usuario`),
  ADD KEY `fk_juego` (`id_juego`);

--
-- Indices de la tabla `juegos_plataformas`
--
ALTER TABLE `juegos_plataformas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_juegos` (`id_juegos`),
  ADD KEY `fk_plataformas` (`id_plataformas`),
  ADD KEY `id_plataformas` (`id_plataformas`);

--
-- Indices de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_usuario`),
  ADD KEY `fk_foro` (`id_foro`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios_foro`
--
ALTER TABLE `usuarios_foro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`id_usuario`),
  ADD KEY `fk_foro` (`id_foro`);

--
-- Indices de la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_juego` (`id_juego`),
  ADD KEY `fk_usuario` (`id_usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `juegos_desarrolladoras`
--
ALTER TABLE `juegos_desarrolladoras`
  ADD CONSTRAINT `juegos_desarrolladoras_ibfk_1` FOREIGN KEY (`id_juegos`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `juegos_desarrolladoras_ibfk_2` FOREIGN KEY (`id_desarrolladoras`) REFERENCES `desarrolladoras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `juegos_favoritos`
--
ALTER TABLE `juegos_favoritos`
  ADD CONSTRAINT `juegos_favoritos_ibfk_2` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `juegos_favoritos_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `juegos_plataformas`
--
ALTER TABLE `juegos_plataformas`
  ADD CONSTRAINT `juegos_plataformas_ibfk_1` FOREIGN KEY (`id_juegos`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `juegos_plataformas_ibfk_2` FOREIGN KEY (`id_plataformas`) REFERENCES `plataformas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`id_foro`) REFERENCES `foro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_foro`
--
ALTER TABLE `usuarios_foro`
  ADD CONSTRAINT `usuarios_foro_ibfk_2` FOREIGN KEY (`id_foro`) REFERENCES `foro` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_foro_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `valoraciones`
--
ALTER TABLE `valoraciones`
  ADD CONSTRAINT `valoraciones_ibfk_1` FOREIGN KEY (`id_juego`) REFERENCES `juegos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `valoraciones_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
