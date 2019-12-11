<html>
<head>
	<title>Add Data</title>
</head>

<body>
	<a href="index.php">Home</a>
	<br/><br/>
<?php
$id = $_GET['id'];
?>
	<form action="addsport.php?id=<?php echo $id; ?>" method="post" name="form1">
		<table width="25%" border="0">
			<tr> 
				<td>Sport Name</td>
				<td><input type="text" name="sportname"></td>
			</tr>
			
			<tr> 
				<td></td>
				<td><input type="submit" name="Submit" value="Add"></td>
			</tr>
		</table>
	</form>
</body>
</html>

