<?php
//header('Content-Type: text/html; charset=ISO-8859-1');	

require('fpdf.php');
require_once('class.ConsultesBD.php');

class PDFmatricula extends FPDF
{
// Page header

function Header()
{
    // Logo
    $this->Image('http://localhost/tfm/img/logogen.png',10,6,60);
    
    // Arial bold 15
    $this->SetFont('Times','B',15);
    // Move to the right
    $this->Cell(60);
    // Title
    $this->Cell(130,10,utf8_decode("Fitxa d'inscripció"),1,0,'C');
    // Line break
    $this->Ln(20);
}

// Page footer
function Footer()
{
    // Position at 1.5 cm from bottom
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Page number
    $this->Cell(0,10,utf8_decode('EPA Pasqual i Tirado - Castelló de la Plana'),1,0,'C');
}
}

class Creararxiu 
{
	


function Crea_pdf_matricula ($dni)
{
$pdf = new PDFmatricula();
$alumne = new ConsultesBD();
$dades_alumne = json_decode($alumne -> ConsultaEstudiant($dni,"------","-------"),true);
$dades_alumne[0]=array_map('utf8_decode', $dades_alumne[0]);
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->AddFont('Times','','font/timesb.php');
$pdf->SetFont('Times','B',12);


$pdf->Image('http://localhost/fotos_alumnes2/'.$dni.'.jpg',20,30,25);
$pdf->Cell(40);
$pdf->Cell(32,10,'Nom i Cognoms: ',0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(80,10,"".$dades_alumne[0]["Cognoms"].", ".$dades_alumne[0]["Nom"]."",0,0,1,true);
$pdf->Cell(10,10,'DNI: ',0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["DNI"],0,1,1,true);

$pdf->Cell(40);
$pdf->Cell(16,10,utf8_decode('Adreça: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(60,10,$dades_alumne[0]["Direccio"],0,0,1,true);
$pdf->Cell(19,10,utf8_decode('Població: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["Poblacio"],0,1,1,true);

$pdf->Cell(40);
$pdf->Cell(25,10,utf8_decode('Codi Postal: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(30,10,$dades_alumne[0]["CP"],0,0,1,true);
$pdf->Cell(16,10,utf8_decode('Telèfon: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(30,10,$dades_alumne[0]["Telefon"],0,0,1,true);
$pdf->Cell(19,10,utf8_decode('Sexe: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["Sexe"],0,1,1,true);

$pdf->Cell(40);
$pdf->Cell(30,10,utf8_decode('Data Naixement: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(30,10,$dades_alumne[0]["DataNaixement"],0,0,1,true);
$pdf->Cell(36,10,utf8_decode('País de Naixement: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["PaisNaixement"],0,1,1,true);

$pdf->Cell(10);
$pdf->Cell(25,10,utf8_decode('Nacionalitat: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(40,10,$dades_alumne[0]["Nacionalitat"],0,0,1,true);
$pdf->Cell(43,10,utf8_decode('Localitat de Naixement: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["LocalitatNaixement"],0,1,1,true);

$pdf->Cell(10);
$pdf->Cell(44,10,utf8_decode('Provincia de Naixement: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(40,10,$dades_alumne[0]["ProvinciaNaixement"],0,0,1,true);
$pdf->Cell(13,10,utf8_decode('Email: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["Email"],0,1,1,true);

$pdf->Cell(10);
$pdf->Cell(24,10,utf8_decode('Comentaris: '),0,0);
$pdf->SetFillColor(200,220,255);
$pdf->Cell(0,10,$dades_alumne[0]["Comentaris"],0,1,1,true);

$pdf->Ln();

$pdf->Cell(10);
$pdf -> SetFont('Times','B',14);
$pdf -> Cell (0,10,utf8_decode("Dades de matrícula"),1,0,'C');

$pdf->Ln();

//echo $cursos[0];
//echo "\n";
$dades_alumne_curs = json_decode($alumne -> ConsultaCurs($dni),true);
for ($i = 0; $i < 5; $i++) {
	
	//var_dump($dades_alumne_curs);
	//echo $dades_alumne_curs[0];
	$pdf -> SetFont('Arial','',12);
if ($dades_alumne_curs[$i] != NULL) {
		$pdf->Cell(10);
		$pdf->Cell(30,10,utf8_decode('Matriculat a: '),0,0);
		$pdf->SetFillColor(200,220,255);
		$pdf->Cell(0,10,utf8_decode($dades_alumne_curs[$i]["Curs"]),0,1,1,true);
		if ($dades_alumne_curs[$i]['Camp'] == "ProgramaBcicleII") {
			$pdf->Cell(10);
			$pdf->Cell(30,10,utf8_decode('Optatives: '),0,0);
			$pdf->SetFillColor(200,220,255);
			$pdf->Cell(0,10,utf8_decode("Optativa 1: ".$dades_alumne_curs[$i]["Optativa1"]."   Optativa 2:  ".$dades_alumne_curs[$i]["Optativa2"].""),0,1,1,true);
		}
		$pdf ->Ln();
	}
	
	$pdf->Output();
	
}//Final de Crea_pdf_matricula



} 
}



//$a = new Creararxiu();
//$a ->Crea_pdf_matricula("73567572W");

?>