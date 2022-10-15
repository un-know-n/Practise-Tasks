<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include "components/header.php";?>

    <title>Conference details</title>
  </head>
  <body>
    <div class="container mt-2">
      <div class="header_block">
        <div class="row align-items-center">
          <div class="col-6 col-sm-9 text-truncate">
            <h2 class="title-text"><?php echo $data['title']; ?></h2>
          </div>
          <div class="col-2 col-sm-1 d-flex justify-content-end">
            <a href="/">
              <button type="button" class="btn btn-outline-primary">
                <i class="bi bi-arrow-left"></i>
              </button>
            </a>
          </div>
          <div class="col-2 col-sm-1 d-flex justify-content-end">
            <a href="/edit?id=<?php echo $data['id']; ?>">
              <button type="button" class="btn btn-outline-warning">
                <i class="bi bi-pencil"></i>
              </button>
            </a>
          </div>
          <div class="col-2 col-sm-1 d-flex justify-content-end">
            <a href="/delete?id=<?php echo $data['id']; ?>">
              <button type="button" class="btn btn-outline-danger">
                <i class="bi bi-trash"></i>
              </button>
            </a>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <div class="date">
              <h2 class="font-weight-light text-muted">Date: <?php echo date_format(date_create($data['date']), 'd/m/Y H:i'); ?></h2>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <div class="country">
              <h2 class="font-weight-light">Country: <?php echo $data['country']; ?></h2>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <div class="google-map">
            <div class="someText">
                <h2>Address:</h2>
            </div>
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <?php include "components/default_scripts.php";?>
    <?php include "components/map_api_scripts.php";?>
  </body>
</html>
