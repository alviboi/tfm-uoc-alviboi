$(function() {
	$("#DataNaixement").datepicker({
		changeMonth : true,
		changeYear : true,
		yearRange : '1940:2016'
	});
	busc_cursos();

});
$(function($) {
	$.datepicker.regional['ca'] = {
		closeText : 'Tancar',
		prevText : '<Ant',
		nextText : 'Seg>',
		currentText : 'Avui',
		monthNames : [ 'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny',
				'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre',
				'Desembre' ],
		monthNamesShort : [ 'Gen', 'Febr', 'Març', 'Abr', 'Maig', 'Juny',
				'Jul', 'Ag', 'Set', 'Oct', 'Nov', 'Des' ],
		dayNames : [ 'Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous',
				'Divendres', 'Dissabte' ],
		dayNamesShort : [ 'Diu', 'Dil', 'Dim', 'Dix', 'Dij', 'Div', 'Dis' ],
		dayNamesMin : [ 'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds' ],
		weekHeader : 'Sm',
		dateFormat : 'dd/mm/yy',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ca']);
});

function copiavalor (id) {
	val = $("#"+id).val();
	$("#Matriculat"+id).attr("value",val);
	
}


function comprova(testejat) {

	if (testejat == "G22m" || testejat == "G22v") {
		$("#Opt2").hide();
		$("#Optativa2").val("No");
		$("#OIP").hide();
		$("#TMI").hide();
		$("#GH").show();

	} else {

		$("#Opt2").show();
		$("#GH").hide();
		$("#GH2").hide();
		$("#OIP").show();
		$("#TMI").show();

	}
}


/**
 * @api {post} /php/index.php/login_alumne_antic Login alumnes antics
 * @apiName alumne_antic_passwd
 * @apiGroup matrícula
 * 
 * @apiDescription Per a alumnes que ja han estat matriculats en altres anys, poden recuperar les seues dades amb la seua contrasenya de moodle.
 * 
 * @apiParam {String} DNI DNI de l'estudiant.
 * @apiParam {String} moodle Contrasenya del moodle assignada en la seua matrícula.
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
 * @apiSuccess {String} Optativa1 Optativa per al grup GES, irrelevant si no estàmatriuculat en GES
 * @apiSuccess {String} Optativa2 Optativa per al grup GES, irrelevant si no estàmatriuculat en GES
 * @apiSuccess {Integer} Validada Si ha entregat tots els paper o no
 * @apiSuccess {String} CursCodi En quin curs està matriculat
 * @apiSuccess {Integer} Matriculat Si ha estat acceptat o no.
 * @apiSuccess {String} Camp Camp del Curs on està matriculat
 * 
 * 
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     
 *       {"Nom":"\u00c1LFREDO","0":"\u00c1LFREDO","Cognoms":"VICENTE BOIX","1":"VICENTE BOIX","DNI":"73567572W","2":"73567572W","Telefon":"654722866","3":"654722866","Sexe":"Home","4":"Home","DataNaixement":"05\/07\/1979","5":"05\/07\/1979","PaisNaixement":"ESPANYA","6":"ESPANYA","Nacionalitat":"espanyola (E)","7":"espanyola (E)","LocalitatNaixement":"VAL\u00c8NCIA","8":"VAL\u00c8NCIA","ProvinciaNaixement":"VAL\u00c8NCIA","9":"VAL\u00c8NCIA","Direccio":"TRINQUET VELL 44","10":"TRINQUET VELL 44","CP":"46410","11":"46410","Poblacio":"SUECA","12":"SUECA","Email":"alviboi@gmail.com","13":"alviboi@gmail.com","Comentaris":"","14":"","Optativa1":"OIP","15":"OIP","Optativa2":"TMI","16":"TMI","Validada":"1","17":"1","CursCodi":"G21m","18":"G21m","Matriculat":"0","19":"0","Camp":"ProgramaBcicleII","20":"ProgramaBcicleII"}
 *     
 *
 * @apiError error Si el login no és correcte, donarà el motiu de perquè.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "El nom o la contrasenya no són correctes"
 *     }
 */


function alumne_antic_passwd() {
	var any = any_actual();
	$("#missatges").html("<fieldset><label for='dni'>DNI: </label><input type='text' name='dni' id='dni_box' class='text ui-widget-content ui-corner-all'>" +
						"<fieldset><label for='passwd'>Moodle: </label><input type='password' name='passwd' id='passwd_box' class='text ui-widget-content ui-corner-all'>");
	$("#missatges").dialog({
		modal : true,
		buttons : {
			"Importa" : function() {
				dni = $('#dni_box').val();
				passwd = $('#passwd_box').val();
				if (dni == "" || passwd == "") {
					alert("Has d'escriure un valor");
				} else {
					url = base_url + 'login_alumne_antic';
					$.ajax({
						url : url,
						dataType : 'json',
						type : 'post',
						data: {'DNI': dni, 'moodle': passwd},
						success : function(datos) {
							$('#envia2').attr('onclick','actualitza_dades2()');
							$('#envia2').attr('class','btn btn-primary btn-alert');
							$('#envia2').html("Actualitza les dades");
							emplena(datos);
							
							
							
						},
						error : function(xhr, status, error) {
							var jsonResponse = JSON.parse(xhr.responseText);
							alert("El login no és correcte: " + jsonResponse.error);
						}
					});
					
				}
				$( this ).dialog( "close" ); 

			}
		}

	});
	$("#ProgramaACicleI,#ProgramaBcicleII,#Optativa1 ,#Optativa2 ,#ProgramaCValenciaJQCV ,#ProgramaBDCursosPolivalents ,#ProgramaJAnglesBasic").val() = 'No';
	//$("#Validada,#Matriculat").prop("checked", false);

}
