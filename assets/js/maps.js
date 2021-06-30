/**
 * initMap : This function is used to instantiate the google map for home page, where we are showing the map of Chobe National Park
 * and Okavango Delta. It also consists of google map marker with images.
 */
function initMap() {
    //Creating the map object  with centered focus
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {
            lat: -20.653257,
            lng: 20.906792
        },
    });

    //Coordinate of Okavango Delta
    const Okavango = {
        lat: -19.650833333333,
        lng: 22.905833333333
    };
    //Coordinate of Chobe National Park
    const Chobe = {
        lat: -17.8291147,
        lng: 25.144448
    };
    const labels = ['Okavango Delta', 'Chobe National Park'];
    //Tooltip html
    const OkavangoHtml = `
       <img src="assets/images/okavango-delta_450_300.png" width=250 height=200>
       <h5 style="text-align:center"> Okavango Delta </h5>
    `;
    //Tooltip html
    const ChobeHtml = `
       <img src="assets/images/chobe-park_450_300.png" width=250 height=200>
       <h5 style="text-align:center"> Chobe National Park </h5>
    `;
    //Infowindow for Okavango
    const infowindow1 = new google.maps.InfoWindow({
        content: OkavangoHtml,
    });
    //Infowindow for Chobe
    const infowindow2 = new google.maps.InfoWindow({
        content: ChobeHtml,
    });

    const marker1 = new google.maps.Marker({
        position: Okavango,
        map,
        title: labels[0],
    });

    const marker2 = new google.maps.Marker({
        position: Chobe,
        map,
        title: labels[1],
    });
    //Attaching the listener to perform marker click
    marker1.addListener('click', () => {
        infowindow1.open({
            anchor: marker1,
            map,
            shouldFocus: false,
        });
    });
    //Attaching the listener to perform marker click
    marker2.addListener('click', () => {
        infowindow2.open({
            anchor: marker2,
            map,
            shouldFocus: false,
        });
    });
}