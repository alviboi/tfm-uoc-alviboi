<script src="./js/cursosges.js"></script>

<div class="container">
	<div class='row'>
		<h3 align="center">Organitza cursos GES2.1</h3>
		<p class="margenes">Recorda que pots assignar de la elecció del matí o
			la vesprada a qualsevol grup.</p>
	</div>
	<div class='row margenes'>


		<div class="col-lg-3">
			<select id="CursGESinput" onchange="Curs1(this.value,this.id)">
				<option value="Res"></option>
				<option value="G21m">GES2.1 matí</option>
				<option value="G21V">GES2.1 vesprada</option>
				<!--  <option value="Sense">Sense assignar</option> -->
				<option value="Tots">Tots</option>
			</select>
		</div>
		<div class="col-lg-3">
			<select id="1in" onchange="Curs2(this.value,this.id)">
				<option value="Res"></option>
				<option value="GES21A">GES2.1A</option>
				<option value="GES21B">GES2.1B</option>
				<option value="GES21C">GES2.1C</option>
				<option value="GES21D">GES2.1D</option>
				<option value="GES21E">GES2.1E</option>
				<option value="Tots">Tots</option>
			</select>
		</div>
		<div class="col-lg-3">
			<select id="2in" onchange="Curs2(this.value,this.id)">
				<option value="Res"></option>
				<option value="GES21A">GES2.1A</option>
				<option value="GES21B">GES2.1B</option>
				<option value="GES21C">GES2.1C</option>
				<option value="GES21D">GES2.1D</option>
				<option value="GES21E">GES2.1E</option>
				<option value="Tots">Tots</option>
			</select>
		</div>
		<div class="col-lg-3">
			<select id="3in" onchange="Curs2(this.value,this.id)">
				<option value="Res"></option>
				<option value="GES21A">GES2.1A</option>
				<option value="GES21B">GES2.1B</option>
				<option value="GES21C">GES2.1C</option>
				<option value="GES21D">GES2.1D</option>
				<option value="GES21E">GES2.1E</option>
				<option value="Tots">Tots</option>
			</select>
		</div>
	</div>

	<div class="row margenes" id="camp">

		<div id="camp1" class="col-lg-3 container"></div>

		<div id="camp1in" class="col-lg-3 container"></div>

		<div id="camp2in" class="col-lg-3 container"></div>

		<div id="camp3in" class="col-lg-3 container"></div>
	</div>

	<br style="clear: both">