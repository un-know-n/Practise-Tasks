<?php

require_once "config/DBconfig.php";

$id = $_GET['id'];
$title = $_POST['title'];
$date = $_POST['date'];
$country = $_POST['country'];
$location = explode(', ', $_POST['location']);

$latitude = $location ? (float) $location[0] : 0;
$longitude = $location ? (float) $location[1] : 0;

$sql = 'Update conferences Set title = :title, date = :date, country = :country, latitude = :latitude, longitude = :longitude Where id = :id';

$statement = $pdo->prepare($sql);
$statement->execute([':id' => $id, ':title' => $title, ':date' => $date, ':country' => $country, ':latitude' => $latitude, ':longitude' => $longitude]);

header("Location: /");
