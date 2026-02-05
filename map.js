// Initialze map
var map = L.map('map').setView([47.7147406, -88.2333076], 7);

// Add tile layer
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
}).addTo(map);

// Create icons and place on map
// Attach popups
// DULUTH
var lift = L.icon({
    iconUrl: 'assets/liftBridge.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 50], // point of the icon which will correspond to marker's location
});

var liftM = L.marker([46.780327, -92.0926939], {icon: lift}).addTo(map).bindPopup("<b>Duluth, MN</b>");

// BAYFIELD
var bay = L.icon({
    iconUrl: 'assets/apple.png',
    iconSize: [40, 40],
    iconAnchor: [22, 50]
});

var bayM = L.marker([46.8112101, -90.8141623], {icon: bay}).addTo(map).bindPopup("<b>Bayfield, WI</b>");

// MADELINE ISLAND
var mad = L.icon({
    iconUrl: 'assets/tent.png',
    iconSize: [40, 40],
    iconAnchor: [0, 20]
});
var madM = L.marker([46.7881162, -90.7582868], {icon: mad}).addTo(map).bindPopup("<b>Big Bay State Park</b><br><b>Madeline Island, WI</b>");

// COPPER HARBOR
var cop = L.icon({
    iconUrl: 'assets/copper.png',
    iconSize: [40, 40],
    iconAnchor: [0, 20]
});
var copM = L.marker([47.4693856,-88.0259867], {icon: cop}).addTo(map).bindPopup("<b>Copper Harbor, MI</b>");

// MARQUETTE
var mar = L.icon({
    iconUrl: 'assets/tent.png',
    iconSize: [40, 40],
    iconAnchor: [0, 20]
});
var marM = L.marker([46.5716441,-87.4123453], {icon: mar}).addTo(map).bindPopup("<b>Marquette, MI</b>");

// GRAND MARAIS, MI
var gMar = L.icon({
    iconUrl: 'assets/van.png',
    iconSize: [40, 40],
    iconAnchor: [0, 20]
});
var gMarM = L.marker([46.6736061,-85.9941631], {icon: gMar}).addTo(map).bindPopup("<b>Driving...</b>");

// SHIPWRECK MUSEUM
var shipWr = L.icon({
    iconUrl: 'assets/shipwreck.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});
var shipWrM = L.marker([46.7698381,-84.9580483], {icon: shipWr}).addTo(map).bindPopup("<b>Great Lakes Shipwreck Museum<br>Paradise, MI</b>");

// SAULT SAINT MARIE, MI & PRT
var prt = L.icon({
    iconUrl: 'assets/prt.png',
    iconSize: [70, 20],
    iconAnchor: [20, 20]
});
var prtM = L.marker([46.5001669,-84.3598492], {icon: prt}).addTo(map).bindPopup("<b>Soo Locks<br>Sault Saint Marie, MI</b>");

// LAKE SUPERIOR PROVINCIAL PARK, ON
var can1 = L.icon({
    iconUrl: 'assets/tent.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});
var can1M = L.marker([47.304709, -84.587155], {icon: can1}).addTo(map).bindPopup("<b>Lake Superior Provincial Park, Wawa ON</b>");

// DRIVING...
var driv2 = L.icon({
    iconUrl: 'assets/van2.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});
var driv2M = L.marker([48.690859, -86.046298], {icon: driv2}).addTo(map).bindPopup("<b>Driving...</b>");

// THUNDER BAY, ON
var tb = L.icon({
    iconUrl: 'assets/tbFlag.png',
    iconSize: [40, 30],
    iconAnchor: [20, 20]
});
var tb1 = L.marker([48.88189540681022, -87.55920730060822], {icon: tb}).addTo(map).bindPopup("<b>Thunder Bay, ON</b>");

// SLEEPING GIANT PROVINCIAL PARK
var sg = L.icon({
    iconUrl: 'assets/tent.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});
var sg1 = L.marker([48.3693046, -88.804575], {icon: sg}).addTo(map).bindPopup("<b>Sleeping Giant Provincial Park, ON</b>");

// GRAND MARAIS, MN
var gm = L.icon({
    iconUrl: 'assets/gmLogo.png',
    iconSize: [40, 30],
    iconAnchor: [20, 20]
});
var gm1 = L.marker([47.749973, -90.336240], {icon: gm}).addTo(map).bindPopup("<b>Grand Marais, MN</b>");

var legend = L.control({ position: "topright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>2025 Lake Superior Circle Tour!</h4>";
  div.innerHTML += '<span>One lake, two friends, 10 days.</span><br>';
  
  return div;
};

legend.addTo(map);