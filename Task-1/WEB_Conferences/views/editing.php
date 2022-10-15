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
        <a href="/delete?id=<?php echo $_GET['id']; ?>">
          <?php include "components/buttons/delete_button.php";?>
        </a>

        </div>
      </div>

      <form action="/update?id=<?php echo $_GET['id']; ?>" name="edit-form" method="post">
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

        <?php include "components/buttons/submit_button.php";?>
      </form>
    </div>

    <!-- Scripts -->
    <?php include "components/including_scripts.php";?>

    <!-- Google MAP API -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwWs4rcSlTx2sDXryyvsj4z0fwphWt-lU&callback=initMap"></script>

    <script>
      let lat = Number("<?php echo $data['latitude']; ?>");
      let lng = Number("<?php echo $data['longitude']; ?>");
      const isAddress = !!(lat && lng);
      const defaultCoords = {
          lat: 49.0969714297207,
          lng: 30.9151475940165,
        }

      document.getElementById('location').value = `${lat}, ${lng}`;
      // Initialize and add the map
      function initMap() {
        // The location of address
        const address = isAddress ? { lat, lng } : { lat: defaultCoords.lat, lng: defaultCoords.lng};

        // The map, centered at the address
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: address,
          draggableCursor: 'default'
        });

        // The marker, positioned at the address
        const marker = new google.maps.Marker({
          position: address,
          map: isAddress ? map : null,
        });

        function placeMarker(location) {
          if ( marker ) {
            marker.map ? '' : marker.setMap(map);
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

        google.maps.event.addListener(map, 'dblclick', function(event) {
          marker.setMap(null);
          document.getElementById('location').value = 0;
        });
      }

      window.initMap = initMap;
    </script>
  </body>
</html>
