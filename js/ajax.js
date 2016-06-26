var campos = [ "Nom", "Cognoms", "DNI", "Telefon", "Sexe", "DataNaixement",
		"PaisNaixement", "Nacionalitat", "LocalitatNaixement",
		"ProvinciaNaixement", "Direccio", "CP", "Poblacio", "Email",
		"Comentaris" ];
var datos;
var base_url = "php/index.php/";
var url, encodedata;


function emplena(datos) {
	$('#ProgramaBDCursosPolivalents,#ProgramaACicleI,#ProgramaJAnglesBasic,#ProgramaCValenciaJQCV,#ProgramaBcicleII,#Optativa1,#Optativa2').val("No");
	$('#MatriculatProgramaBDCursosPolivalents,#MatriculatProgramaACicleI,#MatriculatProgramaJAnglesBasic,#MatriculatProgramaCValenciaJQCV,#MatriculatProgramaBcicleII').attr('checked', false);
	for (i = 0; i < datos.length; i++) {
		if (datos[i]['Camp'] == "ProgramaBDCursosPolivalents"
				|| datos[i]['Camp'] == "ProgramaACicleI"
				|| datos[i]['Camp'] == "ProgramaJAnglesBasic"
				|| datos[i]['Camp'] == "ProgramaCValenciaJQCV"
				|| datos[i]['Camp'] == "ProgramaBcicleII") {
			$('#' + datos[i]['Camp'] + '').val(datos[i]['CursCodi']);
			if (datos[i]['Camp'] == "ProgramaACicleI"
					|| datos[i]['Camp'] == "ProgramaBcicleII") {
				if (datos[i]['Optativa1']) {
					$('#Optativa1').val(datos[i]['Optativa1']);
				}
				if (datos[i]['Optativa2']) {
					$('#Optativa2').val(datos[i]['Optativa2']);
				}
			}
		}
	}
	for (i = 0; i < campos.length + 2; i++) {
		$('#' + campos[i] + '').val("");
		$('#' + campos[i] + '').val(datos[0][campos[i]]);
	}
	if (datos[0]['Validada'] == 1) {
		$('#Validada').prop("checked", true);
	}
	
	for (i = 0; i < datos.length; i++) {
	
		if (datos[i]['Matriculat'] == 1) {
			$('#Matriculat'+datos[i]['Camp']).prop("checked", true);
			$("#Matriculat"+datos[i]['Camp']).attr("value",datos[i]['CursCodi']);
		} else {
			$('#Matriculat'+datos[i]['Camp']).attr('checked', false);
		}
		
	}
	
	
	
	$('#busc').val("");
	var img3 = new Image();
	q = Math.floor((Math.random() * 1000) + 1);

	img3.addEventListener("load", function() {
		canvas.getContext('2d').drawImage(img3, 0, 0);
	}, false);

	img3.src = '/fotos_alumnes2/' + datos[0]['DNI'] + '.jpg?' + q;

	foto.setAttribute('src', img3.src);
	$("#dialog2").dialog("close");

}


/**
 * @api {get} /php/index.php/dni/:dni Usuari per dni
 * @apiName Get_Datos_DNI
 * @apiGroup matrícula
 * 
 * @apiDescription Es demanen totes les dades d'un usuari.
 * @apiParam {String} dni DNI del usuari, clau principal.
 *
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * @apiSuccess {String} Telefon Telèfon de l'alumne
 * @apiSuccess {String} Sexe Sexe de l'alumne
 * @apiSuccess {Date} 	DataNaixement Data de Naixement de l'alumne
 * @apiSuccess {String} PaisNaixement País de Naixement de l'alumne
 * @apiSuccess {String} Nacionalitat Nacionalitat de l'alumne
 * @apiSuccess {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiSuccess {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiSuccess {String} Direccio L'adreça de l'alumne
 * @apiSuccess {Number} CP Codi Postal
 * @apiSuccess {String} Poblacio On viu
 * @apiSuccess {String} Email Correu electrònic
 * @apiSuccess {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiSuccess {String} Optativa1 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiSuccess {String} Optativa2 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiSuccess {Integer} Validada Si ha entregat tots els paper o no
 * @apiSuccess {String} CursCodi En quin curs està matriculat
 * @apiSuccess {Integer} Matriculat Si ha estat acceptat o no.
 * @apiSuccess {String} Camp Camp del Curs on està matriculat
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *       {"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE BOIX","1":"VICENTE BOIX","DNI":"73567572W","2":"73567572W","Telefon":"654722866","3":"654722866","Sexe":"Home","4":"Home","DataNaixement":"05\/07\/1979","5":"05\/07\/1979","PaisNaixement":"ESPANYA","6":"ESPANYA","Nacionalitat":"espanyola (E)","7":"espanyola (E)","LocalitatNaixement":"VAL\u00c8NCIA","8":"VAL\u00c8NCIA","ProvinciaNaixement":"VAL\u00c8NCIA","9":"VAL\u00c8NCIA","Direccio":"TRINQUET VELL 44","10":"TRINQUET VELL 44","CP":"46410","11":"46410","Poblacio":"SUECA","12":"SUECA","Email":"alviboi@gmail.com","13":"alviboi@gmail.com","Comentaris":"","14":"","Optativa1":"OIP","15":"OIP","Optativa2":"TMI","16":"TMI","Validada":"1","17":"1","CursCodi":"G21m","18":"G21m","Matriculat":"0","19":"0","Camp":"ProgramaBcicleII","20":"ProgramaBcicleII"}
 *     
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "La consulta no té resultats"
 *     }
 */




function Datos_DNI(dni) {
	if (dni == "") {
		alert("Has d'escriure un valor");
	} else {
		url = base_url + 'dni/' + dni;
		$.ajax({
			url : url,
			dataType : 'json',
			type : 'GET',
			success : function(datos) {
				emplena(datos);
			},
			error : function(xhr, status, error) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	}

}

function Datos_DNI2(dni) {
	$("#missatges").dialog('destroy');
	Datos_DNI(dni);
}

/**
 * @api {get} /php/index.php/Cognoms/:Cognoms Usuari per Cognom
 * @apiName Get_busc_cognom
 * @apiGroup matrícula
 * 
 * @apiDescription Es demanen tots els usuaris que tinguen eixe mateix Cognom.
 * @apiParam {String} Cognoms Cognom dels alumnes que tinguen eixe cognom
 *
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb el número d'alumnes que tinguen el cognom cercat.
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *       {"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE BOIX","1":"VICENTE BOIX","DNI":"73567572W","2":"73567572W","Telefon":"654722866","3":"654722866","Sexe":"Home","4":"Home","DataNaixement":"05\/07\/1979","5":"05\/07\/1979","PaisNaixement":"ESPANYA","6":"ESPANYA","Nacionalitat":"espanyola (E)","7":"espanyola (E)","LocalitatNaixement":"VAL\u00c8NCIA","8":"VAL\u00c8NCIA","ProvinciaNaixement":"VAL\u00c8NCIA","9":"VAL\u00c8NCIA","Direccio":"TRINQUET VELL 44","10":"TRINQUET VELL 44","CP":"46410","11":"46410","Poblacio":"SUECA","12":"SUECA","Email":"alviboi@gmail.com","13":"alviboi@gmail.com","Comentaris":"","14":"","Optativa1":"OIP","15":"OIP","Optativa2":"TMI","16":"TMI","Validada":"1","17":"1","CursCodi":"G21m","18":"G21m","Matriculat":"0","19":"0","Camp":"ProgramaBcicleII","20":"ProgramaBcicleII"}
 *       {"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE BOIX","1":"VICENTE BOIX","DNI":"73567571W","2":"73567571W","Telefon":"654722866","3":"654722866","Sexe":"Home","4":"Home","DataNaixement":"05\/07\/1979","5":"05\/07\/1979","PaisNaixement":"ESPANYA","6":"ESPANYA","Nacionalitat":"espanyola (E)","7":"espanyola (E)","LocalitatNaixement":"VAL\u00c8NCIA","8":"VAL\u00c8NCIA","ProvinciaNaixement":"VAL\u00c8NCIA","9":"VAL\u00c8NCIA","Direccio":"TRINQUET VELL 44","10":"TRINQUET VELL 44","CP":"46410","11":"46410","Poblacio":"SUECA","12":"SUECA","Email":"alviboi@gmail.com","13":"alviboi@gmail.com","Comentaris":"","14":"","Optativa1":"OIP","15":"OIP","Optativa2":"TMI","16":"TMI","Validada":"1","17":"1","CursCodi":"G21m","18":"G21m","Matriculat":"0","19":"0","Camp":"ProgramaBcicleII","20":"ProgramaBcicleII"}
 *     
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "La consulta no té resultats"
 *     }
 */


function busc_cognom(cognoms) {
	url = base_url + 'Cognoms/' + cognoms;
			$.ajax({
				url : url,
				dataType : 'json',
				type : 'GET',
				success : function(datos) {
					$("#missatges").html("");
					$("#missatges")
							.append(
									"<div class='btn-group btn-group-vertical' role='group' id='cogllist' align='center'></div>");
					for (i = 0; i < datos.length; i++) {
						$("#cogllist").append(
								"<a type='button' onClick='Datos_DNI2 (this.id)' class='btn btn-default' id='"
										+ datos[i]['DNI'] + "'>"
										+ datos[i]['Cognoms'] + ", "
										+ datos[i]['Nom'] + "</a>");
					}
					$("#missatges").dialog({
						modal : true,
						buttons : {
							"Tanca" : function() {
								$(this).dialog('destroy');
							}
						}
					});
				},
				error : function(xhr, status, error) {
					var jsonResponse = JSON.parse(xhr.responseText);
					alert(jsonResponse.error);
				}
			});
}
/*
function busc_nom(nom) {
	url = base_url + 'Nom/' + nom;
	$.ajax({
		url : url,
		dataType : 'json',
		type : 'GET',
		success : function(datos) {
			emplena(datos);
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
}
*/
/**
 * @api {get} /php/index.php/ConsultaCursosOfertats Consulta Cursos Ofertats
 * @apiName Get_busc_cursos
 * @apiGroup matrícula
 * 
 * @apiDescription Es demanen tots els cursos ofertats en eixe moment
 *
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan ofertats en eixe moment.
 * @apiSuccess {String} Codi Codi del curs
 * @apiSuccess {String} Curs Nom complet del curs
 * @apiSuccess {String} Camp Camps del curs
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *      [{"Codi":"AcGSv","0":"AcGSv","Curs":"Acc\u00e9s CFGS vesprada","1":"Acc\u00e9s CFGS vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBDCursosPolivalents","3":"ProgramaBDCursosPolivalents"},{"Codi":"AcUNm","0":"AcUNm","Curs":"Acc\u00e9s Universitat mat\u00ed","1":"Acc\u00e9s Universitat mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBDCursosPolivalents","3":"ProgramaBDCursosPolivalents"},{"Codi":"ALFm","0":"ALFm","Curs":"ALFA mat\u00ed","1":"ALFA mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"ALFv","0":"ALFv","Curs":"ALFA vesprada","1":"ALFA vesprada","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"CA1Angm","0":"CA1Angm","Curs":"Certificat A1 Angl\u00e8s mat\u00ed","1":"Certificat A1 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"CA2Angm","0":"CA2Angm","Curs":"Certificat A2 Angl\u00e8s mat\u00ed","1":"Certificat A2 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"CB1Angm","0":"CB1Angm","Curs":"Certificat B1 Angl\u00e8s mat\u00ed","1":"Certificat B1 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"Elm","0":"Elm","Curs":"ELEMENTAL mat\u00ed","1":"ELEMENTAL mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"G21m","0":"G21m","Curs":"GES2.1 mat\u00ed","1":"GES2.1 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G21V","0":"G21V","Curs":"GES2.1 vesprada","1":"GES2.1 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22d","0":"G22d","Curs":"GES2.2 dist\u00e0ncia","1":"GES2.2 dist\u00e0ncia","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22m","0":"G22m","Curs":"GES2.2 mat\u00ed","1":"GES2.2 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22v","0":"G22v","Curs":"GES2.2 vesprada","1":"GES2.2 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"Mim","0":"Mim","Curs":"MITJ\u00c0 mat\u00ed","1":"MITJ\u00c0 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"Orv","0":"Orv","Curs":"ORAL vesprada","1":"ORAL vesprada","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"SUPv","0":"SUPv","Curs":"SUPERIOR vesprada","1":"SUPERIOR vesprada","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"TAL13m","0":"TAL13m","Curs":"TALLER1.3 mat\u00ed","1":"TALLER1.3 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"TAL13v","0":"TAL13v","Curs":"TALLER1.3 vesprada","1":"TALLER1.3 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"TALAngm","0":"TALAngm","Curs":"Taller angles mat\u00ed","1":"Taller angles mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"TALAngv","0":"TALAngv","Curs":"Taller angles vesprada","1":"Taller angles vesprada","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"}]
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function busc_cursos() {
	url = base_url + '/ConsultaCursosOfertats';
	$.ajax({
		url : url,
		dataType : 'json',
		type : 'GET',
		success : function(datos) {
			for (i = 0; i < datos.length; i++) {
				$('#' + datos[i]['Camp'] + '').append(
						'<option value=\'' + datos[i]['Codi'] + '\'>'
								+ datos[i]['Curs'] + '</option>');
			}
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
}

/**
 * @api {get} /php/index.php/ConsultaCursosTots Consulta tots els cursos 
 * @apiName Get_busc_cursos_tots
 * @apiGroup matrícula
 * 
 * @apiDescription Es demanen tots els cursos ofertats i no ofertats en eixe moment, o siga tots els qui estan donats de alta en la base de dades, i e plena les dades en la pàgina de matrícula.
 *
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Codi Codi del curs
 * @apiSuccess {String} Curs Nom complet del curs
 * @apiSuccess {String} Camp Camps del curs
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *      [{"Codi":"AcGSv","0":"AcGSv","Curs":"Acc\u00e9s CFGS vesprada","1":"Acc\u00e9s CFGS vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBDCursosPolivalents","3":"ProgramaBDCursosPolivalents"},{"Codi":"AcUNm","0":"AcUNm","Curs":"Acc\u00e9s Universitat mat\u00ed","1":"Acc\u00e9s Universitat mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBDCursosPolivalents","3":"ProgramaBDCursosPolivalents"},{"Codi":"ALFm","0":"ALFm","Curs":"ALFA mat\u00ed","1":"ALFA mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"ALFv","0":"ALFv","Curs":"ALFA vesprada","1":"ALFA vesprada","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"CA1Angm","0":"CA1Angm","Curs":"Certificat A1 Angl\u00e8s mat\u00ed","1":"Certificat A1 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"CA2Angm","0":"CA2Angm","Curs":"Certificat A2 Angl\u00e8s mat\u00ed","1":"Certificat A2 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"CB1Angm","0":"CB1Angm","Curs":"Certificat B1 Angl\u00e8s mat\u00ed","1":"Certificat B1 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"Elm","0":"Elm","Curs":"ELEMENTAL mat\u00ed","1":"ELEMENTAL mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"G21m","0":"G21m","Curs":"GES2.1 mat\u00ed","1":"GES2.1 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G21V","0":"G21V","Curs":"GES2.1 vesprada","1":"GES2.1 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22d","0":"G22d","Curs":"GES2.2 dist\u00e0ncia","1":"GES2.2 dist\u00e0ncia","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22m","0":"G22m","Curs":"GES2.2 mat\u00ed","1":"GES2.2 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22v","0":"G22v","Curs":"GES2.2 vesprada","1":"GES2.2 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"Mim","0":"Mim","Curs":"MITJ\u00c0 mat\u00ed","1":"MITJ\u00c0 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"Orv","0":"Orv","Curs":"ORAL vesprada","1":"ORAL vesprada","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"SUPv","0":"SUPv","Curs":"SUPERIOR vesprada","1":"SUPERIOR vesprada","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"TAL13m","0":"TAL13m","Curs":"TALLER1.3 mat\u00ed","1":"TALLER1.3 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"TAL13v","0":"TAL13v","Curs":"TALLER1.3 vesprada","1":"TALLER1.3 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"TALAngm","0":"TALAngm","Curs":"Taller angles mat\u00ed","1":"Taller angles mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"TALAngv","0":"TALAngv","Curs":"Taller angles vesprada","1":"Taller angles vesprada","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"}]
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function busc_cursos_tots() {
	url = base_url + '/ConsultaCursosTots';
	$.ajax({
		url : url,
		dataType : 'json',
		type : 'GET',
		success : function(datos) {

			for (i = 0; i < datos.length; i++) {

				if (datos[i]['Ofertat'] == 1) {
					$('#' + datos[i]['Camp'] + '').append(
							'<input type="checkbox" checked name="check[]" value=\''
									+ datos[i]['Codi'] + '\'>'
									+ datos[i]['Curs'] + '<br>');
				} else if (datos[i]['Ofertat'] == 0) {
					$('#' + datos[i]['Camp'] + '').append(
							'<input type="checkbox" name="check[]" value=\''
									+ datos[i]['Codi'] + '\'>'
									+ datos[i]['Curs'] + '<br>');
				}
			}
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
}

/**
 * @api {get} /php/index.php/ConsultaCursosTots Consulta tots els cursos 
 * @apiName busc_cursos_tots_llistat
 * @apiGroup arxius
 * 
 * @apiDescription Es demanen tots els cursos ofertats i no ofertats en eixe moment, o siga tots els qui estan donats de alta en la base de dades, i emplena les dades necessàries en l'apartat d'arxius.
 *
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Codi Codi del curs
 * @apiSuccess {String} Curs Nom complet del curs
 * @apiSuccess {String} Camp Camps del curs
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *      [{"Codi":"AcGSv","0":"AcGSv","Curs":"Acc\u00e9s CFGS vesprada","1":"Acc\u00e9s CFGS vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBDCursosPolivalents","3":"ProgramaBDCursosPolivalents"},{"Codi":"AcUNm","0":"AcUNm","Curs":"Acc\u00e9s Universitat mat\u00ed","1":"Acc\u00e9s Universitat mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBDCursosPolivalents","3":"ProgramaBDCursosPolivalents"},{"Codi":"ALFm","0":"ALFm","Curs":"ALFA mat\u00ed","1":"ALFA mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"ALFv","0":"ALFv","Curs":"ALFA vesprada","1":"ALFA vesprada","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"CA1Angm","0":"CA1Angm","Curs":"Certificat A1 Angl\u00e8s mat\u00ed","1":"Certificat A1 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"CA2Angm","0":"CA2Angm","Curs":"Certificat A2 Angl\u00e8s mat\u00ed","1":"Certificat A2 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"CB1Angm","0":"CB1Angm","Curs":"Certificat B1 Angl\u00e8s mat\u00ed","1":"Certificat B1 Angl\u00e8s mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"Elm","0":"Elm","Curs":"ELEMENTAL mat\u00ed","1":"ELEMENTAL mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"G21m","0":"G21m","Curs":"GES2.1 mat\u00ed","1":"GES2.1 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G21V","0":"G21V","Curs":"GES2.1 vesprada","1":"GES2.1 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22d","0":"G22d","Curs":"GES2.2 dist\u00e0ncia","1":"GES2.2 dist\u00e0ncia","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22m","0":"G22m","Curs":"GES2.2 mat\u00ed","1":"GES2.2 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"G22v","0":"G22v","Curs":"GES2.2 vesprada","1":"GES2.2 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaBcicleII","3":"ProgramaBcicleII"},{"Codi":"Mim","0":"Mim","Curs":"MITJ\u00c0 mat\u00ed","1":"MITJ\u00c0 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"Orv","0":"Orv","Curs":"ORAL vesprada","1":"ORAL vesprada","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"SUPv","0":"SUPv","Curs":"SUPERIOR vesprada","1":"SUPERIOR vesprada","Ofertat":"1","2":"1","Camp":"ProgramaCValenciaJQCV","3":"ProgramaCValenciaJQCV"},{"Codi":"TAL13m","0":"TAL13m","Curs":"TALLER1.3 mat\u00ed","1":"TALLER1.3 mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"TAL13v","0":"TAL13v","Curs":"TALLER1.3 vesprada","1":"TALLER1.3 vesprada","Ofertat":"1","2":"1","Camp":"ProgramaACicleI","3":"ProgramaACicleI"},{"Codi":"TALAngm","0":"TALAngm","Curs":"Taller angles mat\u00ed","1":"Taller angles mat\u00ed","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"},{"Codi":"TALAngv","0":"TALAngv","Curs":"Taller angles vesprada","1":"Taller angles vesprada","Ofertat":"1","2":"1","Camp":"ProgramaJAnglesBasic","3":"ProgramaJAnglesBasic"}]
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */



function busc_cursos_tots_llistat() {
	url = base_url + '/ConsultaCursosTots';
	$.ajax({
		url : url,
		dataType : 'json',
		type : 'GET',
		success : function(datos) {
			for (i = 0; i < datos.length; i++) {
				if (datos[i]['Ofertat'] == 1) {
					$('#Cursos,#Cursostxt,#Cursoscsv,#Cursosorla,#Cursmoodle')
							.append(
									'<option value=\'' + datos[i]['Codi']
											+ '\'>' + datos[i]['Curs']
											+ '</option>');
				}
			}
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});

}

/**
 * @api {get} /php/index.php/ConsultaAnys Consulta anys
 * @apiName busc_cursos_tots_llistat
 * @apiGroup llistats
 * 
 * @apiDescription Es demanen tots els anys que hi ha a la base de dades
 *
 * @apiSuccess {String} Any Anys a la base de dades
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"Any":"2016","0":"2016"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function busc_anys_tots_llistat() {
	url = base_url + '/ConsultaAnys';
	$.ajax({
		url : url,
		dataType : 'json',
		type : 'GET',
		success : function(datos) {
			for (i = 0; i < datos.length; i++) {
				any1 = Number(datos[i]['Any']) + 1;
				$('#any').append(
						'<option value=\'' + datos[i]['Any'] + '\'>'
								+ datos[i]['Any'] + '-' + any1 + '</option>');
			}
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});

}

/**
 * @api {get} /php/index.php/ConsultaCamps/Estudiant Consulta camps de la taula Estudiant
 * @apiName busc_camps_estudiant
 * @apiGroup arxius
 * 
 * @apiDescription Es demanen tots els camps que hi han a la taula Estudiant.
 * 
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els camps que estan en la base de dades Estudiant.
 * @apiSuccess {String} camps Aquesta variables es repetic tantes vegades com camps hi han a la base de dades
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"camp":"DNI","0":"DNI"},{"camp":"Nom","0":"Nom"},{"camp":"Cognoms","0":"Cognoms"},{"camp":"Direccio","0":"Direccio"},{"camp":"CP","0":"CP"},{"camp":"Poblacio","0":"Poblacio"},{"camp":"Sexe","0":"Sexe"},{"camp":"DataNaixement","0":"DataNaixement"},{"camp":"PaisNaixement","0":"PaisNaixement"},{"camp":"Nacionalitat","0":"Nacionalitat"},{"camp":"LocalitatNaixement","0":"LocalitatNaixement"},{"camp":"ProvinciaNaixement","0":"ProvinciaNaixement"},{"camp":"Email","0":"Email"},{"camp":"Telefon","0":"Telefon"},{"camp":"Comentaris","0":"Comentaris"},{"camp":"passwd_moodle","0":"passwd_moodle"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function busc_camps_estudiant() {
	url = base_url + '/ConsultaCamps/Estudiant';
	$
			.ajax({
				url : url,
				dataType : 'json',
				type : 'GET',
				success : function(datos) {

					for (i = 0; i < datos.length; i++) {
						$("#Camps,#Camps2,#Campstxt,#Campstxt2,#Campscsv,#Campscsv2,#Campsorla,#Campsorla2").append('<option value=\'' + datos[i]['camp'] + '\'>' + datos[i]['camp'] + '</option>');
					}
				},
				error : function(xhr, status, error) {
					var jsonResponse = JSON.parse(xhr.responseText);
					alert(jsonResponse.error);
				}
			});

}

/**
 * @api {get} /php/index.php/ConsultaMatriculatsCurs/:curs/:any Consulta tots els estudiants matriculats a un curs i un any determinat
 * @apiName busc_estudiant_cursos
 * @apiGroup llistats
 * 
 * 
 * @apiDescription Es crea un llistat amb tots els estudiants matriculats a un curs.
 * 
 * @apiParam {Integer} curs Curs del qual volem saber les dades.
 * @apiParam {Integer} any Any del qual volem saber les dades
 * 
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * @apiSuccess {String} Telefon Telèfon de l'alumne
 * @apiSuccess {String} Sexe Sexe de l'alumne
 * @apiSuccess {Date} 	DataNaixement Data de Naixement de l'alumne
 * @apiSuccess {String} PaisNaixement País de Naixement de l'alumne
 * @apiSuccess {String} Nacionalitat Nacionalitat de l'alumne
 * @apiSuccess {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiSuccess {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiSuccess {String} Direccio L'adreça de l'alumne
 * @apiSuccess {Number} CP Codi Postal
 * @apiSuccess {String} Poblacio On viu
 * @apiSuccess {String} Email Correu electrònic
 * @apiSuccess {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiSuccess {String} Optativa1 Optativa per al grup GES, irrelevant si no estàmatriculat en GES
 * @apiSuccess {String} Optativa2 Optativa per al grup GES, irrelevant si no estàmatriculat en GES
 * @apiSuccess {Integer} Validada Si ha entregat tots els paper o no
 * @apiSuccess {String} CursCodi En quin curs està matriculat
 * @apiSuccess {Integer} Matriculat Si ha estat acceptat o no.
 * @apiSuccess {String} Camp Camp del Curs on està matriculat
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"DNI":"000000000","0":"000000000","Nom":"000000000","1":"000000000","Cognoms":"000000000","2":"000000000","Direccio":"000000000","3":"000000000","CP":"0","4":"0","Poblacio":"000000000","5":"000000000","Sexe":"Home","6":"Home","DataNaixement":"1977-04-08","7":"1977-04-08","PaisNaixement":"000000000","8":"000000000","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"000000000","10":"000000000","ProvinciaNaixement":"000000000","11":"000000000","Email":"a@a.es","12":"a@a.es","Telefon":"0","13":"0","Comentaris":"","14":"","passwd_moodle":"uQ(b28209","15":"uQ(b28209"},{"DNI":"33333333A","0":"33333333A","Nom":"Nom9","1":"Nom9","Cognoms":"Cagnom9","2":"Cagnom9","Direccio":"La meua","3":"La meua","CP":"46410","4":"46410","Poblacio":"sueca","5":"sueca","Sexe":"Dona","6":"Dona","DataNaixement":"1979-12-04","7":"1979-12-04","PaisNaixement":"Espanya","8":"Espanya","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"Sueca","10":"Sueca","ProvinciaNaixement":"Valencia","11":"Valencia","Email":"alviboi@gmail.com","12":"alviboi@gmail.com","Telefon":"654722866","13":"654722866","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444F","0":"44444444F","Nom":"ALFREDO","1":"ALFREDO","Cognoms":"dadas","2":"dadas","Direccio":"dada","3":"dada","CP":"4532543","4":"4532543","Poblacio":"fsdaf","5":"fsdaf","Sexe":"Home","6":"Home","DataNaixement":"1973-04-13","7":"1973-04-13","PaisNaixement":"DSADA","8":"DSADA","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"Sueca","10":"Sueca","ProvinciaNaixement":"alacant","11":"alacant","Email":"nataliues15@gmail.com","12":"nataliues15@gmail.com","Telefon":"654722866","13":"654722866","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444B","0":"44444444B","Nom":"ALFREDO","1":"ALFREDO","Cognoms":"dadas","2":"dadas","Direccio":"dada","3":"dada","CP":"4532543","4":"4532543","Poblacio":"fsdaf","5":"fsdaf","Sexe":"Home","6":"Home","DataNaixement":"1970-01-01","7":"1970-01-01","PaisNaixement":"DSADA","8":"DSADA","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"Sueca","10":"Sueca","ProvinciaNaixement":"alacant","11":"alacant","Email":"nataliues15@gmail.com","12":"nataliues15@gmail.com","Telefon":"654722866","13":"654722866","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444K","0":"44444444K","Nom":"Natalia","1":"Natalia","Cognoms":"VICENTE BOI","2":"VICENTE BOI","Direccio":"dada","3":"dada","CP":"42342","4":"42342","Poblacio":"fsdaf","5":"fsdaf","Sexe":"Home","6":"Home","DataNaixement":"1961-01-27","7":"1961-01-27","PaisNaixement":"Espanya","8":"Espanya","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"SUECA","10":"SUECA","ProvinciaNaixement":"valencia","11":"valencia","Email":"mdeviboi@gmail.com","12":"mdeviboi@gmail.com","Telefon":"2147483647","13":"2147483647","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444L","0":"44444444L","Nom":"Nom1","1":"Nom1","Cognoms":"VICENTE B\u00d3IX","2":"VICENTE B\u00d3IX","Direccio":"Juan de juanes 4","3":"Juan de juanes 4","CP":"4654","4":"4654","Poblacio":"sueca","5":"sueca","Sexe":"Dona","6":"Dona","DataNaixement":"1970-01-01","7":"1970-01-01","PaisNaixement":"fdsfs","8":"fdsfs","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"SUECA","10":"SUECA","ProvinciaNaixement":"alacant","11":"alacant","Email":"mdeviboi@gmail.com","12":"mdeviboi@gmail.com","Telefon":"45646546","13":"45646546","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function busc_estudiant_cursos() {
	curs = $('#Cursos').val();
	any = $('#any').val();
	url = base_url + '/ConsultaMatriculatsCurs/' + curs + '/' + any;
	if (curs == null) {
		alert("No has seleccionat cap grup");
	} else {
		$('#desplegables').html(
				"<div id='accordion' class='margenes fons'></div>");
		$
				.ajax({
					url : url,
					dataType : 'json',
					type : 'GET',
					success : function(datos) {
						camps = Object.keys(datos[0]);
						for (i = 0; i < datos.length; i++) {
							$('#accordion')
									.append(
											"<h3><b>"
													+ (i + 1)
													+ ".-</b> "
													+ datos[i]['Cognoms']
													+ ", "
													+ datos[i]['Nom']
													+ "</h3><div class='row'><div class='col-lg-1'><img width='70' height='95' src='/fotos_alumnes2/"
													+ datos[i]['DNI']
													+ ".jpg' alt=''/></div><div class='col-lg-11'  id="
													+ datos[i]['DNI'] + ">");
							for (i2 = 0; i2 < camps.length - 16; i2++) {
								a = i2 + 16;
								$('#' + datos[i]['DNI'] + '').append(
										"<div class='col-lg-3'><b>" + camps[a]
												+ ": </b><i>" + datos[i][i2]
												+ "</i></div>");
							}
							$('#accordion').append("</div></div>");
						}
						$("#accordion").accordion({
							event : "click hoverintent"
						});
					},
					error : function(xhr, status, error) {
						var jsonResponse = JSON.parse(xhr.responseText);
						alert(jsonResponse.error);
					}
				});
	}

}

/**
 * @api {get} /php/index.php/ConsultaMatriculatsCurs/:curs/:any Consulta tots els estudiants matriculats a un curs i un any determinat
 * @apiName busc_estudiant_cursos_any_anterior
 * @apiGroup Configuració
 * 
 * @apiDescription Es crea un llistat amb tots els estudiants matriculats a un curs, i es genera un botó per a poder importar eixes dades
 * 
 * @apiParam {Integer} curs Curs del qual volem saber les dades.
 * @apiParam {Integer} any Any del qual volem saber les dades
 * 
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * @apiSuccess {String} Telefon Telèfon de l'alumne
 * @apiSuccess {String} Sexe Sexe de l'alumne
 * @apiSuccess {Date} 	DataNaixement Data de Naixement de l'alumne
 * @apiSuccess {String} PaisNaixement País de Naixement de l'alumne
 * @apiSuccess {String} Nacionalitat Nacionalitat de l'alumne
 * @apiSuccess {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiSuccess {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiSuccess {String} Direccio L'adreça de l'alumne
 * @apiSuccess {Number} CP Codi Postal
 * @apiSuccess {String} Poblacio On viu
 * @apiSuccess {String} Email Correu electrònic
 * @apiSuccess {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiSuccess {String} Optativa1 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiSuccess {String} Optativa2 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiSuccess {Integer} Validada Si ha entregat tots els paper o no
 * @apiSuccess {String} CursCodi En quin curs està matriculat
 * @apiSuccess {Integer} Matriculat Si ha estat acceptat o no.
 * @apiSuccess {String} Camp Camp del Curs on està matriculat
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"DNI":"000000000","0":"000000000","Nom":"000000000","1":"000000000","Cognoms":"000000000","2":"000000000","Direccio":"000000000","3":"000000000","CP":"0","4":"0","Poblacio":"000000000","5":"000000000","Sexe":"Home","6":"Home","DataNaixement":"1977-04-08","7":"1977-04-08","PaisNaixement":"000000000","8":"000000000","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"000000000","10":"000000000","ProvinciaNaixement":"000000000","11":"000000000","Email":"a@a.es","12":"a@a.es","Telefon":"0","13":"0","Comentaris":"","14":"","passwd_moodle":"uQ(b28209","15":"uQ(b28209"},{"DNI":"33333333A","0":"33333333A","Nom":"Nom9","1":"Nom9","Cognoms":"Cagnom9","2":"Cagnom9","Direccio":"La meua","3":"La meua","CP":"46410","4":"46410","Poblacio":"sueca","5":"sueca","Sexe":"Dona","6":"Dona","DataNaixement":"1979-12-04","7":"1979-12-04","PaisNaixement":"Espanya","8":"Espanya","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"Sueca","10":"Sueca","ProvinciaNaixement":"Valencia","11":"Valencia","Email":"alviboi@gmail.com","12":"alviboi@gmail.com","Telefon":"654722866","13":"654722866","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444F","0":"44444444F","Nom":"ALFREDO","1":"ALFREDO","Cognoms":"dadas","2":"dadas","Direccio":"dada","3":"dada","CP":"4532543","4":"4532543","Poblacio":"fsdaf","5":"fsdaf","Sexe":"Home","6":"Home","DataNaixement":"1973-04-13","7":"1973-04-13","PaisNaixement":"DSADA","8":"DSADA","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"Sueca","10":"Sueca","ProvinciaNaixement":"alacant","11":"alacant","Email":"nataliues15@gmail.com","12":"nataliues15@gmail.com","Telefon":"654722866","13":"654722866","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444B","0":"44444444B","Nom":"ALFREDO","1":"ALFREDO","Cognoms":"dadas","2":"dadas","Direccio":"dada","3":"dada","CP":"4532543","4":"4532543","Poblacio":"fsdaf","5":"fsdaf","Sexe":"Home","6":"Home","DataNaixement":"1970-01-01","7":"1970-01-01","PaisNaixement":"DSADA","8":"DSADA","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"Sueca","10":"Sueca","ProvinciaNaixement":"alacant","11":"alacant","Email":"nataliues15@gmail.com","12":"nataliues15@gmail.com","Telefon":"654722866","13":"654722866","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444K","0":"44444444K","Nom":"Natalia","1":"Natalia","Cognoms":"VICENTE BOI","2":"VICENTE BOI","Direccio":"dada","3":"dada","CP":"42342","4":"42342","Poblacio":"fsdaf","5":"fsdaf","Sexe":"Home","6":"Home","DataNaixement":"1961-01-27","7":"1961-01-27","PaisNaixement":"Espanya","8":"Espanya","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"SUECA","10":"SUECA","ProvinciaNaixement":"valencia","11":"valencia","Email":"mdeviboi@gmail.com","12":"mdeviboi@gmail.com","Telefon":"2147483647","13":"2147483647","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"},{"DNI":"44444444L","0":"44444444L","Nom":"Nom1","1":"Nom1","Cognoms":"VICENTE B\u00d3IX","2":"VICENTE B\u00d3IX","Direccio":"Juan de juanes 4","3":"Juan de juanes 4","CP":"4654","4":"4654","Poblacio":"sueca","5":"sueca","Sexe":"Dona","6":"Dona","DataNaixement":"1970-01-01","7":"1970-01-01","PaisNaixement":"fdsfs","8":"fdsfs","Nacionalitat":"espanyola (E)","9":"espanyola (E)","LocalitatNaixement":"SUECA","10":"SUECA","ProvinciaNaixement":"alacant","11":"alacant","Email":"mdeviboi@gmail.com","12":"mdeviboi@gmail.com","Telefon":"45646546","13":"45646546","Comentaris":"","14":"","passwd_moodle":"1234","15":"1234"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function busc_estudiant_cursos_any_anterior() {

	curs = $('#Cursos').val();
	any = $('#any').val();
	url = base_url + '/ConsultaMatriculatsCurs/' + curs + '/' + any;
	if (curs == null) {
		alert("No has seleccionat cap grup");
	} else {
		$
				.ajax({
					url : url,
					dataType : 'json',
					type : 'GET',
					success : function(datos) {
						camps = Object.keys(datos[0]);
						$('#llist_import').html("");
						for (i = 0; i < datos.length; i++) {
							$('#llist_import')
									.append(
											"<div class='row col-lg-12' style='border: solid 1px black'><p><div class='col-lg-10'><b>"
													+ (i + 1)
													+ ".-</b><img width='15' height='20' src='/fotos_alumnes2/"
													+ datos[i]['DNI']
													+ ".jpg' alt=''/> "
													+ datos[i]['Cognoms']
													+ ", "
													+ datos[i]['Nom']
													+ "</div><div class='col-lg-2'> <input type='checkbox' name='Matriculat[]' id='Matriculat' value="
													+ datos[i]['DNI']
													+ "></div></p> </div>");
						}
						$('#matriculaboto').show();
					},
					error : function(xhr, status, error) {
						var jsonResponse = JSON.parse(xhr.responseText);
						alert(jsonResponse.error);
					}
				});
	}

}

/**
 * @api {get} /php/index.php/ConsultaMatriculatsCursinoAssignatsGrupGES/:curs Consulta estudiants de GES no assignats a grup
 * @apiName llistats_cursos_ges
 * @apiGroup Organitza_GES
 * 
 * @apiDescription Busca els estudiants que estan matriculats a un curs de GES i no estan assignats a cap grup.
 * 
 * @apiParam {Integer} curs Curs del qual volem saber les dades.
 * 
 * @apiSuccess {Json} - Torna un Json amb totes les dades demanades, amb els cursos que estan en la base de dades en eixe moment.
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * @apiSuccess {String} CursCodi En quin curs està matriculat
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"Nom":"Natalia","0":"Natalia","Cognoms":"pdfso","1":"pdfso","DNI":"00001093R","2":"00001093R","CursCodi":"G22m","3":"G22m"},{"Nom":"Natalia","0":"Natalia","Cognoms":"pdfso","1":"pdfso","DNI":"00001094D","2":"00001094D","CursCodi":"G22m","3":"G22m"},{"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE B\u00d3IX","1":"VICENTE B\u00d3IX","DNI":"73567572Z","2":"73567572Z","CursCodi":"G22m","3":"G22m"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function llistats_cursos_ges(curs, id) {

	url = base_url + '/ConsultaMatriculatsCursinoAssignatsGrupGES/' + curs;
	if (curs == "Res") {

	} else {
		$('#camp1').html("");
		$('#camp1').html("<ul id='sortable1' class='droptrue'></ul>");
		$
				.ajax({
					url : url,
					dataType : 'json',
					type : 'GET',
					success : function(datos) {
						for (i = 0; i < datos.length; i++) {
							$('#sortable1').append("<li class='ui-state-default' id='"
													+ datos[i]['DNI']
													+ "'><img width='20' height='25' src='/fotos_alumnes2/"
													+ datos[i]['DNI']
													+ ".jpg' alt=''/>  "
													+ datos[i]['Cognoms']
													+ ", " + datos[i]['Nom']
													+ "</li>");
						}
					}
				});

	}
}

/**
 * @api {post} /php/index.php/actualitza Actualitza les dades d'un alumne
 * @apiName actualitza_dades
 * @apiGroup matrícula
 * 
 * @apiDescription Actualitza les dades d'un alumne a la pàgina de matrícula del professorat. Es lligen tots els camps d'un formulari
 * 
 * @apiParam {String} Nom Nom del alumne
 * @apiParam {String} Cognoms Cognoms de l'alumne
 * @apiParam {String} DNI DNI de l'alumne
 * @apiParam {String} Telefon Telèfon de l'alumne
 * @apiParam {String} Sexe Sexe de l'alumne
 * @apiParam {Date}   DataNaixement Data de Naixement de l'alumne
 * @apiParam {String} PaisNaixement País de Naixement de l'alumne
 * @apiParam {String} Nacionalitat Nacionalitat de l'alumne
 * @apiParam {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiParam {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiParam {String} Direccio L'adreça de l'alumne
 * @apiParam {Number} CP Codi Postal
 * @apiParam {String} Poblacio On viu
 * @apiParam {String} Email Correu electrònic
 * @apiParam {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiParam {String} Optativa1 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiParam {String} Optativa2 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiParam {Integer} Validada Si ha entregat tots els paper o no
 * @apiParam {String} CursCodi En quin curs està matriculat
 * @apiParam {Integer} Matriculat Si ha estat acceptat o no.
 * @apiParam {String} Camp Camp del Curs on està matriculat
 * 
 * 
 * @apiSuccess {String} 0 Desat correctament
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"0":"Desat Correctament"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */


function actualitza_dades() {
	
	$dni = $('#DNI').val();
	upload($dni);
	url = base_url + '/actualitza';
	$.ajax({
		url : url,
		type : 'post',
		dataType : 'json',
		data : $('form#actualitzar').serialize(),
		success : function(data) {
			alert("Actualitzat! Ara s'obrirà una pestanya amb el full de matrícula amb les dades actualitzades");
			$('#inscriure').trigger("reset");
			location.reload();
			url2 = base_url + 'pdf/' + $dni;
			window.open(url2);
			//foto.setAttribute('src', "");
			$('#foto').attr('src','');
		
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
}


/**
 * @api {post} /php/index.php/actualitza Actualitza les dades d'un alumne de curs anterior
 * @apiName actualitza_dades2
 * @apiGroup matrícula
 * 
 * @apiDescription Actualitza les dades d'un alumne a la pàgina de matrícula de l'alumne. Auesta opció només estarà present si és un alumne d'anys anteriors i recupera les seues dades. Es lligen tots els camps d'un formulari.
 * 
 * @apiParam {String} Nom Nom del alumne
 * @apiParam {String} Cognoms Cognoms de l'alumne
 * @apiParam {String} DNI DNI de l'alumne
 * @apiParam {String} Telefon Telèfon de l'alumne
 * @apiParam {String} Sexe Sexe de l'alumne
 * @apiParam {Date}   DataNaixement Data de Naixement de l'alumne
 * @apiParam {String} PaisNaixement País de Naixement de l'alumne
 * @apiParam {String} Nacionalitat Nacionalitat de l'alumne
 * @apiParam {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiParam {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiParam {String} Direccio L'adreça de l'alumne
 * @apiParam {Number} CP Codi Postal
 * @apiParam {String} Poblacio On viu
 * @apiParam {String} Email Correu electrònic
 * @apiParam {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiParam {String} Optativa1 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiParam {String} Optativa2 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiParam {Integer} Validada Si ha entregat tots els paper o no
 * @apiParam {String} CursCodi En quin curs està matriculat
 * @apiParam {Integer} Matriculat Si ha estat acceptat o no.
 * @apiParam {String} Camp Camp del Curs on està matriculat
 * 
 * 
 * @apiSuccess {String} 0 Desat correctament
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [{"0":"Desat Correctament"}]
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function actualitza_dades2() {
	
	$dni = $('#DNI').val();
	upload($dni);
	url = base_url + '/actualitza';
	$.ajax({
		url : url,
		type : 'post',
		dataType : 'json',
		data : $('form#inscriure').serialize(),
		success : function(data) {
			alert("Actualitzat! Ara s'obrirà una pestanya amb el full de matrícula. Recorda imprimir dues vegades el full de matrícula i tancar la finestra");
			$('#inscriure').trigger("reset");
			location.reload();
			url2 = base_url + 'pdf/' + $dni;
			window.open(url2);
			//foto.setAttribute('src', "");
			$('#foto').attr('src','');
		
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
}

/**
 * @api {post} /php/index.php/inscriu Inscriu un alumne
 * @apiName inscriu_alumne
 * @apiGroup matrícula
 * 
 * @apiDescription Inscriu a un alumne que s'acaba de matricular a la pàgina de matrícula. Aquesta funció també obrirà una pestanya i generarà un pdf amb el full de matrícula.
 * 
 * @apiParam {String} Nom Nom del alumne
 * @apiParam {String} Cognoms Cognoms de l'alumne
 * @apiParam {String} DNI DNI de l'alumne
 * @apiParam {String} Telefon Telèfon de l'alumne
 * @apiParam {String} Sexe Sexe de l'alumne
 * @apiParam {Date}   DataNaixement Data de Naixement de l'alumne
 * @apiParam {String} PaisNaixement País de Naixement de l'alumne
 * @apiParam {String} Nacionalitat Nacionalitat de l'alumne
 * @apiParam {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiParam {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiParam {String} Direccio L'adreça de l'alumne
 * @apiParam {Number} CP Codi Postal
 * @apiParam {String} Poblacio On viu
 * @apiParam {String} Email Correu electrònic
 * @apiParam {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiParam {String} Optativa1 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiParam {String} Optativa2 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiParam {Integer} Validada Si ha entregat tots els paper o no
 * @apiParam {String} CursCodi En quin curs està matriculat
 * @apiParam {Integer} Matriculat Si ha estat acceptat o no.
 * @apiParam {String} Camp Camp del Curs on està matriculat
 * 
 * 
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */





function inscriu_alumne() {
	$dni = $('#DNI').val();
	upload($dni);
	url = base_url + '/inscriu';
	$
			.ajax({
				url : url,
				type : 'post',
				dataType : 'json',
				data : $('form#inscriure').serialize(),
				success : function(data) {
					$('#inscriure').trigger("reset");
					/**
					 * @api {get} /php/index.php/pdf/:dni Genera full matricula
					 * @apiName inscriu_pdf
					 * @apiGroup matrícula
					 * 
					 * @apiDescription Crea un pdf amb les dades acabades d'introduir per l'alumne.
					 * 
					 * @apiParam {String} DNI DNI de l'alumne
					 * 
					 * 
					 * @apiSuccess {pdf} pdf Document pdf del full de matrícula
					 * 
					 * @apiError error Gestionat per la llibreria fpdf
					 *
					 */
					url2 = base_url + 'pdf/' + $dni;
					window.open(url2);
					foto.setAttribute('src', "");
					alert("S'ha obert una pestanya amb el full de matrícula. Recorda imprimir dues vegades el full de matrícula i tancar la finestra");
				},
				error : function(xhr, status, error) {
					var jsonResponse = JSON.parse(xhr.responseText);
					alert(jsonResponse.error);
					console.log(xhr.responseText);
				}
			});

}

/**
 * @api {get} /php/index.php/pdf/:dni Genera full matricula per professor
 * @apiName full_matricula_alumne
 * @apiGroup matrícula
 * 
 * @apiDescription El professor crea un pdf del ful de matrícula.
 * 
 * @apiParam {String} DNI DNI de l'alumne
 * 
 * 
 * @apiSuccess {pdf} pdf Document pdf del full de matrícula
 * 
 * @apiError error Gestionat per la llibreria fpdf
 *
 */

function full_matricula_alumne() {
	if ($('#DNI').val() == '') {
		alert("No hi ha cap alumne seleccionat");
	} else {
		url2 = base_url + 'pdf/' + $('#DNI').val();
		window.open(url2);

	}

}

/**
 * @api {post} /php/index.php/esborra_alumne Esborra alumne
 * @apiName esborra_alumne
 * @apiGroup matrícula
 * 
 * @apiDescription El professor pot esborrar un alumne des de la pàgina de gesrtió de matrícula.
 * 
 * @apiParam {String} DNI DNI de l'alumne
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function esborra_alumne() {

	url = base_url + '/esborra_alumne';
	dni = $('#DNI').val();
	if (dni == "") {
		alert("No tens cap alumne seleccionat");
	} else {
		a = confirm("Estàs segur que vols borrar l'alumne: " + $('#Nom').val() + " " + $('#Cognoms').val());
		if (a == 1) {
			$.ajax({
				url : url,
				type : 'post',
				dataType : 'json',
				data : {
					'dni' : dni
				},
				success : function() {
					alert("Alumne borrat");
					$('#actualitzar').trigger("reset");
					foto.setAttribute('src', "");
				},
				error : function(xhr, status, error) {
					var jsonResponse = JSON.parse(xhr.responseText);
					alert(jsonResponse.error);
				}
			});
		} else {

		}
	}
}

/**
 * @api {get} /php/index.php/any_actual Any actual
 * @apiName any_actual
 * @apiGroup matrícula
 * 
 * @apiDescription Per saber en quin any està gestionant la base de dades.
 * 
 * @apiSuccess {Integer} AnyActual Any més elevat de la base de dades
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function any_actual() {
	var torna;
	url = base_url + '/any_actual';
	$.ajax({
		url : url,
		dataType : 'json',
		type : 'GET',
		async : false,
		success : function(datos) {
			torna = datos[0]['AnyActual'];
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
	return torna;
}

/**
 * @api {post} /php/index.php/genera_any_nou Genera Any
 * @apiName inserta_nou_any
 * @apiGroup matrícula
 * 
 * @apiDescription Per començar un nou procés de matrícula.
 * 
 * @apiParam {Integer} AnyActual Any actual
 * 
 * @apiSuccess {String} 0 "Any ".$any_nou." creat correctament"
 * 
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "SQLSTATE: ..."
 *     }
 */

function inserta_nou_any(any_actual) {

	url = base_url + '/genera_any_nou';
	$.ajax({
		url : url,
		dataType : 'json',
		data : {
			'AnyActual' : any_actual
		},
		type : 'POST',
		success : function(datos) {
			alert(datos[0]);
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});

}


/**
 * @api {get} /php/index.php/dni_antic/:dni Usuari de curs anterior per dni
 * @apiName importa_alumne
 * @apiGroup matrícula
 * 
 * @apiDescription Es demanen totes les dades d'un alumne d'anys anteriors. En la mateixa funció es buiden les dades de matrícula de l'any anterior.
 * @apiParam {String} dni DNI del usuari, clau principal.
 *
 * @apiSuccess {String} Nom Nom del alumne
 * @apiSuccess {String} Cognoms Cognoms de l'alumne
 * @apiSuccess {String} DNI DNI de l'alumne
 * @apiSuccess {String} Telefon Telèfon de l'alumne
 * @apiSuccess {String} Sexe Sexe de l'alumne
 * @apiSuccess {Date} 	DataNaixement Data de Naixement de l'alumne
 * @apiSuccess {String} PaisNaixement País de Naixement de l'alumne
 * @apiSuccess {String} Nacionalitat Nacionalitat de l'alumne
 * @apiSuccess {String} LocalitatNaixement Localitat de Naixement de l'alumne
 * @apiSuccess {String} ProvinciaNaixement Provincia Naixement de l'alumne
 * @apiSuccess {String} Direccio L'adreça de l'alumne
 * @apiSuccess {Number} CP Codi Postal
 * @apiSuccess {String} Poblacio On viu
 * @apiSuccess {String} Email Correu electrònic
 * @apiSuccess {String} Comentaris Comentaris sobre alguna specte a tenir en compte
 * @apiSuccess {String} Optativa1 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiSuccess {String} Optativa2 Optativa per al grup GES, irrelevant si no està matriculat en GES
 * @apiSuccess {Integer} Validada Si ha entregat tots els paper o no
 * @apiSuccess {String} CursCodi En quin curs està matriculat
 * @apiSuccess {Integer} Matriculat Si ha estat acceptat o no.
 * @apiSuccess {String} Camp Camp del Curs on està matriculat
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *       {"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE BOIX","1":"VICENTE BOIX","DNI":"73567572W","2":"73567572W","Telefon":"654722866","3":"654722866","Sexe":"Home","4":"Home","DataNaixement":"05\/07\/1979","5":"05\/07\/1979","PaisNaixement":"ESPANYA","6":"ESPANYA","Nacionalitat":"espanyola (E)","7":"espanyola (E)","LocalitatNaixement":"VAL\u00c8NCIA","8":"VAL\u00c8NCIA","ProvinciaNaixement":"VAL\u00c8NCIA","9":"VAL\u00c8NCIA","Direccio":"TRINQUET VELL 44","10":"TRINQUET VELL 44","CP":"46410","11":"46410","Poblacio":"SUECA","12":"SUECA","Email":"alviboi@gmail.com","13":"alviboi@gmail.com","Comentaris":"","14":"","Optativa1":"OIP","15":"OIP","Optativa2":"TMI","16":"TMI","Validada":"1","17":"1","CursCodi":"G21m","18":"G21m","Matriculat":"0","19":"0","Camp":"ProgramaBcicleII","20":"ProgramaBcicleII"}
 *     
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "La consulta no té resultats"
 *     }
 */



function importa_alumne() {
	var any = any_actual();
	$("#missatges").html("<fieldset><label for='dni'>DNI: </label><input type='text' name='dni' id='dni_box' class='text ui-widget-content ui-corner-all'>");
	$("#missatges").dialog({
		modal : true,
		buttons : {
			"Importa" : function() {
				dni = $('#dni_box').val();
				if (dni == "") {
					alert("Has d'escriure un valor");
				} else {
					url = base_url + 'dni_antic/' + dni;
					$.ajax({
						url : url,
						dataType : 'json',
						type : 'GET',
						success : function(datos) {
							emplena(datos);
						},
						error : function(xhr, status, error) {
							var jsonResponse = JSON.parse(xhr.responseText);
							alert(jsonResponse.error);
						}
					});
				}

			}
		}

	});
	$("#ProgramaACicleI,#ProgramaBcicleII,#Optativa1 ,#Optativa2 ,#ProgramaCValenciaJQCV ,#ProgramaBDCursosPolivalents ,#ProgramaJAnglesBasic").val() = 'No';
	$("#Validada,#Matriculat").prop("checked", false);

}
/**
 * @api {post} /php/matricula_any_anterior Matricula alumnes del curs anterior
 * @apiName matricula_any_anterior
 * @apiGroup matrícula
 * 
 * @apiDescription Matricula a tots els alumnes de l'any anterior que pasen de curs per exemple en un nou curs.
 * @apiParam {Array} Matriculat Array amb tots els DNIs dels ususaris que es matriculen.
 * @apiParam {String} curs Codi del curs on es van a matricular el present any.
 *
 * @apiSuccess {String} 0 "Matriculat correctament"
 *
 * @apiError error Resposta del tipus d'error donat, si la base de dades dóna un error serà el que mostrarà
 *
 */

function matricula_any_anterior() {
	upload($('#DNI').val());
	url = base_url + '/matricula_any_anterior';
	$.ajax({
		url : url,
		type : 'post',
		dataType : 'json',
		data : $('form#matr_any_anterior').serialize(),
		success : function(data) {
			alert(data);
		},
		error : function(xhr, status, error) {
			var jsonResponse = JSON.parse(xhr.responseText);
			alert(jsonResponse.error);
		}
	});
}

