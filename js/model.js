// Model.js by ApTr13
// Containing data for all markers
// in json form.
var initialPlaces = [
	{
		location: {lat: 21.167274,lng: 72.785114},
		title: "SVNIT",
		image: "images/gate.jpg",
		description: "<b>SVNIT</b>, 2nd best engineering college among all NITs across India...",
		weblink: "http://svnit.ac.in/",
		linkdata: "Svnit Website",
		keyword: "svnit"
	},
	{
		location: {lat: 21.167213,lng: 72.787265},
		title: "Mother Teresa Bhavan",
		image: "images/mtb.jpg",
		description: "Mega Hostel for girls and female faculties..",
		weblink: "http://svnit.ac.in/community/hostels/mtb/index.html",
		linkdata: "MTB Hostel",
		keyword: "mother teresa"
	},
	{
		location: {lat: 21.164255,lng: 72.786098},
		title: "College Canteen",
		image: "images/cant.jpg",
		description: "Centre of love, joy and friendship... SVNIT Canteen",
		weblink: "http://svnit.ac.in/campus/canteen.php",
		linkdata: "Canteen Page",
		keyword: "canteen"
	},
	{
		location: {lat: 21.165302,lng: 72.785065},
		title: "Admin Block",
		image: "images/admin.jpg",
		description: "The place from where whole Administration of College is Controlled..",
		weblink: "http://svnit.ac.in/admission/adm_btech.php",
		linkdata: "Admission",
		keyword: "administration"
	},
	{
		location: {lat: 21.160201,lng: 72.784852},
		title: "Student Activity Center",
		image: "images/sac.jpg",
		description: "Physical Education Section for various sports... with full-fledged gym.",
		weblink: "http://svnit.ac.in/sac/about-sac.php",
		linkdata: "Physical Education",
		keyword: "physical education"
	},
	{
		location: {lat: 21.162840,lng: 72.785203},
		title: "New Library",
		image: "images/nlib.jpg",
		description: "Beauty of Svnit, its amazing infrastructure... New Library",
		weblink: "http://svnit.ac.in/resources/library/lib/main.html",
		linkdata: "Digital Library",
		keyword: "library"
	},
	{
		location: {lat: 21.160003,lng: 72.788426},
		title: "Bhabha Bhavan",
		image: "images/bb.jpg",
		description: "8-Storey mega Hostel for 3rd year boys and Ph.d students...",
		weblink: "http://svnit.ac.in/community/hostels/bb/index.html",
		linkdata: "Bhabha Bhavan Page",
		keyword: "bhabha"
	},
	{
		location: {lat: 21.158130,lng: 72.784693},
		title: "Gajjar Bhavan",
		image: "images/gajj.jpg",
		description: "Home for the freshers of the college...",
		weblink: "http://svnit.ac.in/community/hostels/gb/index.html",
		linkdata: "Gajjar Bhavan Page",
		keyword: "freshers"
	},
	{
		location: {lat: 21.162859,lng: 72.790060},
		title: "Swami Vivekanand Bhavan",
		image: "images/svb.jpg",
		description: "Supreme hostel of Svnit for final year boys...",
		weblink: "http://svnit.ac.in/community/hostels/svb/index.html",
		linkdata: "SVB Page",
		keyword: "swami vivekanand"
	},
	{
		location: {lat: 21.160582,lng: 72.789373},
		title: "Tagore Bhavan",
		image: "images/tb.jpg",
		description: "One of old hostels of SVNIT...",
		weblink: "http://svnit.ac.in/community/hostels/tb/index.html",
		linkdata: "Tagore Bhavan Page",
		keyword: "tagore"
	},
	{
		location: {lat: 21.161848,lng: 72.790242},
		title: "Nehru Bhavan",
		image: "images/nehru.jpg",
		description: "Hostel for the aspiring 2nd year boys...",
		weblink: "http://svnit.ac.in/community/hostels/nb/index.html",
		linkdata: "Nehru Bhavan Page",
		keyword: "nehru"
	},
	{
		location: {lat: 21.162360,lng: 72.788231},
		title: "Raman Bhavan",
		image: "images/rb.jpg",
		description: "Home to all the married Teaching Assistants & Ph.D. students.",
		weblink: "http://svnit.ac.in/community/hostels/rb/index.html",
		linkdata: "Raman Bhavan Page",
		keyword: "c v raman"
	},
	{
		location: {lat: 21.163950,lng: 72.785132},
		title: "New Class Room Complex",
		image: "images/ncrc.jpg",
		description: "Epicle of Knowledge... Largest building at Svnit... where all lectures are held..",
		weblink: "http://svnit.ac.in/jobs.php",
		linkdata: "Teaching Jobs at SVNIT",
		keyword: "engineering"
	},
	{
		location: {lat: 21.167441,lng: 72.782845},
		title: "Guest House",
		image: "images/guest.jpg",
		description: "Primal stay for the guests and executives of companys coming for placements... with top class catering...",
		weblink: "http://svnit.ac.in/campus/guesthouse.php",
		linkdata: "SVNIT Guest House- Narmad Bhavan",
		keyword: "guest house"
	},
	{
		location: {lat: 21.165000,lng: 72.783634},
		title: "Central Computer Centre",
		image: "images/ccc.jpg",
		description: "Data centre of Svnit... controls the supply of super high speed internet across the campus...",
		weblink: "http://svnit.ac.in/resources/ccc/",
		linkdata: "CCC",
		keyword: "cyberroam"
	},
	{
		location: {lat: 21.164754,lng: 72.783314},
		title: "Computer Engg. Dept.",
		image: "images/coed.jpg",
		description: "Department that gives the best placements every year... COED...",
		weblink: "http://117.239.204.235/",
		linkdata: "COED Home Page",
		keyword: "computer engineering"
	},
	{
		location: {lat: 21.164314,lng: 72.783585},
		title: "Electronics Engg. Dept.",
		image: "images/eced.jpg",
		description: "Department with aspiring talent in the field of electronics... ECED...",
		weblink: "http://svnit.ac.in/deptt/eced/index.php",
		linkdata: "ECED Home Page",
		keyword: "electronics engineering"
	},
	{
		location: {lat: 21.164036,lng: 72.782995},
		title: "Chemical Engg. Dept.",
		image: "images/ched.jpg",
		description: "Department with new researches including Saline Water Treatment Plant... CHED...",
		weblink: "http://svnit.ac.in/deptt/ched/index.php",
		linkdata: "CHED Home Page",
		keyword: "chemical engineering"
	},
	{
		location: {lat: 21.162041,lng: 72.783216},
		title: "Health Centre",
		image: "images/disp.jpg",
		description: "Dispensary for students and staff with on the go treatment and free medication...",
		weblink: "http://svnit.ac.in/healthcentre/healthcentre.php",
		linkdata: "SVNIT Dispensary",
		keyword: "dispensary"
	}
	// ,
	// {
	// 	location: {lat: 21.164423,lng: 72.785064},
	// 	title: "Mechanical Engineering Dept.",
	// 	image: "images/ched.jpg",
	// 	description: "Department with new researches including Saline Water Treatment Plant... CHED...",
	// 	weblink: "http://svnit.ac.in/deptt/med/index.php",
	// 	linkdata: "MED Home Page"
	// },
	// {
	// 	location: {lat: 21.164856,lng: 72.784884},
	// 	title: "Electrical Engineering Dept.",
	// 	image: "images/ched.jpg",
	// 	description: "Department with new researches including Saline Water Treatment Plant... CHED...",
	// 	weblink: "http://svnit.ac.in/deptt/eled/index.php",
	// 	linkdata: "EED Home Page"
	// }
	];
	console.log('Model Loaded Successfully');
