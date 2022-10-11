<?php

namespace Models;

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
  public function displayAll() {
    // Connect to database
    $dsn = 'mysql:host=127.0.0.1;dbname=web_conferences';
    // Create an instance of PDO class
    $pdo = new \PDO($dsn, 'root', '');

    // Create an sql request
    $sql = 'select * from conferences';

    // Return requested data
    return $pdo->query($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }
}