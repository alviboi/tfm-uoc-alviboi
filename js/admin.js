

function obrir_dialog_any() {
	var any = any_actual();
	any2 = any+1;
	$("#missatges").html("<div class='bg-danger text-danger'><div align='center'><h1 class='glyphicon glyphicon-alert'></h1></div><p align='justify'>Vas a generar un nou procés de matriculació per a un altre curs natural. <u>Aquesta acció no es pot desfer.</u> Utilitza-la amb molt de compte</p><br><div><b>Curs actual: </b>"
							+ any + " - " + (parseInt(any)+1) + "</div><div class='row'></div></div>");
	$("#missatges")
			.dialog(
					{
						modal : true,
						buttons : {
							"Genera Nou Any" : function() {
								var a = confirm("Si generes un nou any ja no podràs gestionar les dades dels alumnes de l'any anterior. Estàs segur?");
								if (a == 1) {
									inserta_nou_any(any);
								} else {
									alert("No s'ha generat cap any nou!");
								}
							}
						}

					});
}



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

function configuracio (){
	$('#principal').load("php/configuracio.php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
	 $('#busc_menu').hide();
}

function matriculacio (){
	$('#principal').load("php/matricula.php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
		$('#busc_menu').show();
}

function estadistica (){
	$('#principal').load("php/estadistica.php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
	 $('#busc_menu').hide();
}

function canvia (pagina){
	$('#principal').load("php/"+pagina+".php");
	$(".nav").find(".active").removeClass("active");
	 $(this).parent().addClass("active");
	 $('#busc_menu').hide();
}


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
		  }
		  
	});
	
    
});


