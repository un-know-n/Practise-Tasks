<?php

// Default database config
$dbconfig = [
  'host' => '127.0.0.1',
  'dbname' => 'web_conferences',
  'login' => 'root',
  'password' => '',
];

$options = [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_STRINGIFY_FETCHES => false,
  PDO::ATTR_EMULATE_PREPARES => false,
];

$dsn = 'mysql:host=' . $dbconfig['host'] . ';dbname=' . $dbconfig['dbname'];

$pdo = new PDO($dsn, $dbconfig['login'], $dbconfig['password'], $options);