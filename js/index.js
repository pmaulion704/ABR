$(function (){

// VARIABLES & DATA
	var raceLocations = {
		cities: ["MANHATTAN, NY", "BRONX, NY", "NEW BRUNSWICK, NJ", "STATEN ISLAND, NY"],
		longitude: [-73.972867, -73.922700, -74.454239, -74.081899],
		latitude: [40.793973, 40.83111, 40.501516, 40.644335],
		zoom: [13.45, 15.90, 15.52, 14.5],
		bearing: [65.00, 65, 0, 25.00]
	};
	
	var data = [
		// MANHATTAN
		[
			{
			"id"   : "015",
			"race" : "2017 NYRR Midnight Run",
			"time" : "0:31:45"
			},
			{
			"id"   : "014",
			"race" : "TCS New York City Marathon", 
			"time" : "5:05:23"
			},
			{
			"id"   : "013",
			"race" : "2017 Poland Spring Kickoff (5M)", 
			"time" : "0:39:12"
			},
			{
			"id"   : "012",
			"race" : "2017 Run as One by JP Morgan Chase",
			"time" : "0:49:31"
			},
			{
			"id"   : "011",
			"race" : "2017 UAE Healthy Kidney 10K",
			"time" : "0:50:12"
			},
			{
			"id"   : "010",
			"race" : "2017 United Airlines NYC Half",
			"time" : "1:54:02"
			},
			{
			"id"   : "009",
			"race" : "2017 NYRR Gridiron 4M",
			"time" : "0:31:53"
			},
			{
			"id"   : "008",
			"race" : "2017 NYRR Joe Kleinerman 10K",
			"time" : "0:50:51"
			},
			{
			"id"   : "007",
			"race" : "2016 Poland Spring Marathon Kickoff (5M)",
			"time" : "0:40:56"
			},
						{
			"id"   : "006",
			"race" : "2016 Percy Sutton Harlem 5K Run",
			"time" : "0:24:26"
			},
			{
			"id"   : "005",
			"race" : "2016 France Run 8K",
			"time" : "0:43:47"
			},
			{
			"id"   : "004",
			"race" : "2016 Boomer's Cystic Fibrosis Run to Breathe",
			"time" : "0:34:20",
			},
						{
			"id"   : "003",
			"race" : "2016 Achilles Hope & Possibility (4M)",
			"time" : "0:33:25",
			},
			{
			"id"   : "002",
			"race" : "2016 UAE Health Kidney 10K",
			"time" : "0:55:47",
			},
			{
			"id"   : "001",
			"race" : "2016 City Parks Foundation Run for the Parks (4M)",
			"time" : "0:34:16"
			}	
		],
		// BRONX
		[
			{
			"id"   : "002",
			"race" : "2017 Bronx 10 Mile",
			"time" : '1:24:06' 
			},
			{
			"id"   : "001",
			"race" : "2016 Bronx 10 Mile",
			"time" : '1:24:10'
			}
		],
		// NEW BRUNSWICK
		[
			{
			"id"   : "002",
			"race" : "2018 Rutgers UNITED Half Marathon",
			"time" : "1:58:20"
			},
			{
			"id"   : "001",
			"race" : "2017 Big Chill 5K",
			"time" : "- -"
			}
		],
		// STATEN ISLAND
		[
			{
			"id"   : "001",
			"race" : "2017 NYRR Staten Island Half",
			"time" : "1:53:19"
			}
		]
		// End of INDEX
	];	
	
// INITIAL PRINT
	$("#city").html(raceLocations.cities[0]);

// INITIAL LOAD DATA
	function loadData(array, item1, item2, item3) {	
		for (var i = 0; i < array.length; i++) {
			$("#data").append('<tr id="' + array[i][item1] + '"><td class="w-70 bb b--black-20 tl supa-lineheight pv4">'+ array[i][item2] + '</td><td class="w-30 bb b--black-20 tr pv4">'+ array[i][item3] +'</td></tr>');
		};
	};
	loadData(data[0], "id", "race", "time");	

// FUNCTIONS
	// FLY TO FUNCTION
	function flyLocation(longitude, latitude, zVal, bVal){
		 map.flyTo({
		 	center: [
		 		longitude,
		 		latitude
		 		],
		 	zoom: zVal,
		 	bearing: bVal,
		 	pitch: 24,
		 	curve: 1
		 });
	};

// INTERACTIONS 
	var myIndex = 0;
	// RIGHT
	$("#right-arrow").click(function(){
		if (myIndex != 3) {
			myIndex++;
			$("#city").html(raceLocations.cities[myIndex]);
			flyLocation(raceLocations.longitude[myIndex], raceLocations.latitude[myIndex], raceLocations.zoom[myIndex], raceLocations.bearing[myIndex]);
			$("tr").remove();
			loadData(data[myIndex], "id", "race", "time");
		} else {
			myIndex = 0;
			$("#city").html(raceLocations.cities[0]);
			flyLocation(raceLocations.longitude[0], raceLocations.latitude[0], raceLocations.zoom[0], raceLocations.bearing[0]);
			$("tr").remove();
			loadData(data[0], "id", "race", "time");
		};
	});

	// LEFT
	$("#left-arrow").click(function(){
		if (myIndex != 0) {
			myIndex--;
			$("#city").html(raceLocations.cities[myIndex]);
			flyLocation(raceLocations.longitude[myIndex], raceLocations.latitude[myIndex], raceLocations.zoom[myIndex], raceLocations.bearing[myIndex]);
			$("tr").remove();
			loadData(data[myIndex], "id", "race", "time");

		} else {
			myIndex = 3;
			$("#city").html(raceLocations.cities[3]);
			flyLocation(raceLocations.longitude[3], raceLocations.latitude[3], raceLocations.zoom[3], raceLocations.bearing[3]);
			$("tr").remove();
			loadData(data[3], "id", "race", "time");
		};
	});	

	// KEYBOARD SHORTCUTS
	$(document).keydown(function(e) {
        if (e.which === 37) {
        	$('#left-arrow').trigger('click');
        } else if (e.which === 39) {
        	$('#right-arrow').trigger('click');
        };
    });   	

// MAPBOX 
	$('.map').fadeIn(1000);

	mapboxgl.accessToken = 'pk.eyJ1IjoicG1hdWxpb24iLCJhIjoiY2lza2c3dWhvMDRsbzJ6b2N4cnYwMG1jcyJ9.U3O1wyf6PiCUUPr3Ebr06g';
	
	// Adding Starting Coordinates
	var map = new mapboxgl.Map({
	    container: 'map', // container id
	    style: 'mapbox://styles/pmaulion/cjg89piec0er12snkswpvaw49', // stylesheet location
	    center: [-73.972867, 40.793973], // starting position [lng, lat]
	    zoom: 13.45, // starting zoom
	    bearing: 65.00,
	    pitch: 24.00,
	    
	});

	var geojson = {
		type: 'FeatureCollection',
	  	features: [
	  		{
	    	  type: 'Feature',
	    	  geometry: {
	      	    type: 'Point',
	      		coordinates: [
	      			-73.966549, 
	      			40.781329
	      			]
	    	    },
	    	  properties: {
	    	  	title: 'Mapbox',
	      		description: 'Manhattan NYC'
	    	    }	     
	  		},
	  		{
	    	  type: 'Feature',
	    	  geometry: {
	      		type: 'Point',
	      		coordinates: [
	      			-74.450410, 
	      			40.501769
	      			]
	    		},
	    	  properties: {
	      		title: 'Mapbox',
	      		description: 'New Brunswick, NJ'
	    		}
	  	    },
	  	    {
	  	      type: 'Feature',
	  	      geometry: {
	  	      	type: 'Point',
	  	      	coordinates: [
	  	      		-73.921157,
	  	      		40.829634
	  	      		]
	  	      	
	  	      	},
	  	      properties: {
	  	      	title: 'Mapbox',
	  	      	description: 'Bronx NYC'
	  	      }
	  	    },
	  	    {
	  	      type: 'Feature',
	  	      geometry: {
	  	      	type: 'Point',
	  	      	coordinates: [
	  	      		-74.075223,
	  	      		40.642297
	  	      		]
	  	      	
	  	      	},
	  	      properties: {
	  	      	title: 'Mapbox',
	  	      	description: 'Staten Island'
	  	      }
	  	    }
	  	//Features Index end 
	  	]
	// GEOjson end
	};

	geojson.features.forEach(function(marker) {
		// create a HTML element for each feature
		var el = document.createElement('div');
		el.className = 'marker';

	    // make a marker for each feature and add to the map
	    new mapboxgl.Marker(el)
	    .setLngLat(marker.geometry.coordinates)
	    .addTo(map);
	});

// End of index.js
});