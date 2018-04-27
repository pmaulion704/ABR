$(function (){

// VARIABLES & DATA
	var locations = [
		{
			"city" 		: "MANHATTAN, NY",
			"longitude" : -73.972867,
			"latitude"  : 40.793973,
			"zoom"		: 13.45,
			"bearing"	: 65.00

		},
		{
			"city" 		: "BRONX, NY",
			"longitude" : -73.922746,
			"latitude"  : 40.832118,
			"zoom"		: 15.90,
			"bearing"	: 65.00
		},
		{
			"city" 		: "NEW BRUNSWICK, NJ",
			"longitude" : -74.454239,
			"latitude"  : 40.501516,
			"zoom"		: 15.52,
			"bearing"	: 0
		},
		{
			"city" 		: "STATEN ISLAND, NY",
			"longitude" : -74.081899,
			"latitude"  : 40.644335,
			"zoom"		: 14.50,
			"bearing"	: 25.00
		}
	]
	
	var data = [
		// MANHATTAN
			[
				{
				"id"    : "015",
				"pace" : "8:55",
				"overall" : 1,
				"race" : "2017 NYRR Midnight Run",
				"time" : "0:31:45"
				},
				{
				"id"    : "014",
				"pace" : "7:54",
				"overall" : 12,
				"race" : "TCS New York City Marathon", 
				"time" : "5:05:23"
				},
				{
				"id"    : "013",
				"pace" : "6:53",
				"overall" : 123,
				"race" : "2017 Poland Spring Kickoff (5M)", 
				"time" : "0:39:12"
				},
				{
				"id"    : "012",
				"pace" : "5:52",
				"overall" : 1234,
				"race" : "2017 Run as One by JP Morgan Chase",
				"time" : "0:49:31"
				},
				{
				"id"    : "011",
				"pace" : "zzzzzzz",
				"overall" : "yyyyyyy",
				"race" : "2017 UAE Healthy Kidney 10K",
				"time" : "0:50:12"
				},
				{
				"id"    : "010",
				"pace" : "aaaaaa",
				"overall" : "bbbbbbbbb",
				"race" : "2017 United Airlines NYC Half",
				"time" : "1:54:02"
				},
				{
				"id"    : "009",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2017 NYRR Gridiron 4M",
				"time" : "0:31:53"
				},
				{
				"id"    : "008",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2017 NYRR Joe Kleinerman 10K",
				"time" : "0:50:51"
				},
				{
				"id"    : "007",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2016 Poland Spring Marathon Kickoff (5M)",
				"time" : "0:40:56"
				},
				{
				"id"    : "006",
				"pace" : "8:55",
				"overall" : 123, 
				"race" : "2016 Percy Sutton Harlem 5K Run",
				"time" : "0:24:26"
				},
				{
				"id"    : "005",
				"pace" : "8:55",
				"overall" : 123,	 
				"race" : "2016 France Run 8K",
				"time" : "0:43:47"
				},
				{
				"id"   : "004",
				"pace" : "8:55",
				"overall" : 123,		 
				"race" : "2016 Boomer's Cystic Fibrosis Run to Breathe",
				"time" : "0:34:20",
				},
				{
				"id"    : "003",
				"pace" : "8:55",
				"overall" : 123, 
				"race" : "2016 Achilles Hope & Possibility (4M)",
				"time" : "0:33:25",
				},
				{
				"id"    : "002",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2016 UAE Health Kidney 10K",
				"time" : "0:55:47",
				},
				{
				"id"   : "001",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2016 City Parks Foundation Run for the Parks (4M)",
				"time" : "0:34:16"
				}	
			],
			// BRONX
			[
				{
				"id"   : "002",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2017 Bronx 10 Mile",
				"time" : '1:24:06' 
				},
				{
				"id"   : "001",
				"pace" : "8:55",
				"overall" : 123,		 
				"race" : "2016 Bronx 10 Mile",
				"time" : '1:24:10'
				}
			],
			// NEW BRUNSWICK
			[
				{
				"id"   : "002",
				"pace" : "8:5523232",
				"overall" : 1231232,
				"race" : "2018 Rutgers UNITED Half Marathon",
				"time" : "1:58:20"
				},
				{
				"id"   :  "001",
				"pace" : "0.00000",
				"overall" : 987236236,
				"race" : "2017 Big Chill 5K",
				"time" : "- -"
				}
			],
			// STATEN ISLAND
			[
				{
				"id"   : "001",
				"pace" : "8:55",
				"overall" : 123,
				"race" : "2017 NYRR Staten Island Half",
				"time" : "1:53:19"
				}
			]
		// End of INDEX
		];	
	
//==============================================================	
//==============================================================
//===================== END OF DATA  ===========================
//==============================================================
//==============================================================


// INITIAL PRINT
	$("#city").html(locations[0]["city"]);

// INITIAL LOAD DATA
	function loadData(array, item1, item2, item3) {	
		for (var i = 0; i < array.length; i++) {
			$("#data").append(
				'<tr id="' + array[i][item1] + '" class="pointer"><td class="w-70 bb b--black-20 tl supa-lineheight pv4">' + array[i][item2] + 
				'</td><td class="w-30 bb b--black-20 tr pv4">' + array[i][item3] + '</td></tr>');
		};
	};
	loadData(data[0], "id", "race", "time");	

// FUNCTIONS
	var myIndex = 0;
	// RIGHT
	$("#right-arrow").click(function(){
		if (myIndex != 3) {
			myIndex++;
			$("#city").html(locations[myIndex]["city"]);
			flyLocation(locations[myIndex]["longitude"], locations[myIndex]["latitude"], locations[myIndex]["zoom"], locations[myIndex]["bearing"]);
			$("tr").remove();
			loadData(data[myIndex], "id", "race", "time");

		} else {
			myIndex = 0;
			$("#city").html(locations[0]["city"]);
			flyLocation(locations[0]["longitude"], locations[0]["latitude"], locations[0]["zoom"], locations[0]["bearing"]);
			$("tr").remove();
			loadData(data[0], "id", "race", "time");
		};
	});

	// LEFT
	$("#left-arrow").click(function(){
		if (myIndex != 0) {
			myIndex--;
			$("#city").html(locations[myIndex]["city"]);
			flyLocation(locations[myIndex]["longitude"], locations[myIndex]["latitude"], locations[myIndex]["zoom"], locations[myIndex]["bearing"]);
			$("tr").remove();
			loadData(data[myIndex], "id", "race", "time");

		} else {
			myIndex = 3;
			$("#city").html(locations[3]["city"]);
			flyLocation(locations[3]["longitude"], locations[3]["latitude"], locations[3]["zoom"], locations[3]["bearing"]);
			$("tr").remove();
			loadData(data[3], "id", "race", "time");
		};
	});	

	// <ID MATCH CLICK>
	$("tbody").on("click", "tr", function(){
		for (var i = 0; i < data[myIndex].length; i++) {
			if (this.id === data[myIndex][i]["id"]) {
				console.log(data[myIndex][i]["pace"]);
				console.log(data[myIndex][i]["overall"]);
			};
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