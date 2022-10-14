<?php

namespace DB;

class DB {

  // Default database config
  public static $host = '127.0.0.1';
  public static $dbname = 'web_conferences';
  public static $login = 'root';
  public static $password = '';

  public static function connect() {
    //Options for database
    $options = [
      \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
      \PDO::ATTR_STRINGIFY_FETCHES => false,
      \PDO::ATTR_EMULATE_PREPARES => false,
    ];

    $dsn = 'mysql:host=' . self::$host . ';dbname=' . self::$dbname;

    return $pdo = new \PDO($dsn, self::$login, self::$password, $options);
  }
}
