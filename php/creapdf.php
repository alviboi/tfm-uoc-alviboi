<?php
require_once('classes/class.Creaarxiu.php');
$dni = $HTTP_GET_VARS["dni"];
$pdf = new Creararxiu();

$pdf->Crea_pdf_matricula($dni);
?>