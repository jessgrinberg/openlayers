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
var vectorSource = new ol.source.Vector({
  projection: 'EPSG:4326'
});

var vectorLayer =  new ol.layer.Vector({
          source: vectorSource
      })

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()}), 
    vectorLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([103.835471, 1.303371]),
    zoom: 6
  }),
  target: 'map'
});


// var featurething = new ol.Feature({
//     name: "Gucci",
//     geometry: new ol.geom.Point([1, 2])
// });

// vectorSource.addFeature(featurething );

// var vectorLayer = new ol.layer.Vector({
//   source: vectorSource
// });


function addFeatures() {
  var i, lat, lon, geom, feature, features = [];
    for(i=0; i< 10; i++) {
      lat = 1.303371;
      lon = 103.835471;
      geom = new ol.geom.Circle(
      ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857'), 
        10000
      );
      feature = new ol.Feature(geom);
      features.push(feature);
    }    
  vectorSource.addFeatures(features);
    return features;
}

$('#add').on('click', function(){
  addFeatures();
});



// var gucci = map.setCenter(1.303371,103.835471)

