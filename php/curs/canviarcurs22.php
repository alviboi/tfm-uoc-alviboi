<?php

$con = mysqli_connect('localhost', 'root', '', 'pac4');



$sql1 = "UPDATE alumnes SET Grup  = \"".$_POST['curs']."\" WHERE dni = \"".$_POST['dni']."\"";

//$sql1 = "UPDATE alumnes SET Grup  = \"GES2.1A\" WHERE dni = \"73567572w\"";



$result = mysqli_query($con, $sql1);
//echo ".$_POST['curs'].";
//echo ".$_POST['dni'].";
echo json_encode($_POST['curs']);
//echo json_encode("Mira mira");

mysqli_close($con); //Tanquem la conexió

?>