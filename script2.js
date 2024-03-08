document.addEventListener("DOMContentLoaded", function () {
    var zaragoza = {lat: 41.6488, lng: -0.8891}; // Coordenadas de Zaragoza

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: zaragoza
    });

    var marker = new google.maps.Marker({
        position: zaragoza,
        map: map,
        title: 'Zaragoza, España'
    });
})