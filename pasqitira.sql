-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Temps de generació: 26-06-2016 a les 12:36:42
-- Versió del servidor: 5.5.49-0ubuntu0.14.04.1
-- Versió de PHP: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de dades: `pasqitira`
--
CREATE DATABASE IF NOT EXISTS `pasqitira` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `pasqitira`;

-- --------------------------------------------------------

--
-- Estructura de la taula `Any`
--

CREATE TABLE IF NOT EXISTS `Any` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Any` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Any` (`Any`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Bolcant dades de la taula `Any`
--

INSERT INTO `Any` (`id`, `Any`) VALUES
(1, 2015),
(2, 2016);

-- --------------------------------------------------------

--
-- Estructura de la taula `Cursos`
--

CREATE TABLE IF NOT EXISTS `Cursos` (
  `Codi` varchar(50) NOT NULL,
  `Curs` varchar(50) NOT NULL,
  `Ofertat` int(1) DEFAULT NULL,
  `Camp` varchar(28) DEFAULT NULL,
  PRIMARY KEY (`Codi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Bolcant dades de la taula `Cursos`
--

INSERT INTO `Cursos` (`Codi`, `Curs`, `Ofertat`, `Camp`) VALUES
('AcGSm', 'Accés CFGS matí', 0, 'ProgramaBDCursosPolivalents'),
('AcGSv', 'Accés CFGS vesprada', 1, 'ProgramaBDCursosPolivalents'),
('AcUNm', 'Accés Universitat matí', 1, 'ProgramaBDCursosPolivalents'),
('AcUNv', 'Accés Universitat vesprada', 0, 'ProgramaBDCursosPolivalents'),
('ALFm', 'ALFA matí', 0, 'ProgramaACicleI'),
('ALFv', 'ALFA vesprada', 1, 'ProgramaACicleI'),
('BASm', 'BASE matí', 1, 'ProgramaACicleI'),
('BASv', 'BASE vesprada', 0, 'ProgramaACicleI'),
('CA1Angm', 'Certificat A1 Anglès matí', 1, 'ProgramaJAnglesBasic'),
('CA1Angv', 'Certificat A1 Anglès vesprada', 0, 'ProgramaJAnglesBasic'),
('CA2Angm', 'Certificat A2 Anglès matí', 1, 'ProgramaJAnglesBasic'),
('CA2Angv', 'Certificat A2 Anglès vesprada', 0, 'ProgramaJAnglesBasic'),
('CB1Angm', 'Certificat B1 Anglès matí', 1, 'ProgramaJAnglesBasic'),
('CB2Angv', 'Certificat B1 Anglès vesprada', 0, 'ProgramaJAnglesBasic'),
('Elm', 'ELEMENTAL matí', 1, 'ProgramaCValenciaJQCV'),
('Elv', 'ELEMENTAL vesprada', 0, 'ProgramaCValenciaJQCV'),
('G21m', 'GES2.1 matí', 1, 'ProgramaBcicleII'),
('G21V', 'GES2.1 vesprada', 1, 'ProgramaBcicleII'),
('G22d', 'GES2.2 distància', 1, 'ProgramaBcicleII'),
('G22m', 'GES2.2 matí', 1, 'ProgramaBcicleII'),
('G22v', 'GES2.2 vesprada', 1, 'ProgramaBcicleII'),
('Mim', 'MITJÀ matí', 1, 'ProgramaCValenciaJQCV'),
('Miv', 'MITJÀ vesprada', 0, 'ProgramaCValenciaJQCV'),
('Orm', 'ORAL matí', 0, 'ProgramaCValenciaJQCV'),
('Orv', 'ORAL vesprada', 1, 'ProgramaCValenciaJQCV'),
('SUPm', 'SUPERIOR matí', 0, 'ProgramaCValenciaJQCV'),
('SUPv', 'SUPERIOR vesprada', 1, 'ProgramaCValenciaJQCV'),
('TAL13m', 'TALLER1.3 matí', 1, 'ProgramaACicleI'),
('TAL13v', 'TALLER1.3 vesprada', 1, 'ProgramaACicleI'),
('TALAngm', 'Taller angles matí', 1, 'ProgramaJAnglesBasic'),
('TALAngv', 'Taller angles vesprada', 1, 'ProgramaJAnglesBasic');

-- --------------------------------------------------------

--
-- Estructura de la taula `Estudiant`
--

CREATE TABLE IF NOT EXISTS `Estudiant` (
  `DNI` varchar(9) NOT NULL,
  `Nom` varchar(30) NOT NULL,
  `Cognoms` varchar(60) NOT NULL,
  `Direccio` varchar(60) NOT NULL,
  `CP` int(5) NOT NULL,
  `Poblacio` varchar(30) NOT NULL,
  `Sexe` varchar(10) NOT NULL,
  `DataNaixement` date NOT NULL,
  `PaisNaixement` varchar(40) NOT NULL,
  `Nacionalitat` varchar(30) NOT NULL,
  `LocalitatNaixement` varchar(30) NOT NULL,
  `ProvinciaNaixement` varchar(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Telefon` int(9) NOT NULL,
  `Comentaris` varchar(250) NOT NULL,
  `passwd_moodle` varchar(10) NOT NULL,
  PRIMARY KEY (`DNI`),
  UNIQUE KEY `DNI` (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Estudiant`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `Est_Curs`
--

CREATE TABLE IF NOT EXISTS `Est_Curs` (
  `DNI` varchar(9) NOT NULL,
  `CursCodi` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Any` varchar(50) NOT NULL DEFAULT '2016',
  `Optativa1` varchar(50) NOT NULL,
  `Optativa2` varchar(50) NOT NULL,
  `Validada` tinyint(1) DEFAULT NULL,
  `Matriculat` int(11) NOT NULL,
  PRIMARY KEY (`DNI`,`CursCodi`,`Any`),
  KEY `Est_Curs_ibfk_1` (`CursCodi`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Est_Curs`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `GES_Grups`
--

CREATE TABLE IF NOT EXISTS `GES_Grups` (
  `DNI` varchar(9) NOT NULL,
  `Codi_Curs` varchar(30) NOT NULL,
  `Grup` varchar(10) NOT NULL,
  PRIMARY KEY (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de la taula `usuaris`
--

CREATE TABLE IF NOT EXISTS `usuaris` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(15) NOT NULL,
  `usuari` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuari` (`usuari`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Bolcant dades de la taula `usuaris`
--

INSERT INTO `usuaris` (`id`, `Nom`, `usuari`, `password`) VALUES
(2, 'ALFREDO RAFAEL', 'admin', 'admin'),
(3, 'Otro profe', '1234', '1234'),
(4, 'MAR', 'mar', '1234'),
(7, 'aaaa', 'aaaa', '1234');

--
-- Restriccions per taules bolcades
--

--
-- Restriccions per la taula `Est_Curs`
--
ALTER TABLE `Est_Curs`
  ADD CONSTRAINT `dni` FOREIGN KEY (`DNI`) REFERENCES `Estudiant` (`DNI`) ON DELETE CASCADE,
  ADD CONSTRAINT `Est_Curs_ibfk_1` FOREIGN KEY (`CursCodi`) REFERENCES `Cursos` (`Codi`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restriccions per la taula `GES_Grups`
--
ALTER TABLE `GES_Grups`
  ADD CONSTRAINT `GES_Grups_ibfk_1` FOREIGN KEY (`DNI`) REFERENCES `Est_Curs` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
