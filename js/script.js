// Script.js... Made by - aptr13
// containing View(Marker) and ViewModel
// based on the javascript framework "knockout.js".

// View named as Marker which is created for every predefined location in model.
var Marker = function (data, gmap){
	var self = this;

	// Declaring variables for every Marker
	this.title = ko.observable(data.title);
	this.location = ko.observable(data.location);
	this.keyword = ko.observable(data.keyword);
	this.infocontent = ko.observable('');
	this.wikilinks = ko.observable('');

	this.infocontent('<div id="content" class="text-center">'+
		            '<h4 id="firstHeading" class="firstHeading">'+data.title+
		            '</h4><div id="bodyContent" data-bind="with: Marker"><p>'+data.description+'</p>'+
		            '<img class="info_img text-center" src='+data.image+
		            '><p>For More Details Visit:<a class="infolinks" target="_blank" href='+data.weblink+
                '>'+data.linkdata+'</a></p><p data-bind="text: wikilinks">'+
		            'Related Wikipedia Links - ');
	// console.log(this.infowindow.content);

	// Declaring url for keyword search on Wikipedia
	this.wikiurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+self.keyword()+'&format=json&callback=wikicallback';

	// Ajax Call for getting data from Wikipedia
	$.ajax( {
	    url: self.wikiurl,
	    dataType: 'jsonp',
	    type: 'POST',
	    async: true,
	    headers: { 'Api-User-Agent': 'Example/1.0' },
	    success: function(data) {
			links = data[1];
			// console.log(links);
			// console.log(data);
			if (links.length>3){
				linkcount = 3;
			}
			else{
				linkcount = links.length;
			}
			for (var i=0;i<linkcount;i++){
			    var link = links[i];
			    self.infocontent(self.infocontent()+'<a class="wikilinks" target="_blank" href="https://en.wikipedia.org/wiki/'
			    	+link+'">'+link+'</a>...');
			}
			self.infocontent(self.infocontent()+'</p></div></div>');
			console.log('Wikipedia Links added successfully');
			// clearTimeout(self.wikiRequestTimeout);
		}
	});

	// Using timeout to set content in Infowindow
	this.wikiRequestTimeout = setTimeout(function(){
		self.infowindow = new google.maps.InfoWindow({
    		content: self.infocontent()
   		});
	}, 7000);

	// Creating Marker for every location.
	this.marker = new google.maps.Marker({
		position: data.location,
		map: gmap,
		animation: google.maps.Animation.DROP,
		title: data.title
	});
	// Adding Event Listeners for Animation and Infowindow.
	this.marker.addListener('click', toggleBounce);
	// console.log(self.infowindow.content);
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
    }
    
};

// ViewModel(Controller) of the App that communicates between the View and the Model.
var ViewModel = function (){
	var self = this;

	//Definig map to be rendered onload
	this.map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: {lat: 21.162840,lng: 72.785203}
	});

	this.placeList = ko.observableArray([]);

    initialPlaces.forEach( function(place, map) {
		self.placeList.push(new Marker(place, self.map));
	});
	// console.log(self.placeList());
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

		}
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
					}
				}, 4200);
			}
			else{
				self.placeList()[i].infowindow.close();
				self.placeList()[i].marker.setAnimation(null);
			}
		}
	};	
	console.log('ViewModel Working');

	this.gourl = "http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=ead7e995&app_key=f086131766bdeeb9b60ab56a0d7b9372&city_id=1174752501934903427"
	this.hotels = ko.observableArray([]);
	// Setting Error function for GoIbibo
	this.goibiboRequestTimeout = setTimeout(function(){
			console.log("Failed to get GoIbibo Hotel Feed");
	    }, 12000);

	// Ajax Call for getting data of Hotels
	$.ajax( {
	url: self.gourl,
	dataType: 'jsonp',
	type: 'GET',
	async: true,
	success: function(response) {
		this.links = response.data;
		console.log(this.links);
		var names = [];
		var i = 0;
		for (this.hotelid in this.links){
			i++;
			this.hotel = response.data[this.hotelid].hotel_data_node;
			// console.log(this.hotel.loc.location+","+this.hotel.loc.city);
			if(this.hotel.img_selected){
				self.hotels.push({
					name: this.hotel.name,
					price: this.hotel.extra.check_in,
					image: this.hotel.img_selected.g.l,
					link:'https://www.goibibo.com/hotels/detail/'+this.hotel.name+'-hotel-in-surat-'+this.hotelid+'/',
					address: this.hotel.loc.location
				});
			}
			else{
				console.log("Error- No image defined for hotel - "+hotelid);
				continue;
			}
			};
			clearTimeout(self.goibiboRequestTimeout);
			console.log("GO Ibibo Hotels added");
			// console.log(self.hotels());
		}
	});
	console.log('API file loaded');
};

//Callback Function to initialise Google Map alongwith Knockout Bindings.
function initMap() {
	ko.applyBindings(new ViewModel());
}
