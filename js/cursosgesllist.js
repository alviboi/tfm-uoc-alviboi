/**
 * @api {get} /php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs Llistats GES no assignats per llistat
 * @apiName Curs1llistat
 * @apiGroup Cursos_GES_llistat
 * 
 * @apiDescription Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES. Aquesta funció genera el llistat.
 *
 *
 * @apiParam {String} curs Codi del curs al que pertany.
 *
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * @apiSuccess {String} Grup En quin curs està matriculat
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * 	   [{"Nom":"000000011","0":"000000011","Cognoms":"000000011","1":"000000011","DNI":"000000011","2":"000000011","Grup":"GES21E","3":"GES21E"},{"Nom":"000000018","0":"000000018","Cognoms":"000000018","1":"000000018","DNI":"000000018","2":"000000018","Grup":"GES21E","3":"GES21E"},{"Nom":"00001234","0":"00001234","Cognoms":"00001234A","1":"00001234A","DNI":"00000009B","2":"00000009B","Grup":"GES21E","3":"GES21E"}]
 * 
 */

function Curs1llistat(curs,id)
{		
	  
		url = base_url+'/ConsultaMatriculatsCursinoAssignatsGrupGES/'+curs;
		if(curs == "Res")
		{   
			$('#llistat_cursos_ges').html("");
			
		} else {
			$('#llistat_cursos_ges').html("");
			//var curs = $('#llistat_cursos_ges').val();
			
			$.ajax({
				url: url,
				dataType:'json',				   
			    type: 'GET',
				success:function(datos){
					for (i = 0; i < datos.length; i++)	{
						if(!datos[i]['Comentaris']){datos[i]['Comentaris'] = "Cap comentari";}
						if ( curs == "G21m" || curs == "G21V")
						{
							$('#llistat_cursos_ges').append("<li class='row'  ><div class='col-lg-9' style='padding: 5px;' align='left'><img width='20' height='25' src='/fotos_alumnes2/" + datos[i]['DNI'] + ".jpg' alt=''/>  "+ datos[i]['Cognoms'] + ", " + datos[i]['Nom'] + "<b>    Comentaris: </b>"+datos[i]['Comentaris']+"</div> <div class='col-lg-3' align='right' style='padding: 5px;'><select  id='"+datos[i]['DNI']+"' onchange='Inserta_Grup(this.id,this.value)'><option value='Res'></option><option value='GES21A'>GES2.1A</option><option value='GES21B'>GES2.1B</option><option value='GES21C'>GES2.1C</option><option value='GES21D'>GES2.1D</option><option value='GES21E'>GES2.1E</option></select></div></li>");
							}
						else if ( curs == "G22m" || curs == "G22V")
							{
							
							$('#llistat_cursos_ges').append("<li class='row'  ><div class='col-lg-9' style='padding: 5px;' align='left'><img width='20' height='25' src='/fotos_alumnes2/" + datos[i]['DNI'] + ".jpg' alt=''/>  "+ datos[i]['Cognoms'] + ", " + datos[i]['Nom'] + "<b>    Comentaris: </b>"+datos[i]['Comentaris']+"</div> <div class='col-lg-3' align='right' style='padding: 5px;'><select  id='"+datos[i]['DNI']+"' onchange='Inserta_Grup(this.id,this.value)'><option value='Res'></option><option value='GES22A'>GES2.2A</option><option value='GES22B'>GES2.2B</option><option value='GES22C'>GES2.2C</option><option value='GES22D'>GES2.2D</option><option value='GES22E'>GES2.2E</option></select></div></li>");
							}
						
					
				}
				}
			});
			
		 }
}

/**
 * @api {get} /php/index.php/BorraAssigGrups Borrar totes les assignacions a un grup
 * @apiName BorrarCursosllistat
 * @apiGroup Cursos_GES_llistat
 * 
 * @apiDescription Amb aquesta petició borrem tots els alumnes assignats a un grup.
 *
 *
 * @apiParam {String} curs Codi del curs al que pertany.
 *
 */

function BorrarCursosllistat()
{		
	  
	var r = confirm("Estàs segur que vols borrar tots els grups?");
	if (r == true) {
		url = base_url+'/BorraAssigGrups';		
		$.ajax({
			url: url,
			dataType:'json',				   
		    type: 'GET',
		});			
	} else {
			alert("No s'ha borrat cap grup");
	}	

	
			
}

/**
 * @api {post} /php/index.php/Inserta_Grup Inserta a Grup
 * @apiName Inserta_Grup
 * @apiGroup Cursos_GES_llistat
 * 
 * @apiDescription Amb aquesta petició insertem un alumne en un grup de GES.
 *
 * @apiParam {String} dni dni de l'alumne que volem assignar/canbiar de grup.
 * @apiParam {String} curs Codi del curs al que pertany.
 * 
 * 
 */



function Inserta_Grup (dniagafat,curs)
{
	  alert(curs);
	  url = base_url+'/Inserta_Grup';
		   $.ajax({
		    	url: url,
		        type: 'POST',
		        data: {
     		 		'dni': dniagafat,
     		 		'curs': curs		              	    
       	  	}
		    });
}
