<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

mysql_connect("localhost","root","root");
mysql_select_db("apprecette");
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
