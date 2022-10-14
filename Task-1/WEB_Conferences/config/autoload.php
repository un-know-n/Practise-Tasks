<?php
declare (strict_types = 1);

spl_autoload_register(function (string $class) {
  echo "try load: $class" . PHP_EOL;
  $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);
  echo "class replaced: $class" . PHP_EOL;
  $controllers = __DIR__ . "/controllers/{$class}.php";
  $models = __DIR__ . "/models/{$class}.php";
  $classes = __DIR__ . "/config/classes/{$class}.php";
  if (is_readable($controllers)) {
    require $controllers;
  } elseif (is_readable($models)) {
    require $models;
  } elseif (is_readable($classes)) {
    require $classes;
  }

});