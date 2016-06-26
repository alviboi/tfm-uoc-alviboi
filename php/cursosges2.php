<script src="./js/cursosges2.js"></script>

<body>
	<div class="container">
		<div class='row'>
			<h3 align="center">Organitza cursos GES2.2</h3>
			<p class="margenes">Recorda que pots assignar de la elecció del matí
				o la vesprada a qualsevol grup.</p>
		</div>
		<div class='row margenes'>


			<div class="col-lg-3">
				<select id="CursGESinput" onchange="Curs1(this.value,this.id)">
					<option value="Res"></option>
					<option value="G22m">GES2.2 matí</option>
					<option value="G22V">GES2.2 vesprada</option>
					<!--  <option value="Sense">Sense assignar</option> -->
					<option value="Tots">Tots</option>
				</select>
			</div>
			<div class="col-lg-3">
				<select id="1in" onchange="Curs2(this.value,this.id)">
					<option value="Res"></option>
					<option value="GES22A">GES2.2A</option>
					<option value="GES22B">GES2.2B</option>
					<option value="GES22C">GES2.2C</option>
					<option value="GES22D">GES2.2D</option>
					<option value="GES22E">GES2.2E</option>
					<option value="Tots">Tots</option>
				</select>
			</div>
			<div class="col-lg-3">
				<select id="2in" onchange="Curs2(this.value,this.id)">
					<option value="Res"></option>
					<option value="GES22A">GES2.2A</option>
					<option value="GES22B">GES2.2B</option>
					<option value="GES22C">GES2.2C</option>
					<option value="GES22D">GES2.2D</option>
					<option value="GES22E">GES2.2E</option>
					<option value="Tots">Tots</option>
				</select>
			</div>
			<div class="col-lg-3">
				<select id="3in" onchange="Curs2(this.value,this.id)">
					<option value="Res"></option>
					<option value="GES22A">GES2.2A</option>
					<option value="GES22B">GES2.2B</option>
					<option value="GES22C">GES2.2C</option>
					<option value="GES22D">GES2.2D</option>
					<option value="GES22E">GES2.2E</option>
					<option value="Tots">Tots</option>
				</select>
			</div>
		</div>

		<div class="row margenes" id="camp">

			<div id="camp1" class="col-lg-3 container"></div>

			<div id="camp1in" class="col-lg-3 container"></div>

			<div id="camp2in" class="col-lg-3 container"></div>

			<div id="camp3in" class="col-lg-3 container"></div>


			<br style="clear: both">