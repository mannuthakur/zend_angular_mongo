<?php
//including the database connection file
include_once("config.php");
$data=array();
// select data in descending order from table/collection "users"
$result = $db->users->find();

if($result){
foreach ($result as $key=>$value) {
	$data[]=$value;
}
}
echo $json_response = json_encode($data);
?>
