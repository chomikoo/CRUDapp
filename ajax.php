
<?php 

	if (isset($_POST['key'])) {

		$db = new mysqli('localhost','root', '', 'crudapp');

		$countryName = $db->real_escape_string($_POST['countryName']);
		$shortDescription = $db->real_escape_string($_POST['shortDescription']);
		$longDescription = $db->real_escape_string($_POST['longDescription']);

		// echo $countryName . $shortDescription . $longDescription;

		if ($_POST['key'] == 'modalSave') {
	
			$sql = $db->query("SELECT id FROM country WHERE countryName = '$countryName'");
			if ($sql->num_rows > 0) {
				exit("Country with this name already exists !");
			} else {
				$db->query("INSERT INTO country (countryName, shortDescription, longDescription) VALUES ('$countryName', '$shortDescription', $longDescription)" );
				exit("Country has been inserted");
			}
			
		}

	}




?>