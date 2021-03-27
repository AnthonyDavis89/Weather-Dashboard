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
let cityTemp = $(".city-temp");
let cityHum = $(".city-hum");
let cityWind = $(".city-wind");
let cityUV = $(".city-UV");

// 5-Day Forecast

//
searchBtn.on("click", function () {
  console.log("clicked button");
  console.log(searchInput.val());
  // getWeather(searchInput.val());
});

//
$(".city-heading").append(" " + date);
$(".city-heading span").text(city);

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
