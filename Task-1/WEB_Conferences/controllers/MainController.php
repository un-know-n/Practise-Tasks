<?php

namespace Controllers;

use Classes\View;
use Models\Conferences;

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

  public static function makeViewWithCountries($viewName) {
    $countries = Conferences::takeAllCountries();
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

  public static function createConference() {
    // Insert data using model
    Conferences::insertConference();

    header("Location: /");
  }

  public static function seeConference() {
    // Take data using model
    $data = Conferences::displayConference();

    // Pass the data to the view
    View::render('details', ['data' => $data]);
  }

  public static function deleteConference() {
    // Delete data using model
    Conferences::deleteConference();

    header("Location: /");
  }

  public static function renderConference($viewName) {
    // Take data using model
    $data = Conferences::displayConference();
    $countries = Conferences::takeAllCountries();

    // Pass the data to the view
    View::render($viewName, ['data' => $data, 'countries' => $countries]);
  }

  public static function updateConference() {
    // Update data using model
    Conferences::updateConference();

    header("Location: /");
  }
}