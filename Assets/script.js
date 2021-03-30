let apiKey = "d3591e8d8114fff09831e57f3d366828";
var searchBtn = $(".btn-test");
var searchInput = $(".searchInput");
let historyItem = $(".history-item");
var date = moment().format("l")
var cityHistoryArray = [];
var localKey = 0;


// Left column
let cityName = $(".city-heading");
let currentDate = $(".currentDate");
let weatherIcon = $(".weatherIcon");
let searchHistory = $(".historyItems");





//
searchBtn.on("click", function () {
  console.log("clicked button");

  var city = searchInput.val();
  storeItem(city) 
  getStorageItem();
  
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
    


  let queryUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude={part}&units=imperial&APPid=${apiKey}`;

  $.ajax({
    url: queryUrl2,
    method: "GET",
  }).then(function (responseAll) {
    console.log(responseAll);
    var cityUiv = responseAll.current.uvi;
    var weatherIcon5day0 = responseAll.daily[0].weather[0].icon;
    var weatherIcon5day1 = responseAll.daily[1].weather[0].icon;
    var weatherIcon5day2 = responseAll.daily[2].weather[0].icon;
    var weatherIcon5day3 = responseAll.daily[3].weather[0].icon;
    var weatherIcon5day4 = responseAll.daily[4].weather[0].icon;
    var iconURL5day0 = "http://openweathermap.org/img/wn/" + weatherIcon5day0 + "@2x" + ".png";
    var iconURL5day1 = "http://openweathermap.org/img/wn/" + weatherIcon5day1 + "@2x" + ".png";
    var iconURL5day2 = "http://openweathermap.org/img/wn/" + weatherIcon5day2 + "@2x" + ".png";
    var iconURL5day3 = "http://openweathermap.org/img/wn/" + weatherIcon5day3 + "@2x" + ".png";
    var iconURL5day4 = "http://openweathermap.org/img/wn/" + weatherIcon5day4 + "@2x" + ".png";


console.log(iconURL5day0)
console.log(iconURL5day1)
console.log(iconURL5day2)
console.log(iconURL5day3)
  
      

      var temp0Hold = (Math.round(responseAll.daily[0].temp.day));
      var temp1Hold = (Math.round(responseAll.daily[1].temp.day));
      var temp2Hold = (Math.round(responseAll.daily[2].temp.day));
      var temp3Hold = (Math.round(responseAll.daily[3].temp.day));
      var temp4Hold = (Math.round(responseAll.daily[4].temp.day));

      $(".card-temp0").html("<p>Temperature: " + temp0Hold +  "</p>");
      $(".card-temp1").html("<p>Temperature: " + temp1Hold +  "</p>");
      $(".card-temp2").html("<p>Temperature: " + temp2Hold +  "</p>");
      $(".card-temp3").html("<p>Temperature: " + temp3Hold +  "</p>");
      $(".card-temp4").html("<p>Temperature: " + temp4Hold +  "</p>");


      $(".card-Hum0").html("<p>Humidity: " + responseAll.daily[0].humidity +  "</p>");
      $(".card-Hum1").html("<p>Humidity: " + responseAll.daily[1].humidity +  "</p>");
      $(".card-Hum2").html("<p>Humidity: " + responseAll.daily[2].humidity +  "</p>");
      $(".card-Hum3").html("<p>Humidity: " + responseAll.daily[3].humidity +  "</p>");
      $(".card-Hum4").html("<p>Humidity: " + responseAll.daily[4].humidity +  "</p>");
  

      $(".card-image0").attr("src", iconURL5day0);
      console.log(iconURL5day0)
      $(".card-image1").attr("src", iconURL5day1);
      $(".card-image2").attr("src", iconURL5day2);
      $(".card-image3").attr("src", iconURL5day3);
      $(".card-image4").attr("src", iconURL5day4);

      var date1 = moment().add(1, 'days').format('LL'); 
      var date2 = moment().add(2, 'days').format('LL'); 
      var date3 = moment().add(3, 'days').format('LL'); 
      var date4 = moment().add(4, 'days').format('LL'); 
      var date5 = moment().add(5, 'days').format('LL'); 

      $(".date1").html("<h5>" + date1+  "</h5>");
      $(".date2").html("<h5>" + date2+  "</h5>");
      $(".date3").html("<h5>" + date3+  "</h5>");
      $(".date4").html("<h5>" + date4+  "</h5>");
      $(".date5").html("<h5>" + date5+  "</h5>");


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
  $(".pic1").attr("src", iconURL);

})

  });

}


//
$(".city-heading").append(" " + date);

function storeItem(city) {
  localStorage.setItem(localKey, city);
  localKey++;
}

function getStorageItem() {

for (let index = 0; index < localStorage.length; index++) {
  var x = localStorage.getItem(index);

  $("#" + index).html("<p>" + x + "</p>");
}
  
}




