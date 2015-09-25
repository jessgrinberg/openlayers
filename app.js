console.log("map display working")
// var map = new ol.Map({
//   target: 'map',
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.MapQuest({layer: 'sat'})
//     })
//   ],
//   view: new ol.View({
//     center: ol.proj.transform([1.303371, 103.835471], 'EPSG:4326', 'EPSG:3857'),
//     zoom: 4
//   })
// });


var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()})
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([103.835471, 1.303371]),
    zoom: 5
  }),
  target: 'map'
});

 

// var gucci = map.setCenter(1.303371,103.835471)

// function CenterMap(long, lat) {
//     console.log("Long: " + lng + " Lat: " + lat);
//     map.getView().setCenter(ol.proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857'));
//     map.getView().setZoom(5);
// }



// var markers = new ol.Layer.Markers( "Markers" );
// map.addLayer(markers);

// var size = new OpenLayers.Size(21,25);
// var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
// var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);
// markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(0,0),icon));
// markers.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(0,0),icon.clone()));