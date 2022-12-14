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

  /**
   * Check if the current route is valid. Check the route
   * against the global $validRoutes array.
   */
  public static function isRouteValid() {
    $uri = $_GET['url'];

    if (!in_array(explode('?', $uri)[0], self::$validRoutes)) {
      header("Location: /error");
      return 0;
    } else {
      return 1;
    }
  }
}