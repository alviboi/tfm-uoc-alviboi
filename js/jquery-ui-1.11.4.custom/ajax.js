var campos = ["Nom", "Cognoms", "DNI", "Telefon", "Sexe", "DataNaixement", "PaisNaixement", "Nacionalitat", "LocalitatNaixement", "ProvinciaNaixement", "Direccio", "CP", "Poblacio", "Email"]; //, "ProgramaACicleI", "ProgramaBCicleII", "Optativa1", "Optativa2", "ProgramaCValenciaJQCV", "ProgramaBDCursosPolivalents", "ProgramaJAnglesBasic", "Comentaris"];
var este = 0;
var datos;
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



	function Datos_DNI (dni) 
		{
			
					//var dni = new Object();
					//dni['dni'] = a; 
					
    				//alert('esta');
					
					$.ajax({
					url: 'php/consultes.php',
					dataType:'json',				   
				    data: {dni: '' + dni + ''}, 
 					type: 'POST',
					
					success:function(datos){
							
					  	  $('#busc').val("");
					  	  						  
					      for (i = 0; i < campos.length+2; i++)	{
					      $('#'+ campos[i] +'' ).val("");		    	
					    	//$('#'+ campos[i] +'' ).attr("value",datos[''+ campos[i] +'']);
					    	$('#'+ campos[i] +'' ).val(datos[0][campos[i]]); //''+ campos[i] +''
					    }
					      
					      
						/*if (datos['Validada']==1) {
							$('#Validada' ).prop("checked",true);
						}	else {
							 $('#Validada' ).prop("checked",false);
						}			    
					 este = Math.random()*1000000;						 
					 document.getElementById('fotografia').innerHTML = '';			    
/////Ací està la IP del centre					 
					 var ip = "<?php echo $_SERVER['SERVER_ADDR']; ?>";
					 document.getElementById('fotografia').innerHTML = '<img src=\"http:\/\/'+ ip +'\/cam\/images\/'+ datos['DNI'] +'.jpg?proce=' + este + '\" WIDTH=160 HEIGHT=120>';
					}*/
					//});
					
					//return false;
				}
					});
		}
				
	function busc_cognom (a) 
		{
					   				
    				
    				$.ajax({
					url: 'demanarcog2.php',
					dataType:'json',				   
				   data: {cognoms: '' + a + ''}, 
 					type: 'POST',
					
					success:function(datos){
					  		$('#dni_busqueda' ).val("");
					  		
					      for (i = 0; i < campos.length; i++)	{
					      $('#'+ campos[i] +'' ).val("");		    	
					    	//$('#'+ campos[i] +'' ).attr("value",datos[''+ campos[i] +'']);
					    	$('#'+ campos[i] +'' ).val(''+ datos[''+ campos[i] +'']);
					    }
						if (datos['Validada']==1) {
							$('#Validada' ).prop("checked",true);
						}	else {
							 $('#Validada' ).prop("checked",false);
						}
						
						este = Math.random()*100000;	
					 document.getElementById('fotografia').innerHTML = '';			    
					
					
///està referenciat al servidor, caldria posar la ip del centre					
					 var ip = "<?php echo $_SERVER['SERVER_ADDR']; ?>";
					 document.getElementById('fotografia').innerHTML = '<img src=\"http:\/\/'+ ip +'\/cam\/images\/'+ datos['DNI'] +'.jpg?proce=' + este + '\" WIDTH=160 HEIGHT=120>';
					 //document.getElementById('fotografia').innerHTML = '<img src=\"\\cam\\images\\'+ datos['DNI'] +'.jpg?proce=' + este + '\" WIDTH=160 HEIGHT=120>';
					}
					});
					
					
					return false;
				}
				
				
				

				
				
				
				
	/*		
	function actualitzar () 
		{
    				var datos_enviar = new Object();
					    				
    				for (i = 0; i < campos.length; i++)	{				    	
					    	datos_enviar.campos[i]=$('#'+ campos[i] +'' ).val();
					    }
    				
    				var myString = JSON.stringify(datos_enviar);
    				$.ajax({
					url: 'demanardni2.php',
					dataType:'json',				   
				   data: {dni: '' + a + ''}, 
 					type: 'POST',
					
					success:function(datos){
					  		var campos = ["Nom", "cognoms", "DNI", "Telefon", "Sexe", "DataNaixement", "Pais", "Nacionalitat", "LocalitatNaixement", "ProvinciaNaixement", "Direccio", "CodiPostal", "Poblacio", "Mail", "ProgramaACicleI", "ProgramaBCicleII", "Optativa1", "Optativa2", "ProgramaCValenciaJQCV", "ProgramaBDCursosPolivalents", "ProgramaJAnglesBasic", "Validada", "Comentaris"];
					      for (i = 0; i < campos.length; i++)	{				    	
					    	$('#'+ campos[i] +'' ).attr("value",datos[''+ campos[i] +'']);
					    	
					    }
					}
					});
					return false;
				}
	*/