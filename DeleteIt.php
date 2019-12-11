<?php
include_once("config.php");

$_POST = json_decode(file_get_contents('php://input'), true);
$id = $_POST['id'];
$result = $db->users->deleteOne(array('_id'=>new MongoDB\BSON\ObjectId($id)));
