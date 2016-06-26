<?php 
/**
 ******************************************************
 *  @file class.database.php
 *  @brief Ens permeteix conectar-nos a la base de dades quan ho necessitem.
 * Algunes clases van a necessitar conectar-se a la base de dades, aquesta clase crea una conexió a la base de dades.
 * @author Alfredo Rafael Vicente Boix
 * @version 1.0
 * @date Maig 2016
 *
 *
 *******************************************************/

/**
 ******************************************************
 * @brief Clase per a realitzar la conexió
 *
 ******************************************************/
class dbConnection {
    
	protected $db_conn;
	public $db_name;
	public $db_user;
	public $db_pass;
	public $db_host;
	
	/**
	 *************************************************************
	 * @brief Constructor . Llegim les dades de configuració de la base de dades.
	 *************************************************************/
	
	function __construct(){
	    include_once 'datos.php';
	    $this -> db_name = $DBname;
	    $this -> db_user = $DBuser;
	    $this -> db_pass = $DBpassword;
	    $this -> db_host = $DBserver;
	}
	

	/**
	 *************************************************************
	 * @brief connect() Conexió
	 *
	 * @return Genera la conexió a la base de dades
	 * @todo La nostra API es conecta amb aquesta clase, però dona alguns problemes.
	 *************************************************************/
	
	function connect() {
		try {
			$this->db_conn = new PDO("mysql:host=$this->db_host;dbname=$this->db_name",$this->db_user,$this->db_pass);
			$this->db_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $this->db_conn;
		}
		catch(PDOException $c){
			return $c->getMessage();
		}
	}

}

?>