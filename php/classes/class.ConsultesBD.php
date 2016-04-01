<?php 
include_once 'class.database.php';
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

class ConsultesBD{
		public $link;
		function __construct(){ //Construct s'executa només es crea l'objecte
			$db_connection = new dbConnection();
			$this->link = $db_connection->connect();
			return $this->link;
		}
		
		function InsertaEstudiant($DNI, $Nom, $Cognoms, $Adreça, $CP, $Població, $Sexe, $DataNaixement, $País, $Nacionalitat, $LocalitatNaixement, $ProvínciaNaixement, $Email, $Telèfon){
			$query = $this->link->prepare("INSERT INTO `Estudiant`(DNI, Nom, Cognoms, Adreça, CP, Població, Sexe, DataNaixement, País, Nacionalitat, LocalitatNaixement, ProvínciaNaixement, Email, Telèfon) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			$values = array ($DNI, $Nom, $Cognoms, $Adreça, $CP, $Població, $Sexe, $DataNaixement, $País, $Nacionalitat, $LocalitatNaixement, $ProvínciaNaixement, $Email, $Telèfon);
			$query->execute($values);
			$result = $query -> fetchAll();
			$output=utf8_encode_deep2($result);
			return $output;
		}
		
		function InsertaCurs($Programa, $DNI, $Optativa1, $Optativa2, $Validada){
				
		}
		
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