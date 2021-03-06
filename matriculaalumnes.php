<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="content-type" content="text/html" charset="UTF-8">
<meta charset="utf-8">
<title>Sistema de Gestió de matrícula</title>

<link href="css/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" href="css/jquery-ui.css">
<link href="css/custom.css" rel="stylesheet">
<script src="js/jquery-1.11.3.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/webcam.js"></script>
<script src="js/ajax.js"></script>
<script src="js/matricula.js"></script>


</head>
<body class="margenes">
<nav class="navbar-default navbar-fixed-top row" >



<ul class="nav navbar-right" style="margin-right: 60px;">
	<li><a href="#" onclick="alumne_antic_passwd()">Alumne anys anteriors</a></li>
</ul>

</nav>

<div id="missatges" title="Importa dades" style="display:none;">

</div>
<div id="missatges2" title="Importa dades" style="display:none;">

</div>



	<div class="container" style="margin-top: 70px;">

		<div id="dialog" title="Pren foto" style="display: none;">
			<div class="webcam">
				<video autoplay id="video"></video>
				<div class="photoArea"></div>

			</div>
		</div>
		<canvas id="canvas" width='140' height='190' hidden="true"
			style="border: 1px solid #d3d3d3;"></canvas>


		<div class="list-group" id="dialog2" title="Resultats"
			style="display: none;"></div>



		<form id="inscriure">

			<div class="col-lg-12 superior">

				<div class="col-lg-11 superior">

					<div class="row text-left block-left">

						<fieldset class="form-group col-lg-3">
							<label for="Nom">Nom</label> <input type="text"
								class="form-control" id="Nom" name="Nom" placeholder="Nom"
								required="required"
								title="Introdueix el teu nom. Insert your name.">
						</fieldset>

						<fieldset class="form-group col-lg-3">
							<label for="Cognoms">Cognoms</label> <input type="text"
								class="form-control" id="Cognoms" name="Cognoms"
								placeholder="Cognoms" required="required"
								title="Introdueix el teu cognom. Insert your surname.">
						</fieldset>

						<fieldset class="form-group col-lg-3">
							<label for="Direccio">Adreça</label> <input type="text"
								class="form-control" id="Direccio" name="Direccio"
								placeholder="Adreça" required="required"
								title="Introdueix la teua adreça. Insert your address.">
						</fieldset>

						<fieldset class="form-group col-lg-2">
							<label for="Pablacio">Població</label> <input type="text"
								class="form-control" id="Poblacio" name="Poblacio"
								placeholder="Població" required="required"
								title="Introdueix la ciutat on vius. Insert the city where you live.">
						</fieldset>

						<fieldset class="form-group col-lg-1">
							<label for="CodiPostal">CP</label> <input type="text"
								class="form-control" id="CP" name="CP" placeholder="Codi Postal"
								required="required" title="Postal Code.">
						</fieldset>

					</div>

					<div class="row">

						<fieldset class="form-group col-lg-2">
							<label for="DNI">DNI (sense guió)</label> <input type="text"
								class="form-control" id="DNI" name="DNI"
								placeholder="DNI, NIE o Pasaport" required="required"
								title="Introdueix el teu DNI. Write your NIE, Passport or ID" maxlength="9">
						</fieldset>

						<fieldset class="form-group col-lg-2">
							<label for="Tlf">Telèfon de contacte</label> <input type="text"
								class="form-control" id="Telefon" name="Telefon"
								placeholder="Telèfon de contacte" required="required"
								title="Introdueix el teu número de telèfon. Insert your telephone number." maxlength="9">
						</fieldset>

						<fieldset class="form-group col-lg-2">
							<label for="Sexe">Sexe</label> <select class="form-control"
								id="Sexe" name="Sexe" title="Everybody knows what Sexe means.">
								<option>Home</option>
								<option>Dona</option>
							</select>
						</fieldset>

						<fieldset class="form-group col-lg-3">
							<label for="Correu electrònic">Correu electrònic</label> <input
								type="email" class="form-control" id="Email" name="Email"
								placeholder="Correu electrònic"
								title="Introdueix el teu correu electrònic. Write your e-mail">
						</fieldset>

						<fieldset class="form-group col-lg-3">
							<label for="Nacionalitat">Nacionalitat</label> <select
								class="form-control" id="Nacionalitat" name="Nacionalitat"
								title="Introdueix la teua nacionalitat. Your nationality.">
								<option>afganesa (AF)</option>
								<option>albanesa (AL)</option>
								<option>alemanya (D)</option>
								<option>algeriana (DZ)</option>
								<option>andorrana (AND)</option>
								<option>angolesa (AO)</option>
								<option>apàtrida (APT)</option>
								<option>argentina (RA)</option>
								<option>armènia (AR)</option>
								<option>australiana (AUS)</option>
								<option>australiana (CCK)</option>
								<option>australiana (CXR)</option>
								<option>australiana (HMD)</option>
								<option>australiana (NFK)</option>
								<option>austríaca (A)</option>
								<option>azerbaidjanesa (AZ)</option>
								<option>bahamiana (BS)</option>
								<option>bahrainiana (BRN)</option>
								<option>barbadiana (BDS)</option>
								<option>basuto (LS)</option>
								<option>belga (B)</option>
								<option>beliziana (BH)</option>
								<option>bengalí (BD)</option>
								<option>beninesa (DY)</option>
								<option>bhutanesa (BHU)</option>
								<option>bielorussa (BIE)</option>
								<option>birmana (BUR)</option>
								<option>boliviana (BO)</option>
								<option>bosniana (BOH)</option>
								<option>botswanesa (RB)</option>
								<option>brasilera (BR)</option>
								<option>britànica (ANG)</option>
								<option>britànica (BMV)</option>
								<option>britànica (CYM)</option>
								<option>britànica (FLK)</option>
								<option>britànica (GB)</option>
								<option>britànica (GBZ)</option>
								<option>britànica (HK)</option>
								<option>britànica (IOT)</option>
								<option>britànica (MSR)</option>
								<option>britànica (PCN)</option>
								<option>britànica (SHN)</option>
								<option>britànica (TCA)</option>
								<option>britànica (VGB)</option>
								<option>bruneiesa (BRU)</option>
								<option>búlgara (BG)</option>
								<option>burkinesa (HV)</option>
								<option>burundesa (RU)</option>
								<option>cambodiana (K)</option>
								<option>camerunesa (CA)</option>
								<option>canadenca (CDN)</option>
								<option>capverdiana (CV)</option>
								<option>centreafricana (RCA)</option>
								<option>colombiana (CO)</option>
								<option>comoriana (CAM)</option>
								<option>congolesa (RCB)</option>
								<option>congolesa (RCD)</option>
								<option>congolesa (RDC)</option>
								<option>coreana (COR)</option>
								<option>costariquenya (CR)</option>
								<option>croata (CRO)</option>
								<option>cubana (C)</option>
								<option>danesa (DK)</option>
								<option>danesa (FRO)</option>
								<option>danesa (GRL)</option>
								<option>d'Antigua i Barbuda (AB)</option>
								<option>de la Unió dels Emirats Àrabs (EA)</option>
								<option>de l'Antàrtida (ATA)</option>
								<option>de l'arxipèlag Marshall (MHL)</option>
								<option>de Saint Cristopher i Nevis (SCN)</option>
								<option>de Saint Lucia (WL)</option>
								<option>de Saint Vincent i les Grenadines (VS)</option>
								<option>de Säo Tomé i Príncipe (ST)</option>
								<option>de Sierra Leone (WAL)</option>
								<option>de Trinitat i Tobago (TT)</option>
								<option>dels Estats Federats de Micronèsia (FSM)</option>
								<option>djboutiana (DJ)</option>
								<option>dominicana (DOM)</option>
								<option>dominiquesa (WD)</option>
								<option>egípcia (ET)</option>
								<option>equatoguineana (GUE)</option>
								<option>equatoriana (EC)</option>
								<option>eritrea (ERT)</option>
								<option>eslovaca (ESQ)</option>
								<option>eslovena (ESL)</option>
								<option selected>espanyola (E)</option>
								<option>estadounidenca (PLW)</option>
								<option>estoniana (ES)</option>
								<option>etiòpica (EP)</option>
								<option>fijiana (FJI)</option>
								<option>filipina (PI)</option>
								<option>finlandesa (SF)</option>
								<option>francesa (F)</option>
								<option>francesa (GLP)</option>
								<option>francesa (GUF)</option>
								<option>francesa (MTQ)</option>
								<option>francesa (MYT)</option>
								<option>francesa (NCL)</option>
								<option>francesa (PYF)</option>
								<option>francesa (REU)</option>
								<option>francesa (SPM)</option>
								<option>francesa (WLF)</option>
								<option>gabonesa (GA)</option>
								<option>gambiana (WAG)</option>
								<option>georgiana (G)</option>
								<option>ghanesa (GH)</option>
								<option>grega (GR)</option>
								<option>grenadina (WG)</option>
								<option>guatemalenca (GCA)</option>
								<option>guineana (GU)</option>
								<option>guineana (GUP)</option>
								<option>guyanesa (GUY)</option>
								<option>haitiana (RH)</option>
								<option>hondurenya (HD)</option>
								<option>hongaresa (H)</option>
								<option>iemenita (YMN)</option>
								<option>índia (IND)</option>
								<option>indonèsia (RI)</option>
								<option>indonèsia (TMP)</option>
								<option>iraniana (IR)</option>
								<option>iraquiana (IRQ)</option>
								<option>irlandesa (IRL)</option>
								<option>islandesa (IS)</option>
								<option>israeliana (CJ)</option>
								<option>israeliana (IL)</option>
								<option>italiana (I)</option>
								<option>iugoslava (YU)</option>
								<option>ivoriana (CI)</option>
								<option>jamaicana (JA)</option>
								<option>japonesa (J)</option>
								<option>jordana (HKJ)</option>
								<option>kazakh (KAZ)</option>
								<option>kenyana (EAK)</option>
								<option>kirguís (KIR)</option>
								<option>kiribatiana (KI)</option>
								<option>kuwaitiana (KWT)</option>
								<option>laosiana (LAO)</option>
								<option>letona (LT)</option>
								<option>libanesa (RL)</option>
								<option>liberiana (LEB)</option>
								<option>líbia (LAR)</option>
								<option>liechtensteinesa (FL)</option>
								<option>lituana (LIT)</option>
								<option>luxemburguesa (L)</option>
								<option>macedònia (MCD)</option>
								<option>malàisia (MAL)</option>
								<option>malawiana (MW)</option>
								<option>maldiviana (MAD)</option>
								<option>malgaixa (RM)</option>
								<option>maliana (RMM)</option>
								<option>maltesa (M)</option>
								<option>marroquina (MA)</option>
								<option>mauriciana (MS)</option>
								<option>mauritana (RIM)</option>
								<option>mexicana (MEX)</option>
								<option>moçambiquesa (MZ)</option>
								<option>moldava (MOL)</option>
								<option>monegasca (MC)</option>
								<option>mongola (MG)</option>
								<option>montenegrina (MNE)</option>
								<option>namibiana (SWA)</option>
								<option>nauruana (NU)</option>
								<option>neerlandesa (ABW)</option>
								<option>neerlandesa (NA)</option>
								<option>neerlandesa (NL)</option>
								<option>neozelandesa (COK)</option>
								<option>neozelandesa (NIU)</option>
								<option>neozelandesa (NZ)</option>
								<option>neozelandesa (TKL)</option>
								<option>nepalesa (NP)</option>
								<option>nicaragüenca (NIC)</option>
								<option>nigeriana (WAN)</option>
								<option>nigerina (NIG)</option>
								<option>nord-americana (ASM)</option>
								<option>nord-americana (GUM)</option>
								<option>nord-americana (MNP)</option>
								<option>nord-americana (PR)</option>
								<option>nord-americana (USA)</option>
								<option>nord-americana (VIR)</option>
								<option>nord-coreana (ROK)</option>
								<option>noruega (BVT)</option>
								<option>noruega (N)</option>
								<option>noruega (SJM)</option>
								<option>omanita (OM)</option>
								<option>pakistanesa (PAK)</option>
								<option>panamenya (PA)</option>
								<option>papú (PN)</option>
								<option>paraguaiana (PY)</option>
								<option>peruana (PE)</option>
								<option>polonesa (PL)</option>
								<option>portuguesa (MCO)</option>
								<option>portuguesa (P)</option>
								<option>qatariana (Q)</option>
								<option>romanesa (R)</option>
								<option>ruandesa (RWA)</option>
								<option>russa (RUS)</option>
								<option>sahrauí (SH)</option>
								<option>salomonesa (SL)</option>
								<option>salvadorenca (SA)</option>
								<option>samoana (WS)</option>
								<option>santmarinesa (RSM)</option>
								<option>saudita (ASA)</option>
								<option>senegalesa (SN)</option>
								<option>sèrbia (SRB)</option>
								<option>seychellesa (SY)</option>
								<option>singalesa (CL)</option>
								<option>singapuresa (SGP)</option>
								<option>siriana (SYR)</option>
								<option>somali (SP)</option>
								<option>sud-africana (ZA)</option>
								<option>sudanesa (SDN)</option>
								<option>sueca (S)</option>
								<option>suïssa (CH)</option>
								<option>surinamesa (SME)</option>
								<option>swazi (SD)</option>
								<option>tadjik (TAD)</option>
								<option>tailandesa (T)</option>
								<option>taiwanesa (RC)</option>
								<option>tanzana (EAT)</option>
								<option>togolesa (TG)</option>
								<option>tongalesa (TNG)</option>
								<option>tunisiana (TN)</option>
								<option>turca (TR)</option>
								<option>turcmana (TUR)</option>
								<option>tuvaliana (TVL)</option>
								<option>txadiana (TD)</option>
								<option>txeca (CHE)</option>
								<option>ucraïnesa (UKR)</option>
								<option>ugandesa (EAU)</option>
								<option>uruguaiana (U)</option>
								<option>uzbeka (UZ)</option>
								<option>vanuatuenca (VNT)</option>
								<option>vaticana (V)</option>
								<option>veneçolana (YV)</option>
								<option>vietnamita (VN)</option>
								<option>xilena (RCH)</option>
								<option>xinesa (RPC)</option>
								<option>xipriota (CY)</option>
								<option>zairesa (ZR)</option>
								<option>zambiana (Z)</option>
								<option>zimbabwesa (RSR)</option>
							</select>
						</fieldset>

					</div>

				</div>

				<div class="col-lg-1">


					<img class="img_2" onclick="obrir_dialog()" id="foto" width="100" height="150"
						style="border: 2px solid gray; text-align: center; color: red;"
						alt="Polsa per a prendre imatge" />


				</div>

			</div>





			<div class="row">

				<fieldset class="form-group col-lg-3">
					<label for="DataNaixement">Data de naixement</label> <input
						type="text" class="form-control" id="DataNaixement"
						name="DataNaixement" placeholder="Data de Naixement"
						required="required"
						title="Introdueix la teua data de naixement. Insert birthday.">
				</fieldset>

				<fieldset class="form-group col-lg-3">
					<label for="LocalitatNaixement">Localitat de naixement</label> <input
						type="text" class="form-control" id="LocalitatNaixement"
						name="LocalitatNaixement" placeholder="Localitat de Naixement"
						required="required"
						title="Introdueix la localitat on vares nàixer. Insert your birth town.">
				</fieldset>

				<fieldset class="form-group col-lg-3">
					<label for="Provincia de naixement">Província de naixement</label>
					<input type="text" class="form-control" id="ProvinciaNaixement"
						name="ProvinciaNaixement" placeholder="Provincia de Naixement"
						required="required"
						title="Introdueix la província on vares nàixer. Insert the region where you borned.">
				</fieldset>

				<fieldset class="form-group col-lg-3">
					<label for="País de naixement">País de naixement</label> <input
						type="text" class="form-control" id="PaisNaixement"
						name="PaisNaixement" placeholder="País de naixement"
						required="required"
						title="Introdueix el país on vares nàixer. Insert the country where you borned.">
				</fieldset>


			</div>


			<div class="row">

				<fieldset class="form-group col-lg-3">
					<label for="ProgramaACicleId">Programa A Cicle I:</label> <select
						multiple class="form-control" name="ProgramaAcicleI"
						id="ProgramaACicleI"
						title="Matricula't de programes per preaparar-te per a la ESO">
						<!--<option value="Alfa mati">ALFA matí</option>
				      	<option value="Alfa vesprada">ALFA vesprada</option>
						<option value="Base mati">BASE matí</option>
						<option value="Base vesprada">BASE vesprada</option>
						<option value="Taller 13 mati">TALLER 1.3 matí</option>
						<option value="Taller 13 vesprada">TALLER 1.3 vesprada</option>-->
						<option selected value="No"></option>
					</select>
				</fieldset>
				<fieldset class="form-group col-lg-3"
					onClick="comprova(ProgramaBcicleII.value)" id="ProgramaBcicleII2">
					<label for="ProgramaBCicleIId">Programa B Cicle II:</label> <select
						multiple class="form-control" name="ProgramaBcicleII"
						id="ProgramaBcicleII"
						title="Aquestos cursos correponen a secundària.">
						<!--<option value="GES 2.1 mati">GES 2.1 matí</option>
						<option value="GES 2.1 vesprada">GES 2.1 vesprada</option>
						<option value="GES 2.2 mati">GES 2.2 matí</option>
						<option value="GES 2.2 vesprada">GES 2.2 vesprada</option>-->
						<option selected value="No"></option>
					</select>
				</fieldset>
				<fieldset class="form-group col-lg-3">
					<label for="Optativa1d">Optativa 1 (TOTS):</label> <select multiple
						class="form-control" name="Optativa1" id="Optativa1"
						title="Només es pot escollir una Optativa si escollixes GES2.2,en GES 2.1 deus escollir-ne 2.">
						<option selected value="No"></option>
						<option value="INF" id="INF">INF</option>
						<option value="OIP" id="OIP">OIP (Sols 2.1)</option>
						<option value="TMI" id="TMI">TMI (Sols 2.1)</option>
						<option value="GH" id="GH">GH (Sols 2.2)</option>

					</select>
				</fieldset>
				<fieldset class="form-group col-lg-3" id="Opt2">
					<label for="Optativa2d">Optativa 2 (Només GES2.1):</label> <select
						multiple class="form-control" name="Optativa2" id="Optativa2"
						title="Només es pot escollir una Optativa si escollixes GES2.2,en GES 2.1 deus escollir-ne 2.">
						<option selected value="No"></option>
						<option value="INF" id="INF2">INF</option>
						<option value="OIP" id="OIP2">OIP (Sols 2.1)</option>
						<option value="TMI" id="TMI2">TMI (Sols 2.1)</option>
						<option value="GH" id="GH2">GH (Sols 2.2)</option>

					</select>
				</fieldset>


			</div>

			<div class="row">
				<div>

					<fieldset class="form-group col-lg-3">
						<label for="ProgramaCValenciaJQCVd">Programa C Valencià JQCV:</label>
						<select multiple class="form-control" name="ProgramaCValenciaJQCV"
							id="ProgramaCValenciaJQCV">
							<!--  <option value="ORAL mati">ORAL matí</option>
						<option value="ELEMENTAL nit">ELEMENTAL nit</option>
						<option value="MITJA mati">MITJÀ matí</option>
						<option value="MITJA nit">MITJÀ nit</option>
						<option value="SUPERIOR nit">SUPERIOR nit</option>-->
							<option selected value="No"></option>
						</select>
					</fieldset>
					<fieldset class="form-group col-lg-3">
						<label for="ProgramaBDCursosPolivalentsd">Programa B-D Cursos
							polivalents:</label> <select multiple class="form-control"
							name="ProgramaBDCursosPolivalents"
							id="ProgramaBDCursosPolivalents">
							<!--<option value="Accés Unviversitat matí">Accés Universitat matí</option>
						<option value="Accés Unviversitat nit">Accés Universitat nit</option>
						<option value="Accés CFGS mati">Accés CFGS matí</option>
						<option value="Accés CFGS nit">Accés CFGS nit</option>-->
							<option selected value="No"></option>
						</select>
					</fieldset>
					<fieldset class="form-group col-lg-3">
						<label for="ProgramaJAnglesBasicd">Programa J Anglès Bàsic:</label>
						<select multiple class="form-control" name="ProgramaJAnglesBasic"
							id="ProgramaJAnglesBasic">
							<!--<option value="Taller anglès nit">Taller angles nit</option>
						<option value="Certificat A1 Anglès nit">Certificat A1 Anglès nit</option>
						<option value="Certificat A2 Anglès matí">Certificat A2 Anglès matí</option>
						<option value="Certificat B1 Anglès nit">Certificat B1 Anglès nit</option>-->
							<option selected value="No"></option>
						</select>
					</fieldset>
				</div>
				<div>
					<fieldset class="form-group col-lg-3">
						<label for="comentaris">Comentaris:</label>
						<textarea class="form-control textarea" rows="3" name="Comentaris"
							id="Comentaris"></textarea>
					</fieldset>
				</div>
			</div>


			<div class="row text-center">
				<!-- <button class="btn btn-primary btn-success" onCLick="actualitza_dades()" id="envia">Desa</button> -->
				<label for="envia"></label> <span class="btn btn-primary btn-success" onCLick="inscriu_alumne()" id="envia2"
					title="Assegura't de que totes les dades són correctes. Una vegada matricula't no pots tornar a matricular-te.">Matricula't</span>
			</div>

		</form>

	</div>
	<!-- 
 <div class="navbar navbar-fixed-bottom">
   	<div class="container">  
    		<p class="text-muted" align="right"><font size="3">CFPA Pasqual i Tirado - Inscripció 2016/2017</font></p>     
		</div>
</div>
 -->
</body>
<script src="js/webcam.js"></script>