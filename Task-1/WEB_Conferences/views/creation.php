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

      <form action="../insert.php" name="edit-form" method="post">
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
              <h2>Address:</h2>
            </div>
            <div id="map"></div>
          </div>
        </div>

        <?php include "components/buttons/submit_button.php";?>
      </form>

    <!-- Scripts -->
    <?php include "components/including_scripts.php";?>

    <!-- Google MAP API -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwWs4rcSlTx2sDXryyvsj4z0fwphWt-lU&callback=initMap"></script>

    <script>
      //Default marker place
      const lat = 50.49252150883128;
      const lng = 30.518091310932736;
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
          zoom: 10,
          center: address,
          draggableCursor: 'default'
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
