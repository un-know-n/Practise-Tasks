<?php

//Turn on strict mode
declare (strict_types = 1);

//Autoload all the classes
require_once "config/autoload.php";

require_once "config/classes/DB.php";
require_once "config/classes/View.php";
require_once "models/Conferences.php";
require_once "controllers/MainController.php";
require_once "config/classes/Router.php";

//Check the URL
require_once 'config/routes.php';

//Previous Code---------------------

//require_once 'config/DBconfig.php';

//$sql = 'SELECT id, title, date FROM conferences ORDER BY id DESC';
//$statement = $pdo->query($sql);
//$data = $statement->fetchAll(PDO::FETCH_ASSOC);

//include "views/index.php";