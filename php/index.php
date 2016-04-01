<?php

/*
 *@author Alfredo Rafael Vicente Boix
 */


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;

/* 
 *@brief Aquesta funció realitza la conexió a la base de dades
 *@param 
 *@return PDO Conexió a la base de dades.
 *@todo Canviar el paràmetres de la base de dades
 **/

function getDB() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="";
	$dbname="prova";
	$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;
}

/*
 *@brief Aquesta funció cambia la codificació a UTF8
 *@param &$input string o object descodificat
 *@return el mateix string o object codificat
 *@todo
 **/

function utf8_encode_deep(&$input) {
	if (is_string($input)) {
		$input = utf8_encode($input);
	} else if (is_array($input)) {
		foreach ($input as &$value) {
			utf8_encode_deep($value);
		}

		unset($value);
	} else if (is_object($input)) {
		$vars = array_keys(get_object_vars($input));
		foreach ($vars as $var) {
			utf8_encode_deep($input->$var);
		}
	}
}

/*
 *@brief Aquesta funció realitza una consulta i torna els valors en json 
 *@param $sql string amb llenguatge sql que correspon a la consulta
 *@param $values array amb els valors necessaris per a fer la consulta
 *@return json amb els resultats de la consulta
 *@todo
 **/

function consulta ($sql,$values){
	try {
		$db = getDB();
		$query = $db->prepare($sql);
		$query->execute($values);
		$users = $query->fetchAll();
		if($users) {
			utf8_encode_deep($users);
			echo json_encode($users);
			$db = null;
		} else {
			throw new PDOException('Hi ha hagut un error');
		}
	
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

/*
 *@brief Búsqueda per dni
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args paràmetres rebuts en el get, en auest cas dni
 *@return json amb els resultats de la consulta a través de la funció consulta()
 *@todo
 **/

$app->get('/dni/{dni}',function($request, $response, array $args) {
			$dni = $args['dni'];
			$consulta = "SELECT Estudiant.Nom, Estudiant.Cognoms, Estudiant.DNI, Estudiant.Telefon, Estudiant.Sexe, Estudiant.DataNaixement, Estudiant.PaisNaixement, Estudiant.Nacionalitat, Estudiant.LocalitatNaixement, Estudiant.ProvinciaNaixement, Estudiant.Direccio, Estudiant.CP, Estudiant.Poblacio, Estudiant.Email, Estudiant.Comentaris, Est_Curs.Optativa1, Est_Curs.Optativa2, Est_Curs.Validada, Est_Curs.CursCodi, Cursos.Camp from Estudiant, Est_Curs, Cursos where Estudiant.DNI = ? AND Estudiant.DNI = Est_Curs.DNI AND Est_Curs.CursCodi = Cursos.Codi";
			$valors = array ($dni);
			consulta($consulta,$valors);		
});

/*
 *@brief Búsqueda per Cognom
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args paràmetres rebuts en el get, en auest cas Cognom
 *@return json amb els resultats de la consulta a través de la funció consulta()
 *@todo
 **/

$app->get('/Cognoms/{Cognoms}',function($request, $response, array $args) {
			$Cognoms = $args['Cognoms']. '%';
			$consulta = "SELECT * FROM Estudiant WHERE Cognoms LIKE ?";
			$valors = array ($Cognoms);
			consulta($consulta,$valors);
});

/*
 *@brief Búsqueda per nom
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args paràmetres rebuts en el post
 *@return json amb els resultats de la consulta a través de la funció consulta()
 *@todo
 **/

$app->get('/Nom/{Nom}',function($request, $response, array $args) {
			$Nom = $args['nom']. '%';
			$consulta = "SELECT * FROM Estudiant WHERE Nom LIKE ?";
			$valors = array ($Nom);
			consulta($consulta,$valors);
});

/*
 *@brief Actualitza les dades que s'envien a través del POST o les actualitza
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args paràmetres passats en el POST
 *@return no torna cap valor.
 *@todo Que torne un valor de confirmació com a que ha anat bé la consulta. Millorar la gestió que fa de INSERT, en lloc de borrar en cada if, fer-ho general
 **/

$app->post('/actualitza2', function ($request, $response, $args) {
	$valors = $request->getParsedBody();
	echo json_encode($valors['DNI']);
	
});

$app->post('/actualitza', function ($request, $response, $args) {
			$valors = $request->getParsedBody();
			$db = getDB();
			$sql = "INSERT INTO Estudiant(DNI, Nom, Cognoms, Direccio, CP, Poblacio, sexe, DataNaixement, PaisNaixement, Nacionalitat, LocalitatNaixement, ProvinciaNaixement, Email, Telefon, Comentaris) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE Nom = ?, Cognoms = ?, Direccio = ?, CP = ?, Poblacio = ?, sexe = ?, DataNaixement = ?, PaisNaixement = ?, Nacionalitat = ?, LocalitatNaixement = ?, ProvinciaNaixement = ?, Email = ?, Telefon = ?, Comentaris = ?";
			$data = date('Y-m-d', strtotime($valors['DataNaixement']));
			$values = array ($valors['DNI'], $valors['Nom'], $valors['Cognoms'],  $valors['Direccio'],  $valors['CP'],  $valors['Poblacio'],  $valors['Sexe'],  $data,  $valors['PaisNaixement'],  $valors['Nacionalitat'],  $valors['LocalitatNaixement'],  $valors['ProvinciaNaixement'],  $valors['Email'],  $valors['Telefon'],  $valors['Comentaris'], $valors['Nom'], $valors['Cognoms'],  $valors['Direccio'],  $valors['CP'],  $valors['Poblacio'],  $valors['Sexe'],  $data,  $valors['PaisNaixement'],  $valors['Nacionalitat'],  $valors['LocalitatNaixement'],  $valors['ProvinciaNaixement'],  $valors['Email'],  $valors['Telefon'],  $valors['Comentaris']);
			$values=array_map('utf8_decode', $values);
			try {
				$query = $db->prepare($sql);
				$query->execute($values);
			} catch(PDOException $e) {
				echo '{"error":{"text":'. $e->getMessage() .'}}';
			}
			if (isset($valors['Validada'])) {
				$validada = 1;
			} else {
				$validada = 0;
			}
			
			foreach($valors as $key => $param){
					
				if ($param =="No") {
					$sql = "DELETE from Est_Curs where DNI = ? and CursCodi IN (SELECT DISTINCT Cursos.Codi from Cursos where Cursos.Camp = ?)";
					$values = array ($valors['DNI'],$key);
					try {
						$query = $db->prepare($sql);
						$query->execute($values);
					} catch(PDOException $e) {
						echo '{"error":{"text":'. $e->getMessage() .'}}';
					}
				} elseif (( $key == "ProgramaBcicleII") && ($param !="No")) {
					$sql2 = "DELETE from Est_Curs where DNI = ? and CursCodi IN (SELECT DISTINCT Cursos.Codi from Cursos where Cursos.Camp = ?)";
					$values2 = array ($valors['DNI'], $key);
					try {
						$query = $db->prepare($sql2);
						$query->execute($values2);
					} catch(PDOException $e) {
						echo '{"error":{"text":'. $e->getMessage() .'}}';
					}					
					$sql = "INSERT INTO Est_Curs(DNI, CursCodi, Validada, Optativa1, Optativa2) VALUES (?,?,?,?,?) ON DUPLICATE KEY UPDATE CursCodi= ?, Validada = ?, Optativa1 = ?, Optativa2 = ?";
					$values = array ($valors['DNI'], $param, $validada, $valors['Optativa1'], $valors['Optativa2'], $validada, $param, $valors['Optativa1'], $valors['Optativa2']);
					$values=array_map('utf8_decode', $values);
					try {
						$query = $db->prepare($sql);
						$query->execute($values);
					} catch(PDOException $e) {
						echo '{"error":{"text":'. $e->getMessage() .'}}';
					}
				} elseif (($key == "ProgramaAcicleI" || $key == "ProgramaBDCursosPolivalents" || $key =="ProgramaCValenciaJQCV" || $key == "ProgramaJAnglesBasic") && $param != "No") {
					$sql2 = "DELETE from Est_Curs where DNI = ? and CursCodi IN (SELECT DISTINCT Cursos.Codi from Cursos where Cursos.Camp = ?)";
					$values2 = array ($valors['DNI'], $key);
					try {
						$query = $db->prepare($sql2);
						$query->execute($values2);
					} catch(PDOException $e) {
						echo '{"error":{"text":'. $e->getMessage() .'}}';
					}					
					$sql = "INSERT INTO Est_Curs(DNI, CursCodi, Validada) VALUES (?,?,?) ON DUPLICATE KEY UPDATE Validada = ?";
					$values = array ($valors['DNI'], $param, $validada, $validada);
					$values=array_map('utf8_decode', $values);
					try {
						$query = $db->prepare($sql);
						$query->execute($values);
					} catch(PDOException $e) {
						echo '{"error":{"text":'. $e->getMessage() .'}}';
					}
				}
			
			}		
});

/*
 *@brief Inscriu a un alumne en la base de dades
 *@param $request Li demanem els valors del POST
 *@param $response No s'utilitza
 *@param $args paràmetres rebuts en el post
 *@return 
 *@todo
 **/

$app->post('/inscriu', function ($request, $response, $args) {
			$valors = $request->getParsedBody();
			$db = getDB();
			$sql = "INSERT INTO Estudiant(DNI, Nom, Cognoms, Direccio, CP, Poblacio, sexe, DataNaixement, PaisNaixement, Nacionalitat, LocalitatNaixement, ProvinciaNaixement, Email, Telefon, Comentaris) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";			
			$data = date('Y-m-d', strtotime($valors['DataNaixement']));
			$values = array ($valors['DNI'],  $valors['Nom'],  $valors['Cognoms'],  $valors['Direccio'],  $valors['CP'],  $valors['Poblacio'],  $valors['Sexe'],  $data,  $valors['PaisNaixement'],  $valors['Nacionalitat'],  $valors['LocalitatNaixement'],  $valors['ProvinciaNaixement'],  $valors['Email'],  $valors['Telefon'],  $valors['Comentaris']);
			$values=array_map('utf8_decode', $values);
			try {
					$query = $db->prepare($sql);
					$query->execute($values);
				} catch(PDOException $e) {
					echo '{"error":{"text":'. $e->getMessage() .'}}';
				}
			
			//$db = getDB();
			
			foreach($valors as $key => $param){
					
						if (($key == "ProgramaAcicleI" || $key == "ProgramaBcicleII") && ($param !="No")) {
							$sql = "INSERT INTO Est_Curs(DNI, CursCodi, Validada, Optativa1, Optativa2) VALUES (?,?,?,?,?)";
								if (isset($valors['Validada'])) {
									$values2 = array ($valors['DNI'], $param, 1, $valors['Optativa1'], $valors['Optativa2']);
								} else {
									$values2 = array ($valors['DNI'], $param, 0, $valors['Optativa1'], $valors['Optativa2']);
								}
													
							$values=array_map('utf8_decode', $values2);
							try {
									$query = $db->prepare($sql);
									$query->execute($values2);
								} catch(PDOException $e) {
									echo '{"error":{"text":'. $e->getMessage() .'}}';
								}
						} elseif (($key == "ProgramaBDCursosPolivalents" || $key =="ProgramaCValenciaJQCV" || $key == "ProgramaJAnglesBasic") && $param != "No") {
							$sql = "INSERT INTO Est_Curs(DNI, CursCodi, Validada) VALUES (?,?,?)";
							$values3 = array ($valors['DNI'], $param, $valors['Validada']);
							try {
								$query = $db->prepare($sql);
								$query->execute($values3);
							} catch(PDOException $e) {
								echo '{"error":{"text":'. $e->getMessage() .'}}';
							}
						
						}
					}
					
			
			
			
});

/*
 *@brief Consulta per veure quins cursos estan ofertats
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args No s'utilitza
 *@return json amb els resultats de la consulta a través de la funció consulta()
 *@todo
 **/

$app->get('/ConsultaCursosOfertats',function($request, $response, array $args) {
		$sql = "SELECT * FROM Cursos WHERE Ofertat = ?";
		$values = array ("1");
		consulta ($sql,$values);
});

/*
 *@brief Consulta per veure quins cursos estan ofertats
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args No s'utilitza
 *@return json amb els resultats de la consulta a través de la funció consulta()
 *@todo
 **/

$app->get('/ConsultaCursosTots',function($request, $response, array $args) {
	
	$sql = "SELECT * FROM Cursos WHERE ?";
	$values = array ("1");
	consulta ($sql,$values);
});

$app->post('/GuardaCursos',function($request, $response, array $args) {
	$valors = $request->getParsedBody();
	$db = getDB();
	$sql = "UPDATE Cursos SET Ofertat = 0 where Ofertat = 1";
	try {
		$query = $db->prepare($sql);
		$query->execute();
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
	
	for ($i = 0; $i < sizeof($valors['check']); $i++) {
		
		$sql = "UPDATE Cursos SET Ofertat = 1 WHERE Codi = '". $valors['check'][$i] . "'"; 
		try {	
			$query = $db->prepare($sql);
			$query->execute();
			} catch(PDOException $e) {
				echo '{"error":{"text":'. $e->getMessage() .'}}';
			}
		
	}
	
});

function FerGrafica($Nom,$sql)
{
	$db = getDB();
	try {
		$query = $db->prepare($sql);
		$query->execute();
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
	$data = $query -> fetchAll();
	require_once 'phplot/phplot.php';
	for ($i = 0; $i < sizeof($data); $i++) {
		$estadistica[$i] = array ($data[$i][0],$data[$i][1]);
	}
	$plot = new PHPlot(650,300);
	$plot->SetPlotType('pie');
	$plot->SetImageBorderType('plain');
	$plot->SetShading(10);
	$plot->SetDataType('text-data-single');
	$plot->SetImageBorderType('plain');
	$plot->SetDataValues($estadistica);
	$plot->SetTitle($Nom);
	foreach ($estadistica as $row)
		$plot->SetLegend(implode(': ', $row));
		$plot->SetLegendWorld(5, 5);
		$plot->SetLabelScalePosition(0.4);
		$plot->SetMarginsPixels(125, NULL);
		$plot->DrawGraph();
}


$app->get('/grafica_nacionalitats',function($request, $response, array $args) {
	$sql = "SELECT DISTINCT Nacionalitat,Count(Nacionalitat) as Quantitat FROM Estudiant JOIN Est_Curs where Any='2016-2017' and Estudiant.DNI=Est_Curs.DNI GROUP BY Nacionalitat HAVING Count(Nacionalitat)";
	FerGrafica("Nacionalitats",$sql);
	
});
	
$app->get('/grafica_sexe',function($request, $response, array $args) {
	$sql = "SELECT DISTINCT Sexe,Count(Sexe) as Quantitat FROM Estudiant JOIN Est_Curs where Any='2016-2017' and Estudiant.DNI=Est_Curs.DNI GROUP BY Sexe HAVING Count(Sexe)";	
	FerGrafica("Sexes",$sql);	

});

$app->get('/grafica_Cursos/{curs}',function($request, $response, array $args) {
	$curs = $args['curs'];
	$sql = "SELECT DISTINCT Cursos.Curs,Count(Cursos.Curs) as Quantitat FROM Estudiant JOIN Est_Curs JOIN Cursos where Any='".$curs."' and Estudiant.DNI=Est_Curs.DNI and Cursos.Codi=Est_Curs.CursCodi GROUP BY Cursos.Curs HAVING Count(Cursos.Curs)";	
	FerGrafica("Matriculats per curs",$sql);
});

$app->post('/carregafoto',function($request, $response, array $args) {
	$foto = $_POST["foto"]; //Slim no soporta bé les imatges
	$dni = $_POST['dni'];
	list(, $foto) = explode(',', $foto); //La manera que te el SO d'entendre qe es una imatge
	mkdir($_SERVER['DOCUMENT_ROOT'] . "/fotos_alumnes2");
	file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/fotos_alumnes2/".$dni.".jpg", base64_decode($foto));
	
});

$app->get('/eixir',function($request, $response, array $args) {
	//session_start();
	//session_destroy();
	header("Location: http://localhost/tfm2/login.php");
	});
	
$app->get('/pdf/{dni}',function($request, $response, array $args) {
	
	require_once('classes/class.Creaarxiu.php');
	$pdf = new Creararxiu();
	$pdf->Crea_pdf_matricula($args['dni']);
});
	
$app->run();
?>