//Take the coordinates
let lat = Number(document.currentScript.getAttribute('lat'));
let lng = Number(document.currentScript.getAttribute('lng'));

//If no coordinates, use default address
const isAddress = !!(lat && lng);
const defaultCoords = {
  lat: 49.0969714297207,
  lng: 30.9151475940165,
};

//Define the final address of the map
const finalAddress = isAddress
  ? { lat, lng }
  : { lat: defaultCoords.lat, lng: defaultCoords.lng };

//Find the hidden input
const hiddenInput = document.getElementById('location');

// Initialize and add the map
function initMap() {
  //If there is no address in conference, display it on 'select' page
  if (window.location.pathname === '/select') {
    if (!isAddress) {
      document.querySelector(
        '.google-map',
      ).innerHTML = `<div class="row align-items-center d-flex flex-column">
        <i class="bi bi-geo-alt" style="font-size: 124px;"></i>
        <h3 class="font-weight-light text-monospace text-muted text-center">The conference has no address</h3>
      </div>`;
      return;
    }
  }

  // The location of address
  const address = finalAddress;

  // The map, centered at the address
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: address,
    draggableCursor: 'default',
  });

  // The marker, positioned at the address
  const marker = new google.maps.Marker({
    position: address,
    map: isAddress ? map : null,
  });

  /**
   * Responsible for setting new coordinates to the marker
   *
   * @param {Object} location Location of marker
   */
  function placeMarker(location) {
    if (marker) {
      marker.map ? '' : marker.setMap(map);
      marker.setPosition(location);
    } else {
      marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    }

    //Push the values to the hidden input, if there is one
    hiddenInput.value = `${location.lat()}, ${location.lng()}`;
  }

  //If we are editing or creating a conference, let marker be moveable
  if (
    window.location.pathname === '/create' ||
    window.location.pathname === '/edit'
  ) {
    //Change place, when click on map
    google.maps.event.addListener(map, 'click', function (event) {
      placeMarker(event.latLng);
    });

    //Delete marker, when click on button
    document.getElementById('delete-marker').addEventListener('click', () => {
      marker.setMap(null);
      document.getElementById('location').value = 0;
    });
  }
}

//Push function to window object
window.initMap = initMap;
