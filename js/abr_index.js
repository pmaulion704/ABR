$(function(){

// VARIABLES & DATA
	// 
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
					"race" : "2017 NYRR Midnight Run",
					"time" : "0:31:45",
					"pace" : "07:57",
					"overall" : 259,
					"age-place" : 321,
					"age-percentile": "53.23%"			
				},
				{
					"id"    : "014",
					"race" : "TCS New York City Marathon", 
					"time" : "5:05:23",
					"pace" : "11:39",
					"overall" : 37062,
					"age-place" : 25851,
					"age-percentile": "40.26%"	
				},
				{
					"id"    : "013",
					"race" : "2017 Poland Spring Kickoff (5M)", 
					"time" : "0:39:12",
					"pace" : "07:59",
					"overall" : 609,
					"age-place" : 789,
					"age-percentile": "54.39%"
				},
				{
					"id"    : "012",
					"race" : "2017 Run as One by JP Morgan Chase",
					"time" : "0:49:31",
					"pace" : "12:23",
					"overall" : 7576,
					"age-place" : 4211,
					"age-percentile": "34.13%"	
				},
				{
					"id"    : "011",
					"race" : "2017 UAE Healthy Kidney 10K",
					"time" : "0:50:12",
					"pace" : "08:05",
					"overall" : 2264,
					"age-place" : 2364,
					"age-percentile": "53.23%"
				},
				{
					"id"    : "010",
					"race" : "2017 United Airlines NYC Half",
					"time" : "1:54:02",
					"pace" : "08:42",
					"overall" : 6114,
					"age-place" : 5261,
					"age-percentile": "51.20%"
				},
				{
					"id"    : "009",
					"race" : "2017 NYRR Gridiron 4M",
					"time" : "0:31:53",
					"pace" : "07:59",
					"overall" : 1264,
					"age-place" : 1423,
					"age-percentile": "53.02%"
				},
				{
					"id"    : "008",
					"race" : "2017 NYRR Joe Kleinerman 10K",
					"time" : "0:50:51",
					"pace" : "08:11",
					"overall" : 1270,
					"age-place" : 1451,
					"age-percentile": "52.54%"
				},
				{
					"id"    : "007",
					"race" : "2016 Poland Spring Marathon Kickoff (5M)",
					"time" : "0:40:56",
					"pace" : "08:12",
					"overall" : 1012,
					"age-place" : 1113,
					"age-percentile": "52.09%"
				},
				{
					"id"    : "006",
					"race" : "2016 Percy Sutton Harlem 5K Run",
					"time" : "0:24:26",
					"pace" : "07:52",
					"overall" : 1369,
					"age-place" : 1352,
					"age-percentile": "53.17%" 
				},
				{
					"id"    : "005",
					"race" : "2016 France Run 8K",
					"time" : "0:43:47",
					"pace" : "08:49",
					"overall" : 1548,
					"age-place" : 1437,
					"age-percentile": "48.42%"	 
				},
				{
					"id"   : "004",
					"race" : "2016 Boomer's Cystic Fibrosis Run to Breathe",
					"time" : "0:34:20",
					"pace" : "08:35",
					"overall" : 1553,
					"age-place" : 1501,
					"age-percentile": "49.23%"		 
				},
				{
					"id"    : "003",
					"race" : "2016 Achilles Hope & Possibility (4M)",
					"time" : "0:33:25",
					"pace" : "08:22",
					"overall" : 1379,
					"age-place" : 1437,
					"age-percentile": "50.60%"
				},
				{
					"id"    : "002",
					"race" : "2016 UAE Health Kidney 10K",
					"time" : "0:55:47",
					"pace" : "08:59",
					"overall" : 3041,
					"age-place" : 2692,
					"age-percentile": "47.91%"
				},
				{
					"id"   : "001",
					"race" : "2016 City Parks Foundation Run for the Parks (4M)",
					"time" : "0:34:16",
					"pace" : "08:34",
					"overall" : 2670,
					"age-place" : 2385,
					"age-percentile": "49.33%"
				}	
			],
			// BRONX
			[
				{
					"id"   : "002",
					"race" : "2017 Bronx 10 Mile",
					"time" : "1:24:06",
					"pace" : "08:25",
					"overall" : 3291,
					"age-place" : 3362,
					"age-percentile": "52.23%"
				},
				{
					"id"   : "001",
					"race" : "2016 Bronx 10 Mile",
					"time" : '1:24:10',
					"pace" : "08:25",
					"overall" : 3435,
					"age-place" : 3280,
					"age-percentile": "52.29%"		 
				}
			],
			// NEW BRUNSWICK
			[
				{
					"id"   : "002",
					"race" : "2018 Rutgers UNITED Half Marathon",
					"time" : "1:59:01",
					"pace" : "09:04",
					"overall" : 769,
					"age-place" : 50,
					"age-percentile": "- -"
				},
				{
					"id"   :  "001",
					"race" : "2017 Big Chill 5K",
					"time" : "- -",
					"pace" : "- -",
					"overall" : "- -",
					"age-place" : "- -",
					"age-percentile": "- -"
				}
			],
			// STATEN ISLAND
			[
				{
					"id"   : "001",
					"race" : "2017 NYRR Staten Island Half",
					"time" : "1:53:19",
					"pace" : "08:39",
					"overall" : 2512,
					"age-place" : 2599,
					"age-percentile": "51.53%"
				}
			]
		// End of INDEX
		];	
	
//==============================================================	
//==============================================================
//===================== END OF DATA  ===========================
//==============================================================
//==============================================================


// INTRO
	//Onload  
	$(".zeroOpac").addClass("magictime vanishIn");	
	// exit
	$("#letsGo").click(function(){
		$("#intro").fadeOut(500);
		flyLocation(locations[0]["longitude"], locations[0]["latitude"], locations[0]["zoom"], locations[0]["bearing"]);
	});
	// return
	$("#about").click(function(){
		$("#intro").fadeIn(500);
	});

// INITIAL PRINT
	$("#city").html(locations[0]["city"]);

// INITIAL LOAD DATA
	function loadData(array, item1, item2, item3) {	
		for (var i = 0; i < array.length; i++) {
			$("#data").append(
				'<tr id="' + array[i][item1] + '" class="pointer"><td class="w-70 bb b--black-10 tl supa-lineheight pv4">' + array[i][item2] + 
				'</td><td class="w-30 bb b--black-10 tr pv4">' + array[i][item3] + '</td></tr>');
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
			$(".sub-section").hide();

		} else {
			myIndex = 0;
			$("#city").html(locations[0]["city"]);
			flyLocation(locations[0]["longitude"], locations[0]["latitude"], locations[0]["zoom"], locations[0]["bearing"]);
			$("tr").remove();
			loadData(data[0], "id", "race", "time");
			$(".sub-section").hide();
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
			$(".sub-section").hide();

		} else {
			myIndex = 3;
			$("#city").html(locations[3]["city"]);
			flyLocation(locations[3]["longitude"], locations[3]["latitude"], locations[3]["zoom"], locations[3]["bearing"]);
			$("tr").remove();
			loadData(data[3], "id", "race", "time");
			$(".sub-section").hide();

		};
	});	

	// <ID MATCH (SUB-SECTION)>
	$("tbody").on("click", "tr", function(){
		for (var i = 0; i < data[myIndex].length; i++) {
			if (this.id === data[myIndex][i]["id"]) {
				$(".sub-section").fadeIn(250);
				$("#raceVal").html(data[myIndex][i]["race"]);	
				$("#finishVal").html(data[myIndex][i]["time"]);	
				$("#paceVal").html(data[myIndex][i]["pace"]);	
				$("#overallVal").html(data[myIndex][i]["overall"]);	
				$("#gplaceVal").html(data[myIndex][i]["age-place"]);	
				$("#gpercentVal").html(data[myIndex][i]["age-percentile"]);	
			};
		};
	});

	// KEYBOARD SHORTCUTS
	$(document).keydown(function(e) {
        if (e.which === 37) {
        	$('#left-arrow').trigger('click');
        } else if (e.which === 39 || e.which === 32) {
        	$('#right-arrow').trigger('click');
        };
    });

    // CLOSE
	$("#close").click(function(){
		$(".sub-section").hide();
	});
	$(".main-overlay").click(function(){
		$(".sub-section").hide();
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
	    zoom: 11.45, // starting zoom
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