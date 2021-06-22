function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,				
        center:{ lat: -24.653257, lng: 25.906792},
    });
    // center: { lat: -28.024, lng: 140.887 },
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const locations = [
    { lat: -19.318701, lng: 22.446918 },
    { lat: -17.8291147, lng: 25.144448 }	
    
    ];
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
    
    // { lat: -19.318701, lng: 22.446918 }, okavango
    // { lat: -17.8291147, lng: 25.144448 } chobe