function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [48.8669, 2.3142];
    var latLng_Louvre =[48.8606, 2.3376]
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 14,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>Palais de L'industrie</b>").openPopup();
  
    
    L.marker(latLng_Louvre).addTo(map)
    .bindPopup("<b>Musée du Louvre</b>").openPopup();
  
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setLatLng(e.latlng_Louvre)
      .setContent("You clicked the map at " + e.latlng.toString())
      .setContent("You clicked the map at " + e.latlng_Louvre.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }

