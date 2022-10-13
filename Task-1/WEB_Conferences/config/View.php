<?php

namespace System;

/**
 * Main class that realizes displaying logic
 *
 */
class View {

  /**
   * Responsible for rendering the view
   *
   * @param string $path Path to the view
   * @param array $data Additional data for the view
   * @throws \ErrorException
   */
  public static function render(string $path, array $data = []) {
    //Take the path, where all the views are placed
    $fullPath = __DIR__ . '../views/' . $path . '.php';

    //If there is no view, throw an exception
    if (!file_exists($fullPath)) {
      throw new \ErrorException('View does not exist');
    }

    //Create variables from array, that will be available in view
    if (!empty($data)) {
      foreach ($data as $key => $value) {
        $$key = $value;
      }
    }

    //Display the view
    include $fullPath;

  }
}