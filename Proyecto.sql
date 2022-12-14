-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: HelpDesktop
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Registros`
--

DROP TABLE IF EXISTS `Registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Registros` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `IDT` int(10) DEFAULT NULL,
  `Departamento` varchar(30) NOT NULL,
  `Categoria` varchar(30) NOT NULL,
  `Recurso` varchar(30) NOT NULL,
  `Emitido` date NOT NULL,
  `Estado` varchar(20) NOT NULL,
  `Prioridad` varchar(20) NOT NULL,
  `Calificacion` varchar(20) NOT NULL,
  `Supervisor` varchar(20) NOT NULL,
  `Registrado` char(1) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `IDT` (`IDT`),
  CONSTRAINT `Registros_ibfk_1` FOREIGN KEY (`IDT`) REFERENCES `Tecnico` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Registros`
--

LOCK TABLES `Registros` WRITE;
/*!40000 ALTER TABLE `Registros` DISABLE KEYS */;
INSERT INTO `Registros` VALUES (1,1,'Sistemas','Hardware','Computador i3','2023-05-25','Asignado','Critico','Pendiente','Raul','s');
/*!40000 ALTER TABLE `Registros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tecnico`
--

DROP TABLE IF EXISTS `Tecnico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tecnico` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Activo` char(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tecnico`
--

LOCK TABLES `Tecnico` WRITE;
/*!40000 ALTER TABLE `Tecnico` DISABLE KEYS */;
INSERT INTO `Tecnico` VALUES (1,'Misa','Yamasaki','N');
/*!40000 ALTER TABLE `Tecnico` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 11:59:46
