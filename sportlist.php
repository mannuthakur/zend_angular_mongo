<?php
//including the database connection file
include_once("config.php");

 $id = $_GET['id'];
// select data in descending order from table/collection "users"
$result = $db->userSports->find(array("userId"=> $id));

?>

<html>
<head>	
	<title>Homepage</title>
</head>

<body>
<a href="add.html">Add New Data</a><br/><br/>

	<table width='80%' border=0>

	<tr bgcolor='#CCCCCC'>
		<td>Sports Name</td>
		
	</tr>
	<?php 	
	foreach ($result as $res) {

		echo "<tr>";
		echo "<td>".$res->sportname."</td>";
	}
	?>
	</table>
</body>
</html>
