// Javascript file for linking Third Party APIs to the app

function thirdpartyapis(){
		// Wikipedia API 
		var $wikiElem = $('#wikipedia-links');
		var cityStr = 'surat'
		var wikiurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+cityStr+'&format=json&callback=wikicallback';

		// Setting Error function for Wikipedia
		var wikiRequestTimeout = setTimeout(function(){
		    $wikiElem.text("Failed to get Wikipedia resources");
		}, 8000);

		// Ajax Call for getting data
		$.ajax( {
		    url: wikiurl,
		    dataType: 'jsonp',
		    type: 'POST',
		    async: true,
		    headers: { 'Api-User-Agent': 'Example/1.0' },
		    success: function(data) {
		        links = data[1];
		        $wikiElem.text("");
		        for (var i=0;i<links.length;i++){
		            var link = links[i];
		            $wikiElem.append('<li><a target="_blank" href="https://en.wikipedia.org/wiki/'+link+'">'+link+'</a></li>')
		        };
		        clearTimeout(wikiRequestTimeout);
		        console.log("Wikipedia Links added");
		        // console.log(data);
		        // console.log(links);
		    }
		});

		//GO Ibibo API
		var $hotelElem = $('#goibibo-links');
		var gourl = "http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=ead7e995&app_key=f086131766bdeeb9b60ab56a0d7b9372&city_id=1174752501934903427"

		// Setting Error function for Wikipedia
		var goibiboRequestTimeout = setTimeout(function(){
		        $hotelElem.text("Failed to get GoIbibo Hotel Feed");
		    }, 12000);

		// Ajax Call for getting data of Hotels
		$.ajax( {
		    url: gourl,
		    dataType: 'jsonp',
		    type: 'GET',
		    async: true,
		    success: function(response) {
		        links = response.data;
		        // console.log(links);
		        $hotelElem.text("");
		        var names = [];
		        var i = 0;
		        for (hotelid in links){
		        	i++;
		        	hotel = response.data[hotelid].hotel_data_node;
		        	// console.log(hotel.name);
		        	if(hotel.img_selected){
		        		$hotelElem.append(
			        		'<li class="col-lg-4 col-md-4 col-sm-6 col-xs-6 hotelbox"><a class="col-lg-7 col-md-7 col-sm-7 col-xs-7" target="_blank" href="https://www.goibibo.com/hotels/detail/'
			        		+hotel.name+'-hotel-in-surat-'
			        		+hotelid+'/">'+hotel.name+'</a>	<p class="col-lg-2 col-md-2 col-sm-2 col-xs-2 hotelprice">Rs.'
			        		+hotel.extra.check_in+
			        		'</p><img class="hotelpic col-lg-3 col-md-3 col-sm-3 col-xs-3" src='
			        		+hotel.img_selected.g.l+' alt='+hotel.name+'></li>');
		        	}
		        	else{
		        		console.log("Error- No image defined for hotel - "+hotelid);
			        	continue;
			        }
		        };
		        clearTimeout(goibiboRequestTimeout);
		        console.log("GO Ibibo Hotels added");
		    }
		} );
		console.log('API file loaded');
};

// Running the *thirdpartyapis* function when Body is ready
$('body').ready(thirdpartyapis);