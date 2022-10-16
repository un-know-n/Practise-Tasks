<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include "components/header.php";?>
    <title>Create conference</title>
  </head>
  <body>
    <div class="container mt-2">
      <div class="row">
        <div class="col-10 col-sm-10">
          <h3 class="title-text">Create new conference</h3>
        </div>
        <div class="col-2 col-sm-2 d-flex justify-content-end">
          <a href="/">
            <?php include "components/buttons/back_button.php";?>
          </a>
        </div>
      </div>

      <form action="insert" name="edit-form" method="post">
        <div class="form-group text-truncate">
          <label for="exampleInputEmail1">Name of the conference</label>
          <input
            type="text"
            name="title"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter the name of the conference"
            minlength="2"
            maxlength="255"
            required
          />
        </div>
        <div class="d-flex justify-content-around form-group">
          <div class="date">
            <label for="date" class="d-block font-weight-light">Date</label>
            <input
              type="datetime-local"
              class="form-control"
              placeholder="Date"
              name="date"
              required
            />
          </div>
          <div class="country w-25">
            <label for="country" class="d-block font-weight-light"
              >Country</label
            >
            <select name="country" id="country_select" class="form-control" required>
            <?php foreach ($countries as $key => $value): ?>
              <option value="<?php echo $value['country']; ?>"><?php echo $value['country']; ?></option>
              <?php endforeach;?>
            </select>
          </div>
        </div>
        <div class="form-group">
        <input id="location" name="location" type="hidden" value="" />
          <div class="google-map">
            <div class="someText">
              <h2>Address:</h2>
            </div>
            <div id="map"></div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between">
          <div id="delete-marker">
            <?php include "components/buttons/delete_marker_button.php";?>
          </div>
          <?php include "components/buttons/submit_button.php";?>
        </div>
      </form>

    <!-- Scripts -->
    <?php include "components/default_scripts.php";?>
    <?php include "components/map_api_scripts.php";?>
  </body>
</html>
