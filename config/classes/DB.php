<?php

namespace DB;

//Get Heroku ClearDB connection information
$cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
$host = $cleardb_url["host"];
$login = $cleardb_url["user"];
$password = $cleardb_url["pass"];
$dbname = substr($cleardb_url["path"], 1);
$active_group = 'default';
$query_builder = TRUE;

/**
 * Handle the connection to database
 *
 */
class DB {

  // Default database config
  //public static $host = '127.0.0.1';
  //public static $dbname = 'web_conferences';
  //public static $login = 'root';
  //public static $password = '';

  /**
   * Connect to the database and return connection instance
   *
   * @return object $pdo Instance of PDO class
   */
  public static function connect() {
    global $host;
    global $dbname;
    global $login;
    global $password;

    //Options for database
    $options = [
      \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
      \PDO::ATTR_STRINGIFY_FETCHES => false,
      \PDO::ATTR_EMULATE_PREPARES => false,
    ];

    //Set up the database
    $dsn = 'mysql:host=' . $host . ';dbname=' . $dbname;

    //Create an instance of PDO
    return $pdo = new \PDO($dsn, $login, $password, $options);
  }
}
