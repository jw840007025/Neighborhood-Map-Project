/*Starter code below from Jon Duckett's JavaScript and JQuery (pages 443-445).  It helped me set up the map and my first marker.*/
	
function init () {
	var mapOptions = {
		center:  new google.maps.LatLng(31.267401, 121.522179),
		mapTypeId:  google.maps.MapTypeId.ROADMAP,
		zoom:  13
	};
	var venueMap;
	venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	
	//getting started with locations array info here:  
	//https://www.youtube.com/watch?v=YfL4yDvT_t8
	
	var pinArray = [
		
		{title:  "Starbucks Coffee Nanjing Road", location: {lat: 31.230711, lng: 121.469886}, address: "399 Nanjing W Road, Huangpu Qu, Shanghai" },
		{title:  "Starbucks Coffee Yan'an Road", location:  {lat: 31.232440, lng: 121.487433}, address:  "222 Yan'an E Road, Huangpu Qu, Shanghai"},
		{title:  "Starbucks Coffee Yincheng Middle Road", location:  {lat: 31.236872, lng: 121.504078}, address:  "68 Yincheng Middle Road, Pudong Xinqu, Shanghai"}
			
		];
	
	//the folloowing starter code helped me create multiple markers for my map:  https://stackoverflow.com/questions/15531390/adding-array-of-markers-in-google-map
	var startPosition, i; 
	for (i = 0; i <pinArray.length; i++) {
		startPosition = new google.maps.Marker({
		position: new google.maps.LatLng(pinArray[i].location, pinArray[i].location, pinArray[i].location),
		map:  venueMap
	});
	}
	
	
	
	
	/*see directions for adding a searchbox here:   https://developers.google.com/maps/documentation/javascript/examples/places-searchbox?hl=ja*/
	 // Create the search box and link it to the UI element.
       // var input = document.getElementById('pac-input');
       // var searchBox = new google.maps.places.SearchBox(input);
       // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	
}


function loadScript() {
	var script = document.createElement('script');
	/*use the libraries places paramater to get addresses*/
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAt-Wyy-XTmY64a0sefZBtWoh6MnfMUA9E&libraries=places&callback=init';
	document.body.appendChild(script);
}

window.onload = loadScript;

