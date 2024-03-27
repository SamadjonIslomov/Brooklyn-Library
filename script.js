const seasBtn1 = document.querySelector("#winter");
const seasBtn2 = document.querySelector("#spring");
const seasBtn3 = document.querySelector("#summer");
const seasBtn4 = document.querySelector("#autumn");
const seasBtnAll = document.querySelector("#clear");

const seasBook1 = document.querySelector(".winterbooks");
const seasBook2 = document.querySelector(".springbooks");
const seasBook3 = document.querySelector(".summerbooks");
const seasBook4 = document.querySelector(".autumnbooks");

seasBtn1.addEventListener("click", () => {
  seasBook1.classList.remove("close");
  seasBook2.classList.add("close");
  seasBook3.classList.add("close");
  seasBook4.classList.add("close");
});
seasBtn2.addEventListener("click", () => {
  seasBook1.classList.add("close");
  seasBook2.classList.remove("close");
  seasBook3.classList.add("close");
  seasBook4.classList.add("close");
});
seasBtn3.addEventListener("click", () => {
  seasBook1.classList.add("close");
  seasBook2.classList.add("close");
  seasBook3.classList.remove("close");
  seasBook4.classList.add("close");
});
seasBtn4.addEventListener("click", () => {
  seasBook1.classList.add("close");
  seasBook2.classList.add("close");
  seasBook3.classList.add("close");
  seasBook4.classList.remove("close");
});
seasBtnAll.addEventListener("click", () => {
  seasBook1.classList.add("close");
  seasBook2.classList.add("close");
  seasBook3.classList.add("close");
  seasBook4.classList.add("close");
});
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(39.774129, 64.4312),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    minZoom: 2,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var infoWindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(39.774129, 64.4312),
    map: map,
    title: "Uzbekistan, Bukhara",
  });
  marker.addListener("click", function () {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
  });
  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(mapOptions.center);
  });
}
google.maps.event.addDomListener(window, "load", initialize);
