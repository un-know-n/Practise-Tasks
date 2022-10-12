<?php
require_once "config/DBconfig.php";

$id = $_GET['id'];

$sql = 'Delete FROM conferences Where id = :id';
$statement = $pdo->prepare($sql);
$statement->execute([$id]);
$statement->fetchAll(PDO::FETCH_ASSOC);

header("Location: /");