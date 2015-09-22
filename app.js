// var map = new ol.Map({
//   target: 'map',
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.MapQuest({layer: 'sat'})
//     })
//   ],
//   view: new ol.View({
//     center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
//     zoom: 4
//   })
// });


new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()})
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  }),
  target: 'map'
});