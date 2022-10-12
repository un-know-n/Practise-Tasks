<?php

namespace Controllers;

use System\View;

/**
 * Main controller of the app
 *
 */
class homeController {

  /**
   * Responsible for displaying main page
   *
   */
  public function actionMain() {
    View::render('index');

  }

  /**
   * Responsible for displaying all the conferences
   *
   */
  public function actionConferences() {
    // Create model instance
    //$model = new Conferences();

    // Take data using model
    //$data = $model->displayAll();

    // Pass the data to the view
    //View::render('news', ['data' => $data]);
  }
}