mapboxgl.accessToken = 'pk.eyJ1Ijoic2thcmFtamUiLCJhIjoiY2t0bjl5Z2lqMDByNDJvbzN2bmJqODVnayJ9.39REDeKQcsQPv5yV2I0Kfg';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-115.348113, 51.086690],
        zoom: 2.5
    });

    var marker = new mapboxgl.Marker()
     .setLngLat([-115.348113, 51.086690])
     .addTo(map);