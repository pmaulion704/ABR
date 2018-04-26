$(function (){

// VARIABLES & DATA
	var raceLocations = {
		cities: ["MANHATTAN, NY", "BRONX, NY", "NEW BRUNSWICK, NJ", "STATEN ISLAND, NY"],
		longitude: [-73.945, -73.917999, -74.447673, -74.081702],
		latitude: [40.784, 40.8300, 40.506939, 40.650426],
		zoom: [13.57, 15.64, 15.26, 13.97],
		bearing: [-7.00, -8.66, -69, -108.00]
	};
	
	var data = [
		manhattan = {
			race: ["2017 NYRR Midnight Run", 
				   "TCS New York City Marathon", 
				   "2017 Poland Spring Kickoff (5M)", 
				   "2017 Run as One by JP Morgan Chase",
				   "2017 UAE Healthy Kidney 10K",
				   "2017 United Airlines NYC Half",
				   "2017 NYRR Gridiron 4M",
				   "2017 NYRR Joe Kleinerman 10K",
				   "2016 Poland Spring Marathon Kickoff (5M)",
				   "2016 Percy Sutton Harlem 5K Run",
				   "2016 France Run 8K",
				   "2016 Boomer's Cystic Fibrosis Run to Breathe",
				   "2016 Achilles Hope & Possibility (4M)",
				   "2016 UAE Health Kidney 10K",
				   "2016 City Parks Foundation Run for the Parks (4M)"
				],
			time: ["0:31:45", 
				   "5:05:23", 
				   "0:39:12",
				   "0:49:31",
				   "0:50:12",
				   "1:54:02",
				   "0:31:53",
				   "0:50:51",
				   "0:40:56",
				   "0:24:26",
				   "0:43:47",
				   "0:34:20",
				   "0:33:25",
				   "0:55:47",
				   "0:34:16"
				]
		},
		bronx = {
			race: ["2017 Bronx 10 Mile", "2016 Bronx 10 Mile"],
			time: ['1:24:06', '1:24:10']
		},
		new_brunswick = {
			race: ["2018 Rutgers UNITED Half Marathon", "2017 Big Chill 5K"],
			time: ["1:58:20", "- -"]
		},
		staten_island = {
			race: ["2017 NYRR Staten Island Half"],
			time: ['1:53:19']
		}
		
	];	
	
// INITIAL PRINT
	$("#city").html(raceLocations.cities[0]);

// INITIAL LOAD DATA
	function loadData(raceArray, timeArray) {	
		var i;
		for (i = 0; i < raceArray.length; i++) {
			$("#data").append('<tr><td class="w-70 bb b--black-20 tl supa-lineheight pv4">'+ raceArray[i] + '</td><td class="w-30 bb b--black-20 tr pv4">'+ timeArray[i] +'</td></tr>');
		};
	};
	loadData(data[0].race, data[0].time);	

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
		 	pitch: 24
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
			loadData(data[myIndex].race, data[myIndex].time);
		} else {
			myIndex = 0;
			$("#city").html(raceLocations.cities[0]);
			flyLocation(raceLocations.longitude[0], raceLocations.latitude[0], raceLocations.zoom[0], raceLocations.bearing[0]);
			$("tr").remove();
			loadData(data[0].race, data[0].time);
		};
	});

	// LEFT
	$("#left-arrow").click(function(){
		if (myIndex != 0) {
			myIndex--;
			$("#city").html(raceLocations.cities[myIndex]);
			flyLocation(raceLocations.longitude[myIndex], raceLocations.latitude[myIndex], raceLocations.zoom[myIndex], raceLocations.bearing[myIndex]);
			$("tr").remove();
			loadData(data[myIndex].race, data[myIndex].time);

		} else {
			myIndex = 3;
			$("#city").html(raceLocations.cities[3]);
			flyLocation(raceLocations.longitude[3], raceLocations.latitude[3], raceLocations.zoom[3], raceLocations.bearing[3]);
			$("tr").remove();
			loadData(data[3].race, data[3].time);
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
	    center: [-73.945, 40.784], // starting position [lng, lat]
	    zoom: 13.57, // starting zoom
	    bearing: -7.00,
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