<?php 

if(isset($_POST['register']))
		{
			include_once 'classes/class.GestionaUsuaris.php';
			session_start();
			$usuari = new GestionaUsuaris();
			$username = $_POST['username'];
			$password = $_POST['password'];
			$ip_address = $_SERVER['REMOTE_ADDR'];
			$date = date("Y-m-d");
			$time = date("H:i:s");

			$loginsi=$usuari ->LoginUsuaris($username, $password);
			
			if ($loginsi == 1)
			{
				$_SESSION['usuari_id'] = $usuari->UsuariInfo($username)->Nom;
				$_SESSION['loggedin'] = true;
				$_SESSION['username'] = $username;
				$_SESSION['start'] = time();
				$_SESSION['expire'] = $_SESSION['start'] + (5 * 3600) ;
				header("location:index.php");
			}
			else
			{
				$error = 'El nom d\'usuari o la contrasenya no són correctes';
			}
		}
				
?>
			
			
			
			
