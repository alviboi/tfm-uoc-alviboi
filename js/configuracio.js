/**
 * @api {post} /php/index.php/GuardaCursos Desa es cursos ofertats
 * @apiName actualitza_cursos
 * @apiGroup configuració	
 *
 * @apiDescription Amb aquesta petició desarem tots els cursos ofertats.
 *
 *
 * @apiParam {Array} check Array amb tots els codis dels cursos ofertats.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE[]: ..."
 *     }
 */


function actualitza_cursos (){
	   
	   url = base_url+'/GuardaCursos';
	   $.ajax({
	    	url: url,
	        type: 'post',
	        dataType: 'json',
	        data: $('form#actualitza_cursos').serialize(),
	        success: function() {
	                   alert("Cursos guardats");
	                   $('#principal').load("php/configuracio.php");
	                 }
	    });
	   $('.nav-tabs a[href="#CursosOfertats"]').tab('show');
	}

/**
 * @api {post} /php/index.php/AltaCursos Donar alta un curs
 * @apiName donar_alta_cursos
 * @apiGroup configuració	
 * 
 * @apiDescription Amb aquesta petició donarem d'alta un nou curs.
 *
 * @apiParam {String} Codi_Curs Codi del nou curs a donar de alta.
 * @apiParam {String} Nom_del_Curs Nom del curs a donar de alta
 * @apiParam {String} Camp_Curs Camps del curs al que pertany
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     
  * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE[]: ..."
 *     }
 */

function donar_alta_cursos (){
	   
	   url = base_url+'/AltaCursos';
	   $.ajax({
	    	url: url,
	        type: 'post',
	        dataType: 'json',
	        data: $('form#altacursos').serialize(),
	        success: function(data) {
							
							//busc_cursos_tots ();
	                   		alert("Curs donat de alta. Has d'actualitzar la pàgina per veure els canvis.");
	                   		$('#principal').load("php/configuracio.php");
	                   		
	                   	  
	 	                   
	                   		
	                 },
	        error: function (xhr, status, error) {
	        	var jsonResponse = JSON.parse(xhr.responseText);
	            alert(jsonResponse.error);
		        }
	    });
	   $('.nav-tabs a[href="#altacurs"]').tab('show');
	}


/**
 * @api {post} /php/index.php/alta_usuari Donar alta un usuari
 * @apiName donar_alta_usuari
 * @apiGroup configuració	
 * 
 * @apiDescription Amb aquesta petició donarem d'alta un nou usuari que podrà gestionar la base de dades
 *
 * @apiParam {String} Nom Nom personal del usuari que volem donar d'alta.
 * @apiParam {String} Usuari Usuari amb el que vol fer login
 * @apiParam {String} Password Contrasenya per a poder accedir
 *
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     
  * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '1234' for key 'usuari'"
 *     }
 */

function donar_alta_usuari (){
	   
	   url = base_url+'/alta_usuari';
	   $.ajax({
	    	url: url,
	        type: 'post',
	        dataType: 'json',
	        data: $('form#alta_usuari').serialize(),
	        success: function(data) {
							
							//busc_cursos_tots ();
							$('#Nom,#Usuari,#Password').val("");
	                   		alert("Usuari donat de alta.");
	                   		
	                   		$('#principal').load("php/configuracio.php");
	                   		
	                 },
	        error: function (xhr, status, error) {
	        	var jsonResponse = JSON.parse(xhr.responseText);
	            alert(jsonResponse.error);
		        }
	    });
	}

/**
 * @api {post} /php/index.php/borra_curs Esborrar curs
 * @apiName borra_curs
 * @apiGroup configuració	
 * 
 * @apiDescription Amb aquesta petició donarem esborrarem un curs.
 *
 * @apiParam {String} curs Codi del curs a esborrar.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE[]: ..."
 *     }
 */

function borra_curs (){
	   
	   url = base_url+'/borra_curs';
		$a = confirm ("Estàs segur de que vols borrar el curs? Tota la informació es perdrà i pots crear resultats inesperats a la base de dades");
		if ($a == 0)
		{
		}
		else
		{


	   $.ajax({
	    	url: url,
	        type: 'post',
	        dataType: 'json',
	        data: $('#cursosborraform').serialize(),
	        success: function(data) {
							
							//busc_cursos_tots ();
							
	                   		alert("Curs esborrat!!!");
	                   		
	                   		$('#principal').load("php/configuracio.php");
	                   		
	                 },
	        error: function (xhr, status, error) {
	        	var jsonResponse = JSON.parse(xhr.responseText);
	            alert(jsonResponse.error);
		        }
	    });
		}
		$('.nav-tabs a[href="#confcurs"]').tab('show');
	}

