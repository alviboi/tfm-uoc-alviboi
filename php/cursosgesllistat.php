 <script src="./js/cursosgesllist.js"></script>
 
 <style>
  
  .cursos_ges_llistat_llista { list-style-type: none; margin: 0; margin-right: 0px; padding: 5px; height: 100%;width: 100%;}
  
 #llistat_cursos_ges li {
    border: 1px solid #c5c5c5;
    background: #f6f6f6;
    font-weight: normal;
    color: #454545;
    width: 600px;
    
}
  </style>
  	
<div class="container">
<div class='row'>
<h3 align="center">Organitza cursos GES per llistat</h3>
<p class="margenes">Recorda que pots assignar de la elecció del matí o la vesprada a qualsevol grup.</p>

</div>
<div class="row margenes">
<div class="row col-lg-4">
		<select id="CursGESinput" onchange="Curs1llistat(this.value,this.id)">
			<option value="Res"></option>
			<option value="G21m">GES2.1 matí</option>
			<option value="G21V">GES2.1 vesprada</option>
			<option value="G22m">GES2.2 matí</option>
			<option value="G22V">GES2.2 vesprada</option>
		</select>
</div>
<div class="col-lg-4">
<button class="btn btn-primary btn-danger" onCLick="BorrarCursosllistat()">Esborras totes les assignacions a Grups</button>
</div>
</div>

<div class="row margenes">
<ul class ="cursos_ges_llistat_llista" id="llistat_cursos_ges" style="margin-top: 15px;">



</ul>
</div>

</div>