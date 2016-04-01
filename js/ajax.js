var campos = ["Nom", "Cognoms", "DNI", "Telefon", "Sexe", "DataNaixement", "PaisNaixement", "Nacionalitat", "LocalitatNaixement", "ProvinciaNaixement", "Direccio", "CP", "Poblacio", "Email","Comentaris"]; //, "ProgramaACicleI", "ProgramaBCicleII", "Optativa1", "Optativa2", "ProgramaCValenciaJQCV", "ProgramaBDCursosPolivalents", "ProgramaJAnglesBasic", "Comentaris"];
var datos;

var base_url="http://localhost/tfm2/php/index.php/";
var url,encodedata;

function emplena (datos)
	{
	
		
	for (i = 0; i < datos.length; i++)	{
		if(datos[i]['Camp']=="ProgramaBDCursosPolivalents"||datos[i]['Camp']=="ProgramaACicleI"||datos[i]['Camp']=="ProgramaJAnglesBasic"||datos[i]['Camp']=="ProgramaCValenciaJQCV"||datos[i]['Camp']=="ProgramaBcicleII"){
			$('#'+ datos[i]['Camp'] +'' ).val(datos[i]['CursCodi']);
			if(datos[i]['Camp']=="ProgramaACicleI"||datos[i]['Camp']=="ProgramaBcicleII"){
					if (datos[i]['Optativa1']){
						$('#Optativa1' ).val(datos[i]['Optativa1']);
					}
					if (datos[i]['Optativa2']){
						$('#Optativa2' ).val(datos[i]['Optativa2']);
					}
			}
		}
	}
			
	for (i = 0; i < campos.length+2; i++)	{		
		
		
		
			$('#'+ campos[i] +'' ).val("");		    	
		  	$('#'+ campos[i] +'' ).val(datos[0][campos[i]]);
			
		
	 }
	
	if (datos[0]['Validada'] == 1){
		$('#Validada' ).prop("checked",true);
	} 
	 
	$('#busc').val("");
	var img = new Image();
	q = Math.floor((Math.random() * 1000) + 1);
	img.src = '/fotos_alumnes2/'+datos[0]['DNI']+'.jpg?'+q;
	foto.setAttribute('src', img.src);
	//ctx.drawImage(img, 10, 10);
	$("#dialog2").dialog("close");
	    
	
}


function Datos_DNI (dni) 
	{
		url = base_url+'dni/'+dni;
		$.ajax({
			url: url,
			dataType:'json',				   
		    type: 'GET',
			success:function(datos){
					emplena(datos);
				}
			});
	}

function busc_cognom (cognoms) 
	{
		url = base_url+'Cognoms/'+cognoms;
		$.ajax({
			url: url,
			dataType:'json',				   
		    type: 'GET',
			success:function(datos){
					emplena(datos);
				}
			});
	}

function busc_nom (nom) 
	{
		url = base_url+'Nom/'+nom;
		$.ajax({
			url: url,
			dataType:'json',				   
		    type: 'GET',
			success:function(datos){
					emplena(datos);
				}
			});
	}


function busc_cursos () 
{
	//var CursCamps = ["ProgramaACicleI","programaBcicleII","ProgramaCValenciaJQCV","ProgramaBDCursosPolivalents","ProgramaJAnglesBasic"];
	
	
		url = base_url+'/ConsultaCursosOfertats';
	
	
	
	
	$.ajax({
		url: url,
		dataType:'json',				   
	    type: 'GET',
		success:function(datos){
				
			
			//alert(datos[0]['Codi']);
				for (i = 0; i < datos.length; i++)	{
					$('#'+ datos[i]['Camp'] +'' ).append('<option value=\''+ datos[i]['Codi'] +'\'>' +datos[i]['Curs']+ '</option>');		    	
			}
		}
		});

}


function busc_cursos_tots () 
{
	//var CursCamps = ["ProgramaACicleI","programaBcicleII","ProgramaCValenciaJQCV","ProgramaBDCursosPolivalents","ProgramaJAnglesBasic"];
	url = base_url+'/ConsultaCursosTots';
	$.ajax({
		url: url,
		dataType:'json',				   
	    type: 'GET',
		success:function(datos){
			
				for (i = 0; i < datos.length; i++)	{
					
					if (datos[i]['Ofertat'] == 1)
						{
						$('#'+ datos[i]['Camp'] +'' ).append('<input type="checkbox" checked name="check[]" value=\''+ datos[i]['Codi'] +'\'>' +datos[i]['Curs']+ '<br>');		
						}
					else if (datos[i]['Ofertat'] == 0)
						{
						$('#'+ datos[i]['Camp'] +'' ).append('<input type="checkbox" name="check[]" value=\''+ datos[i]['Codi'] +'\'>' +datos[i]['Curs']+ '<br>');		
						}
					
			}
		}
		});

}




function actualitza_dades (){
	//alert($('form#actualitzar').serialize());
   
   upload($('#DNI').val());
   url = base_url+'/actualitza';
   $.ajax({
    	url: url,
        type: 'post',
        dataType: 'json',
        data: $('form#actualitzar').serialize(),
        success: function(data) {
                   alert(data);
                 }
    });
}


function inscriu_alumne (){
	upload($('#DNI').val());
	url = base_url+'/inscriu';
	   $.ajax({
	    	url: url,
	        type: 'post',
	        dataType: 'json',
	        data: $('form#actualitzar').serialize(),
	        success: function(data) {
	        		   //Posar error
	                   alert(data);
	                 }
	    });
	   url2 = base_url+'pdf/'+$('#DNI').val();
	   window.open(url2);
	
}






















function borrar (b) {
					//alert("avore");
					
					var aux = new Object();
					aux['DNI']= ''+ b +'';
					
					
					$.ajax({
					url: 'borrar.php',
				    data: aux,
 					type: 'POST',
					success:function(datos3){					    
					    alert(datos3);
					    for (i = 0; i < campos.length; i++)	{
					      $('#'+ campos[i] +'' ).val("");
					   }
					   $('#Validada' ).prop("checked",false);
					   $('#dni_busqueda' ).val("");
					}
		});	
		
}




function test2 () 
		{
			//alert(a);
			var datos_enviar = new Object();
					   //datos_enviar.cognoms = "Fucked"; 				
    				for (a = 0; a < campos.length; a++)	{				    	
				    	datos_enviar[campos[a]] = $('#'+ campos[a]).val();
					    }
					    if ($('#Validada').is(':checked')) {
							datos_enviar['Validada'] = 1;
						}	else {
							 datos_enviar['Validada'] = 0;
						}
					    url = base_url+'/ConsultaCursosOfertats';
			$.ajax({
					url: 'update.php',
					//dataType:'json',	//		  JSON.stringify( 
				   data: datos_enviar, 
 					type: 'POST',
					//complete: alert("Ok"),
					success:function(datos2){					    
					    alert(datos2);
					    }
		});
		}


function obrir_dialog2() {
					
					$( "#dialog2" ).dialog({
				
					});
				}

function este5(a) {
					
					alert(a.stringify);
				
				}
				function esborra() {
					alert("Vas a borrar el registre");
				}

				
	function Datos_DNI2 (a) 
				{
					dni['dni'] = a
					alert(dni['dni']);
					Datos_DNI (dni['dni']);
				}



