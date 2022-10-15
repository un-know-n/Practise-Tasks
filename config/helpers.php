<?php

//Autoload all the classes
require_once "config/autoload.php";

/**
 * Validate transfered string
 *
 * @param string $value String that must be validated
 * @return string Validated string
 */
function validateString($value) {
  return preg_replace('/\s+/', ' ', htmlspecialchars(strip_tags(stripslashes(trim(implode("", explode("\\", $value)))))));
}