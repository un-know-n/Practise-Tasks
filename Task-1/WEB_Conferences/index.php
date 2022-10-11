<?php

//Turn on strict mode
declare (strict_types = 1);

require_once 'config/DBconfig.php';

//Include autoloading file
//require_once __DIR__ . '/system/autoload.php';

//Starting app
//System\App::run();

$sql = 'SELECT id, title, date FROM conferences ORDER BY id DESC';
$statement = $pdo->query($sql);
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

//print_r($data);

include "views/index.php";