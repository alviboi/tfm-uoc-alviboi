<?php 

/**
 ******************************************************
 *  @file class.ConsultesBD.php
 *  @brief Ens permeteix realitzar les consultes que necessitem.
 * Algunes clases van a necessitar conectar-se a la base de dades, aquesta clase permet realitzar eixes consultes.
 * @author Alfredo Rafael Vicente Boix
 * @version 1.0
 * @date Maig 2016
 *
 *
 *******************************************************/



include_once 'class.database.php';

/**
 *@brief Aquesta funció cambia la codificació a UTF8
 *@param &$input string o object descodificat
 *@return string el mateix string o object codificat
 **/

function utf8_encode_deep2(&$input) {
	if (is_string($input)) {
		$input = utf8_encode($input);
	} else if (is_array($input)) {
		foreach ($input as &$value) {
			utf8_encode_deep2($value);
		}

		unset($value);
	} else if (is_object($input)) {
		$vars = array_keys(get_object_vars($input));
		foreach ($vars as $var) {
			utf8_encode_deep2($input->$var);
		}
	}
}

/**
 ******************************************************
 * @brief Clase per a realitzar les consultes
 *
 ******************************************************/

class ConsultesBD{
		public $link;
		
		/**
		 *************************************************************
		 * @brief Constructor . Realitzem la conexió a la base de dades.
		 *************************************************************/
		
		
		function __construct(){ //Construct s'executa només es crea l'objecte
			$db_connection = new dbConnection();
			$this->link = $db_connection->connect();
			return $this->link;
		}
		
/*			
		function InsertaEstudiant($DNI, $Nom, $Cognoms, $Adreça, $CP, $Població, $Sexe, $DataNaixement, $País, $Nacionalitat, $LocalitatNaixement, $ProvínciaNaixement, $Email, $Telèfon){
			$query = $this->link->prepare("INSERT INTO `Estudiant`(DNI, Nom, Cognoms, Adreça, CP, Població, Sexe, DataNaixement, País, Nacionalitat, LocalitatNaixement, ProvínciaNaixement, Email, Telèfon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			$values = array ($DNI, $Nom, $Cognoms, $Adreça, $CP, $Població, $Sexe, $DataNaixement, $País, $Nacionalitat, $LocalitatNaixement, $ProvínciaNaixement, $Email, $Telèfon);
			$query->execute($values);
			$result = $query -> fetchAll();
			$output=utf8_encode_deep2($result);
			return $output;
		}
		
*/		
		
		/**
		 *@brief Aquesta funció consulta un Estudiant segons El seu DNI, Nom i COgnoms
		 *@param $DNI DNI de l'alumnes que es vol consultar
		 *@param $Nom Nom o part del nom de l'alumne.
		 *@param $Cognoms Cognom o part del Cognom.
		 *@return json amb totes les dades fruït del resultat.
		 *@todo Aquesta funció encara no està implementada en el sistema.
		 **/
		
		
		function ConsultaEstudiant($DNI, $Cognoms, $Nom){ //
		
			$query = $this->link->prepare("SELECT * FROM Estudiant WHERE dni=? OR Cognoms LIKE ? OR Nom LIKE ?");
			$Cognoms = $Cognoms . '%';
			$Nom = $Nom . '%';
			$values = array ($DNI, $Cognoms, $Nom);
			$query->execute($values);
			$result = $query -> fetchAll();
			utf8_encode_deep2($result);
			return json_encode($result);
			
		}
		
		/**
		 *@brief Aquesta funció consulta un Estudiant segons El seu DNI únicament.
		 *@param $DNI DNI de l'alumnes que es vol consultar
		 *@return json amb totes les dades fruït del resultat.
		 **/
		
		
		function ConsultaCurs($DNI){ //
			
			
			
				$query = $this->link->prepare("SELECT Cursos.Curs, Est_Curs.Optativa1, Est_Curs.Optativa2, Cursos.Camp from Est_Curs join Cursos where Est_Curs.CursCodi=Cursos.Codi and dni = ?");
				$values = array ($DNI);
				$query->execute($values);
				$result = $query -> fetchAll();
				$count = $query -> rowCount();
				if ($count>0) {
					//$output=array_map('utf8_encode', $result);
					utf8_encode_deep2($result);
					return json_encode($result);
				}
				else  {
					return NULL;
				}
				
				
				
		}
		
		/**
		 *@brief Aquesta funció realitza la càrrega d'una fotografia
		 *@param $DNI DNI de l'alumnes que es vol consultar
		 *@param $foto Fotografia de l'alumne
		 *@todo Aquesta funció encara no està implementada en el sistema, ha sigut una funció de proves.
		 **/
		
		
		function CarregaFoto ($foto, $DNI){
			
			list(, $foto) = explode(',', $foto); //La manera que te el SO d'entendre qe es una imatge
			mkdir($_SERVER['DOCUMENT_ROOT'] . "/fotos_alumnes");
			file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/fotos_alumnes/".$DNI.'.jpg', base64_decode($foto));
			die;
		}
		
				
}	


//$user = new ConsultesBD();
//$b = $user->ConsultaCurs("73567572W");
//echo $c[0]
//print_r($b);

//var_dump($b);
//echo $c["0"]["DNI"];

?>