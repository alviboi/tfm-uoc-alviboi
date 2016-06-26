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
		<title>Sistema de Gestió de matrícula</title>

	  	<link href="css/bootstrap.css" rel="stylesheet">
	  	<link href="css/custom.css" rel="stylesheet">
		<link rel="stylesheet" href="css/jquery-ui.css">
		<script src="js/jquery-1.11.3.js"></script>
  		<script src="js/jquery-ui.js"></script>
  		<script src="js/bootstrap.min.js"></script>
  		<script src="js/webcam.js"></script>
  		<script src="js/ajax.js"></script>
  		<script src="js/admin.js"></script>
  		
		
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
	<li><a href="#" onclick="canvia('llistats')">Llistats</a></li>
	<li class="dropdown">
						<a href="#" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Organitza cursos<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#" onclick="canvia('cursosges')">Curs GES2.1</a></li>
							<li><a href="#" onclick="canvia('cursosges2')">Curs GES2.2</a></li>
							<li><a href="#" onclick="canvia('cursosgesllistat')">Organitza per llistat</a></li>
							<li><a href="#" onclick="canvia('sorteig')">SORTEIG!</a></li>
						</ul>
					</li>
	<li><a href="#" onclick="canvia('exportaarxius')">Exporta arxius</a></li>
	<li><a href="#" onclick="estadistica()">Estadístiques</a></li>
	<li class="dropdown">
			<a href="#" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Configuració<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#" onclick="configuracio()">Configuració general</a></li>
							<li><a href="#" onclick="canvia('importa_curs_anterior')">Importa Curs anterior</a></li>
							<li><a href="#" onclick="obrir_dialog_any()">Anys</a></li>
						</ul>
					</li>
	
</ul>

<div id="busc_menu">
		<form id = "info" class="navbar-form navbar-right">
			<div class="form-group">
				<input id="busc" type="text" class="form-control col-md-8" placeholder="Búsqueda per DNI" onkeypress="a(event,this.value)" value=""/>
				<span style="margin-left: 2px" class="btn btn-default glyphicon glyphicon-search" id='busc_button'  onClick="Datos_DNI(busc.value)"></span>
			</div>
		</form>
		
		<ul class="nav navbar-nav dropdown navbar-right pull-right">
					<li class="dropdown">
						<a href="#" data-target="#" class="dropdown-toggle" data-toggle="dropdown"><span id="busqueda">Altres búsquedes </span><b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="javascript:cog()" onclick="esta()">Búsqueda per Cognom</a></li>
							<li class="divider"></li>
							<li><a href="javascript:dni()">Búsqueda per DNI</a></li>
						</ul>
					</li>
		</ul>
</div>
</div>
</div>
</nav>

<div id="missatges" title="Missatge" style="display:none;">

</div>

<div class="row" style="margin-top: 70px;" id="principal">
<?php 
include_once 'php/matricula.php';
?>
</div>

</body>
</html>