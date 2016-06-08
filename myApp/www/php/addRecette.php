<?php
error_reporting(E_ALL);
ini_set('display_errors',1);


//mysql_query("INSERT INTO recette(`name`, `ingredients`, `description`, `img`, `time`)VALUES('".$name."','".$ingredients."','".$description."','".$img."','".$time."')");

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

define('SQL_HOST',       'localhost');
define('SQL_USERNAME',   'root');
define('SQL_PASSWORD',   'root');
define('SQL_DBNAME',     'apprecette');

try {
    $db = new PDO('mysql:dbname='.SQL_DBNAME.';host='.SQL_HOST, SQL_USERNAME, SQL_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}

catch(Exception $e) {
    exit('Erreur : ' . $e->getMessage());
}
//require_once '../includes/db.php'; // The mysql database connection script

if(isset($_GET['name'])){
    $name = $_GET['name'];
    $ingredients = $_GET['ingredients'];
    $description = $_GET['description'];
    $img = $_GET['img'];
    $time = $_GET['time'];

    $sql = "INSERT INTO recette(name, ingredients, description, img, time) VALUES ('$name', '$ingredients', '$description', '$img', '$time')";
    $req = $db->prepare($sql);
    $result = $req->execute();
    
    echo $json_response = json_encode($result);
}
?>
