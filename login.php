<?php
include_once("php/login_users.php");
?>
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>Login Form</title>
		<link href="css/bootstrap.css" rel="stylesheet">
		
	</head>
	


<style>

body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #ddd;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-control {

margin-bottom: 7px;

}

.alert {

margin-top: 7px;

}



</style>

<body>



<div class="container" id="content">



<div id="form" class="container text-center form-signin" >

      <form method="post" action="login.php">
   
        <h2 class="form-signin-heading">Login</h2>
        <label for="username" class="sr-only">Nom d'usuari</label>
        <input name="username" id="username" class="form-control" placeholder="Usuari" required="required" autofocus="autofocus">
        <label for="password" class="sr-only">Password</label>
        <input name="password" id="password" class="form-control" placeholder="Contrasenya" required="required" type="password">
        <button class="btn btn-lg btn-default" type="submit" name="register" id="register">Entra</button>
      </form>
      <?php
      		if(isset($error)) {
      			echo '<div class="alert alert-danger form-signin">'.$error.'</div>'; 
			}

	?>

</div>
</div>
	<script src="js/jquery-1.11.3.js"></script>    
    <script src="js/bootstrap.min.js"></script>
	</body>
</html>