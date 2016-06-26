/**
 * @api {post} /php/index.php/Inserta_Grup Inserta a Grup
 * @apiName Inserta_Grup
 * @apiGroup Cursos_GES	
 * 
 * @apiDescription Amb aquesta petició insertem un alumne en un grup de GES.
 *
 * @apiParam {String} dni dni de l'alumne que volem assignar/canbiar de grup.
 * @apiParam {String} curs Codi del curs al que pertany.
 * 
 * 
 * @apiError error En el cas de que intente assignar-se a un lloc sense curs.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": ""No pots possar alumnes en aquesta opció perquè no es guardaran a cap grup""
 *     }
 */
 
function Inserta_Grup (dniagafat,curs)
  {
	  //alert(dniagafat);
	  url = base_url+'/Inserta_Grup';
		   $.ajax({
		    	url: url,
		        type: 'POST',
		        data: {
       		 		'dni': dniagafat,
         	     	'curs': curs		              	    
         	  	},
				error:function(data){
					var jsonResponse = JSON.parse(data.responseText);
					alert(jsonResponse.error);
				}
		    });
  }

/**
 * @api {get} /php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs Llistats GES no assignats
 * @apiName Curs1
 * @apiGroup Cursos_GES	
 * 
 * @apiDescription Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES.
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
 * 		[{"Nom":"000000002","0":"000000002","Cognoms":"000000002","1":"000000002","DNI":"000000002","2":"000000002","Grup":"GES21A","3":"GES21A"},{"Nom":"000000013","0":"000000013","Cognoms":"000000013","1":"000000013","DNI":"000000013","2":"000000013","Grup":"GES21A","3":"GES21A"},{"Nom":"00001234","0":"00001234","Cognoms":"00001234A","1":"00001234A","DNI":"00000009A","2":"00000009A","Grup":"GES21A","3":"GES21A"},{"Nom":"Natalia","0":"Natalia","Cognoms":"Rico","1":"Rico","DNI":"45785213w","2":"45785213w","Grup":"GES21A","3":"GES21A"},{"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE B\u00d3IX","1":"VICENTE B\u00d3IX","DNI":"32659874W","2":"32659874W","Grup":"GES21A","3":"GES21A"}]
 * 
 */

function Curs1(curs,id)
  {		
	  
		url = base_url+'/ConsultaMatriculatsCursinoAssignatsGrupGES/'+curs;
		if(curs == "Res")
		{   
			$("#sortable1").remove();
			$('#camp1').html("");
			
		} else {
			$('#camp1').html("");
			$('#camp1').html("<ul id='sortable1' class='droptrue'></ul>");
			$.ajax({
				url: url,
				dataType:'json',				   
			    type: 'GET',
				success:function(datos){
					for (i = 0; i < datos.length; i++)	{
						$('#sortable1').append("<li class='ui-state-default' id='"+datos[i]['DNI']+"'><img width='20' height='25' src='/fotos_alumnes2/" + datos[i]['DNI'] + ".jpg' alt=''/>  "+ datos[i]['Cognoms'] + ", " + datos[i]['Nom'] + "</li>");
					}
				}
			});
			$( "#sortable1" ).sortable({
			      connectWith: ".droptrue",
			      receive: function (event, ui) 
			  		{ 
			  			var dniagafat = ui.item.context.id;
			  			Inserta_Grup(dniagafat,curs);
			  		}
			 });
		 }
  }


/**
 * @api {get} /php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs Llistats GES no assignats 2
 * @apiName Curs2
 * @apiGroup Cursos_GES	
 * 
 * @apiDescription Amb aquesta petició consultem els alumnes que hi han matriculats a un curs que encara no estan assignats a GES.
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

  function Curs2(grup,id)
  {
		url = base_url+'/ConsultaGrupGES/'+grup;
		a = '#sortable'+id;
		if(grup == 'Res')
			{
			$(a).remove();
			$('#camp'+id).html("");
				
			} else {
				$('#camp'+id).html("");
				$('#camp'+id).html("<ul id='sortable"+id+"' class='droptrue'></ul>");
				
		$.ajax({
			url: url,
			dataType:'json',				   
		    type: 'GET',
			success:function(datos){
					for (i = 0; i < datos.length; i++)	{
					$(a).append("<li class='ui-state-default' id='"+datos[i]['DNI']+"'><img width='20' height='25' src='/fotos_alumnes2/" + datos[i]['DNI'] + ".jpg' alt=''/>  "+ datos[i]['Cognoms'] + ", " + datos[i]['Nom'] + "</li>");
					}				
			}
		});
		$(a).sortable({
		      connectWith: ".droptrue",
		      receive: function (event2, ui2) 
		  		{ 
		  		var dniagafat = ui2.item.context.id;
		  		Inserta_Grup(dniagafat,grup);
		  		}
		    });
		}
  }