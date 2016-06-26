<script src="./js/exportaarxius.js"></script>


<div class="fons">

	<div class="container">

		<!-------->
		<div id="content margenes row">
			<ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
				<li class="active"><a href="#pdf" data-toggle="tab">Exporta dades a
						pdf</a></li>
				<li><a href="#foto" data-toggle="tab">Exporta dades a txt</a></li>
				<li><a href="#fullcalcul" data-toggle="tab">Exporta dades a full de
						càlcul</a></li>
				<li><a href="#orla" data-toggle="tab">Exporta Orla de grup</a></li>
				<li><a href="#moodle" data-toggle="tab">Fitxer de dades per a moodle</a></li>

			</ul>


			<div id="tab-content" class="tab-content">

				<!-- *************************************************************************** -->

				<div class="tab-pane active" id="pdf" align="center">

					<h2>Exporta les dades dels cursos</h2>

					<div class="row">
						<div class="col-lg-6 container"
							style="border-right: solid 1px black">
							<div align="center">
								<h3>Genera grups de matrícula</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf" id="cursospdf">
								<div class="col-lg-12 container">
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Cursos:</label><br> <select
											class="form-control" name="curs" id="Cursos">
										</select>
									</fieldset>
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="camps[]"
											id="Camps">
										</select>
									</fieldset>



								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_document1()">Genera document</span>
								</div>
								<fieldset class="form-group col-lg-6 col-lg-push-3">

									<input type="checkbox" name="Matriculat" id="Matriculat">
									Llista només els matriculats

								</fieldset>
							</form>
						</div>

						<div class="col-lg-6 container">
							<div align="center">
								<h3>Genera grups de GES</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosgespdf">
								<div class="col-lg-12 container" align="center">

									<fieldset class="form-group col-lg-6" align="center">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="Grups[]"
											id="Grups">
											<option value="GES21A">GES2.1A</option>
											<option value="GES21B">GES2.1B</option>
											<option value="GES21C">GES2.1C</option>
											<option value="GES21D">GES2.1D</option>
											<option value="GES21E">GES2.1E</option>

										</select>
									</fieldset>
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="camps[]"
											id="Camps2">
										</select>
									</fieldset>

								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_document2()">Genera pdf GES</span>
								</div>
							</form>
						</div>




						<div class="row margenes" align="middle" id="contenidorpdf"></div>
					</div>



				</div>







				<!-- *************************************************************************** -->
				<div class="tab-pane" id="foto">
					<h2 align="center">Exporta les dades dels cursos a txt</h2>

					<div class="row">
						<div class="col-lg-6 container"
							style="border-right: solid 1px black">
							<div align="center">
								<h3>Genera grups de matrícula</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursostxtform">
								<div class="col-lg-12 container">
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Cursos:</label><br> <select multiple
											class="form-control" name="curs[]" id="Cursostxt">
										</select>
									</fieldset>
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="camps[]"
											id="Campstxt">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_documenttxt1()">Genera txt</span>
								</div>
								<div class="text-center">
									<fieldset class="form-group col-lg-6 col-lg-push-3">

										<input type="checkbox" name="Matriculat" id="Matriculat">
										Llista només els matriculats

									</fieldset>
								</div>
							</form>
						</div>

						<div class="col-lg-6 container">
							<div align="center">
								<h3>Genera grups de GES</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosgestxtform">
								<div class="col-lg-12 container" align="center">

									<fieldset class="form-group col-lg-6" align="center">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="Grups[]"
											id="Grupstxt">
											<option value="GES21A">GES2.1A</option>
											<option value="GES21B">GES2.1B</option>
											<option value="GES21C">GES2.1C</option>
											<option value="GES21D">GES2.1D</option>
											<option value="GES21E">GES2.1E</option>

										</select>
									</fieldset>
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="camps[]"
											id="Campstxt2">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_documenttxt2()">Genera txt GES</span>
								</div>
							</form>
						</div>




						<div class="row margenes col-lg-12" align="center">
							<div class="panel-heading" align="left">
								<span class="btn btn-default"><a id="baixatxtarxiu"
									href="BAJADA.txt" download=""><span
										class="glyphicon glyphicon-floppy-disk"></span></a></span>
							</div>
							<div class="panel-body" id="contenidortxt"
								style="border: 1px solid #000; background: white;"></div>

						</div>






					</div>


				</div>



				<!-- ****************************************************************************************************** -->

				<div class="tab-pane" id="fullcalcul">
					<h2 align="center">Exporta dades a un full de calcul</h2>
					<div class="row">
						<div class="col-lg-6 container"
							style="border-right: solid 1px black">
							<div align="center">
								<h3>Genera grups de matrícula</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursoscsvform">
								<div class="col-lg-12 container">
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Cursos:</label><br> <select multiple
											class="form-control" name="curs[]" id="Cursoscsv">
										</select>
									</fieldset>
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="camps[]"
											id="Campscsv">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_documentcsv1()">Genera csv</span>
								</div>
								<div class="text-center">
									<fieldset class="form-group col-lg-6 col-lg-push-3">

										<input type="checkbox" name="Matriculat" id="Matriculat">
										Llista només els matriculats

									</fieldset>
								</div>
							</form>
						</div>

						<div class="col-lg-6 container">
							<div align="center">
								<h3>Genera grups de GES</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosgescsvform">
								<div class="col-lg-12 container" align="center">

									<fieldset class="form-group col-lg-6" align="center">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="Grups[]"
											id="Grupscsv">
											<option value="GES21A">GES2.1A</option>
											<option value="GES21B">GES2.1B</option>
											<option value="GES21C">GES2.1C</option>
											<option value="GES21D">GES2.1D</option>
											<option value="GES21E">GES2.1E</option>

										</select>
									</fieldset>
									<fieldset class="form-group col-lg-6">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select multiple class="form-control" name="camps[]"
											id="Campscsv2">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_documentcsv2()">Genera csv GES</span>
								</div>
							</form>
						</div>
					</div>
					<div class="row margenes" align="middle">
						<a id="baixacsvarxiu" href="BAJADA.txt" onClick="csv_click()">Descarrega
							arxiu</a>

					</div>

				</div>


				<!-- *************************************************************************** -->

				<div class="tab-pane" id="orla" align="center">

					<h2>Exporta Orla</h2>


					<div class="row">
						<div class="col-lg-6 container"
							style="border-right: solid 1px black">
							<div align="center">
								<h3>Genera Orla grups de matrícula</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosorlaform">
								<div class="col-lg-12 container">
									<fieldset class="form-group col-lg-6 col-lg-push-3">
										<label for="Cursos">Cursos:</label><br> <select
											class="form-control" name="curs" id="Cursosorla">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_document_orla1()">Genera document</span>
								</div>
								<div class="text-center">
									<fieldset class="form-group col-lg-6 col-lg-push-3">

										<input type="checkbox" name="Matriculat" id="Matriculat">
										Llista només els matriculats

									</fieldset>
								</div>
							</form>
						</div>

						<div class="col-lg-6 container">
							<div align="center">
								<h3>Genera grups de GES</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosgesorlaform">
								<div class="col-lg-12 container" align="center">

									<fieldset class="form-group col-lg-6 col-lg-push-3"
										align="center">
										<label for="Cursos">Selecciona Camps (polsant Ctrl):</label><br>
										<select class="form-control" name="Grups" id="Grupsorla">
											<option value="GES21A">GES2.1A</option>
											<option value="GES21B">GES2.1B</option>
											<option value="GES21C">GES2.1C</option>
											<option value="GES21D">GES2.1D</option>
											<option value="GES21E">GES2.1E</option>

										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_document_orla2()">Genera pdf GES</span>
								</div>
							</form>
						</div>




						<div class="row margenes" align="middle" id="contenidororla"></div>
					</div>



				</div>

				<!-- *************************************************************************** -->

				<div class="tab-pane" id="moodle">

					<h2 align="center">Exporta moodle</h2>
					<p align="center">
						Recorda que per al exportar el arxiu de moodle els cursos en
						moodle <b>ja deuen estar creats.</b> A més el codi del curs ha de
						ser el mateix que en l'aplicació.
					</p>
					<div class="row">
						<div class="col-lg-12 container">
							<div align="center">
								<h3>Selecciona grup per a moodle</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosmoodleform">
								<div class="container" align="center">
									<fieldset class="form-group col-lg-6 col-lg-push-3">
										<label for="Cursos">Cursos:</label><br> <select multiple
											class="form-control" name="curs[]" id="Cursmoodle">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-success"
										onClick="Genera_documentmoodle()">Genera moodle</span>
								</div>
							</form>
						</div>
					</div>

					<div class="row margenes" align="middle">
						<div class="panel-heading" align="left">
							<span type="button" class="btn btn-default"><a
								id="baixamoodlearxiu" href="BAJADA.txt" download=""><span
									id="aaa" class="glyphicon glyphicon-floppy-disk"></span></a></span>
						</div>

					</div>


				</div>


				<script type="text/javascript">
    jQuery(document).ready(function ($) {
        $('#tabs').tab();
        busc_cursos_tots_llistat();
    	busc_camps_estudiant();
    });
    
</script>
			</div>
		</div>


	</div>
</div>