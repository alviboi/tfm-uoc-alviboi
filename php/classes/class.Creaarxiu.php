<?php

/**
 ******************************************************
 *  @file class.Creaarxiu.php
 *  @brief Ens permeteix crear els arxius en txt, pdf o csv
 * Aquesta clase crea arxius en pdf y altres formats.
 * @author Alfredo Rafael Vicente Boix
 * @version 1.0
 * @date Maig 2016
 *
 *
 *******************************************************/


// header('Content-Type: text/html; charset=ISO-8859-1');
require_once ('fpdf.php');
require_once ('class.ConsultesBD.php');



/**
 ******************************************************
 * @brief Clase per a realitzar el full de matrícula.
 * Es tracta d'una classe que és una extensió de la clase fpdf. Aquesta classe la utilitzarem per al full de matrícula.
 *
 ******************************************************/

class PDFmatricula extends FPDF {
	// Page header
	
    /**
     *@brief Aquesta funció crea l'encapçalament del document en pdf.
     **/
    
	function Header() {
		$this->Image ( 'logogen.png', 10, 6, 60 );
		$this->SetFont ( 'Times', 'B', 15 );
		$this->Cell ( 60 );
		$this->Cell ( 130, 10, utf8_decode ( "Fitxa d'inscripció" ), 1, 0, 'C' );
		$this->Ln ( 20 );
	}
	
	/**
	 *@brief Aquesta funció crea el peu de pàgina del document en pdf.
	 **/
	
	function Footer() {
		$this->SetY ( - 15 );
		$this->SetFont ( 'Arial', 'I', 8 );
		$this->Cell ( 0, 10, utf8_decode ( 'EPA Pasqual i Tirado - Castelló de la Plana' ), 1, 0, 'C' );
	}
}


/**
 ******************************************************
 * @brief Clase per a realitzar els arxius exportats amb dades.
 * Es tracta d'una classe que és una extensió de la clase fpdf. Aquesta classe la utilitzarem per al full de les dades exportades en pdf.
 *
 ******************************************************/

class PDFexporta_arxiu extends FPDF {
	// Page header
	
    /**
     *@brief Aquesta funció crea l'encapçalament del document en pdf.
     **/
    
	function Header() {
		$this->Image ( 'logogen.png', 10, 6, 60 );
		$this->SetFont ( 'Times', 'B', 15 );
		$this->Cell ( 60 );
		$this->Cell ( 0, 10, utf8_decode ( "Dades exportades" ), 1, 0, 'C' );
		$this->Ln ( 20 );
	}
	
	/**
	 *@brief Aquesta funció crea l'encapçalament del document en pdf.
	 **/
	
	function Footer() {
		$this->SetY ( - 15 );
		$this->SetFont ( 'Arial', 'I', 8 );
		$this->Cell ( 0, 10, utf8_decode ( 'EPA Pasqual i Tirado - Castelló de la Plana' ), 1, 0, 'C' );
	}
	
	/**
	 *@brief Aquesta funció realitzem una taula.
	 **/
	
	function FancyTable($header, $data, $grup) {
		// Colors, line width and bold font
		$this->SetFillColor ( 192, 192, 192 );
		// $this->SetTextColor(255);
		$this->SetDrawColor ( 128, 0, 0 );
		$this->SetLineWidth ( .3 );
		$this->SetFont ( 'Times', 'B', 10 );
		$this->Cell ( 0, 10, "Codi del grup: " . utf8_decode ( $grup ), 0, 0, 'C' );
		$this->Ln ();
		// Header
		// $w = array(40, 35, 40, 45);
		
		for($i = 0; $i < count ( $data ); $i ++) {
			for($j = 0; $j < count ( $header ); $j ++) {
				$cellWidth [$i] [$j] = round ( $this->GetStringWidth ( $data [$i] [$header [$j]] ) );
				if ($i == 0) {
					$ample [$j] = ( int ) $cellWidth [$i] [$j];
				} elseif ((int)$cellWidth [$i] [$j] > $ample[$j]) {
					$ample [$j] = ( int ) $cellWidth [$i] [$j];
				}
			}
		}
		/*
		 * for ($j = 0; $j < count($header); $j++) {
		 * $cellWidth2[$j] = $this->GetStringWidth($header[$j]);
		 * if ($cellWidth2[$j] > $ample[$j]) {
		 * $ample[$j] = $cellWidth[$j];
		 * }
		 * }
		 *
		 */
		
		for($i = 0; $i < sizeof ( $header ); $i ++) {
			if ($ample [$i] < 1) {
				$s = round ( $this->GetStringWidth ( $header [$i] ) );
				$ample [$i] = $s;
			} else {
				$s = $ample [$i];
			}
			
			$this->Cell ( $s, 7, substr ( $header [$i], 0, 8 ), 1, 0, 'C', true );
		}
		$this->Ln ();
		// Color and font restoration
		$this->SetFillColor ( 160, 160, 160 );
		$this->SetTextColor ( 0 );
		$this->SetFont ( 'Times', '', 9 );
		// Data
		$fill = false;
		for($i = 0; $i < sizeof ( $data ); $i ++) {
			for($j = 0; $j < sizeof ( $header ); $j ++) {
				
				$this->Cell ( $ample [$j], 6, $data [$i] [$header [$j]], 'LR', 0, 'L', $fill );
			}
			$this->Ln ();
			$fill = ! $fill;
		}
		
		// Closing line
		$w = array_sum ( $ample );
		$this->Cell ( $w, 0, '', 'T' );
	}
}

/**
 ******************************************************
 * @brief Clase per a realitzar els arxius de fotografies. La orla d'un curs/grup.
 * Es tracta d'una classe que és una extensió de la clase fpdf. Aquesta classe la utilitzarem per al full de les fotografies.
 *
 ******************************************************/


class PDFexporta_orla extends FPDF {
	// Page header
    /**
     *@brief Aquesta funció crea l'encapçalament del document en pdf.
     **/
	function Header() {
		$this->Image ( 'logogen.png', 10, 6, 60 );
		$this->SetFont ( 'Times', 'B', 15 );
		$this->Cell ( 60 );
		$this->Cell ( 0, 10, utf8_decode ( "Orla" ), 1, 0, 'C' );
		$this->Ln ( 20 );
	}
	/**
	 *@brief Aquesta funció crea el peu de pàgina del document en pdf.
	 **/
	function Footer() {
		$this->SetY ( - 15 );
		$this->SetFont ( 'Arial', 'I', 8 );
		$this->Cell ( 0, 10, utf8_decode ( 'EPA Pasqual i Tirado - Castelló de la Plana' ), 1, 0, 'C' );
	}
}


/**
 ******************************************************
 * @brief Clase per a realitzar els arxius
 * Es tracta d'una classe que crearà instàncies de totes les altres clases definides en aquest document per a crear els arxius necessaris.
 *
 ******************************************************/

class Creararxiu {
    
    /**
     *@brief Aquesta funció crea la orla dels estudiants donats uns dnis.
     *@param $dnis DNI Array dels alumnes que vols colocar en la orla
     *@param $grup Nom del grup que apareixerà en el full de la orla.
     *@return pdf Arxiu de la orla en format pdf.
     **/
        
	function Crea_pdf_orla($dnis, $grup) {
		$l = 0;
		$page = 1;
		$pagina = 1;
		$pdf = new PDFexporta_orla ();
		$pdf->AddPage ();
		$pdf->SetFont ( 'Times', 'B', 12 );
		$pdf->Cell ( 0, 9, $grup, 1, 0, 'C' );
		$pdf->Ln ();
		$pdf->SetFont ( 'Times', '', 7 );
		for($j = 0; $j < count ( $dnis ) / 5; $j ++) {
			
			$pdf->Cell ( 8, 36, '', 0 );
			for($i = 0; $i < 5; $i ++) {
				
				if (($i + $j * 5) < count ( $dnis )) {
					$file = $_SERVER ['DOCUMENT_ROOT'] . '/fotos_alumnes2/' . $dnis [$i + $l * 5] ['DNI'] . '.jpg';
					if (file_exists ( $file )) {
						$pdf->Image ( $file, (28 + 32 * $i), 40 + $l * 41, 25 );
					}
				}
			}
			$pdf->Ln ();
			$pdf->Cell ( 17, 5, '', 0 );
			for($i = 0; $i < 5; $i ++) {
				
				if (($i + $j * 5) < count ( $dnis )) {
					
					$pdf->Cell ( 27, 5, $dnis [$i + $j * 5] ['Cognoms'] . ', ' . $dnis [($i + $j * 5)] ['Nom'], 0, 0, 'C' );
					$pdf->Cell ( 5, 5 );
				}
			}
			// echo $page;
			$l ++;
			if ($l == 5) {
				$pdf->AddPage ();
				$l = 0;
				$pdf->SetFont ( 'Times', 'B', 12 );
				$pdf->Cell ( 0, 9, $grup, 1, 0, 'C' );
				$pdf->Ln ();
				$pdf->SetFont ( 'Times', '', 7 );
			} else {
				$pdf->Ln ();
			}
		}
		$pdf->Output ( './arxius/sortidaorla' . $grup . '.pdf', 'F' );
	}
	
	/**
	 *@brief Aquesta funció crea el pdf dels estudiants que es matriculen.
	 *@param $dni DNI de l'alumne.
	 *@return pdf Arxiu amb el full de matrícula en format pdf.
	 **/
	
	
	function Crea_pdf_matricula($dni) {
		$pdf = new PDFmatricula ();
		$alumne = new ConsultesBD ();
		$dades_alumne = json_decode ( $alumne->ConsultaEstudiant ( $dni, "------", "-------" ), true );
		$dades_alumne [0] = array_map ( 'utf8_decode', $dades_alumne [0] );
		$pdf->AliasNbPages ();
		$pdf->AddPage ();
		// $pdf->AddFont('Times','','font/timesb.php');
		$pdf->SetFont ( 'Times', 'B', 12 );
		$pdf->Image ( 'http://localhost/fotos_alumnes2/' . $dni . '.jpg', 20, 30, 25 );
		$pdf->Cell ( 40 );
		$pdf->SetFillColor ( 200, 220, 255 );
		$pdf->Cell ( 32, 10, 'Nom i Cognoms: ', 1, 0, 1, true );
		$pdf->Cell ( 80, 10, "" . $dades_alumne [0] ["Cognoms"] . ", " . $dades_alumne [0] ["Nom"] . "", 0, 0, 1 );
		$pdf->Cell ( 10, 10, 'DNI: ', 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["DNI"], 0, 1, 1 );
		$pdf->Cell ( 40 );
		$pdf->Cell ( 16, 10, utf8_decode ( 'Adreça: ' ), 1, 0, 1, true );
		$pdf->Cell ( 60, 10, $dades_alumne [0] ["Direccio"], 0, 0, 1 );
		$pdf->Cell ( 19, 10, utf8_decode ( 'Població: ' ), 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["Poblacio"], 0, 1, 1 );
		$pdf->Cell ( 40 );
		$pdf->Cell ( 25, 10, utf8_decode ( 'Codi Postal: ' ), 1, 0, 1, true );
		$pdf->Cell ( 30, 10, $dades_alumne [0] ["CP"], 0, 0, 1 );
		$pdf->Cell ( 16, 10, utf8_decode ( 'Telèfon: ' ), 1, 0, 1, true );
		$pdf->Cell ( 30, 10, $dades_alumne [0] ["Telefon"], 0, 0, 1 );
		$pdf->Cell ( 19, 10, utf8_decode ( 'Sexe: ' ), 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["Sexe"], 0, 1, 1 );
		$pdf->Cell ( 40 );
		$pdf->Cell ( 32, 10, utf8_decode ( 'Data Naixement: ' ), 1, 0, 1, true );
		
		$date = str_replace('/', '-', $dades_alumne [0] ["DataNaixement"]);
		$data = date('d-m-Y', strtotime($date));
		
		$pdf->Cell ( 30, 10, $data, 0, 0, 1 );
		
		$pdf->Cell ( 36, 10, utf8_decode ( 'País de Naixement: ' ), 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["PaisNaixement"], 0, 1, 1 );
		$pdf->Cell ( 10 );
		$pdf->Cell ( 25, 10, utf8_decode ( 'Nacionalitat: ' ), 1, 0, 1, true );
		$pdf->Cell ( 40, 10, $dades_alumne [0] ["Nacionalitat"], 0, 0, 1 );
		$pdf->Cell ( 45, 10, utf8_decode ( 'Localitat de Naixement: ' ), 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["LocalitatNaixement"], 0, 1, 1 );
		$pdf->Cell ( 10 );
		$pdf->Cell ( 46, 10, utf8_decode ( 'Provincia de Naixement: ' ), 1, 0, 1, true );
		$pdf->Cell ( 40, 10, $dades_alumne [0] ["ProvinciaNaixement"], 0, 0, 1 );
		$pdf->Cell ( 13, 10, utf8_decode ( 'Email: ' ), 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["Email"], 0, 1, 1 );
		$pdf->Cell ( 10 );
		$pdf->Cell ( 24, 10, utf8_decode ( 'Comentaris: ' ), 1, 0, 1, true );
		$pdf->Cell ( 0, 10, $dades_alumne [0] ["Comentaris"], 0, 1, 1 );
		$pdf->Ln ();
		$pdf->Cell ( 10 );
		$pdf->SetFont ( 'Times', 'B', 14 );
		$pdf->Cell ( 0, 10, utf8_decode ( "Dades de matrícula" ), 1, 0, 'C' );
		$pdf->Ln ();
		$dades_alumne_curs = json_decode ( $alumne->ConsultaCurs ( $dni ), true );
		//for($i = 0; $i < 2; $i++) {
			$pdf->SetFont ( 'Arial', 'B', 12 );
			//if ($dades_alumne_curs [$i] != NULL) {
				$pdf->Cell ( 10 );
				$pdf->Cell ( 30, 10, utf8_decode ( 'Matriculat a: ' ), 1, 0, 1, true );
				$pdf->Ln ();
				$pdf->SetFont ( 'Arial', '', 12 );
				for($j = 0; $j < count($dades_alumne_curs); $j++) {
				    if ($dades_alumne_curs [$j] != NULL) {
				        $pdf->Cell ( 10 );
				        $pdf->Cell ( 0, 10, utf8_decode ( $dades_alumne_curs [$j] ["Curs"] ), 0, 1, 1 );
				        if ($dades_alumne_curs [$j] ['Camp'] == "ProgramaBcicleII") {
				            $pdf->Cell ( 10 );
				            $pdf->Cell ( 30, 10, utf8_decode ( 'Optatives: ' ), 1, 0 );
				            $pdf->Cell ( 0, 10, utf8_decode ( "Optativa 1: " . $dades_alumne_curs [$j] ["Optativa1"] . "   Optativa 2:  " . $dades_alumne_curs [$j] ["Optativa2"] . "" ), 0, 1, 1 );
				        }
				    }
				}
				
				
			//}
			$pdf->Ln ();
			$pdf->Cell ( 10 );
			$pdf->SetFont ( 'Arial', 'B', 12 );
			$pdf->Cell ( 30, 10, utf8_decode ( 'MOODLE: ' ), 1, 0, 1, true );
			$pdf->SetFont ( 'Arial', '', 12 );
			$pdf->Cell ( 0, 10, utf8_decode ( "Usuari: " . $dades_alumne [0] ["DNI"] . "   Contrasenya:  " . $dades_alumne [0] ["passwd_moodle"] . "" ), 0, 1, 1 );
			$pdf->Ln ();
			$pdf->SetFont ( 'Times', 'B', 10 );
			$txt = file_get_contents ( 'text.txt' );
			// Times 12
			$pdf->SetFont ( 'Times', '', 12 );
			// Output justified text
			$pdf->Cell ( 10 );
			$pdf->MultiCell ( 0, 5, utf8_decode ( $txt ) );
			$pdf->Ln ();
			
			$pdf->Cell ( 10 );
			$mes=array(1=>"Gener","Febrer","Març","Abril","Maig","Juny","Juliol",
			    "Agost","Setembre","Octubre","Novembre","Desembre");
			$avui = getdate();
			$pdf->Cell ( 0, 10, utf8_decode ( "Castelló de la plana a, " )."".$avui['mday']." de ".$mes[$avui['mon']]." de ".$avui['year'], 0, 0, 'R' );
			$pdf->Ln ();
			
			$pdf->Cell ( 0, 10, utf8_decode ( "Signatura de l'alumne" ), 0, 0, 'C' );
			
	   for($i = 0; $i < 2; $i++) {	
			$pdf->Output ();
	   }
	} // Final de Crea_pdf_matricula
	
	
	/**
	 *@brief Aquesta funció crea un llistat dels estudiants en pdf.
	 *@param $camps Camps que van a aparèixer en la taula.
	 *@param $result Llistat de les dades que volem introduïr en el llistat.
	 *@param $grup Nom del grup que apareixerà en el full.
	 *@return pdf Arxiu del llistat en format pdf.
	 **/
	
	
	function Crea_pdf_llistat($camps, $result, $grup) {
		$pdf = new PDFexporta_arxiu ( 'L', 'mm', 'A4' );
		$pdf->AddPage ();
		$pdf->FancyTable ( $camps, $result, $grup );
		$pdf->Output ( $_SERVER['DOCUMENT_ROOT'].'/tfm2/php/arxius/sortidagrup' . str_replace ( "'", "", $grup ) . '.pdf', 'F' );
	}
	
	/**
	 *@brief Aquesta funció crea un llistat dels estudiants en txt.
	 *@param $camps Camps que van a aparèixer en la taula.
	 *@param $result Llistat de les dades que volem introduïr en el llistat.
	 *@param $grup Nom del grup que apareixerà en l'arxiu.
	 *@return txt Arxiu del llistat en format txt.
	 **/
		
	
	function Crea_txt_llistat($camps, $result, $grup) {
		$filename = "./arxius/sortidagrup" . str_replace ( "'", "", $grup ) . ".txt";
		$arxiu = fopen ( $filename, "w" ) or die ( "Problemes en l'arxiu" );
		for($i = 0; $i < count ( $result ); $i ++) {
			for($j = 0; $j < count ( $camps ); $j ++) {
				$text = utf8_encode ( $result [$i] [$j] );
				fwrite ( $arxiu, $text . "; " );
			}
		}
		fclose ( $arxiu );
	}
	
	/**
	 *@brief Aquesta funció crea un llistat dels estudiants en un full de càlcul.
	 *@param $camps Camps que van a aparèixer en la taula.
	 *@param $result Llistat de les dades que volem introduïr en el llistat.
	 *@param $grup Nom del grup que apareixerà en el full i l'arxiu.
	 *@return csv Arxiu del llistat en format csv.
	 **/
	
	
	function Crea_csv_llistat($camps, $result, $grup) {
		$filename = $_SERVER['DOCUMENT_ROOT']."/tfm2/php/arxius/sortidagrup" . str_replace ( "'", "", $grup ) . ".csv";

		$arxiu = fopen ( $filename, "w" ) or die ( "Problemes en l'arxiu" );
		fputcsv ( $arxiu, explode ( ',', "Grup: " . $grup ) );
		fputcsv ( $arxiu, $camps );
		for($i = 0; $i < count ( $result ); $i ++) {
			$este = array_map ( 'utf8_encode', $result [$i] );
			fputcsv ( $arxiu, $este );
		}
		
		fclose ( $arxiu );
	}
	
	
	/**
	 *@brief Aquesta funció crea un document per a poder importar les dades a moodle.
	 *@param $result Llistat de les dades que volem introduïr en el llistat.
	 *@param $curs Nom del curs que apareixerà en el full.
	 *@return txt Arxiu del llistat en format txt amb els especificacions de moodle.
	 **/
	
	
	function Crea_arxiu_moodle($result, $curs) {
		$filename = $_SERVER['DOCUMENT_ROOT']."/tfm2/php/arxius/exportar_moodle" . str_replace ( "'", "", $curs ) . ".txt";
		//var_dump($result);
		if (file_exists ( $filename )) {
			unlink ( $filename );
		}
		$arxiu = fopen ( $filename, "w" ) or die ( "Problemes en l'arxiu" );
		
			fwrite ( $arxiu, "username,password,firstname,lastname,email,city,country,phone1,address,course1\n" );
			for($i = 0; $i < count ( $result ); $i ++) {
				for($j = 0; $j < 10; $j ++) {
					if ($j == 9) {
						fwrite ( $arxiu, $result [$i] [$j] . "\n" );
					} else {
						fwrite ( $arxiu, $result [$i] [$j] . "," );
					}
				}
			}
		
		fclose ( $arxiu );
		header ( "Location: " . $filename );
	}
}

/*
 * $a = new Creararxiu();
 * $a ->Crea_pdf_matricula("73567572W");
 */
?>