<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

	//http://stackoverflow.com/questions/18382740/cors-not-working-php
	if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

define('SQL_HOST',       'marionchoq031996.mysql.db');
define('SQL_USERNAME',   'marionchoq031996');
define('SQL_PASSWORD',   'MA03CY12bo17');
define('SQL_DBNAME',     'marionchoq031996');

try {
    $db = new PDO('mysql:dbname='.SQL_DBNAME.';host='.SQL_HOST, SQL_USERNAME, SQL_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}

catch(Exception $e) {
    exit('Erreur : ' . $e->getMessage());
}

if(isset($_GET['name'])){
    $name = $_GET['name'];
    $ingredients = $_GET['ingredients'];
    $description = $_GET['description'];
    $img = $_GET['img'];
    $time = $_GET['time'];

    $sql = "INSERT INTO recette1(name, ingredients, description, img, time) VALUES ('$name', '$ingredients', '$description', '$img', '$time')";
    $req = $db->prepare($sql);
    $result = $req->execute();
    
   
    echo $json_response = json_encode($result);
}
?>
