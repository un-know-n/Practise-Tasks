<?php

namespace Models;
use DB\DB;

/**
 * Conferences model that contains logic, that is related
 * to "conferences" entity
 */
class Conferences {
/**
 * Responsible for selecting all conferences from the table
 *
 * @return array
 */
  public static function displayAllConferences() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    // Create an sql request
    $sql = 'select * from conferences';

    //Take the data from request
    $data = $pdo->query($sql)->fetchAll(\PDO::FETCH_ASSOC);

    // Return requested data
    return $data;
  }

  public static function insertConference() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    $title = $_POST['title'];
    $date = $_POST['date'];
    $country = $_POST['country'];
    $location = explode(', ', $_POST['location']);

    $latitude = $location ? (float) $location[0] : 0;
    $longitude = $location ? (float) $location[1] : 0;

    $sql = "Insert into conferences (title, date, country, latitude, longitude) VALUES (:title, :date, :country, :latitude, :longitude)";

    $statement = $pdo->prepare($sql);
    $statement->execute([':title' => $title, ':date' => $date, ':country' => $country, ':latitude' => $latitude, ':longitude' => $longitude]);
  }

  public static function takeAllCountries() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    $sql = "Select * from countries";

    $statement = $pdo->query($sql);
    $countries = $statement->fetchAll(\PDO::FETCH_ASSOC);
    return $countries;
  }

  public static function displayConference() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    $id = $_GET['id'];

    $sql = 'Select * from conferences where id = :id';
    $statement = $pdo->prepare($sql);
    $statement->execute([$id]);
    $data = $statement->fetch(\PDO::FETCH_ASSOC);

    return $data;
  }

  public static function deleteConference() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    $id = $_GET['id'];

    $sql = 'Delete FROM conferences Where id = :id';
    $statement = $pdo->prepare($sql);
    $statement->execute([$id]);
    //$statement->fetchAll(PDO::FETCH_ASSOC);

    header("Location: /");
  }

  public static function updateConference() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

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
  }
}