var acceptats_al_sorteig = {};


/**
 * @api {get} /php/index.php/sorteig_lletra/:lletra/:curs/:quan Fer sorteig
 * @apiName sorteig
 * @apiGroup Organitza_Cursos
 * 
 * @apiDescription Una vegada acabat el procés de matrícula es realitza un sorteig sobre totes les peticions, però només entren una quantitat d'alumnes.
 * 
 * @apiParam {char} lletra que ha sortit com a resultat del sorteig.
 * @apiParam {String} curs Curs del qual s'està fent el sorteig.
 * @apiParam {Integer} quan Quantitatde gent que entra en el curs
 *  
 * 
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * 
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *     [{"DNI":"45785213w","0":"45785213w","Nom":"Natalia","1":"Natalia","Cognoms":"Rico","2":"Rico"},{"DNI":"99999999F","0":"99999999F","Nom":"Natalia","1":"Natalia","Cognoms":"Rico","2":"Rico"},{"DNI":"99999991A","0":"99999991A","Nom":"Jose Luis","1":"Jose Luis","Cognoms":"RRrr","2":"RRrr"},{"DNI":"32569814q","0":"32569814q","Nom":"\u00c1LFREDO","1":"\u00c1LFREDO","Cognoms":"VICENTE B\u00d3IX","2":"VICENTE B\u00d3IX"},{"DNI":"98765432Q","0":"98765432Q","Nom":"\u00c1LFREDO","1":"\u00c1LFREDO","Cognoms":"VICENTE B\u00d3IX","2":"VICENTE B\u00d3IX"},{"DNI":"32659874W","0":"32659874W","Nom":"\u00c1LFREDO","1":"\u00c1LFREDO","Cognoms":"VICENTE B\u00d3IX","2":"VICENTE B\u00d3IX"},{"DNI":"73567572W","0":"73567572W","Nom":"\u00c1LFREDO","1":"\u00c1LFREDO","Cognoms":"VICENTE BOIX","2":"VICENTE BOIX"},{"DNI":"000000010","0":"000000010","Nom":"000000002","1":"000000002","Cognoms":"000000002","2":"000000002"},{"DNI":"000000003","0":"000000003","Nom":"000000003","1":"000000003","Cognoms":"000000003","2":"000000003"},{"DNI":"000000011","0":"000000011","Nom":"000000011","1":"000000011","Cognoms":"000000011","2":"000000011"}]
 *     
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function sorteig() {

	var lletra = $('#lletra').val();
	var quan = $('#quan').val();
	var curs = $('#Cursos').val();
	$('#resultat_sorteig').html("");
	if (curs == null || lletra == '' || quan == '') {
		alert("Has d'omplir tots els camps");
	} else {
		url = base_url + '/sorteig_lletra/' + lletra + '/' + curs + '/' + quan;
		$.ajax({
			url : url,
			type : 'get',
			dataType : 'json',
			success : function(datos) {

				if (datos['error']) {
					alert(datos['error']);
					// console.log(datos);
				}

				else {
					acceptats_al_sorteig = {};
					for (i = 0; i < datos.length; i++) {

						num = i + 1;
						$('#resultat_sorteig').append(
								"" + num + ".-  " + datos[i]['Cognoms'] + ", "
										+ datos[i]['Nom'] + "    <b>DNI: </b>"
										+ datos[i]['DNI'] + "<br>");
						acceptats_al_sorteig[i] = datos[i]['DNI'];
					}
					$('#matricula').show();
				}
			},
			error : function(xhr, status, error) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	}
}

/**
 * @api {get} /php/index.php/matricula_sorteig Matricula alumnes sorteig
 * @apiName matricula_sorteig
 * @apiGroup Organitza_Cursos
 * 
 * @apiDescription Una vegada acabat el procés de matrícula es realitza un sorteig sobre totes les peticions, però només entren una quantitat d'alumnes.
 * 
 * @apiParam {Array} Array amb tots els dnis de la gent que es va a matriucular.
 *  
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *          
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function matricula_sorteig() {
	// alert(acceptats_al_sorteig[3]);
	curs2 = $('#Cursos').val();
	url = base_url + '/matricula_sorteig';
	$.ajax({
		url : url,
		type : 'post',
		dataType : 'json',
		data : 
		{
			dnis: acceptats_al_sorteig,
			curs: curs2	
			
		},
		
		success : function(data) {
			alert("Alumnes matriculats correctament");
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});

}