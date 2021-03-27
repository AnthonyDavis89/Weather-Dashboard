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

// Main area
// let cityTemp = $(".city-temp");
// let cityHum = $(".city-hum");
// let cityWind = $(".city-wind");
// let cityUV = $(".city-UV");

// 5-Day Forecast

//
searchBtn.on("click", function () {
  console.log("clicked button");
  //   console.log(searchInput.val());

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
    console.log(response);
    var cityTemp = Math.round(response.main.temp);
    var cityHum = response.main.humidity;
    var cityWind = response.wind.speed;
    var cityLon = response.coord.lon;
    var cityLat = response.coord.lat;
    var weatherIcon = response.weather[0].icon;
    var iconURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x" + ".png";
    

   

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
    $("img").attr("src", iconURL);
  });
}


//
$(".city-heading").append(" " + date);


// function getWeather(cityInput) {
//     let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputy}&APPID=${apiKey}&units=imperial`;
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     })
//     .then(function(weatherData) {
//         let cityObj = {
//             cityName: weatherData.name,
//             cityTemp: weatherData.main.temp,
//             cityHumidity: weatherData.main.humidity,
//             cityWindSpeed: weatherData.wind.speed,
//             cityUVIndex: weatherData.coord,
//             cityWeatherIconName: weatherData.weather[0].icon
//         }}}
