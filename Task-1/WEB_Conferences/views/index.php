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
          <div class="col-6"><h2 class="title-text">All the conferences</h2></div>
          <div class="col-6 d-flex justify-content-end">
          <a href="create">
            <button type="button" class="btn btn-outline-success">
              New conference
            </button>
          </a>
          </div>
        </div>
      </div>
      <div class="main_block">
        <?php foreach ($data as $key => $item): ?>
        <div class="row align-items-center alert border border-secondary mb-2 position-relative">
          <div class="col-5 text-truncate h-100">
            <a href="select?id=<?php echo $item['id']; ?>" class="text-dark text-decoration-none stretched-link "
              ><?php echo $item['title']; ?></a
            >
          </div>
          <div class="col-5">
            <h6 class="mb-0"><?php echo $item['date']; ?></h6>
          </div>
          <div class="col-2 d-flex justify-content-end">
            <a href="/delete?id=<?php echo $item['id']; ?>">
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
