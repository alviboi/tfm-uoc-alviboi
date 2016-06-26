/**
 * Ha d'existir un canvas nomnat amb id canvas, un video amb id video, una
 * finestra que s'obriga amb id dialog, ha d'nar acompanyat del css de webcam
 * <div id="dialog" title="Pren foto" style="display:none;"> <div
 * class="webcam"> <video autoplay id="video"></video> <div class="photoArea"></div>
 * 
 * </div> </div> <canvas id="canvas" width='140' height='190' hidden"></canvas>
 * <img onclick="obrir_dialog()" id="foto" width="140" height="190"
 * style="border: 2px solid gray; text-align: center; color:red;" value="Imatge"
 * alt="Polsa per a prendre imatge"/>
 * 
 * 
 * 
 * <style type="text/css"> .webcam { width: 260px; height: 196px; position:
 * relative; border: 1px solid #d3d3d3; float: left; top: 2px; }
 * 
 * .webcam video { width: 100%; height: 100%; position: absolute; }
 * 
 * .webcam .photoArea { border: 2px dashed red; width: 140px; height: 190px;
 * position: relative; margin: 0 auto;
 *  }
 * 
 * canvas, img { float: left; }
 * 
 * .controls { clear: both; }
 * 
 * 
 * </style>
 * 
 */

var localMediaStream = null;
var video = document.querySelector('#video');
var canvas = document.querySelector('#canvas');
var boto = document.querySelector('#boto');

/**
 * @api {post} /php/index.php/carregafoto Carrega foto
 * @apiName upload
 * @apiGroup Fotografia
 * 
 * @apiDescription Envia la foto per a guardar-la al servidor.
 * 
 * @apiParam {String} dni Dni de l'alumne al qui pertany la fotografia.
 * @apiParam {Object} foto Fotografia.
 *  
 */



function upload(dni) {
	var base64 = canvas.toDataURL('image/jpeg', 0.85);
	var formData = new FormData();
	formData.append('foto', base64);
	formData.append('dni', dni);
	$.ajax({
		type : "POST",
		url : "./php/index.php/carregafoto",
		data : {
			'dni' : dni,
			foto : base64

		}

	});
}

/* Final de upload() */

function FesPhoto() {
	if (localMediaStream) {

		canvas.getContext('2d').drawImage(video, 148, 0, 344, 480, 0, 0, 140, 190); // Tret per regles de 3
		var data = canvas.toDataURL('image/jpg');
		foto.setAttribute('src', data);

	}
}

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
		|| navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;

function CapturaVideo() {
	navigator.getUserMedia({
		video : true
	}, function(stream) {
		video.src = window.URL.createObjectURL(stream);
		localMediaStream = stream;
	}, function(e) {
		console.log(e);
	});
}

function AturaVideo() {

	localMediaStream.getVideoTracks()[0].stop();

}

function obrir_dialog() {

	$("#dialog").dialog({
		modal : true,
		buttons : {
			"Fes foto" : function() {
				FesPhoto();
				AturaVideo();
			},

			"Repetix foto" : function() {
				CapturaVideo();
			}
		},
		close : function() {
			$(this).dialog('destroy');
			AturaVideo();

		}

	});
	CapturaVideo();
}