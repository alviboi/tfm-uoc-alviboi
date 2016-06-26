<script src="./js/sorteig.js"></script>
	
<div class="container">
<div align="center">
<h2 align="center">Sorteig per lletra</h2>
            <p>Tinc en compte que els alumnes que ja has matriculat i tots aquells que no han validat la matrícula no entren en el sorteig.</p>

<div class="margenes">
<div class="col-lg-4">
<label for="Poblacio">Lletra</label>
		<input type="text" class="form-control" id="lletra" placeholder="Lletra resultat del sorteig" lenght=1>
</div>
<div class="col-lg-4">
<label for="Poblacio">Quantitat d'acceptats</label>
		<input type="text" class="form-control" id="quan" placeholder="Quantitat de gent que entra">
</div>
<div class="col-lg-4">
		<fieldset>
			<label for="Curs">Cursos:</label><br>
			<select class="form-control" id="Cursos">
			</select>
	  	</fieldset>
</div>

</div>
<div class="row text-center">
				   
				    <span style="margin-top: 15px;" class="btn btn-primary" onClick="sorteig()">Genera llistat</span>
 			 		
</div>


<div class="margenes" align="left" id="resultat_sorteig">




</div>

<div hidden class="row text-center margenes" id="matricula">
		<button class="btn btn-primary btn-success" onCLick="matricula_sorteig()">Matricula a tots els alumnes</button>
</div>

</div>
<script>
    jQuery(document).ready(function ($) {
        busc_cursos_tots_llistat();
    });
    
</script> 