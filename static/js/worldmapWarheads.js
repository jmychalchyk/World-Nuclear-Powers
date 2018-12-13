var map = L.map("map-id", { center: [29.3859793,-40.7761755], zoom: 2 });
 
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "mapbox.dark",
            accessToken: v_mapboxAPI
  }).addTo(map);
  
var link ="../db/countryBorders.geojson"

const  c_countries = ['Belgium','China','France','Germany','India','Italy','Israel','Netherlands','Pakistan','Russia','Turkey','United Kingdom','United States of America'];

function f_compare(ADMIN){
        var x = false;
         c_countries.forEach(function(country){ 
                if(ADMIN == country){x = true;} else { }}); return x; };
            
d3.json(link, function(data) {
        L.geoJson(data,{
            filter: function(feature, layer) {
                if( f_compare(feature.properties.ADMIN) ){ return true;} else {}},
            style: function(feature) {
                return {
                  color: v_white,
                  fillColor: v_maroon,
                  fillOpacity: 0.3,
                  weight: 1.5
                        };}
              }).addTo(map);});

              