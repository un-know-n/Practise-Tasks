<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include "components/header.php";?>
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
            <?php include "components/buttons/back_button.php";?>
          </a>

        </div>

        <div class="col-2 col-sm-1 d-flex justify-content-end">
        <a href="/delete.php?id=<?php echo $_GET['id']; ?>">
          <?php include "components/buttons/delete_button.php";?>
        </a>

        </div>
      </div>

      <form action="/update.php?id=<?php echo $_GET['id']; ?>" name="edit-form" method="post">
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
          <!-- </div>
        <div class="form-group"> -->
          <div class="country w-25">
            <label for="country" class="d-block font-weight-light"
              >Country</label
            >
            <select name="country" id="country_select" class="form-control" required>
              <option value="Ukraine">Ukraine</option>
              <option value="UK">UK</option>
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

        <?php include "components/buttons/submit_button.php";?>
      </form>
    </div>

    <!-- Scripts -->
    <?php include "components/including_scripts.php";?>

    <!-- Google MAP API -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwWs4rcSlTx2sDXryyvsj4z0fwphWt-lU&callback=initMap"></script>

    <script>
      const lat = Number("<?php echo $data['latitude']; ?>");
      const lng = Number("<?php echo $data['longitude']; ?>");
      document.getElementById('location').value = `${lat}, ${lng}`;
      // Initialize and add the map
      function initMap() {
        if(!lat || !lng || !(lat && lng)) {
          document.querySelector('.google-map').innerHTML = 'The conference has no address';
          return;
        }

        // The location of address
        const address = { lat, lng };

        // The map, centered at the address
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: address,
        });

        // The marker, positioned at the address
        const marker = new google.maps.Marker({
          position: address,
          map: map,
          draggable:true,
        });

        function placeMarker(location) {
        if ( marker ) {
          marker.setPosition(location);
        } else {
          marker = new google.maps.Marker({
            position: location,
            map: map
          });
        }

        document.getElementById('location').value = `${location.lat()}, ${location.lng()}`;
        console.log(document.getElementById('location').value);
        }

        google.maps.event.addListener(map, 'click', function(event) {
          placeMarker(event.latLng);
        });
      }

      window.initMap = initMap;
    </script>
  </body>
</html>