<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include "components/header.php";?>
    <style>
      <?php include "assets/css/styles.css";?>
    </style>
    <title>Edit conference</title>
  </head>
  <body>
    <div class="container mt-2">
      <div class="row">
        <div class="col-8 col-sm-10">
          <h3 class="title-text">Editing of the selected conference</h3>
        </div>
        <div class="col-2 col-sm-1 d-flex justify-content-end">
          <a href="javascript:history.go(-1)">
            <button type="button" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left"></i>
            </button>
          </a>

        </div>

        <div class="col-2 col-sm-1 d-flex justify-content-end">
        <a href="/delete?id=<?php echo $_GET['id']; ?>">
          <button type="button" class="btn btn-outline-danger">
            <i class="bi bi-trash"></i>
          </button>
        </a>

        </div>
      </div>

      <form action="/update?id=<?php echo $_GET['id']; ?>" name="edit-form" method="post" class="mt-3">
        <div class="form-group text-truncate">
          <label for="exampleInputEmail1">Name of the conference</label>
          <input
            type="text"
            name="title"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter the name of the conference"
            value="<?php echo $data['title']; ?>"
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
              name="date"
              class="form-control"
              value="<?php echo $data['date']; ?>"
              placeholder="Date"
              required
            />
          </div>
          <div class="country w-25">
            <label for="country" class="d-block font-weight-light"
              >Country</label
            >
            <select name="country" id="country_select" class="form-control" required>
              <?php foreach ($countries as $key => $value): ?>
              <option value="<?php echo $value['country']; ?>"
              <?php if ($value['country'] === $data['country']): ?>
                selected
                <?php endif;?>
              ><?php echo $value['country']; ?></option>
              <?php endforeach;?>
            </select>
          </div>
        </div>
        <div class="form-group">
        <input id="location" name="location" type="hidden" value="" />
          <div class="google-map">
            <div class="someText">
              <h2>Address: </h2>
            </div>
            <div id="map"></div>
          </div>
        </div>

        <div class="form-group d-flex justify-content-between">
          <div id="delete-marker">
            <button type="button" class="btn btn-lg btn-outline-danger">
              Delete marker
              <i class="bi bi-x"></i>
            </button>
          </div>
          <button
            type="submit"
            class="btn btn-lg btn-outline-success"
          >
            Finish
            <i class="bi bi-check2-all"></i>
          </button>
        </div>
      </form>
    </div>

    <!-- Scripts -->
    <?php include "components/default_scripts.php";?>
    <script>
      let lat = Number("<?php echo $data['latitude']; ?>");
      let lng = Number("<?php echo $data['longitude']; ?>");
      <?php include "assets/js/map.js";?>
    </script>
    <?php include "components/map_api_scripts.php";?>

  </body>
</html>
