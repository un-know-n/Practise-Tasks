<?php

require_once "config/DBconfig.php";
require_once "select_countries.php";

$id = $_GET['id'];

$sql = 'Select * from conferences where id = :id';
$statement = $pdo->prepare($sql);
$statement->execute([$id]);
$data = $statement->fetch(PDO::FETCH_ASSOC);

include "views/details.php";