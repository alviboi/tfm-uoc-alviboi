<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title></title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" type="text/css" href="style2.css" media="screen" />
	<!--<link rel="stylesheet" type="text/css" href="../devheart-examples.css" media="screen" />-->
</head>
<body class="dhe-body">

<div id="center-wrapper">

	<div class="dhe-example-section" id="ex-1-4">
		
		<div>
		
		
		<datalist name="Optativa2" id="Cursd" size="5">
			<option value="GES2.1A">GES2.1A</option>
			<option value="GES2.1B">GES2.1B</option>
			<option value="GES2.1C">GES2.1C</option>
			<option value="GES2.1D">GES2.1D</option>
			<option value="GES2.1E">GES2.1E</option>
			<option value="Tots">Tots</option>
		</datalist>
<table class="table">
<tr>
<td>Buscar curs columna 1</td>
<td>Buscar curs columna 2</td>
<td>Buscar curs columna 3</td>
</tr>
<tr>
<td>
<input id="Curs1input" name="Click1" list="Cursd" onchange="Curs1(this.value,'colum1')">
</td>
<td>
<input id="Curs2input" name="Click2" list="Cursd" onchange="Curs1(this.value,'colum2')">
</td>
<td>
<input id="Curs3input" name="Click3" list="Cursd" onchange="Curs1(this.value,'colum3')">
</td>
</tr>
</table>
		
		
		
		
		</div>
		
		
		<br></br>
		
		
		<div class="dhe-example-section-content">

			<!-- BEGIN: XHTML for example 1.4 -->

			<div id="example-1-4">

				<div id="containment">

					<div class="column left first">

						<ul id = "colum1" class="sortable-list">
						<!-- Ací es claven les coses que busques -->	
						</ul>

					</div>

					<div class="column left">

						<ul id = "colum2" class="sortable-list">
						
						</ul>

					</div>

					<div class="column left">

						<ul id = "colum3" class="sortable-list">
						
						</ul>

					</div>

					<!--<div class="clearer">&nbsp;</div>-->

				</div>

			</div>

			<!-- END: XHTML for example 1.4 -->

		</div>
	</div>

	

</div>

<!-- Example JavaScript files -->

<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>

<!-- Example jQuery code (JavaScript)  -->
<script type="text/javascript">
//var datosenviar = [];
var i = 0;
var curs1;
var curs2;
var curs3;

function carregarnom (dadespersonals,identificador,onesposa) {

var div1 = document.createElement("li");
	div1.id = identificador;
	$('#'+onesposa).append(div1);
	$('#'+div1.id).addClass('sortable-item');
	$('#'+div1.id).html(dadespersonals);
	
	
}


$(document).ready(function(){

	// Example 1.4: Sortable and connectable lists (within containment)
	//	$('#example-1-4 .sortable-list').sortable({
$('#colum1').sortable({
		connectWith: '#example-1-4 .sortable-list',
		containment: '#containment',
		receive: function (event, ui) 
		{ 
		var dniagafat = ui.item.html().substr(0,9);
		//alert(dniagafat);
		//datosenviar['dni'] = dniagafat;
		//datosenviar['curs'] = Curs1input.value;
		//var data_to_send = $.serialize(datosenviar);
		if (Curs1input.value == "Tots") {
				curs1 = ' ';
				}	else {
				curs1 = Curs1input.value;				
				}	
		
		
	$.ajax({
					//cache: false,					
					url: 'canviarcurs.php',
					dataType: 'json',				   
				   data: {dni: '' + dniagafat + '', curs: '' + curs1 + ''}, 
				   //data: "{ \"dni\": \""+ dniagafat +"\", \"curs\": \""+ cursperapassar +"\"}",
 					type: 'POST',
					//error: alert('Hi ha hagut un error inscrivint l\'alumne en el curs'),					
 						
					});		
		}		
	});
	
	
	
	
$('#colum2').sortable({
		connectWith: '#example-1-4 .sortable-list',
		containment: '#containment',
		receive: function (event, ui) 
		{ 
		var dniagafat = ui.item.html().substr(0,9);

		if (Curs1input.value == "Tots") {
				curs2 = ' ';
				}	else {
				curs2 = Curs2input.value;				
				}	
			
					$.ajax({
					url: 'canviarcurs.php',
					dataType: 'json',				   
				   data: {dni: '' + dniagafat + '', curs: '' + curs2 + ''}, 
				   type: 'POST',
					});		
		}		
	});
	
	
	
$('#colum3').sortable({
		connectWith: '#example-1-4 .sortable-list',
		containment: '#containment',
		receive: function (event, ui) 
		{ 
		var dniagafat = ui.item.html().substr(0,9);

		if (Curs3input.value == "Tots") {
				curs3 = ' ';
				}	else {
				curs3 = Curs3input.value;				
				}	
			
					$.ajax({
					url: 'canviarcurs.php',
					dataType: 'json',				   
				   data: {dni: '' + dniagafat + '', curs: '' + curs3 + ''}, 
				   type: 'POST',
					});		
		}		
	});

});




function Curs1 (curs,pantalla) {

if (curs == "Tots") {
curs = ' ';
}


$.ajax({
									
					url: 'demanarcurs.php',
					dataType:'json',
					
				   data: {curs: ''+curs+''},
 					type: 'POST',
					error: function (xhr, status) {
					$('#'+pantalla).html('');
					},
					success:function(datos){
							
							$('#'+pantalla).html('');
							illarg = Object.keys(datos).length;	
								
							for (i = 0; i < illarg; i++) {
									  		
					  		nom_sencer = datos[i].dni + ': ' +datos[i].Nom + ', ' + datos[i].cognoms;
							carregarnom (nom_sencer,'id'+i+pantalla,pantalla);
					  		
					  			  
					  		}
					 		
					} 
					});
	
}



</script>

</body>
</html>