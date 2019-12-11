
<?php
//including the database connection file
include_once("config.php");
$_POST = json_decode(file_get_contents('php://input'), true);

	if (empty($_POST['name']))
		echo 'name empty';
		$name = $_POST['name'];
  
	if (empty($_POST['email']))
		echo 'email empty';
  		$email = $_POST['email'];

	if (empty($_POST['age']))
		echo 'age empty';
		$age = $_POST['age'];

		$user = array (
				'name' => $_POST['name'],
				'age' => $_POST['age'],
				'email' => $_POST['email']
			);


    $lastInserted= $db->users->insertOne($user);
	echo $json_response = json_encode($lastInserted);

 ?>

