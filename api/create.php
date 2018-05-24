<?php 

require 'db_config.php';

 	$title = $_POST["title"];
 	$description = $_POST["description"];


 	$sql = "INSERT INTO items (title, description) VALUES ('$title', '$description')";

 	$result = $mysqli->query($sql);

 	$data = $result->fetch_assoc();

 	echo json_encode($data);


?>