$('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");

// contact page toogles
$("#contact-mapClick").click(function () {
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");
});
$("#contact-carClick").click(function () {
    $('#contact-map').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-car').show();
    $("#contact-carClick").addClass("active");
});
$("#contact-busClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-bus').show();
    $("#contact-busClick").addClass("active");
});
$("#contact-bikeClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-bike').show();
    $("#contact-bikeClick").addClass("active");
});
$("#contact-phoneClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-phone').show();
    $("#contact-phoneClick").addClass("active");
});



$("#contact-mailClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");

    $('#contact-mail').show();
    $("#contact-mailClick").addClass("active");
});
//google map
var map;
  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(39.949910, 32.788134),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);