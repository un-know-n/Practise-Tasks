<!DOCTYPE html>
<html lang="en">
  <head>
  <?php include "components/header.php";?>

    <title>All conferences</title>
  </head>
  <body>
    <div class="container mt-2">
      <div class="header_block">
        <div class="row align-items-center">
          <div class="col-6"><h2>All the conferences</h2></div>
          <div class="col-6 d-flex justify-content-end">
          <a href="/views/creation.php">
            <button type="button" class="btn btn-outline-success">
              New conference
            </button>
          </a>
          </div>
        </div>
      </div>
      <hr class="mt-0" />
      <div class="main_block">
        <?php foreach ($data as $key => $item): ?>
        <div class="row align-items-center alert border border-secondary mb-2 position-relative">
          <div class="col-6 text-truncate h-100">
            <a href="/select.php?id=<?php echo $item['id']; ?>" class="text-dark text-decoration-none stretched-link "
              ><?php echo $item['title']; ?></a
            >
          </div>
          <div class="col-4">
            <h6 class="mb-0"><?php echo $item['date']; ?></h6>
          </div>
          <div class="col-2 d-flex justify-content-end">
            <a href="/delete.php?id=<?php echo $item['id']; ?>">
            <?php include "components/buttons/delete_button.php";?>
            </a>

          </div>
        </div>
        <?php endforeach;?>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <?php include "components/including_scripts.php";?>
  </body>
</html>
