<?php

namespace Models;
use DB\DB;

//Autoload all the classes
require_once "config/autoload.php";

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

  /**
   * Logic for inserting/updating the conference
   *
   */
  public static function changeConference($sql) {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    //Take id from URL
    $id = $_GET['id'];

    //Take all the data from the form
    $title = $_POST['title'];
    $date = $_POST['date'];
    $country = $_POST['country'];
    $location = explode(', ', $_POST['location']);

    $latitude = $location ? (float) $location[0] : 0;
    $longitude = $location ? (float) $location[1] : 0;

    //Make the query
    $statement = $pdo->prepare($sql);
    $id ? $statement->bindParam('id', $id, \PDO::PARAM_INT) : 0;
    $statement->bindParam('title', $title, \PDO::PARAM_STR);
    $statement->bindParam('latitude', $latitude, \PDO::PARAM_STR);
    $statement->bindParam('longitude', $longitude, \PDO::PARAM_STR);
    $statement->bindParam('country', $country, \PDO::PARAM_STR);
    $statement->bindParam('date', $date, \PDO::PARAM_STR);
    $statement->execute();
  }

  /**
   * Responsible for inserting new conference to the table
   *
   */
  public static function insertConference() {
    //SQL query for inserting data into conferences table
    $sql = "Insert into conferences (title, date, country, latitude, longitude) VALUES (:title, :date, :country, :latitude, :longitude)";

    //Insert the conference
    self::changeConference($sql);
  }

  /**
   * Responsible for updating current conference
   *
   */
  public static function updateConference() {
    //SQL query for updating data in conferences table
    $sql = 'Update conferences Set title = :title, date = :date, country = :country, latitude = :latitude, longitude = :longitude Where id = :id';

    //Update the conference
    self::changeConference($sql);
  }

  /**
   * Logic for displaying/deleting the conference
   *
   * @return array $data Data depending on sql query
   */
  public static function findConference($sql) {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    //Take id from the URL
    $id = $_GET['id'];

    //Make the query
    $statement = $pdo->prepare($sql);
    $statement->execute([$id]);
    $data = $statement->fetch(\PDO::FETCH_ASSOC);

    //Return the data
    return $data;
  }

  /**
   * Responsible for displaying the conference with id from URL
   *
   * @return array $data All about current conference
   */
  public static function displayConference() {
    //SQL query to take the needed conference
    $sql = 'Select * from conferences where id = :id';

    //Take the data
    $data = self::findConference($sql);

    //Return the data
    return $data;
  }

  /**
   * Responsible for deleting the conference with id from URL
   *
   */
  public static function deleteConference() {
    //SQL query to delete the conference
    $sql = 'Delete FROM conferences Where id = :id';

    //Execute the query
    self::findConference($sql);

    //Change location to main page
    header("Location: /");
  }

}