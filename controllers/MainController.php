<?php

namespace Controllers;

use Classes\View;
use Models\Conferences;
use Models\Countries;

//Autoload all the classes
require_once "config/autoload.php";

/**
 * Main controller of the app
 *
 */
class MainController {

  /**
   * Responsible for displaying specific view
   *
   */
  public static function makeStaticView($viewName) {
    View::render($viewName);
  }

  /**
   * Responsible for displaying view with countries from DB
   *
   */
  public static function makeViewWithCountries($viewName) {
    $countries = Countries::takeAllCountries();
    View::render($viewName, ['countries' => $countries]);
  }

  /**
   * Responsible for displaying main page
   *
   */
  public static function renderHome() {
    // Take data using model
    $data = Conferences::displayAllConferences();

    // Pass the data to the view
    View::render('index', ['data' => $data]);
  }

  /**
   * Responsible for creating the conference in DB
   *
   */
  public static function createConference() {
    // Insert data using model
    Conferences::insertConference();

    header("Location: /");
  }

  /**
   * Responsible for rendering the conference with data from DB
   *
   */
  public static function seeConference() {
    // Take data using model
    $data = Conferences::displayConference();

    // Pass the data to the view
    View::render('details', ['data' => $data]);
  }

  /**
   * Responsible for deleting the conference in DB
   *
   */
  public static function deleteConference() {
    // Delete data using model
    Conferences::deleteConference();

    header("Location: /");
  }

  /**
   * Responsible for rendering the conference page with all data from DB
   *
   */
  public static function renderConference($viewName) {
    // Take data using model
    $data = Conferences::displayConference();
    $countries = Countries::takeAllCountries();

    // Pass the data to the view
    View::render($viewName, ['data' => $data, 'countries' => $countries]);
  }

  /**
   * Responsible for updating the conference in DB
   *
   */
  public static function updateConference() {
    // Update data using model
    Conferences::updateConference();

    header("Location: /");
  }
}