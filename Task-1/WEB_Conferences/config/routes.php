<?php
// Маршруты
// [маршрут => функция которая будет вызвана]
$routes = [
  // срабатывает при вызове корня или /index.php
  '/' => 'hello',
  // срабатывает при вызове /about или /index.php/about
  '/about' => 'about',
  // динамические страницы
  '/page' => 'page',
];

// возвращает путь запроса
// вырезает index.php из пути
function getRequestPath() {
  $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

  return '/' . ltrim(str_replace('index.php', '', $path), '/');
}

// наш роутер, в который передаются маршруты и запрашиваемый путь
// возвращает функцию если маршшрут совпал с путем
// иначе возвращает функцию notFound
function getMethod(array $routes, $path) {
  // перебор всех маршрутов
  foreach ($routes as $route => $method) {
    // если маршрут сопадает с путем, возвращаем функцию
    if ($path === $route) {
      return $method;
    }
  }

  return 'notFound';
}

// функция для корня
function hello() {
  return 'Hello, world!';
}

// функция для страницы "/about"
function about() {
  return 'About us.';
}

// чуть более сложный пример
// функция отобразит страницу только если
// в запросе приходит id и этот id равен
// 33 или 54
// [/page?id=33]
function page() {

  $pages = [
    33 => 'Сага о хомячках',
    54 => 'Мыши в тумане',
  ];

  if (isset($_GET['id']) && isset($pages[$_GET['id']])) {
    return $pages[$_GET['id']];
  }

  return notFound();
}

// метод, который отдает заголовок и содержание для маршрутов,
// которые не существуют
function notFound() {
  header("HTTP/1.0 404 Not Found");

  return 'Нет такой страницы';
}

// Роутер
// получаем путь запроса
$path = getRequestPath();
// получаем функцию обработчик
$method = getMethod($routes, $path);
// отдаем данные клиенту
echo $method();