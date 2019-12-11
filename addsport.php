

<html>
<head>
	<title>Add Data</title>
</head>

<body>
<?php
//including the database connection file
include_once("config.php");

if(isset($_POST['Submit'])) {	
	$sports = array (
				'sportname' => $_POST['sportname'],
				);
		
	// checking empty fields
	$errorMessage = '';
	foreach ($sports as $key => $value) {
		if (empty($value)) {
			$errorMessage .= $key . ' field is empty<br />';
		}
	}
	
	if ($errorMessage) {
		// print error message & link to the previous page
		echo '<span style="color:red">'.$errorMessage.'</span>';
		echo "<br/><a href='javascript:self.history.back();'>Go Back</a>";	
	} else {
		$sports['userId']= $_GET['id'];
		//insert data to database table/collection named 'users'
		$db->userSports->insertOne($sports);
		
		//display success message
		echo "<font color='green'>Sports added successfully.";
		echo "<br/><a href='index.php'>View Result</a>";
	}
}
?>
</body>
</html>
