// Script.js... Made by - aptr13
// containing View(Marker) and ViewModel
// based on the javascript framework "knockout.js".

// View named as Marker which is created for every predefined location in model.
var Marker = function (data, gmap){
	var self = this;

	this.title = ko.observable(data.title);
	this.location = ko.observable(data.location);

	// Creating window for info of every marker.
	this.infowindow = new google.maps.InfoWindow({
    	content: '<div id="content" class="text-center">'+
		            '<h4 id="firstHeading" class="firstHeading">'+data.title+
		            '</h4><div id="bodyContent"><p>'+data.description+'</p>'+
		            '<img class="info_img text-center" src='+data.image+
		            '><p>For More Details Visit:<a class="infolinks" target="_blank" href='
		            +data.weblink+'>'+data.linkdata+'</a></p></div></div>'
    });

	// Creating Marker for every location.
	this.marker = new google.maps.Marker({
		position: data.location,
		map: gmap,
		animation: google.maps.Animation.DROP,
		title: data.title
	});
	// Adding Event Listeners for Animation and Infowindow.
	this.marker.addListener('click', toggleBounce);

	this.marker.addListener('click', function() {
		self.infowindow.open(map, this);
	});

	this.marker.addListener('dblclick', function() {
		self.infowindow.close();
	});

	// A function to toggle animation on Marker.
	function toggleBounce() {
        if (self.marker.getAnimation() !== null) {
        	self.marker.setAnimation(null);
        } else {
        	self.marker.setAnimation(google.maps.Animation.BOUNCE);
        	setTimeout(function(){ self.marker.setAnimation(null); }, 4200);
        }
    };
    
};

// ViewModel(Controller) of the App that communicates between the View and the Model.
var ViewModel = function (){
	var self = this;

	this.map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: {lat: 21.162840,lng: 72.785203}
	});

	this.placeList = ko.observableArray([]);

    initialPlaces.forEach( function(place, map) {
		self.placeList.push(new Marker(place, self.map));
	});
	this.locsearch = ko.observable("");

	this.filterList = ko.observableArray([]);
	
	self.placeList().forEach( function(place) {
		self.filterList.push({name: place.title()});
	});

	// A function to filter the Markers depending on the characters given as input.
	this.filterlocations = function() {
		self.filterList.removeAll();
		// console.log(self.placeList().length)
		for (var i = 0; i < self.placeList().length; i++) {
			if (self.placeList()[i].title().toLowerCase().search(self.locsearch().toLowerCase()) >= 0) {
				self.filterList.push({name: self.placeList()[i].title()});
			}

		};
		// console.log(self.filterList());
	};
	// A function that pops up the infowindow of selected location.
	this.changemarker = function (clickedloc){
		for (var i = self.placeList().length - 1; i >= 0; i--) {
			if (self.placeList()[i].title() == clickedloc.name) {
				console.log('Match found - '+clickedloc.name);
				self.placeList()[i].infowindow.setOptions({ position: self.placeList()[i].location()});
				self.placeList()[i].infowindow.open(self.map);
				self.placeList()[i].marker.setAnimation(google.maps.Animation.BOUNCE);
				setTimeout(function(){
					for (var j = self.placeList().length - 1; j >= 0; j--) {
						self.placeList()[j].marker.setAnimation(null); 
					};
				}, 4200);
			}
			else{
				self.placeList()[i].infowindow.close();
				self.placeList()[i].marker.setAnimation(null);
			}
		};
	};	
	console.log('ViewModel Working');
};

//Callback Function to initialise Google Map alongwith Knockout Bindings.
function initMap() {
	ko.applyBindings(new ViewModel());
}
