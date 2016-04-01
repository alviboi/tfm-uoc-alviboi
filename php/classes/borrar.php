<?php
//header('Content-Type: text/html; charset=ISO-8859-1');	
require('fpdf.php');
require_once('class.ConsultesBD.php');
class PDF extends FPDF
{
// Page header
function Header()
{
    // Logo
    $this->Image('http://localhost/tfm/img/logogen.png',10,6,60);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
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

// Instanciation of inherited class
$pdf = new PDF();
$alumne = new ConsultesBD();

$dades_alumne = json_decode($alumne -> ConsultaEstudiant("73567572W","------","-------"),true);
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times','',12);
//for($i=1;$i<=40;$i++) $pdf->Cell(0,10,'Printing line number '.$i,0,1);
$aaa = "esta es un altra";
$pdf->Image('http://localhost/tfm/img/1457295101.jpg',20,30,25);
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

$cursos = array("CicleIA","CicleIIB","ProgramaC","CursosPolivalents","ProgramaJAngles");
//echo $cursos[0];
//echo "\n";
for ($i = 0; $i < 5; $i++) {
	$dades_alumne_curs = json_decode($alumne -> ConsultaCurs("73567572W",$cursos[$i]),true);
	//var_dump($dades_alumne_curs);
	//echo $dades_alumne_curs[0];
	$pdf -> SetFont('Arial','',12);
if ($dades_alumne_curs[0] != NULL) {
		$pdf->Cell(10);
		$pdf->Cell(30,10,utf8_decode('Matriculat a: '),0,0);
		$pdf->SetFillColor(200,220,255);
		$pdf->Cell(0,10,utf8_decode($dades_alumne_curs["Torn"]),0,1,1,true);
		if ($cursos[$i] == "CicleIA" || $cursos[$i] == "CicleIIB") {
			$pdf->Cell(10);
			$pdf->Cell(30,10,utf8_decode('Optatives: '),0,0);
			$pdf->SetFillColor(200,220,255);
			$pdf->Cell(0,10,utf8_decode("".$dades_alumne_curs["Optativa1"]." ".$dades_alumne_curs["Optativa2"].""),0,1,1,true);
		}
		$pdf ->Ln();
	}
	

}


$pdf->Output();
?>