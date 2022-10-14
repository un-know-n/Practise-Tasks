<?php

namespace Classes;
class Router {

  //All the valid routes to the site
  public static $validRoutes = array();

  public static function set($route, $callback) {
    self::$validRoutes[] = $route;

    if ($_GET['url'] == $route) {
      $callback->__invoke();
    }

    //var_dump(self::$validRoutes);
  }
}