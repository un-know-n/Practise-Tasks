<?php

namespace Classes;

/**
 * Main app class
 *
 */
class App {

  /**
   * Run the app
   *
   * @throws \ErrorException;
   */
  public static function run() {
    //Take request URL
    $path = $_SERVER['REQUEST_URI'];

    //Slice URL into pieces
    $pathParts = explode('/', $path);

    var_dump($pathParts);

    //Take controller name
    $controller = $pathParts[1];

    //Take action name
    $action = $pathParts[2];

    //Create namespace for controller's names
    $controller = 'Controllers\\' . $controller . 'Controller';

    //Create name for the action
    $action = 'action' . ucfirst($action);

    //If the class does not exist, throw an exception
    if (!class_exists($controller)) {
      throw new \ErrorException('Controller does not exist');
    }

    //Create instance of controller class
    $instController = new $controller;

    //If controller has no action, throw an exception
    if (!method_exists($instController, $action)) {
      throw new \ErrorException('Action method does not exist');
    }

    //Call the action
    $instController->$action();

  }
}