<?php

namespace DB;

/**
 * Handle the connection to database
 *
 */
class DB {

  // Default database config
  public static $host = '127.0.0.1';
  public static $dbname = 'web_conferences';
  public static $login = 'root';
  public static $password = '';

  /**
   * Connect to the database and return connection instance
   *
   * @return object $pdo Instance of PDO class
   */
  public static function connect() {
    //Options for database
    $options = [
      \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
      \PDO::ATTR_STRINGIFY_FETCHES => false,
      \PDO::ATTR_EMULATE_PREPARES => false,
    ];

    //Set up the database
    $dsn = 'mysql:host=' . self::$host . ';dbname=' . self::$dbname;

    //Create an instance of PDO
    return $pdo = new \PDO($dsn, self::$login, self::$password, $options);
  }
}
