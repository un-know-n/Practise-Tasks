<?php

//Autoload all the classes
require_once "config/autoload.php";

function validateString($value) {

  return preg_replace('/\s+/', ' ', htmlspecialchars(strip_tags(stripslashes(trim(implode("", explode("\\", $value)))))));
}