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
            <h2><?php echo $data['title']; ?></h2>
          </div>
          <div class="col-2 col-sm-1 d-flex justify-content-end">
            <a href="/">
              <?php include "components/buttons/back_button.php";?>
            </a>
          </div>
          <div class="col-2 col-sm-1 d-flex justify-content-end">
            <a href="/select_edit.php?id=<?php echo $data['id']; ?>">
              <?php include "components/buttons/edit_button.php";?>
            </a>
          </div>
          <div class="col-2 col-sm-1 d-flex justify-content-end">
            <a href="/delete.php?id=<?php echo $data['id']; ?>">
              <?php include "components/buttons/delete_button.php";?>
            </a>

          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="date">
              <h2 class="font-weight-light text-muted">Date: <?php echo $data['date']; ?></h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="country">
              <h2 class="font-weight-light">Country: <?php echo $data['country']; ?></h2>
            </div>
          </div>
        </div>
        <div class="row">
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
    <?php include "components/including_scripts.php";?>

    <!-- Google MAP API -->
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwWs4rcSlTx2sDXryyvsj4z0fwphWt-lU&callback=initMap"></script>

    <script>
      const lat = Number("<?php echo $data['latitude']; ?>");
      const lng = Number("<?php echo $data['longitude']; ?>");
      // Initialize and add the map
      function initMap() {
        if(!lat || !lng || !(lat && lng)) {
          document.querySelector('.google-map').innerHTML = 'The conference has no address';
          //const googleMapBlock =
          // const addressTextBlock = document.createElement('div');
          // addressTextBlock.innerText = ;
          // googleMapBlock.append(addressTextBlock);
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
          // draggable:true,
          // title:"Drag me!"
        });
      }

      window.initMap = initMap;
    </script>
  </body>
</html>
