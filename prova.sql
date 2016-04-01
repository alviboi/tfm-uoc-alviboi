-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Temps de generació: 02-04-2016 a les 00:00:31
-- Versió del servidor: 10.1.9-MariaDB
-- Versió de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `prova`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `Cursos`
--

CREATE TABLE `Cursos` (
  `Codi` varchar(7) NOT NULL,
  `Curs` varchar(29) DEFAULT NULL,
  `Ofertat` int(1) DEFAULT NULL,
  `Camp` varchar(28) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Bolcant dades de la taula `Cursos`
--

INSERT INTO `Cursos` (`Codi`, `Curs`, `Ofertat`, `Camp`) VALUES
('AcGSm', 'Accés CFGS matí', 0, 'ProgramaBDCursosPolivalents'),
('AcGSv', 'Accés CFGS vesprada', 1, 'ProgramaBDCursosPolivalents'),
('AcUNm', 'Accés Universitat matí', 0, 'ProgramaBDCursosPolivalents'),
('AcUNv', 'Accés Universitat vesprada', 0, 'ProgramaBDCursosPolivalents'),
('ALFm', 'ALFA matí', 0, 'ProgramaACicleI'),
('ALFv', 'ALFA vesprada', 1, 'ProgramaACicleI'),
('BASm', 'BASE matí', 0, 'ProgramaACicleI'),
('BASv', 'BASE vesprada', 0, 'ProgramaACicleI'),
('CA1Angm', 'Certificat A1 Anglès matí', 0, 'ProgramaJAnglesBasic'),
('CA1Angv', 'Certificat A1 Anglès vesprada', 1, 'ProgramaJAnglesBasic'),
('CA2Angm', 'Certificat A2 Anglès matí', 0, 'ProgramaJAnglesBasic'),
('CA2Angv', 'Certificat A2 Anglès vesprada', 0, 'ProgramaJAnglesBasic'),
('CB1Angm', 'Certificat B1 Anglès matí', 0, 'ProgramaJAnglesBasic'),
('CB2Angv', 'Certificat B1 Anglès vesprada', 1, 'ProgramaJAnglesBasic'),
('Elm', 'ELEMENTAL matí', 0, 'ProgramaCValenciaJQCV'),
('Elv', 'ELEMENTAL vesprada', 0, 'ProgramaCValenciaJQCV'),
('G21m', 'GES2.1 matí', 1, 'ProgramaBcicleII'),
('G21V', 'GES2.1 vesprada', 1, 'ProgramaBcicleII'),
('G22m', 'GES2.2 matí', 1, 'ProgramaBcicleII'),
('G22v', 'GES2.2 vesprada', 1, 'ProgramaBcicleII'),
('Mim', 'MITJÀ matí', 1, 'ProgramaCValenciaJQCV'),
('Miv', 'MITJÀ vesprada', 0, 'ProgramaCValenciaJQCV'),
('Orm', 'ORAL matí', 0, 'ProgramaCValenciaJQCV'),
('Orv', 'ORAL vesprada', 0, 'ProgramaCValenciaJQCV'),
('SUPm', 'SUPERIOR matí', 0, 'ProgramaCValenciaJQCV'),
('SUPv', 'SUPERIOR vesprada', 1, 'ProgramaCValenciaJQCV'),
('TAL13m', 'TALLER1.3 matí', 0, 'ProgramaACicleI'),
('TAL13v', 'TALLER1.3 vesprada', 1, 'ProgramaACicleI'),
('TALAngm', 'Taller angles matí', 0, 'ProgramaJAnglesBasic'),
('TALAngv', 'Taller angles vesprada', 0, 'ProgramaJAnglesBasic');

-- --------------------------------------------------------

--
-- Estructura de la taula `Estudiant`
--

CREATE TABLE `Estudiant` (
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
  `Comentaris` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Estudiant`
--

INSERT INTO `Estudiant` (`DNI`, `Nom`, `Cognoms`, `Direccio`, `CP`, `Poblacio`, `Sexe`, `DataNaixement`, `PaisNaixement`, `Nacionalitat`, `LocalitatNaixement`, `ProvinciaNaixement`, `Email`, `Telefon`, `Comentaris`) VALUES
('00000000C', 'Natalia', 'VICENTE BÓIX', 'TRINQUET 44', 4654, 'Sueca', 'Home', '1970-01-01', 'fsafasfas', 'dominiquesa (WD)', 'moixent', 'alacant', 'fsfsafd@fdsfa.es', 654722866, ''),
('00000000D', 'Natalia', 'Rico', 'TRINQUET 44', 46410, 'SUECA', 'Dona', '1970-01-01', 'fsafasfas', 'eritrea (ERT)', 'moixent', 'fsafasf', 'nataliues15@gmail.com', 45646546, ''),
('00000000E', 'Natalia', 'VICENTE BOI', 'Juan de juanes 4', 4654, 'SUECA', 'Home', '1970-01-01', 'DSADA', 'de l''Antàrtida (ATA)', 'VALÈNCIA', 'VALENCIA', 'mdeviboi@gmail.com', 654722866, ''),
('00000000G', 'Natalia', 'Rico', 'TRINQUET 44', 46410, 'SUECA', 'Dona', '1970-01-01', 'fsafasfas', 'eritrea (ERT)', 'moixent', 'fsafasf', 'nataliues15@gmail.com', 45646546, ''),
('00000000Y', 'ALFREDO', 'VICENTE BOI', 'TRINQUET 44', 4654, 'Sueca', 'Home', '1970-01-01', 'fsafasfas', 'de Saint Lucia (WL)', 'moixent', 'DSADsa', 'mdeviboi@gmail.com', 45646546, ''),
('11111111A', 'Prova', 'pdfso', 'fsdfsa', 4654, 'fsdfsa', 'Home', '0000-00-00', 'fsafasfas', 'espanyola (E)', 'fdsafsafa', 'fsafasf', 'fsfsafd@fdsfa.es', 45646546, ''),
('11111112A', 'Prova', 'pdfso', 'fsdfsa', 4654, 'fsdfsa', 'Home', '0000-00-00', 'fsafasfas', 'espanyola (E)', 'fdsafsafa', 'fsafasf', 'fsfsafd@fdsfa.es', 45646546, ''),
('11114444A', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'armènia (AR)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('12345678A', 'ÃƒÂLFREDO', 'VICENTE BÃƒÂ“IX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'armÃƒÂ¨nia (AR)', 'VALÃƒÂˆNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('12345678G', 'ALFREDO', 'Rico', 'TRINQUET 44', 4654, 'fsdfsa', 'Dona', '1970-01-01', 'fsafasfas', 'de Sierra Leone (WAL)', 'SUECA', 'alacant', 'nataliues15@gmail.com', 454684, ''),
('12345679A', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'australiana (AUS)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('12345687A', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'australiana (CCK)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('12457896A', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'angolesa (AO)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('22222222A', 'ÃLFREDO', 'VICENTE BÃ“IX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'armÃ¨nia (AR)', 'VALÃˆNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('32569814q', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '2016-11-03', 'ESPANYA', 'australiana (HMD)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('32659874W', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'australiana (AUS)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('33333333e', 'ÃLFREDO', 'VICENTE BÃ“IX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'alemanya (D)', 'VALÃˆNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('55555555A', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'alemanya (D)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('73567570w', 'ÃLFREDO', 'VICENTE BÃ“IX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'algeriana (DZ)', 'VALÃˆNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('73567571J', 'ÁLFREDO', 'Rico', 'fsdfsa', 46410, 'fsdfsa', 'Home', '2016-11-03', 'DSADA', 'espanyola (E)', 'moixent', 'fsafasf', 'nataliues15@gmail.com', 654722866, ''),
('73567571w', 'ÃLFREDO', 'VICENTE BÃ“IX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'apÃ trida (APT)', 'VALÃˆNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('73567572A', 'Natalia', 'VICENTE BÓIX', 'TRINQUET VELL 44', 46410, 'SUECA', 'Home', '1979-07-05', 'DSADA', 'espanyola (E)', 'moixent', 'fsafasf', 'alviboi@gmail.com', 654722866, ''),
('73567572B', 'Natalia', 'VICENTE BÓIX', 'TRINQUET VELL 44', 46410, 'SUECA', 'Home', '1979-07-05', 'DSADA', 'espanyola (E)', 'moixent', 'fsafasf', 'alviboi@gmail.com', 654722866, ''),
('73567572C', 'Natalia', 'VICENTE BÓIX', 'TRINQUET VELL 44', 46410, 'SUECA', 'Home', '1979-07-05', 'DSADA', 'espanyola (E)', 'moixent', 'fsafasf', 'alviboi@gmail.com', 654722866, ''),
('73567572w', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET VELL 44', 46410, 'SUECA', 'Dona', '1979-07-05', 'ESPANYA', 'espanyola (E)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('73567572X', 'blablabla', 'Rico', 'Juan de juanes 4', 4654, 'Sueca', 'Home', '1970-01-01', 'DSADA', 'dominicana (DOM)', 'moixent', 'fsafasf', 'fdfasf@dsafsda.es', 654722866, ''),
('73567579w', 'ÃƒÂLFREDO', 'VICENTE BÃƒÂ“IX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'andorrana (AND)', 'VALÃƒÂˆNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('98765432Q', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '0000-00-00', 'ESPANYA', 'andorrana (AND)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, ''),
('99999999A', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999B', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999C', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999D', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999E', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999F', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999G', 'Natalia', 'Rico', 'Juan de juanes 4', 46410, 'Sueca', 'Dona', '1970-01-01', 'ESPANYA', 'espanyola (E)', 'moixent', 'alacant', 'nataliues15@gmail.com', 620000000, ''),
('99999999H', 'Natalia', 'Rico', 'TRINQUET 44', 46410, 'Sueca', 'Home', '1970-01-01', 'DSADA', 'filipina (PI)', 'VALÈNCIA', 'alacant', 'alviboi@gmail.com', 654722866, ''),
('99999999I', 'Natalia', 'Rico', 'TRINQUET 44', 46410, 'Sueca', 'Home', '1970-01-01', 'DSADA', 'filipina (PI)', 'VALÈNCIA', 'alacant', 'alviboi@gmail.com', 654722866, ''),
('99999999J', 'Natalia', 'Rico', 'TRINQUET 44', 46410, 'Sueca', 'Home', '1970-01-01', 'DSADA', 'filipina (PI)', 'VALÈNCIA', 'alacant', 'alviboi@gmail.com', 654722866, ''),
('99999999W', 'ÁLFREDO', 'VICENTE BÓIX', 'TRINQUET 44', 46410, 'SUECA', 'Home', '1979-07-05', 'ESPANYA', 'angolesa (AO)', 'VALÈNCIA', 'VALENCIA', 'alviboi@gmail.com', 654722866, '');

-- --------------------------------------------------------

--
-- Estructura de la taula `Est_Curs`
--

CREATE TABLE `Est_Curs` (
  `DNI` varchar(9) NOT NULL,
  `CursCodi` varchar(50) NOT NULL,
  `Any` varchar(50) NOT NULL DEFAULT '2016-2017',
  `Optativa1` varchar(50) NOT NULL,
  `Optativa2` varchar(50) NOT NULL,
  `Validada` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `Est_Curs`
--

INSERT INTO `Est_Curs` (`DNI`, `CursCodi`, `Any`, `Optativa1`, `Optativa2`, `Validada`) VALUES
('00000000C', 'ALFv', '2016-2017', 'No', 'No', 0),
('00000000D', 'TAL13v', '2016-2017', 'No', 'No', 0),
('00000000E', 'TAL13v', '2016-2017', 'No', 'No', 0),
('00000000G', 'TAL13v', '2016-2017', 'No', 'No', 0),
('00000000Y', 'ALFv', '2016-2017', 'No', 'No', 0),
('00000000Y', 'TAL13v', '2016-2017', 'No', 'No', 0),
('12345678G', 'ALFv', '2016-2017', 'No', 'No', 0),
('12457896A', 'G21V', '2016-2017', 'GH', 'TMI', 0),
('32569814q', 'G21V', '2016-2017', 'GH', 'TMI', 0),
('32659874W', 'G21V', '2016-2017', 'TMI', 'OIP', 1),
('55555555A', 'G21V', '2016-2017', 'INF', 'OIP', 0),
('73567571J', 'TAL13v', '2016-2017', 'No', 'No', 0),
('73567572A', 'TAL13v', '2016-2017', 'No', 'No', 0),
('73567572w', 'G21m', '2016-2017', 'TMI', 'No', 1),
('73567572X', 'SUPv', '2016-2017', '', '', NULL),
('98765432Q', 'G21V', '2016-2017', 'OIP', 'TMI', 0),
('99999999A', 'SUPv', '2016-2017', '', '', NULL),
('99999999F', 'G21V', '2016-2017', 'OIP', 'TMI', 0),
('99999999H', 'TAL13v', '2016-2017', 'No', 'No', 0),
('99999999W', 'G21V', '2016-2017', 'OIP', 'TMI', 0);

-- --------------------------------------------------------

--
-- Estructura de la taula `usuaris`
--

CREATE TABLE `usuaris` (
  `id` int(11) NOT NULL,
  `Nom` varchar(15) NOT NULL,
  `usuari` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Bolcant dades de la taula `usuaris`
--

INSERT INTO `usuaris` (`id`, `Nom`, `usuari`, `password`) VALUES
(2, 'ALFREDO RAFAEL', 'admin', 'admin');

--
-- Indexos per taules bolcades
--

--
-- Index de la taula `Cursos`
--
ALTER TABLE `Cursos`
  ADD PRIMARY KEY (`Codi`);

--
-- Index de la taula `Estudiant`
--
ALTER TABLE `Estudiant`
  ADD PRIMARY KEY (`DNI`),
  ADD UNIQUE KEY `DNI` (`DNI`);

--
-- Index de la taula `Est_Curs`
--
ALTER TABLE `Est_Curs`
  ADD PRIMARY KEY (`DNI`,`CursCodi`);

--
-- Index de la taula `usuaris`
--
ALTER TABLE `usuaris`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuari` (`usuari`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `usuaris`
--
ALTER TABLE `usuaris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
