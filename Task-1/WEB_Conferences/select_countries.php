<?php

require_once "config/DBconfig.php";

$sql = "Select * from countries";

$statement = $pdo->query($sql);
$countries = $statement->fetchAll(PDO::FETCH_ASSOC);
//echo "<pre>";
//print_r($countries[0]['country']);