<script>
		$(function () {
			
			busc_cursos_tots ();
			
		});

</script>
		

 <body class="fons">
 
 <div class="container">

<!-------->
<div id="content">
    <ul id="tabs" class="nav nav-tabs" data-tabs="tabs">
        <li><a href="#altaprof" data-toggle="tab">Alta professors</a></li>
        <li><a href="#altacurs" data-toggle="tab">Alta Cursos</a></li>
        <li><a href="#confcurs" data-toggle="tab">Configuracio Cursos</a></li>
        <li><a href="#CursosOfertats" data-toggle="tab">Cursos Ofertats</a></li>
    </ul>
    <div id="my-tab-content" class="tab-content">
        <div class="tab-pane active" id="altaprof">
            <h1>Alta professors</h1>
            <p>Donar alta professors</p>
        </div>
        <div class="tab-pane" id="altacurs">
            <h1>Alta Cursos</h1>
            <p>Donar alta cursos</p>
        </div>
        <div class="tab-pane" id="confcurs">
            <h1>Configuració Curs</h1>
            <p>Configurar cursos</p>
        </div>
    <div class="tab-pane" id="CursosOfertats">
         
         
		<form method="post" action="php/index.php/GuardaCursos">      
			<div class="row margenes">
          
          
				
				<fieldset class="form-group col-lg-2" id="ProgramaACicleI">
					<label for="ProgramaACicleId">Programa A Cicle I:</label><br>
				 
			  	</fieldset>
			  	<fieldset class="form-group col-lg-2" id="ProgramaBcicleII">
				    <label for="ProgramaBCicleIId">Programa B Cicle II:</label><br>
	
			  	</fieldset>Green


				<fieldset class="form-group col-lg-2" id="ProgramaCValenciaJQCV">
				    <label for="ProgramaCValenciaJQCVd">Programa C Valencià JQCV:</label><br>
				    
			  	</fieldset>
			  	<fieldset class="form-group col-lg-3" id="ProgramaBDCursosPolivalents">
				    <label for="ProgramaBDCursosPolivalentsd">Programa B-D Cursos polivalents:</label><br>
				   
			  	</fieldset>
			  	<fieldset class="form-group col-lg-3" id="ProgramaJAnglesBasic">
				    <label for="ProgramaJAnglesBasicd">Programa J Anglès Bàsic:</label><br>
				   
			 	</fieldset>
			 	
			 	
            
           	</div>
			<div class="row text-center">
				
				    <button class="btn btn-primary btn-success" type="submit">Desa</button>
 			 		
			</div>   
		
	</form>
	
</div>
</div>


<script type="text/javascript">
    jQuery(document).ready(function ($) {
        $('#tabs').tab();
    });
</script>    
</div>
</div>
 