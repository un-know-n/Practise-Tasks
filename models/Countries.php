<?php

namespace Models;
use DB\DB;

//Autoload all the classes
require_once "config/autoload.php";

/**
 * Countries model that contains logic, that is related
 * to "countries" entity
 */
class Countries {
  /**
   * Responsible for selecting all countries from the table
   *
   * @return array
   */
  public static function takeAllCountries() {
    // Take pdo variable from DB class
    $pdo = DB::connect();

    //SQL query
    $sql = "SELECT * FROM countries";

    //Execute the query and take back data
    $statement = $pdo->query($sql);
    $countries = $statement->fetchAll(\PDO::FETCH_ASSOC);

    //Return data
    return $countries;
  }
}