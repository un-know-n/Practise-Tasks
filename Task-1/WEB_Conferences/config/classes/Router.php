<?php

namespace Classes;

/**
 * Main router class
 *
 */
class Router {

  //All the valid routes to the site
  public static $validRoutes = array();

  /**
   * Set the route path with callback to handle it
   *
   * @param string $route Route that need to be handled
   * @param object $callback Function to handle the route
   */
  public static function set($route, $callback) {
    self::$validRoutes[] = $route;

    //If the route is right, then execute the callback
    if ($_GET['url'] == $route) {
      $callback->__invoke();
    }
  }
}