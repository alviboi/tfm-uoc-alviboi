<?php
session_start();
 
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true)
{
 
}
else
{
echo "
" . "Aquesta pàgina està restringida. <a href='login.php'>Entra Ací!</a>  <br> Si busques la pàgina de matrícula <a href='matriculaalumnes.php'> Ves ací</a>";
 
exit;
}
$ara = time();
 
if($ara > $_SESSION['expire'])
{
session_destroy();
echo "
 
" . "La seua sessió ha caducat, <a href='login.php'> Entra altra vegada</a>";
exit;
}
?>




<!DOCTYPE html>
<html lang="es">
	<head>
		<meta http-equiv="content-type" content="text/html" charset="UTF-8">
		<meta charset="utf-8">
		<title>Login Form</title>

	  	<link href="css/bootstrap.css" rel="stylesheet">
		<link rel="stylesheet" href="css/jquery-ui.css">
		<script src="js/jquery-1.11.3.js"></script>
  		<script src="js/jquery-ui.js"></script>
  		<script src="js/bootstrap.min.js"></script>
  		<script src="js/webcam.js"></script>
  		<script src="js/ajax.js"></script>
  		
  		


 <style>

 .fons
 {
 background: #ddd;;
 }
 
 .margenes { margin-top:20px; }
 </style>

	
	

<script charset="UTF-8">

function cog(){
	$("#busc").attr({
		'placeholder': 'Búsqueda per Cognom'
	});
	$("#busc_button").attr({
		'onclick': 'busc_cognom(busc.value);'
	});
	document.getElementById("busqueda").innerHTML = "Búsqueda per Cognom ";
	
}

function nom(){
	$("#busc").attr({
		'placeholder': 'Búsqueda per Nom'
	});
	$("#busc_button").attr({
		'onclick': 'busc_nom(busc.value);'
	});
	document.getElementById("busqueda").innerHTML = "Búsqueda per Nom ";
	
}

function dni(){
	$("#busc").attr({
		'placeholder': 'Búsqueda per DNI'
	});
	$("#busc_button").attr({
		'onclick': 'Datos_DNI(busc.value);'
	});
	document.getElementById("busqueda").innerHTML = "Búsqueda per DNI ";
	
}

function amaga_busc(){
	 //$('#busc').hide();
		//$('#busc_button').hide();
		//$('#busc_button2').hide();
		//$('#busqueda').hide();
		$('#busc_menu').hide();
}

function configuracio (){
	$('#principal').load("php/configuracio.php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
	 amaga_busc()
}

function matriculacio (){
	$('#principal').load("php/matricula.php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
	 	//$('#busc').show();
		//$('#busc_button').show();
		//$('#busc_button2').show();
		$('#busc_menu').show();
		//$('#busqueda').show();
}

function estadistica (){
	$('#principal').load("php/estadistica.php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
	 amaga_busc()
}

	  	  //document.getElementById("busc_button").onclick();


$(function () {
	
	$("#DataNaixement").datepicker({
	      changeMonth: true,
	      changeYear: true,
	      yearRange: '1940:2016'
	    });

	$("#busc").keypress(function( event ) {
		
		  if ( event.which == 13 ) {
				event.preventDefault();
			  $( "#busc_button" ).trigger( "click" );
		  	  //document.getElementById("busc_button").onclick();
		  	  //alert("Per a fer la búsqueda has de polsar l'icona de búsqueda");
		  }
		  
	});
	
    
});


</script>
	
	
		
</head>



<body class="fons">


<nav class="navbar-default navbar-inverse navbar-fixed-top" >

<div class="row" style="margin-left: 5px; margin-right: 20px">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>configuracio
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" class="text-small" class="dropdown-toggle" data-toggle="dropdown" href="#"><small><strong><?php echo $_SESSION['usuari_id'];?> </strong></small><b class="caret"></b></a>
          		<ul class="dropdown-menu">
					<li><a href="php/sesiondestroy.php">Surt</a></li>
				</ul>
        </div>



<div class="navbar-collapse collapse row">

<ul class="nav navbar-nav">
	<li><a href="#" onclick="matriculacio()">Matriculació</a></li>
	<li><a href="#">Llistats</a></li>
	<li><a href="#">Organitza cursos</a></li>
	<li><a href="#">Exporta arxius</a></li>
	<li><a href="#" onclick="estadistica()">Estadístiques</a></li>
	<li><a href="#" onclick="configuracio()">Configuració</a></li>
	
</ul>

<div id="busc_menu">
		<form id = "info" class="navbar-form navbar-right">
			<div class="form-group">
				<input id="busc" type="text" class="form-control col-md-8" placeholder="Búsqueda per DNI" onkeypress="a(event,this.value)" value=""/>
				<span style="margin-left: 2px" class="btn btn-default" id='busc_button2'><i id='busc_button'  onClick="Datos_DNI(busc.value)" class="glyphicon glyphicon-search"></i></span>
			</div>
		</form>
		
		<ul class="nav navbar-nav dropdown navbar-right pull-right">
					<li class="dropdown">
						<a href="#" data-target="#" class="dropdown-toggle" data-toggle="dropdown"><span id="busqueda">Altres búsquedes </span><b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="javascript:cog()" onclick="esta()">Búsqueda per Cognom</a></li>
							<li><a href="javascript:nom()">Búsqueda per Nom</a></li>
							<li class="divider"></li>
							<li><a href="javascript:dni()">Búsqueda per DNI</a></li>
						</ul>
					</li>
		</ul>
</div>
</div>
</div>
</nav>



<div class="row" style="margin-top: 70px;" id="principal">
<?php 
include_once 'php/matricula.php';
?>
</div>

</body>
</html>