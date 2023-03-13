// Creating map options
var mapOptions = {
    center: [36.720876, -4.416964],
    zoom: 15
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; Javier Ramos del Río'
}).addTo(map);

var marker = L.marker([36.720876, -4.416964]).addTo(map);

marker.bindPopup("<b>C/ ALCAZABILLA, 1</b><br>PUERTA DE LA ALCAZABA");

var x = document.getElementsByClassName("leaflet-popup-content-wrapper")[0];
    x.id="modalOpen"
function abrirModal() {
    document.getElementById("modalOpen").setAttribute('style', 'display:flex !important');
    }

function cerrarModal(){
    document.getElementById("modal").setAttribute('style', 'display:none !important');
}
