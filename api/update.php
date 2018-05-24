<?php 

	require 'db_config.php';

	$id = $_POST["id"];
	$title = $_POST["title"];
	$description = $_POST["description"];

	$sql = "UPDATE items SET title ='$title' , description ='$description' WHERE id = '$id'";

	$result = $mysqli->query($sql);

	$sql = "SELECT * FROM items WHERE id = '$id'";

	$result = $mysql->query($sql);

	$data = $result->fetch_assoc();

	echo json_encode($data);

?>