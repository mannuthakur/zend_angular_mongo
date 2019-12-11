<?php
	include_once("config.php");
$_POST = json_decode(file_get_contents('php://input'), true);

$id=$_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];


$result = $db->users->updateOne(array('_id'=>new MongoDB\BSON\ObjectId($id)),array('$set'=>array('name'=>$name,'email'=>$email,'age'=>$age)));

?>
