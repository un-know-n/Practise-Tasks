<?php

use Classes\Router;
use Controllers\MainController;

Router::set('select', function () {
  MainController::seeConference();
});

Router::set('edit', function () {
  MainController::renderConference('editing');
});

Router::set('update', function () {
  MainController::updateConference();
});

Router::set('delete', function () {
  MainController::deleteConference();
});

Router::set('index.php', function () {
  MainController::renderHome();
});

Router::set('create', function () {
  MainController::makeViewWithCountries('creation');
});

Router::set('insert', function () {
  MainController::createConference();
});