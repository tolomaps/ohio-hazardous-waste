//Creating a map with mapbox.js and TurfJS
//Aim of the project is to mess around with TurfJS 
//The prompt was taken from http://lyzidiamond.com/turf-exercise/
//I elected to do #3: For any state: Create a map showing only the counties that have more than 100,000 residents.
//Naturally, I chose my home state of Georgia. It has the second-most number of counties in the U.S., after Texas.
    L.mapbox.accessToken = 'pk.eyJ1IjoidG9sb21hcHMiLCJhIjoiREpQUkpiTSJ9.g4b1dVMvmEB78zMOSgiHIA';
    var map = L.mapbox.map('basemap', 'tolomaps.l7c39gjh');
    var countiesLayer = L.mapbox.featureLayer()
        .loadURL('/data/major_dataset_imports_waste_receiver_locations.geojson')
        .addTo(map);