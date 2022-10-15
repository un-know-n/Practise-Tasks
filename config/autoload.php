<?php
//Turn on the strict mode
declare (strict_types = 1);

/**
 * Responsible for autoloading missing classes
 *
 */
spl_autoload_register(function (string $class) {
  //Replacing the "\" with directory separator
  $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);

  //If using namespace, then take the name of the class
  $parts = explode('\\', $class);

  //Every folder with the classes inside
  $controllers = __DIR__ . "./../controllers/" . end($parts) . ".php";
  $models = __DIR__ . "./../models/" . end($parts) . ".php";
  $classes = __DIR__ . "./../config/classes/" . end($parts) . ".php";

  //Connect the class if exists
  if (is_readable($controllers)) {
    require_once $controllers;
  } elseif (is_readable($models)) {
    require_once $models;
  } elseif (is_readable($classes)) {
    require_once $classes;
  }
});
