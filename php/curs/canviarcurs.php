<?php

$con = mysqli_connect('localhost', 'root', '', 'pac4');



$sql1 = "UPDATE alumnes SET Grup  = \"".$_POST['curs']."\" WHERE dni = \"".$_POST['dni']."\"";

$result = mysqli_query($con, $sql1);
//echo ".$_POST['curs'].";
//echo ".$_POST['dni'].";
echo json_encode($_POST['curs']);

mysqli_close($con); //Tanquem la conexió

?>