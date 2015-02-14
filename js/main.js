
L.mapbox.accessToken = 'pk.eyJ1IjoidG9sb21hcHMiLCJhIjoiREpQUkpiTSJ9.g4b1dVMvmEB78zMOSgiHIA';
var map = L.mapbox.map('basemap', 'tolomaps.l7c39gjh');
var ohioImporters = L.mapbox.featureLayer('/data/ohio_testData.geojson')
    .addTo(map);

//trying to do this with leaflet
//var ohioImporters = L.geojson('/data/ohio_testData.geojson', [
//    pointToLayer: function(feature, latlng) {
//        return L.marker(latlng);
//    }
//]);
//map.addLayer(ohioImporters);

    map.on('ready', function() {
        console.log(ohioImporters);
//        console.log(ohioImporters.getGeoJSON().features);
//        var features = map.ohioImporters.getGeoJSON().features;
        
//        L.geoJson(ohioImporters, {
//            style: function(feature) {
//                switch ()
//            }
//        }).addTo(map);
        
        var icons = L.marker([39.9833, -82.9833], {
                icon: L.divIcon({
                // Specify a class name we can refer to in CSS.
                className: 'icon',
                // Define what HTML goes in each marker.
                html: "OHIO",
                // Set a markers width and height.
                iconSize: [50, 40]
            })
        }).addTo(map);
    });

