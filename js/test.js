$(function(){
	

var data = [
	// MANHATTAN
		[ 
			{
				"id"   : "001",
				"race" : "race1",
				"time" : "5 hours"
			},
			{
				"id"   : "001",
				"race" : "race2",
				"time" : "5 hours"
			},
			{
				"id"   : "001",
				"race" : "race3",
				"time" : "5 hours"
			}
		],
	// BRONX
		[
			{
				"id"   : "001",
				"race" : "4",
				"time" : "5 hours"
			},
			{
				"id"   : "001",
				"race" : "5",
				"time" : "5 hours"
			},
			{
				"id"   : "001",
				"race" : "6",
				"time" : "5 hours"
			}
		]
	]


	// console.log(data[0][1].race)

	function test(array, val){
		for (var i = 0; i < array.length; i++){
				console.log(array[i][val]);
		}
	};

	// test(data[0], "race");
});