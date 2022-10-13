<?php

require_once "config/DBconfig.php";

$title = $_POST['title'];
$date = $_POST['date'];
$country = $_POST['country'];
$location = explode(', ', $_POST['location']);

$latitude = $location ? (float) $location[0] : 0;
$longitude = $location ? (float) $location[1] : 0;

$sql = "Insert into conferences (title, date, country, latitude, longitude) VALUES (:title, :date, :country, :latitude, :longitude)";

$statement = $pdo->prepare($sql);
$statement->execute([':title' => $title, ':date' => $date, ':country' => $country, ':latitude' => $latitude, ':longitude' => $longitude]);

header("Location: /");