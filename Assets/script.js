let apiKey = "d3591e8d8114fff09831e57f3d366828";
var searchBtn = $(".btn-test");
var searchInput = $(".searchInput");
let historyItem = $(".history-item");
var date = moment().format("l");

// Left column
let cityName = $(".city-heading");
let currentDate = $(".currentDate");
let weatherIcon = $(".weatherIcon");
let searchHistory = $(".historyItems");


// 5-Day Forecast

//
searchBtn.on("click", function () {
  console.log("clicked button");
  //   Local Storage 
  var position = 0;
  var inputStorage = searchInput.val();
  localStorage.setItem(position, inputStorage);
  position ++;
  console.log("push my buttons pls"); 

  var city = searchInput.val();
  getWeather(city);
});

function getWeather(city) {
  console.log("Get Weather Function");
  console.log(city);
  let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (response) {
    var cityTemp = Math.round(response.main.temp);
    var cityHum = response.main.humidity;
    var cityWind = response.wind.speed;
    var cityLon = response.coord.lon;
    var cityLat = response.coord.lat;
    var weatherIcon = response.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x" + ".png";
    


  let queryUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude={part}&APPid=${apiKey}`;
  $.ajax({
    url: queryUrl2,
    method: "GET",
  }).then(function (responseAll) {
    console.log(responseAll);
    var cityUiv = responseAll.current.uvi;

    $(".city-heading")
    .html(
      "<h1>" +
        searchInput.val() +
        " " +
        "(" +
        date +
        ")" +
        "</h1>"
    )
    .addClass("city-heading");

  $(".city-temp").html("<p>Temperature: " + cityTemp +  "</p>");
  $(".city-hum").html("<p>Humidity: " + cityHum +  "</p>");
  $(".city-wind").html("<p>Wind Speed: " + cityWind +  "</p>");
  $(".city-UV").html("<p>UV Index: " + cityUiv +  "</p>");
  $("img").attr("src", iconURL);

})

  });

}


//
$(".city-heading").append(" " + date);

// function getSchedule() {
//   var positionStorage = $('.row').toArray();
//   $.each(positionStorage, function(){
//       var time =$(this).attr('id')
//       $('.#id', this).prepend(localStorage.getItem(time))
//   })
// }
