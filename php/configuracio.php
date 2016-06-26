<script src="./js/configuracio.js"></script>


<div class="fons">

	<div class="container">

		<!-------->
		<div id="content">
			<ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
				<li id="altaprofactive" class="active"><a href="#altaprof" data-toggle="tab">Alta
						professors</a></li>
				<li id="altacursactive"><a href="#altacurs" data-toggle="tab">Alta Cursos</a></li>
				<li id="confcursactive"><a href="#confcurs" data-toggle="tab">Borrar Cursos</a></li>
				<li id="CursosOfertatsactive"><a href="#CursosOfertats" data-toggle="tab">Cursos Ofertats</a></li>
			</ul>
			<!-- *************************************************************************** -->
			<div id="my-tab-content" class="tab-content">
				<div class="tab-pane active" id="altaprof">
					<h2 align="center">Alta professors</h2>
					<p>Donar alta professors</p>
					<div>
						<form id="alta_usuari">
							<fieldset class="form-group col-lg-4">
								<label for="Nom">Nom</label> <input type="text"
									class="form-control" id="Nom" name="Nom"
									placeholder="Nom del professor" required="required">
							</fieldset>

							<fieldset class="form-group col-lg-4">
								<label for="Usuari">Usuari</label> <input type="text"
									class="form-control" id="Usuari" name="Usuari"
									placeholder="Usuari" required="required">
							</fieldset>


							<fieldset class="form-group col-lg-4">
								<label for="Password">Password</label> <input type="password"
									class="form-control" id="Password" name="Password"
									placeholder="Password" required="required">
							</fieldset>
							<div class="row text-center margenes">

								<span class="btn btn-primary btn-success"
									onClick="donar_alta_usuari()">Donar d'alta usuari</span>

							</div>

						</form>
					</div>



				</div>
				<!-- *************************************************************************** -->
				<div class="tab-pane" id="altacurs">
					<h2 align="center">Alta Cursos</h2>
					<p>Donar d'alta nous cursos. Has d'escollir el nom del nou curs, el
						codi del nou curs i a quin grup pertany.</p>
					<div>
						<form id="altacursos">
							<div>
								<fieldset class="form-group col-lg-4">
									<label for="Codi_Curs">Codi del Curs</label> <input type="text"
										class="form-control" id="Codi_Curs" name="Codi_Curs"
										placeholder="Codi del Curs" required="required">
								</fieldset>

								<fieldset class="form-group col-lg-4">
									<label for="Nom_del_Curs">Nom del Curs</label> <input
										type="text" class="form-control" id="Nom_del_Curs"
										name="Nom_del_Curs" placeholder="Nom del Curs"
										required="required">
								</fieldset>

								<fieldset class="form-group col-lg-4">
									<label for="Camp_Curs">Camp del Curs</label> <select
										type="text" class="form-control" id="Camp_Curs"
										name="Camp_Curs" required="required">
										<option value="ProgramaACicleI">ProgramaACicleI</option>
										<option value="ProgramaBcicleII">ProgramaBcicleII</option>
										<option value="ProgramaBDCursosPolivalents">ProgramaBDCursosPolivalents</option>
										<option value="ProgramaCValenciaJQCV">ProgramaCValenciaJQCV</option>
										<option value="ProgramaJAnglesBasic">ProgramaJAnglesBasic</option>
									</select>
							
							</div>
							<div class="row text-center margenes">

								<span class="btn btn-primary btn-success"
									onClick="donar_alta_cursos()">Donar d'alta curs</span>

							</div>
							</fieldset>
						</form>
					</div>

				</div>
				<!-- *************************************************************************** -->
				<div class="tab-pane" id="confcurs">
					<h2 align="center" class="text-danger">
						<b>Borrar Curs</b>
					</h2>
					<p align="center" class="bg-danger text-danger">
						<b>Si borres un curs tota la informació relacionada amb el curs
							serà borrada. Utilitza aquesta ferramenta amb molt de compte ja
							que pots produïr resultats inesperats a la base de dades i perdre
							informació valuosa. <u>Abans de borrar un curs has d'ofertar-lo.</u>
						</b>
					</p>
					<div class="row">
						<div class="col-lg-12 container">
							<div align="center">
								<h3>Selecciona grup per a borrar</h3>
							</div>
							<form method="post" action="index.php/arxiu_pdf"
								id="cursosborraform">
								<div class="container" align="center">
									<fieldset class="form-group col-lg-6 col-lg-push-3">
										<label for="Cursos">Cursos:</label><br> <select multiple
											class="form-control" name="curs" id="Cursos">
										</select>
									</fieldset>
								</div>
								<div class="col-lg-12 margenes" align="center">
									<span class="btn btn-primary btn-danger" onClick="borra_curs()">Borra
										curs</span>
								</div>
							</form>
						</div>
					</div>






				</div>

				<!-- *************************************************************************** -->



				<div class="tab-pane" id="CursosOfertats">
					<h2 align="center">Cursos Ofertats</h2>
					<p>Selecciona els cursos que vols ofertar.</p>

					<form method="post" id="actualitza_cursos">
						<div class="row margenes">



							<fieldset class="form-group col-lg-2" id="ProgramaACicleI">
								<label for="ProgramaACicleId">Programa A Cicle I:</label><br>

							</fieldset>
							<fieldset class="form-group col-lg-2" id="ProgramaBcicleII">
								<label for="ProgramaBCicleIId">Programa B Cicle II:</label><br>

							</fieldset>


							<fieldset class="form-group col-lg-2" id="ProgramaCValenciaJQCV">
								<label for="ProgramaCValenciaJQCVd">Programa C Valencià JQCV:</label><br>

							</fieldset>
							<fieldset class="form-group col-lg-3"
								id="ProgramaBDCursosPolivalents">
								<label for="ProgramaBDCursosPolivalentsd">Programa B-D Cursos
									polivalents:</label><br>

							</fieldset>
							<fieldset class="form-group col-lg-3" id="ProgramaJAnglesBasic">
								<label for="ProgramaJAnglesBasicd">Programa J Anglès Bàsic:</label><br>

							</fieldset>



						</div>
						<div class="row text-center">

							<span class="btn btn-primary btn-success"
								onClick="actualitza_cursos()">Desa</span>

						</div>

					</form>

				</div>


			</div>


			<script type="text/javascript">
    jQuery(document).ready(function ($) {
        $('#tabs').tab();
        busc_cursos_tots ();
        busc_cursos_tots_llistat();
    });
</script>
		</div>
	</div>
</div>
