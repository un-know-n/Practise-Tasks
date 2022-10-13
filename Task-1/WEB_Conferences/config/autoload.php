<?php
declare (strict_types = 1);

spl_autoload_register(function (string $class) {
  echo "try load: $class" . PHP_EOL;
  $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);
  echo "class replaced: $class" . PHP_EOL;
  $controllers = __DIR__ . "/controllers/{$class}.php";
  $models = __DIR__ . "/models/{$class}.php";
  if (is_readable($controllers)) {
    echo "file was found: $controllers" . PHP_EOL;
    require $controllers;
  } elseif (is_readable($models)) {
    echo "file was found: $models" . PHP_EOL;
    require $models;
  }
});