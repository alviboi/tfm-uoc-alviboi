<script>
	 $(function() {
		  busc_cursos_tots_llistat();
		  busc_anys_tots_llistat () ;
	  });
</script>




<body>
	<div class="container margenes">
		<div class="row">
			<form action="" id="llistat">
				<div class="row" align=center">
					<div class="col-lg-12" align="center">
						<div>
							<fieldset class="form-group col-lg-3 col-lg-push-3">
								<label for="Cursos">Cursos:</label><br> <select multiple
									class="form-control" name="curs" id="Cursos">
								</select>
							</fieldset>
							<fieldset class="form-group col-lg-3 col-lg-push-3">
								<label for="Cursos">Any:</label><br> <select
									class="form-control" name="any" id="any">
								</select>
							</fieldset>
						</div>
					</div>
					<div class="row" align="center">
						<span class="btn btn-primary btn-success"
							onClick="busc_estudiant_cursos_any_anterior()">Cerca</span>
					</div>
				</div>


			</form>
		</div>
		<div class="row container-fluid col-lg-4 col-lg-push-4 margenes">
			<form id="matr_any_anterior">
				<div id="llist_import"></div>
				<div hidden id="matriculaboto" class="row" align="center">
					<span style="margin-top: 10px"
						class="btn btn-primary btn-success" id="envia" onClick="matricula_any_anterior()">Matricula</span>
					<fieldset class="form-group">
						<label for="Cursos">Curs al que matricular:</label><br> <select
							class="form-control" name="curs" id="Cursos">
						</select>
					</fieldset>
				</div>
			</form>
		</div>
	</div>