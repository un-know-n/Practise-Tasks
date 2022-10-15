<?php

//Turn on strict mode
declare (strict_types = 1);

//Possible fix of heroku autoloading problem
require_once "config/classes/DB.php";
require_once "config/classes/View.php";
require_once "config/classes/Router.php";
require_once "models/Conferences.php";
require_once "models/Countries.php";
require_once "controllers/MainController.php";

//Check the URL
require_once 'config/routes.php';