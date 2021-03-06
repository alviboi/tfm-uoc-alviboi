<?php
session_start();

/*
 *@author Alfredo Rafael Vicente Boix
 */


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;


function comprova_sessio() {
	if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true)
	{
	
	}
	else
	{
	    header('Location: /tfm2/matriculaalumnes.php');
	    
		exit;
	}
}


/* 
 *@brief Aquesta funció realitza la conexió a la base de dades
 *@param 
 *@return PDO Conexió a la base de dades.
 **/

function getDB() {
    include 'classes/datos.php';
	$dbConnection = new PDO("mysql:host=$DBserver;dbname=$DBname", $DBuser, $DBpassword);
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
			throw new PDOException('La consulta no té resultats');
		}
	
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $error;
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

			comprova_sessio();
			$dni = $args['dni'];
			$sql = "SELECT Estudiant.Nom, Estudiant.Cognoms, Estudiant.DNI, Estudiant.Telefon, Estudiant.Sexe, DATE_FORMAT(Estudiant.DataNaixement,'%d/%m/%Y') AS DataNaixement, Estudiant.PaisNaixement, Estudiant.Nacionalitat, Estudiant.LocalitatNaixement, Estudiant.ProvinciaNaixement, Estudiant.Direccio, Estudiant.CP, Estudiant.Poblacio, Estudiant.Email, Estudiant.Comentaris, Est_Curs.Optativa1, Est_Curs.Optativa2, Est_Curs.Validada, Est_Curs.CursCodi, Est_Curs.Matriculat, Cursos.Camp FROM (Estudiant LEFT JOIN Est_Curs ON Estudiant.DNI = Est_Curs.DNI) LEFT JOIN Cursos ON Est_Curs.CursCodi = Cursos.Codi where Estudiant.DNI = ? AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
			$valors = array ($dni);
			$error = consulta($sql,$valors);
			if (isset($error['error'])) {
				return $response->withJson($error,400);
			}	
});

$app->get('/dni_antic/{dni}',function($request, $response, array $args) {
	$dni = $args['dni'];
	$sql = "SELECT Estudiant.Nom, Estudiant.Cognoms, Estudiant.DNI, Estudiant.Telefon, Estudiant.Sexe, DATE_FORMAT(Estudiant.DataNaixement,'%d/%m/%Y') AS DataNaixement, Estudiant.PaisNaixement, Estudiant.Nacionalitat, Estudiant.LocalitatNaixement, Estudiant.ProvinciaNaixement, Estudiant.Direccio, Estudiant.CP, Estudiant.Poblacio, Estudiant.Email, Estudiant.Comentaris FROM Estudiant where Estudiant.DNI = ?";
	$valors = array ($dni);
	$error = consulta($sql,$valors);
	if (isset($error['error'])) {
		return $response->withJson($error,400);
	}
		
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
			comprova_sessio();
			$Cognoms = $args['Cognoms']. '%';
			$consulta = "SELECT Estudiant.Nom, Estudiant.Cognoms, Estudiant.DNI, Estudiant.Telefon, Estudiant.Sexe, DATE_FORMAT(Estudiant.DataNaixement,'%d/%m/%Y') AS DataNaixement, Estudiant.PaisNaixement, Estudiant.Nacionalitat, Estudiant.LocalitatNaixement, Estudiant.ProvinciaNaixement, Estudiant.Direccio, Estudiant.CP, Estudiant.Poblacio, Estudiant.Email, Estudiant.Comentaris, Est_Curs.Optativa1, Est_Curs.Optativa2, Est_Curs.Validada, Est_Curs.CursCodi, Est_Curs.Matriculat, Cursos.Camp FROM (Estudiant LEFT JOIN Est_Curs ON Estudiant.DNI = Est_Curs.DNI) LEFT JOIN Cursos ON Est_Curs.CursCodi = Cursos.Codi WHERE Estudiant.Cognoms LIKE ? AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
				
			//$consulta = "SELECT * FROM Estudiant WHERE Cognoms LIKE ?";
			$valors = array ($Cognoms);
			$error = consulta($consulta,$valors);
			if (isset($error['error'])) {
				return $response->withJson($error,400);
			}
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
			comprova_sessio();	
			$Nom = $args['nom']. '%';
			$consulta = "SELECT * FROM Estudiant WHERE Nom LIKE ?";
			$valors = array ($Nom);
			$error = consulta($consulta,$valors);
			if (isset($error['error'])) {
				return $response->withJson($error,400);
			}
});

/*
 *@brief Actualitza les dades que s'envien a través del POST o les actualitza
 *@param $request No s'utilitza
 *@param $response No s'utilitza
 *@param $args paràmetres passats en el POST
 *@return no torna cap valor.
 *@todo Que torne un valor de confirmació com a que ha anat bé la consulta. Millorar la gestió que fa de INSERT, en lloc de borrar en cada if, fer-ho general
 **/

$app->post('/actualitza', function ($request, $response, $args) {
			if (isset($_SESSION['loggedin_alumne']) && $_SESSION['loggedin_alumne'] == true) {
				session_destroy();
			} else {
			comprova_sessio();
			}
						
			$valors = $request->getParsedBody();
			$db = getDB();
			$sql = "INSERT INTO Estudiant(DNI, Nom, Cognoms, Direccio, CP, Poblacio, sexe, DataNaixement, PaisNaixement, Nacionalitat, LocalitatNaixement, ProvinciaNaixement, Email, Telefon, Comentaris, passwd_moodle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE Nom = ?, Cognoms = ?, Direccio = ?, CP = ?, Poblacio = ?, sexe = ?, DataNaixement = ?, PaisNaixement = ?, Nacionalitat = ?, LocalitatNaixement = ?, ProvinciaNaixement = ?, Email = ?, Telefon = ?, Comentaris = ?";
			$date = str_replace('/', '-', $valors['DataNaixement']);
			$password = chr(97 + mt_rand(0, 25))."".chr(65 + mt_rand(0, 25))."".chr(33 + mt_rand(0, 13))."".chr(97 + mt_rand(0, 25))."".mt_rand(10000, 99999);
			$data = date('Y-m-d', strtotime($date));
						
			$values = array ($valors['DNI'], $valors['Nom'], $valors['Cognoms'],  $valors['Direccio'],  $valors['CP'],  $valors['Poblacio'],  $valors['Sexe'],  $data,  $valors['PaisNaixement'],  $valors['Nacionalitat'],  $valors['LocalitatNaixement'],  $valors['ProvinciaNaixement'],  $valors['Email'],  $valors['Telefon'],  $valors['Comentaris'], $password, $valors['Nom'], $valors['Cognoms'],  $valors['Direccio'],  $valors['CP'],  $valors['Poblacio'],  $valors['Sexe'],  $data,  $valors['PaisNaixement'],  $valors['Nacionalitat'],  $valors['LocalitatNaixement'],  $valors['ProvinciaNaixement'],  $valors['Email'],  $valors['Telefon'],  $valors['Comentaris']);
			$values=array_map('utf8_decode', $values);
			try {
				$query = $db->prepare($sql);
				$query->execute($values);
			} catch(PDOException $e) {
				$error['error'] = $e->getMessage();
				return $response->withJson($error,400);
			}
			if (isset($valors['Validada'])) {
				$validada = 1;
			} else {
				$validada = 0;
			}
			//Solució provisional, hi ha que arreglar els paràmetre
				$matriculat = 0;
			
			
			foreach($valors as $key => $param){
					
				if ($param =="No") {
					$sql = "DELETE from Est_Curs where DNI = ? and CursCodi IN (SELECT DISTINCT Cursos.Codi from Cursos where Cursos.Camp = ?) AND Any = (SELECT MAX(Any) FROM Any) ";
					$values = array ($valors['DNI'],$key);
					try {
						$query = $db->prepare($sql);
						$query->execute($values);
					} catch(PDOException $e) {
						$error['error'] = $e->getMessage();
						return $response->withJson($error,400);
					}
				} elseif (( $key == "ProgramaBcicleII") && ($param !="No")) {
					$sql2 = "DELETE from Est_Curs where DNI = ? and CursCodi IN (SELECT DISTINCT Cursos.Codi from Cursos where Cursos.Camp = ?) AND Any = (SELECT MAX(Any) FROM Any) ";
					$values2 = array ($valors['DNI'], $key);
					try {
						$query = $db->prepare($sql2);
						$query->execute($values2);
					} catch(PDOException $e) {
						$error['error'] = $e->getMessage();
						return $response->withJson($error,400);
					}					
					$sql = "INSERT INTO Est_Curs(DNI, CursCodi, Validada, Optativa1, Optativa2, Matriculat) VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE CursCodi= ?, Validada = ?, Optativa1 = ?, Optativa2 = ?, Matriculat = ?";
					$values = array ($valors['DNI'], $param, $validada, $valors['Optativa1'], $valors['Optativa2'], $matriculat, $validada, $param, $valors['Optativa1'], $valors['Optativa2'], $matriculat);
					$values=array_map('utf8_decode', $values);
					try {
						$query = $db->prepare($sql);
						$query->execute($values);
					} catch(PDOException $e) {
						$error['error'] = $e->getMessage();
						return $response->withJson($error,400);
					}
				} elseif (($key == "ProgramaAcicleI" || $key == "ProgramaBDCursosPolivalents" || $key =="ProgramaCValenciaJQCV" || $key == "ProgramaJAnglesBasic") && $param != "No") {
					$sql2 = "DELETE from Est_Curs where DNI = ? and CursCodi IN (SELECT DISTINCT Cursos.Codi from Cursos where Cursos.Camp = ?) AND Any = (SELECT MAX(Any) FROM Any)";
					$values2 = array ($valors['DNI'], $key);
					try {
						$query = $db->prepare($sql2);
						$query->execute($values2);
					} catch(PDOException $e) {
						$error['error'] = $e->getMessage();
						return $response->withJson($error,400);
					}				
					$sql = "INSERT INTO Est_Curs(DNI, CursCodi, Validada, Matriculat) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE Validada = ?, Matriculat =?";
					$values = array ($valors['DNI'], $param, $validada, $matriculat, $validada, $matriculat);
					$values=array_map('utf8_decode', $values);
					try {
						$query = $db->prepare($sql);
						$query->execute($values);
					} catch(PDOException $e) {
						$error['error'] = $e->getMessage();
						return $response->withJson($error,400);
					}
				}
			
			}
			//var_dump($valors['Matriculat']);
			for ($i = 0; $i < count($valors['Matriculat']); $i++) {
			    $sql = "UPDATE Est_Curs SET  Matriculat = 1 WHERE DNI = ? AND CursCodi = ?";
			    
			    $values = array ($valors['DNI'], $valors['Matriculat'][$i]);
			    try {
			        $query = $db->prepare($sql);
			        $query->execute($values);
			    } catch(PDOException $e) {
			        $error['error'] = $e->getMessage();
			        return $response->withJson($error,400);
			    }
			}
			
			return $response->withJson(1);
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
			if (isset($valors['Validada'])) {
				$validada = 1;
			} else {
				$validada = 0;
			}
			if (isset($valors['Matriculat'])) {
				$matriculat = 1;
			} else {
				$matriculat = 0;
			}
			$db = getDB();
			$sql = "INSERT INTO Estudiant(DNI, Nom, Cognoms, Direccio, CP, Poblacio, sexe, DataNaixement, PaisNaixement, Nacionalitat, LocalitatNaixement, ProvinciaNaixement, Email, Telefon, Comentaris, passwd_moodle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";			
			$date = str_replace('/', '-', $valors['DataNaixement']);
			$data = date('Y-m-d', strtotime($date));
			$password = chr(97 + mt_rand(0, 25))."".chr(65 + mt_rand(0, 25))."".chr(33 + mt_rand(0, 13))."".chr(97 + mt_rand(0, 25))."".mt_rand(10000, 99999);
			$values = array ($valors['DNI'],  $valors['Nom'],  $valors['Cognoms'],  $valors['Direccio'],  $valors['CP'],  $valors['Poblacio'],  $valors['Sexe'],  $data,  $valors['PaisNaixement'],  $valors['Nacionalitat'],  $valors['LocalitatNaixement'],  $valors['ProvinciaNaixement'],  $valors['Email'],  $valors['Telefon'],  $valors['Comentaris'], $password);
			$values=array_map('utf8_decode', $values);
			try {
					$query = $db->prepare($sql);
					$query->execute($values);
				} catch(PDOException $e) {
					$error['error'] = $e->getMessage();
					return $response->withJson($error,400);
				}
			
			//$db = getDB();
			
			foreach($valors as $key => $param){
					
						if (($key == "ProgramaAcicleI" || $key == "ProgramaBcicleII") && ($param !="No")) {
							$sql2 = "INSERT INTO Est_Curs(DNI, CursCodi, Validada, Optativa1, Optativa2) VALUES (?,?,?,?,?)";
								if (isset($valors['Validada'])) {
									$values2 = array ($valors['DNI'], $param, 1, $valors['Optativa1'], $valors['Optativa2']);
								} else {
									$values2 = array ($valors['DNI'], $param, 0, $valors['Optativa1'], $valors['Optativa2']);
								}
													
							$values=array_map('utf8_decode', $values2);
							try {
									$query = $db->prepare($sql2);
									$query->execute($values2);
								} catch(PDOException $e) {
									$error['error'] = $e->getMessage();
									return $response->withJson($error,400);
								}
						} elseif (($key == "ProgramaBDCursosPolivalents" || $key =="ProgramaCValenciaJQCV" || $key == "ProgramaJAnglesBasic") && $param != "No") {
							$sql3 = "INSERT INTO Est_Curs(DNI, CursCodi, Validada) VALUES (?,?,?)";
							$values3 = array ($valors['DNI'], $param, $validada);
							try {
								$query = $db->prepare($sql3);
								$query->execute($values3);
							} catch(PDOException $e) {
								$error['error'] = $e->getMessage();
								return $response->withJson($error,400);
							}
						
						}
						
					}
					return $response->withJson(1);		
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
	comprova_sessio();
	$valors = $request->getParsedBody();
	$db = getDB();
	$sql = "UPDATE Cursos SET Ofertat = 0 where Ofertat = 1";
	try {
		$query = $db->prepare($sql);
		$query->execute();
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $response->withJson($error,400);
	}
	
	for ($i = 0; $i < sizeof($valors['check']); $i++) {
		
		$sql = "UPDATE Cursos SET Ofertat = 1 WHERE Codi = '". $valors['check'][$i] . "'"; 
		try {	
			$query = $db->prepare($sql);
			$state = $query->execute();
			} catch(PDOException $e) {
				$error['error'] = $e->getMessage();
				return $response->withJson($error,400);
			}
		
	}
	return $response->withJson(1);	
});

$app->post('/AltaCursos',function($request, $response, array $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$db = getDB();
	$sql = "INSERT INTO `Cursos` (`Codi`, `Curs`, `Ofertat`, `Camp`) VALUES (?, ?, '0', ?);";
	$values = array ($valors['Codi_Curs'],$valors['Nom_del_Curs'],$valors['Camp_Curs']);
	$val=array_map('utf8_decode', $values);
	try {
		$query = $db->prepare($sql);
		$query->execute($val);
		
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $response->withJson($error,400);
	}

	return $response->withJson(1);	
});

$app->post('/alta_usuari',function($request, $response, array $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$db = getDB();
	$sql = "INSERT INTO `usuaris` (`Nom`, `usuari`, `password`) VALUES (?, ?, ?);";
	$values = array ($valors['Nom'],$valors['Usuari'],$valors['Password']);
	try {
		$query = $db->prepare($sql);
		$query->execute($values);

	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();;
		return $response->withJson($error,400);
	}

	return $response->withJson(1);	
});

function FerGrafica($Nom,$sql)
{
	comprova_sessio();
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
	$sql = "SELECT DISTINCT Nacionalitat,Count(Nacionalitat) as Quantitat FROM Estudiant JOIN Est_Curs where Any= (SELECT MAX(Any) FROM Any) and Estudiant.DNI=Est_Curs.DNI GROUP BY Nacionalitat HAVING Count(Nacionalitat)";
	FerGrafica("Nacionalitats",$sql);
	
});
	
$app->get('/grafica_sexe',function($request, $response, array $args) {
	$sql = "SELECT DISTINCT Sexe,Count(Sexe) as Quantitat FROM Estudiant JOIN Est_Curs where Any= (SELECT MAX(Any) FROM Any) and Estudiant.DNI=Est_Curs.DNI GROUP BY Sexe HAVING Count(Sexe)";	
	FerGrafica("Sexes",$sql);	

});

$app->get('/grafica_Cursos/{curs}',function($request, $response, array $args) {
	$curs = $args['curs'];
	$sql = "SELECT DISTINCT Cursos.Curs,Count(Cursos.Curs) as Quantitat FROM Estudiant JOIN Est_Curs JOIN Cursos where Any= (SELECT MAX(Any) FROM Any) and Estudiant.DNI=Est_Curs.DNI and Cursos.Codi=Est_Curs.CursCodi GROUP BY Cursos.Curs HAVING Count(Cursos.Curs)";	
	FerGrafica("Matriculats per curs",$sql);
});

$app->post('/carregafoto',function($request, $response, array $args) {
	$foto = $_POST["foto"]; //Slim no soporta bé les imatges
	$dni = $_POST['dni'];
	list(, $foto) = explode(',', $foto); //La manera que te el SO d'entendre qe es una imatge
	mkdir($_SERVER['DOCUMENT_ROOT'] . "/fotos_alumnes2");
	file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/fotos_alumnes2/".$dni.".jpg", base64_decode($foto));
	
});

$app->get('/pdf/{dni}',function($request, $response, array $args) {
	require_once('classes/class.Creaarxiu.php');
	$pdf = new Creararxiu();
	$pdf->Crea_pdf_matricula($args['dni']);
});

$app->get('/ConsultaCamps/{taula}',function($request, $response, array $args) {
	$taula = $args['taula'];
	$sql = "SELECT DISTINCT COLUMN_NAME AS camp FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ?";
	$values = array ($taula);
	consulta ($sql,$values);
	if (isset($error['error'])) {
	    return $response->withJson($error,400);
	}
});

$app->get('/ConsultaMatriculatsCurs/{curs}/{any}',function($request, $response, array $args) {
	comprova_sessio();
	$curs = $args['curs'];
	$any =  $args['any'];
	$db = getDB();
	$sql = "SELECT Estudiant.* FROM Estudiant JOIN Est_Curs JOIN Cursos WHERE Estudiant.DNI=Est_Curs.DNI AND Est_Curs.CursCodi=Cursos.Codi AND Est_Curs.Any = ? AND Est_Curs.CursCodi = ? ORDER BY Cognoms ASC";
	$values = array($any,$curs);
	consulta($sql, $values);
	if (isset($error['error'])) {
	    return $response->withJson($error,400);
	}

});
	
$app->post('/Inserta_Grup',function($request, $response, array $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$db = getDB();
	if ($valors['curs']=='G21m' || $valors['curs']=='G21V' || $valors['curs']=='G22m' || $valors['curs']=='G22V') {
		$sql2 ="DELETE FROM GES_Grups WHERE DNI = ?";
		$values2 = array ($valors['dni']);
		$query2 = $db->prepare($sql2);
		$query2->execute($values2);
		$sql = "UPDATE Est_Curs SET CursCodi = ? WHERE DNI = ?"; 
		$values = array ($valors['curs'],  $valors['dni']);
		//echo '{"error":{"text":eNTRE ACI}}';
	} elseif ($valors['curs']=='Sense') {
		$sql = "DELETE FROM GES_Grups WHERE DNI = ?";
		$values = array ($valors['dni']);
		try {
		    $query = $db->prepare($sql);
		    $query->execute($values);
		
		} catch(PDOException $e) {
		    echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	} elseif ($valors['curs']=='GES21A' || $valors['curs']=='GES21B' || $valors['curs']=='GES21C' || $valors['curs']=='GES21D' || $valors['curs']=='GES21E' || $valors['curs']=='GES22A' || $valors['curs']=='GES22B' || $valors['curs']=='GES22C' || $valors['curs']=='GES22D' || $valors['curs']=='GES22E'){
		$sql = "INSERT INTO GES_Grups (DNI, Grup, Codi_Curs) VALUES (?, ?, (SELECT CursCodi FROM Est_Curs WHERE DNI = ? AND CursCodi IN (SELECT DISTINCT Codi FROM Cursos WHERE Camp = 'ProgramaBcicleII'))) ON DUPLICATE KEY UPDATE Grup = ?"; 
		$values = array ($valors['dni'],  $valors['curs'],  $valors['dni'],  $valors['curs']);
		try {
		    $query = $db->prepare($sql);
		    $query->execute($values);
		
		} catch(PDOException $e) {
		    echo '{"error":{"text":'. $e->getMessage() .'}}';
		}
	} elseif ($valors['curs']=='Tots') {
	    $error['error'] = "No pots possar alumnes en aquesta opció perquè no es guardaran a cap grup";
	    return $response->withJson($error,400);
	}
	
	
	
	
	

});

$app->get('/ConsultaGrupGES/{grup}',function($request, $response, array $args) {
	comprova_sessio();
	$curs = $args['grup'];
	$db = getDB();
	$sql = "SELECT Estudiant.Nom, Estudiant.Cognoms, Estudiant.DNI, GES_Grups.Grup FROM Estudiant RIGHT JOIN GES_Grups ON Estudiant.DNI=GES_Grups.DNI WHERE Grup = ? ORDER BY Cognoms ASC";
	$values = array($curs);
	consulta($sql, $values);

});

$app->get('/ConsultaMatriculatsCursinoAssignatsGrupGES/{curs}',function($request, $response, array $args) {
	comprova_sessio();
	$curs = $args['curs'];
	$db = getDB();
	if ($curs == 'Tots') {
	$sql = "SELECT Estudiant.Nom, Estudiant.Cognoms, Est_Curs.DNI, Est_Curs.CursCodi, Est_Curs.Matriculat FROM Est_Curs LEFT JOIN Estudiant ON Estudiant.DNI=Est_Curs.DNI WHERE (Est_Curs.DNI NOT IN (SELECT DNI FROM GES_Grups) AND Estudiant.DNI NOT IN (SELECT DNI FROM GES_Grups)) AND (Est_Curs.CursCodi = 'g21V' OR Est_Curs.CursCodi = 'g21m' and 1) AND Est_Curs.Any = (SELECT MAX(Any) FROM Any) AND Est_Curs.Matriculat = '1'"; //AND Sorteig = 1
	$values = array(1);
	} else {
	$sql = "SELECT Estudiant.Nom, Estudiant.Cognoms, Est_Curs.DNI, Est_Curs.CursCodi, Est_Curs.Matriculat FROM Est_Curs LEFT JOIN Estudiant ON Estudiant.DNI=Est_Curs.DNI WHERE Est_Curs.DNI NOT IN (SELECT DNI FROM GES_Grups) AND Estudiant.DNI NOT IN (SELECT DNI FROM GES_Grups) AND Est_Curs.CursCodi = ? AND Est_Curs.Any = (SELECT MAX(Any) FROM Any) AND Est_Curs.Matriculat = '1'"; //AND Sorteig = 1
	$values = array($curs);
	}
	consulta($sql, $values);
});

$app->post('/arxiu_pdf', function ($request, $response, $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$db = getDB();
	if ($valors['camps'][0] == "DNI") {
		$valors['camps'][0] = "Estudiant.DNI";
	}
	$camps_comes = implode(", ", $valors['camps']);
	
	
	
	if (isset($valors['Grups'])) {
		$grups_comes = implode("','", $valors['Grups']);

		$sql = "SELECT ".$camps_comes." FROM GES_Grups LEFT JOIN Estudiant ON GES_Grups.DNI = Estudiant.DNI WHERE GES_Grups.Grup IN ('".$grups_comes."')";

		$text_mostrar = $grups_comes;
	} else {
		if (isset($valors['Matriculat'])) {
				$sql = "SELECT ".$camps_comes." FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi = '".$valors['curs']."' AND Est_Curs.Matriculat = '1' AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
		} else {
				$sql = "SELECT ".$camps_comes." FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi = '".$valors['curs']."' AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
		}
		$text_mostrar = $valors['curs'];
	}
	
	
	
	try {
		$query = $db->prepare($sql);
		$query->execute();
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
	$result = $query->fetchAll();
	
	if ($query->rowCount() < 1) {
		echo '{"exit":{"text":"No han hagut resultats"}}';
	}
	else {
	require_once('classes/class.Creaarxiu.php');
	$pdf = new Creararxiu();
	if ($valors['camps'][0] == "Estudiant.DNI") {
		$valors['camps'][0] = "DNI";
	}
	$val=array_map('utf8_decode', $valors['camps']);
	$pdf->Crea_pdf_llistat($val, $result,$text_mostrar);
	echo '{"exit":{"text":"Ok"}}';
	}
	
	
});


$app->post('/arxiu_txt', function ($request, $response, $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
		$db = getDB();
		if ($valors['camps'][0] == "DNI") {
			$valors['camps'][0] = "Estudiant.DNI";
		}
		$camps_comes = implode(", ", $valors['camps']);
		if (isset($valors['Grups'])) {
			$grups_comes = implode("','", $valors['Grups']);

			$sql = "SELECT ".$camps_comes." FROM GES_Grups LEFT JOIN Estudiant ON GES_Grups.DNI = Estudiant.DNI WHERE GES_Grups.Grup IN ('".$grups_comes."')";

			$text_mostrar = $grups_comes;
		} else {
			$curs_comes = implode("','", $valors['curs']);
			if (isset($valors['Matriculat'])) {
				$sql = "SELECT ".$camps_comes." FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi IN ('".$curs_comes."') AND Est_Curs.Matriculat = '1' AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
			} else {
				$sql = "SELECT ".$camps_comes." FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi IN ('".$curs_comes."') AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
			}
			
			$text_mostrar = $curs_comes;
		}
		try {
			$query = $db->prepare($sql);
			$query->execute();
		} catch(PDOException $e) {
			$error['error'] = $e->getMessage();
			return $response->withJson($error,400);
		}
		$result = $query->fetchAll();
	
		if ($query->rowCount() < 1) {
			echo '{"exit":{"text":"No han hagut resultats"}}';
		}
		else {
			require_once('classes/class.Creaarxiu.php');
			$pdf = new Creararxiu();
			if ($valors['camps'][0] == "Estudiant.DNI") {
				$valors['camps'][0] = "DNI";
			}
			$val=array_map('utf8_decode', $valors['camps']);
			$pdf->Crea_txt_llistat($val,$result,$text_mostrar);
			echo '{"exit":{"text":"Ok"}}';
		}
	
	
	});

$app->post('/arxiu_csv', function ($request, $response, $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
		$db = getDB();
		if ($valors['camps'][0] == "DNI") {
			$valors['camps'][0] = "Estudiant.DNI";
		}
		$camps_comes = implode(", ", $valors['camps']);
		if (isset($valors['Grups'])) {
			$grups_comes = implode("','", $valors['Grups']);
			//var_dump($grups_comes);
			$sql = "SELECT ".$camps_comes." FROM GES_Grups LEFT JOIN Estudiant ON GES_Grups.DNI = Estudiant.DNI WHERE GES_Grups.Grup IN ('".$grups_comes."')";
			//var_dump($sql);
			$text_mostrar = $grups_comes;
		} else {
			$curs_comes = implode("','", $valors['curs']);
			if (isset($valors['Matriculat'])) {
				$sql = "SELECT ".$camps_comes." FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi IN ('".$curs_comes."') AND Est_Curs.Matriculat = '1' AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
			} else {
				$sql = "SELECT ".$camps_comes." FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi IN ('".$curs_comes."') AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
			}
			$text_mostrar = $curs_comes;
		}
		try {
			$query = $db->prepare($sql);
			$query->execute();
		} catch(PDOException $e) {
			$error['error'] = $e->getMessage();
			return $response->withJson($error,400);
		}
		$result = $query->fetchAll(PDO::FETCH_NUM);
	
		if ($query->rowCount() < 1) {
			echo '{"exit":{"text":"No han hagut resultats"}}';
		}
		else {
			require_once('classes/class.Creaarxiu.php');
			$pdf = new Creararxiu();
			if ($valors['camps'][0] == "Estudiant.DNI") {
				$valors['camps'][0] = "DNI";
			}
			$val=array_map('utf8_decode', $valors['camps']);
			$pdf->Crea_csv_llistat($val,$result,$text_mostrar);
			echo '{"exit":{"text":"Ok"}}';
		}
	
	
	});


$app->post('/arxiu_orla', function ($request, $response, $args) {
		comprova_sessio();
		$valors = $request->getParsedBody();
		$db = getDB();
		if(isset($valors['Grups'])){
			$sql = "SELECT Cognoms, Nom, Estudiant.DNI FROM GES_Grups LEFT JOIN Estudiant ON GES_Grups.DNI = Estudiant.DNI WHERE GES_Grups.Grup = ? ORDER BY Cognoms ASC";
			$values = array($valors['Grups']);
			$env = $valors['Grups'];
		} elseif (isset($valors['curs'])) {
			if (isset($valors['Matriculat'])) {
				$sql = "SELECT Cognoms, Nom, Estudiant.DNI FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi = ? AND Est_Curs.Matriculat = '1' AND Est_Curs.Any = (SELECT MAX(Any) FROM Any) ORDER BY Cognoms ASC";
			} else {
				$sql = "SELECT Cognoms, Nom, Estudiant.DNI FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi = ? AND Est_Curs.Any = (SELECT MAX(Any) FROM Any) ORDER BY Cognoms ASC";
			}
			$values = array($valors['curs']);
			$env = $valors['curs'];
		}
		try {
			$query = $db->prepare($sql);
			$query->execute($values);
			$result = $query->fetchAll();
		
		} catch(PDOException $e) {
			$error['error'] = $e->getMessage();
			return $response->withJson($error,400);
		}

			require_once('classes/class.Creaarxiu.php');
			$pdf = new Creararxiu();

			$pdf->Crea_pdf_orla($result,$env);
			echo '{"exit":{"text":"Ok"}}';
	});

$app->get('/BorraAssigGrups',function($request, $response, array $args) {
		comprova_sessio();
		$db = getDB();
		$sql = "TRUNCATE GES_Grups";
		try {
			$db = getDB();
			$query = $db->prepare($sql);
			$query->execute();
			} catch(PDOException $e) {
			$error['error'] = $e->getMessage();
			return $response->withJson($error,400);
		}
	
	});


$app->get('/sorteig_lletra/{lletra}/{grup}/{quan}',function($request, $response, array $args) {
	comprova_sessio();
	$lletra = $args['lletra'];
	$grup = $args['grup'];
	$quan=$args['quan'];
	$db = getDB();
	$sql = "SELECT Estudiant.DNI, Nom, Cognoms FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI where Est_Curs.CursCodi = ? AND Est_Curs.Matriculat = 0 AND Est_Curs.Validada = 1 AND Est_Curs.Any = (SELECT MAX(Any) FROM Any) ORDER BY case when Cognoms >= ? then 0 else 1 end, Cognoms LIMIT 0,".$quan."";
	$values = array($grup,$lletra);
	consulta($sql, $values);
});
	

$app->post('/esborra_alumne', function ($request, $response, $args) {
		comprova_sessio();
		$valors = $request->getParsedBody();
		$db = getDB();	
		$sql = "DELETE FROM `Estudiant` WHERE `Estudiant`.`DNI` = ?";
		$values = array($valors['dni']);
		
		try {
			$query = $db->prepare($sql);
			$query->execute($values);
		} catch(PDOException $e) {
			$error['error'] = $e->getMessage();
			return $response->withJson($error,400);
		}
		$filename = $_SERVER['DOCUMENT_ROOT'].'/fotos_alumnes2/'.$valors['dni'].'.jpg';
		unlink($filename);
		return $response->withJson(1);
});



		
$app->get('/arxiu_moodle/{curs}', function ($request, $response, $args) {
	comprova_sessio();
	$db = getDB();
	$curs = $args['curs'];

		$sql = "SELECT Estudiant.DNI, passwd_moodle, Nom, Cognoms, Email, Poblacio, PaisNaixement, Telefon, Direccio, Est_Curs.CursCodi FROM Est_Curs LEFT JOIN Estudiant ON Est_Curs.DNI = Estudiant.DNI WHERE Est_Curs.CursCodi = ? AND Est_Curs.Matriculat = '1' AND Est_Curs.Any = (SELECT MAX(Any) FROM Any)";
	
	$values = array($args['curs']);
	try {
		$db = getDB();
		$query = $db->prepare($sql);
		$query->execute($values);
		$result = $query->fetchAll();
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $response->withJson($error,400);
	}
	require_once('classes/class.Creaarxiu.php');
	$pdf = new Creararxiu();
	$pdf->Crea_arxiu_moodle($result,$curs);
	echo '{"exit":{"text":"Ok"}}';
	

});		

$app->post('/borra_curs', function ($request, $response, $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$db = getDB();
	$sql = "DELETE FROM Cursos WHERE Codi = ?";
	$values = array($valors['curs']);

	try {
		$query = $db->prepare($sql);
		$query->execute($values);
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $response->withJson($error,400);
	}
	return $response->withJson(1);
});

$app->post('/matricula_sorteig', function ($request, $response, $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$dnis = implode("','", $valors['dnis']);
	$db = getDB();
	$sql = "UPDATE Est_Curs SET Matriculat = 1 where dni IN ('".$dnis."') AND CursCodi = '".$valors['curs']."'";

	try {
		$query = $db->prepare($sql);
		$query->execute();
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $response->withJson($error,400);
	}
	return $response->withJson(1);
});

$app->post('/matricula_any_anterior', function ($request, $response, $args) {

    $valors = $request->getParsedBody();
    
    $db = getDB();
    for ($i7 = 0; $i7 < count($valors['Matriculat']); $i7++) {
    $sql = "INSERT INTO Est_Curs (DNI, CursCodi, Optativa1, Optativa2, Validada, Matriculat) VALUES (?,?,'No','No','1','1')";
    $values = array ($valors['Matriculat'][$i7],$valors['curs']);
    
    try {
        $query = $db->prepare($sql);
        $query->execute($values);
    } catch(PDOException $e) {
        $error['error'] = $e->getMessage();
        return $response->withJson($error,400);
    }
    }
    $dades[0]="Matriculats correctament";
    return $response->withJson($dades);
});


$app->get('/any_actual',function($request, $response, array $args) {
	
	$db = getDB();
	$sql = "SELECT MAX(Any) as AnyActual FROM Any WHERE ?";
	$values = array(1);
	consulta($sql, $values);
});

$app->post('/genera_any_nou', function ($request, $response, $args) {
	comprova_sessio();
	$valors = $request->getParsedBody();
	$any_nou = $valors['AnyActual']+1;
	$db = getDB();
	$name = "GES_Grups_".$valors['AnyActual'];
	$sql = "CREATE TABLE ".$name." AS SELECT * FROM GES_Grups; TRUNCATE GES_Grups; INSERT INTO `Any` SET Any = ?; ALTER TABLE `Est_Curs` CHANGE `Any` `Any` VARCHAR(50) NOT NULL DEFAULT ?;";
	//$sql2 = "ALTER TABLE `Est_Curs` CHANGE `Any` `Any` VARCHAR(50) NOT NULL DEFAULT ?";
	
	$values = array($any_nou, $any_nou);
	try {
		$query = $db->prepare($sql);
		$query->execute($values);
	} catch(PDOException $e) {
		$error['error'] = $e->getMessage();
		return $response->withJson($error,400);
	}
	$torna[0] = "Any ".$any_nou." creat correctament";
	return $response->withJson($torna);
	
});

$app->get('/ConsultaAnys',function($request, $response, array $args) {
	$sql = "SELECT Any FROM Any WHERE  ? ORDER BY Any DESC";
	$values = array ("1");
	consulta ($sql,$values);
});

$app->post('/login_alumne_antic', function ($request, $response, $args) {
	$valors = $request->getParsedBody();
	$dni = $valors['DNI'];
	$moodle = $valors['moodle'];
	$db = getDB();
	$query = $db->prepare("SELECT * FROM Estudiant WHERE DNI = '$dni' AND passwd_moodle = '$moodle'");
	$query->execute();
	$rowcount = $query->rowCount();
	if ($rowcount == 1) {
				$_SESSION['usuari_id'] = $dni;
				$_SESSION['loggedin_alumne'] = true;
				$_SESSION['username'] = $dni;
				$_SESSION['start'] = time();
				$_SESSION['expire'] = $_SESSION['start'] + (300);
				$sql = "SELECT Estudiant.Nom, Estudiant.Cognoms, Estudiant.DNI, Estudiant.Telefon, Estudiant.Sexe, DATE_FORMAT(Estudiant.DataNaixement,'%d/%m/%Y') AS DataNaixement, Estudiant.PaisNaixement, Estudiant.Nacionalitat, Estudiant.LocalitatNaixement, Estudiant.ProvinciaNaixement, Estudiant.Direccio, Estudiant.CP, Estudiant.Poblacio, Estudiant.Email, Estudiant.Comentaris FROM Estudiant where Estudiant.DNI = ?";
				$valors = array ($dni);
				$error = consulta($sql,$valors);
				if (isset($error['error'])) {
					return $response->withJson($error,400);
				}
	
	} else {
		$error['error'] = "El nom o la contrasenya no són correctes";
		return $response->withJson($error,400);
	}


});


$app->run();
?>