<?php

use Classes\Router;
use Controllers\MainController;

//Autoload all the classes
require_once __DIR__ . "/../config/autoload.php";

/**
 * Render main page
 */
Router::set('index.php', function () {
  MainController::renderHome();
});

/**
 * Render the page of selected conference
 */
Router::set('select', function () {
  MainController::seeConference();
});

/**
 * Render the page to edit the selected conference
 */
Router::set('edit', function () {
  MainController::renderConference('editing');
});

/**
 * Update conference with data from the form
 */
Router::set('update', function () {
  MainController::updateConference();
});

/**
 * Delete selected conference
 */
Router::set('delete', function () {
  MainController::deleteConference();
});

/**
 * Render page of conference creation with countries from DB
 */
Router::set('create', function () {
  MainController::makeViewWithCountries('creation');
});

/**
 * Create conference with data from the form
 */
Router::set('insert', function () {
  MainController::createConference();
});

Router::set('error', function () {
  MainController::makeStaticView('error404');
});

Router::isRouteValid();