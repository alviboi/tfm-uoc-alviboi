/**
 * @api {post} /php/index.php/arxiu_pdf Genera llistat pdf
 * @apiName Genera_document1
 * @apiGroup Exporta_arxius
 * 
 * @apiDescription Amb aquesta petició generem un document pdf on està el llistat dels alumnes segons els camps que hagem escollit. Es pot escollir tant el grup que es vol tnir o el grup de GES.
 *
 * @apiParam {Array} camps Array amb tots els camps que es volen presentar al document.
 * @apiParam {String} curs Codi del curs al que pertany.
 * @apiParam {bit} Matriculat Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.
 * 
 * 
 * @apiSuccess {pdf} Sortidagrup(CURS).pdf Es gnera un document amb el nom del grup
 * 
 * 
 */


function Genera_document1 ()
{

		   $grup = $('#Cursos').val();
		   $camps = $('#Camps').val();
		   if ($grup == null || $camps == null )
		   {
			   alert("Has d'escollir algun curs");
		   }
		   url = base_url+'/arxiu_pdf';
		   $.ajax({
		    	url: url,
		        type: 'post',
		        dataType: 'json',
		        data: $('form#cursospdf').serialize(),
		        success: function(data) {
			        		if (data['exit']['text'] == 'Ok')
			        				{
			        		 		   $('#contenidorpdf').html("<embed src='php/arxius/sortidagrup" + $grup + ".pdf' width='90%' height='1200' >");
			    					} else {
				    					alert(data['exit']['text']);
			    					}
		                 },
                 error: function (xhr, status, error) {
                 	var jsonResponse = JSON.parse(xhr.responseText);
                     alert(jsonResponse.error);
         	        }
		    });

 			
}


function Genera_document2 ()
{

		   $grup = $('#Grups').val();
		   $camps = $('#Camps2').val();
		   if ($grup == null || $camps == null )
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_pdf';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursosgespdf').serialize(),
			        success: function(data) {
				        		if (data['exit']['text'] == 'Ok')
				        				{
				        		 		   $('#contenidorpdf').html("<embed src='php/arxius/sortidagrup" + $grup + ".pdf' width='90%' height='1200' >");
					        				
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
                 error: function (xhr, status, error) {
                 	var jsonResponse = JSON.parse(xhr.responseText);
                     alert(jsonResponse.error);
         	        }
			    });

		   }
}


/**
 * @api {post} /php/index.php/arxiu_txt Genera txt
 * @apiName Genera_documenttxt1
 * @apiGroup Exporta_arxius
 * 
 * @apiDescription Amb aquesta petició generem un document pdf on està el llistat dels alumnes segons els camps que hagem escollit. Es pot escollir tant el grup que es vol tnir o el grup de GES.
 *
 * @apiParam {Array} camps Array amb tots els camps que es volen presentar al document.
 * @apiParam {String} curs Codi del curs al que pertany.
 * @apiParam {bit} Matriculat Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.
 * 
 * 
 * @apiSuccess {txt} Sortidagrup(CURS).txt Es gnera un document amb el nom del grup
 * 
 * 
 */


function Genera_documenttxt1 ()
{

		   $grup = $('#Cursostxt').val();
		   $camps = $('#Campstxt').val();
		   if ($grup == null || $camps == null )
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_txt';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursostxtform').serialize(),
			        success: function(data) {
				        		if (data['exit']['text'] == 'Ok')
				        				{
				        			$('#contenidortxt').load("php/arxius/sortidagrup" + $grup + ".txt");
				        		 		   //$('#contenidortxt').html("<embed src='sortidagrup" + $grup + ".txt' align='justify' width='90%' height='1200' style='text-align: justify;'>");
				        		 		   $('#baixatxtarxiu').attr("href", "php/arxius/sortidagrup" + $grup + ".txt");
				        		 		   
					        				
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
	                 error: function (xhr, status, error) {
	                 	var jsonResponse = JSON.parse(xhr.responseText);
	                     alert(jsonResponse.error);
	         	        }
			    });
		   }
}


function Genera_documenttxt2 ()
{

		   $grup = $('#Grupstxt').val();
		   $camps = $('#Campstxt2').val();
		   if ($grup == null || $camps == null )
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_txt';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursosgestxtform').serialize(),
			        success: function(data) {
				        		if (data['exit']['text'] == 'Ok')
				        				{
				        			$('#contenidortxt').load("php/arxius/sortidagrup" + $grup + ".txt");
			        		 		   //$('#contenidortxt').html("<embed src='sortidagrup" + $grup + ".txt' align='justify' width='90%' height='1200' >");
				        		 		   $('#baixatxtarxiu').attr("href", "php/arxius/sortidagrup" + $grup + ".txt");
					        				
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
                 error: function (xhr, status, error) {
                 	var jsonResponse = JSON.parse(xhr.responseText);
                     alert(jsonResponse.error);
         	        }
			    });
		   }
}

/**
 * @api {post} /php/index.php/arxiu_csv Genera csv
 * @apiName Genera_document1
 * @apiGroup Exporta_arxius
 * 
 * @apiDescription Amb aquesta petició generem un document pdf on està el llistat dels alumnes segons els camps que hagem escollit. Es pot escollir tant el grup que es vol tnir o el grup de GES.
 *
 * @apiParam {Array} camps Array amb tots els camps que es volen presentar al document.
 * @apiParam {String} curs Codi del curs al que pertany.
 * @apiParam {bit} Matriculat Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.
 * 
 * 
 * @apiSuccess {csv} Sortidagrup(CURS).csv Es gnera un document amb el nom del grup
 * 
 * 
 */


function Genera_documentcsv1 ()
{

		   $grup = $('#Cursoscsv').val();
		   $camps = $('#Campscsv').val();
		   if ($grup == null || $camps == null )
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_csv';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursoscsvform').serialize(),
			        success: function(data) {
				        		if (data['exit']['text'] == 'Ok')
				        				{
				        			//$('#contenidorcsv').load("sortidagrup" + $grup + ".csv");
				        		 		   //$('#contenidortxt').html("<embed src='sortidagrup" + $grup + ".txt' align='justify' width='90%' height='1200' style='text-align: justify;'>");
				        		 		  $('#baixacsvarxiu').attr("href", "php/arxius/sortidagrup" + $grup + ".csv");
				        		 		  $('#baixacsvarxiu').click();
				        		 		   
					        				
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
                 error: function (xhr, status, error) {
                 	var jsonResponse = JSON.parse(xhr.responseText);
                     alert(jsonResponse.error);
         	        }
			    });
		   }
}


function Genera_documentcsv2 ()
{

		   $grup = $('#Grupscsv').val();
		   $camps = $('#Campscsv2').val();
		   if ($grup == null || $camps == null )
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_csv';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursosgescsvform').serialize(),
			        success: function(data) {
				        		if (data['exit']['text'] == 'Ok')
				        				{
			        					//$('#contenidorcsv').load("sortidagrup" + $grup + ".csv");
			        		 		   //$('#contenidortxt').html("<embed src='sortidagrup" + $grup + ".txt' align='justify' width='90%' height='1200' >");
				        		 		   $('#baixacsvarxiu').attr("href", "php/arxius/sortidagrup" + $grup + ".csv");
				        		 		  $('#baixacsvarxiu').click();
					        				
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
                 error: function (xhr, status, error) {
                 	var jsonResponse = JSON.parse(xhr.responseText);
                     alert(jsonResponse.error);
         	        }
			    });
		   }
}

function csv_click (){
 	window.open($('#baixacsvarxiu').attr("href"));
	
}

function moodle_click (){
	$('#baixacsvarxiu')("php/exportar_moodle" + $curs + ".txt").done();
	
}


/**
 * @api {post} /php/index.php/arxiu_orla Genera Orla
 * @apiName Genera_document_orla1
 * @apiGroup Exporta_arxius
 * 
 * @apiDescription Generem un document pdf amb les fotografies de tots els alumnes del grup/curs escollit.
 * 
 * @apiParam {String} curs Codi del curs al que pertany.
 * @apiParam {bit} Matriculat Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.
 * 
 * @apiSuccess {pdf} Sortidagrup(CURS).csv Es gnera un document amb el nom del grup que és enllaçat posteriorment
 * 
 * 
 */

function Genera_document_orla1 ()
{

		   $grup = $('#Cursosorla').val();
		   $camps = $('#Campsorla').val();
		   if ($grup == null)
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_orla';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursosorlaform').serialize(),
			        success: function(data) {
						        	if (data['exit']['text'] == 'Ok')
			        				{
			        		 		   $('#contenidororla').html("<embed src='php/arxius/sortidaorla" + $grup + ".pdf' width='90%' height='1200' >");
				        				
			        				} else {
				    					alert(data['exit']['text']);
			    					}
			                 },
	                 error: function (xhr, status, error) {
	                 	var jsonResponse = JSON.parse(xhr.responseText);
	                     alert(jsonResponse.error);
	         	        }
			    });
		   }
}


function Genera_document_orla2 ()
{

		   $grup = $('#Grupsorla').val();
		   $camps = $('#Campsorla2').val();
		   if ($grup == null)
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'/arxiu_orla';
			   $.ajax({
			    	url: url,
			        type: 'post',
			        dataType: 'json',
			        data: $('form#cursosgesorlaform').serialize(),
			        success: function(data) {
							        	if (data['exit']['text'] == 'Ok')
				        				{
				        		 		   $('#contenidororla').html("<embed src='php/arxius/sortidaorla" + $grup + ".pdf' width='90%' height='1200' >");
					        				
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
	                 error: function (xhr, status, error) {
	                 	var jsonResponse = JSON.parse(xhr.responseText);
	                     alert(jsonResponse.error);
	         	        }
			    });
		   }
}

/**
 * @api {get} /php/index.php/arxiu_moodle/:curs Genera Moodle
 * @apiName Genera_documentmoodle
 * @apiGroup Exporta_arxius
 * 
 * @apiDescription Amb aquesta generem un document pdf amb les fotografies de tots els alumnes del grup/curs escollit.
 * 
 * @apiParam {String} curs Codi del curs al que pertany.
 * @apiParam {bit} Matriculat Paràmetre per indicar si volem només els matriculats (on) o tots, en eixe cas no hi ha paràmetre.
 * 
 * @apiSuccess {csv} Sortidagrup(CURS).txt Es genera un document amb el nom del grup, per a pdoer ser importat permoodle.
 * 
 * 
 */

function Genera_documentmoodle ()
{

		   curs = $('#Cursmoodle').val();
		   if (curs == null)
		   {
			   alert("Has d'escollir algun grup");
		   }
		   else
		   {
			   url = base_url+'arxiu_moodle/'+curs;
			   $.ajax({
			    	url: url,
			        type: 'get',
			        dataType: 'json',
			        success: function(data) {
							        	if (data['exit']['text'] == 'Ok')
				        				{
							        		//$('#contenidormoodle').load("php/exportar_moodle" + $curs + ".txt");
							        		$('#baixamoodlearxiu').attr("href", "php/arxius/exportar_moodle" + curs + ".txt");
							        		$('#baixamoodlearxiu').attr("download", "exportar_moodle" + curs + ".txt");
							        		$('#aaa').trigger('click');	
							        		//window.open("php/arxius/exportar_moodle" + curs + ".txt");
				        				} else {
					    					alert(data['exit']['text']);
				    					}
			                 },
                 error: function (xhr, status, error) {
                 	var jsonResponse = JSON.parse(xhr.responseText);
                     alert(jsonResponse.error);
         	        }
			    });
		   }
}

