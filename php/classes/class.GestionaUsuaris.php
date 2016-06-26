<?php 
	
/**
 ******************************************************
 *  @file class.GestionaUsuaris.php
 *  @brief Ens permeteix fr el login dels usuari
 * Aquesta clase estava pensada per a gestionar tot allò relacionat amb els usuaris professors.
 * @author Alfredo Rafael Vicente Boix
 * @version 1.0
 * @date Maig 2016
 *
 *
 *******************************************************/



include_once 'class.database.php';
	
/**
 ******************************************************
 * @brief Clase per a gestionar el login dels usuaris
 *
 ******************************************************/
	
	
	class GestionaUsuaris{
		public $link;
		
		
		/**
		 *************************************************************
		 * @brief Constructor . Realitzem la conexió a la base de dades.
		 *************************************************************/
		
		function __construct(){ //Construct s'executa només es crea el objecte
			$db_connection = new dbConnection();
			$this->link = $db_connection->connect();
			return $this->link;
		}
		
		/*
		
		function registraUsusaris($username,$email,$password,$ip_address,$time,$date){
			$query = $this->link->prepare("INSERT INTO users (username, email, password,ip_address,time,date) VALUES (?,?,?,?,?,?)");
			$values = array ($username,$email,$password,$ip_address,$time,$date);
			$query->execute($values);
			$counts = $query->rowCount();
			return $counts;
		}
		
		
		//var campos = ["Nom", "Cognoms", "DNI", "Telefon", "Sexe", "DataNaixement", "PaisNaixement", "Nacionalitat", "LocalitatNaixement", "ProvinciaNaixement", "Direccio", "CP", "Poblacio", "Email"]; //, "ProgramaACicleI", "ProgramaBCicleII", "Optativa1", "Optativa2", "ProgramaCValenciaJQCV", "ProgramaBDCursosPolivalents", "ProgramaJAnglesBasic", "Comentaris"];
		
		function registraAlumne($Nom,$Cognoms,$DNI,$Telefon,$Sexe,$DataNaixement,$PaisNaixement,$Nacionalitat,$LocalitatNaixement,$ProvinciaNaixement,$Direccio,$CP,$Poblacio,$Email,$CicleIA,$CicleIIB,$Optativa1,$Optativa2,$ProgramaC,$CursosPolivalents,$ProgramaJAngles,$Comentaris,$Validada){
			$query = $this->link->prepare("INSERT INTO Estudiant (`DNI`, `Nom`, `Cognoms`, `Direccio`, `CP`, `Poblacio`, `Sexe`, `DataNaixement`, `PaisNaixement`, `Nacionalitat`, `LocalitatNaixement`, `ProvinciaNaixement`, `Email`, `Telefon`, `Comentaris`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			$values = array ($DNI, $Nom, $Cognoms, $Direccio, $CP, $Poblacio, $Sexe, $DataNaixement, $PaisNaixement, $Nacionalitat, $LocalitatNaixement, $ProvinciaNaixement, $Email, $Telefon,$Comentaris);
			$query->execute($values);
			$cursos = array("CicleIA","CicleIIB","ProgramaC","CursosPolivalents","ProgramaJAngles");
			$cursos_valors = array($CicleIA,$CicleIIB,$ProgramaC,$CursosPolivalents,$ProgramaJAngles);
			for ($i = 0; $i < 5; $i++) {
				if ($cursos_valors[$i] == "No") {
					
				} elseif ($cursos[$i] == "CicleIA" || $cursos[$i] == "CicleIIB"){
					$query2 = $this->link->prepare("INSERT INTO ".$cursos[$i]." ('DNI',Torn','Optativa1','Optativa2','Validada') VALUES (?,?,?,?,?)");
					$val = array($DNI,$cursos_valors[$i],$Optativa1,$Optativa2,$Validada);
					$query2->execute($val);
				} else {
					//$query2 = $this->link->prepare("INSERT INTO ".$cursos[$i]." (DNI,Torn,Validada) VALUES (?,?,0)");
					$query2 = $this->link->prepare("INSERT INTO ".$cursos[$i]." (DNI,Torn,Validada) VALUES (?,?,?)");
					$val = array($DNI,$cursos_valors[$i],$Validada);
					$query2->execute($val);
				}
			}
			
		}
		
		function LlistatperCursos($Curs) {
			$query2 = $this->link->prepare("SELECT * FROM Estudiant INNER JOIN ".$Curs." ORDER BY Estudiant.Cognom") ;
			$query2->execute();
			$result = $query2 -> fetchObject();
			return json_encode($result);
			return $result;
		}
		
		
		
		
		function Estadístiques() {
			$query2 = $this->link->prepare("SELECT * FROM Estudiant INNER JOIN ".$Curs." ORDER BY Estudiant.Cognom") ;
			$query2->execute();
			$result = $query2 -> fetchObject();
			return json_encode($result);
			return $result;
		}
		
		
		*/
		
		/**
		 *@brief Aquesta funció realitza el logins dels professors.
		 *@param $username Nom de usuari
		 *@param $pasword Contrasenya de l'usuari.
		 *@return 1 Si ha realitzat el login correctament.
		 **/
		
		function LoginUsuaris($username,$password){
			$query2 = $this->link->query("SELECT * FROM usuaris WHERE usuari = '$username' AND password = '$password'");
			$rowcount2 = $query2->rowCount();
			return $rowcount2;
		}
		
		/**
		 *@brief Aquesta funció agafa la informació dela persona que ha entrar
		 *@param $username Nom de usuari
		 *@return Totes les seues dades.
		 **/
		
		function  UsuariInfo($username){
			$query3 = $this->link->query("SELECT * FROM usuaris WHERE usuari ='$username'");
			$a = $query3->rowCount();
			if ($a == 1)
			{
				$result = $query3 -> fetchObject();
				return $result;
			}
			else {
				
				return $a;
			}
		}
		
	}
	//$user = new GestionaUsuaris();
	//echo $user->registraUsusaris('bob', 'bob@gmail.com','bob', '127.0.0.1', '12:00', '29-02-2016');
	//$b = $user->GetUserInfo('admin');
	//print_r($b);
	//echo $b->id;
	//$user = new GestionaUsuaris();
	//$user->registraAlumne("Alumne","Cognoms1","00000008A","Telefon","Sexe","1979-05-05","PaisNaixement","Nacionalitat","LocalitatNaixement","ProvinciaNaixement","Direccio","CP","Poblacio","Email","No","No","No","No","No","CursosPolivalents","No","Comentaris");
	//$b = $user->LlistatperCursos();
	//print_r($b);
	//echo $b->id;
	?>