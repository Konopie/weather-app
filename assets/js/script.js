var lat = "";
var lon = "";
var exclude = "";
var br = document.createElement("br");

var appId = "f027e7f618e96e940a2e0cee7897b170";

document.getElementById("search-bar").value = "";

var getLatLonCodes = function(searchText) {
    var currentCity = document.getElementById("current-city-name")
    currentCity.textContent = searchText;

    var city = searchText;
    var geocodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + appId;
    
    fetch(geocodeUrl)
    .then(response => response.json())
    .then(geocode => codeHandler(geocode));
    
}

var codeHandler = function(geocode) {
    var lat = geocode[0].lat;
    var lon = geocode[0].lon;

    fetchWeather(lat, lon);
}

var fetchWeather = function(lat, lon) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&exclude=" + exclude + "&appid=" + appId;

    fetch(weatherUrl)
    .then(response => response.json())
    .then(info => 
        displayInfo(info)
        // console.log(info)
    )
};

var displayInfo = function(info) {
    console.log(info);
    displayCurrent(info);
    displayNext1(info);
    displayNext2(info);
    displayNext3(info);
    displayNext4(info);
    displayNext5(info);
}

var displayCurrent = function(info) {
    // create an img element and make its source the weather icon, then append to page
 var currentIcon = document.createElement("img")
 currentIcon.src = "http://openweathermap.org/img/wn/" + info.current.weather[0].icon + "@2x.png";
 document.getElementById("current-city-name").appendChild(currentIcon);
     // create p element to hold current temp and append to current city info
 var currentTemp = document.createElement("p");
 currentTemp.innerText = "Temp: " + info.current.temp + "°";
 document.getElementById("city-info").appendChild(currentTemp);
// create p element to hold current wind and append to current city info
 var currentWind = document.createElement("p");
 currentWind.innerText = "Wind: " + info.current.wind_speed + " mph";
 document.getElementById("city-info").appendChild(currentWind);
 // create p element to hold current humidity and append to current city info
 var currentHumid = document.createElement("p");
 currentHumid.innerText = "Humidity: " + info.current.humidity + "%";
 document.getElementById("city-info").appendChild(currentHumid);
 // create p element to hold current uv index and append to current city info
 var currentUv = document.createElement("p");
 currentUv.className = "rounded w-25";
 currentUv.innerText = "UV index: " + info.current.uvi ;
 if (info.current.uvi < 3) {
    currentUv.classList.add("bg-success");
 }
 else if (info.current.uvi >= 3 && info.current.uvi < 6 ) {
    currentUv.classList.add("bg-warning");
 }
 else {
    currentUv.classList.add("bg-danger");
 }

 document.getElementById("city-info").appendChild(currentUv);
}

var displayNext1 = function(info) {
    // create an img element and make its source the weather icon, then append to page
 var next1Icon = document.createElement("img")
 next1Icon.src = "http://openweathermap.org/img/wn/" + info.daily[1].weather[0].icon + "@2x.png";
 document.getElementById("next-1").appendChild(next1Icon);
     // create p element to hold next 1 temp and append to next 1
 var next1Temp = document.createElement("p");
 next1Temp.innerText = "Temp min: " + info.daily[1].temp.min + "°" + "  Temp max: " + info.daily[1].temp.max + "°";
 document.getElementById("next-1").appendChild(next1Temp);
// create p element to hold next 1 wind and append to next 1
 var next1Wind = document.createElement("p");
 next1Wind.innerText = "Wind: " + info.daily[1].wind_speed + " mph";
 document.getElementById("next-1").appendChild(next1Wind);
 // create p element to hold next 1 humidity and append to next 1
 var next1Humid = document.createElement("p");
 next1Humid.innerText = "Humidity: " + info.daily[1].humidity + "%";
 document.getElementById("next-1").appendChild(next1Humid);
}

var displayNext2 = function(info) {
// create an img element and make its source the weather icon, then append to page
var next2Icon = document.createElement("img")
next2Icon.src = "http://openweathermap.org/img/wn/" + info.daily[2].weather[0].icon + "@2x.png";
document.getElementById("next-2").appendChild(next2Icon);
    // create p element to hold next 2 temp and append to next 2
var next2Temp = document.createElement("p");
next2Temp.innerText = "Temp min: " + info.daily[2].temp.min + "°" + "  Temp max: " + info.daily[2].temp.max + "°";
document.getElementById("next-2").appendChild(next2Temp);
// create p element to hold next 2 wind and append to next 2
var next2Wind = document.createElement("p");
next2Wind.innerText = "Wind: " + info.daily[2].wind_speed + " mph";
document.getElementById("next-2").appendChild(next2Wind);
// create p element to hold next 2 humidity and append to next 2
var next2Humid = document.createElement("p");
next2Humid.innerText = "Humidity: " + info.daily[2].humidity + "%";
document.getElementById("next-2").appendChild(next2Humid);
}

var displayNext3 = function(info) {
    // create an img element and make its source the weather icon, then append to page
 var next3Icon = document.createElement("img")
 next3Icon.src = "http://openweathermap.org/img/wn/" + info.daily[3].weather[0].icon + "@2x.png";
 document.getElementById("next-3").appendChild(next3Icon);
    // create p element to hold next 3 temp and append to next 3
var next3Temp = document.createElement("p");
next3Temp.innerText = "Temp min: " + info.daily[3].temp.min + "°" + "  Temp max: " + info.daily[3].temp.max + "°";
document.getElementById("next-3").appendChild(next3Temp);
// create p element to hold next 3 wind and append to next 3
var next3Wind = document.createElement("p");
next3Wind.innerText = "Wind: " + info.daily[3].wind_speed + " mph";
document.getElementById("next-3").appendChild(next3Wind);
// create p element to hold next 3 humidity and append to next 3
var next3Humid = document.createElement("p");
next3Humid.innerText = "Humidity: " + info.daily[3].humidity + "%";
document.getElementById("next-3").appendChild(next3Humid);
}

var displayNext4 = function(info) {
// create an img element and make its source the weather icon, then append to page
var next4Icon = document.createElement("img")
next4Icon.src = "http://openweathermap.org/img/wn/" + info.daily[4].weather[0].icon + "@2x.png";
document.getElementById("next-4").appendChild(next4Icon);
    // create p element to hold next 4 temp and append to next 4
var next4Temp = document.createElement("p");
next4Temp.innerText = "Temp min: " + info.daily[4].temp.min + "°" + "  Temp max: " + info.daily[4].temp.max + "°";
document.getElementById("next-4").appendChild(next4Temp);
// create p element to hold next 4 wind and append to next 4
var next4Wind = document.createElement("p");
next4Wind.innerText = "Wind: " + info.daily[4].wind_speed + " mph";
document.getElementById("next-4").appendChild(next4Wind);
// create p element to hold next 4 humidity and append to next 4
var next4Humid = document.createElement("p");
next4Humid.innerText = "Humidity: " + info.daily[4].humidity + "%";
document.getElementById("next-4").appendChild(next4Humid);
}

var displayNext5 = function(info) {
    // create an img element and make its source the weather icon, then append to page
 var next5Icon = document.createElement("img")
 next5Icon.src = "http://openweathermap.org/img/wn/" + info.daily[5].weather[0].icon + "@2x.png";
 document.getElementById("next-5").appendChild(next5Icon);
    // create p element to hold next 1 temp and append to next 5
var next5Temp = document.createElement("p");
next5Temp.innerText = "Temp min: " + info.daily[5].temp.min + "°" + "  Temp max: " + info.daily[5].temp.max + "°";
document.getElementById("next-5").appendChild(next5Temp);
// create p element to hold next 5 wind and append to next 5
var next5Wind = document.createElement("p");
next5Wind.innerText = "Wind: " + info.daily[5].wind_speed + " mph";
document.getElementById("next-5").appendChild(next5Wind);
// create p element to hold next 5 humidity and append to next 5
var next5Humid = document.createElement("p");
next5Humid.innerText = "Humidity: " + info.daily[5].humidity + "%";
document.getElementById("next-5").appendChild(next5Humid);
}

var currentTime = moment();

var today = currentTime.format("MM/DD/YYYY");

var displayDates = function() {
    displayToday();
    displayNext1Date();
    displayNext2Date();
    displayNext3Date();
    displayNext4Date();
    displayNext5Date();

}

var displayToday = function() {
    var todaysDate = document.createElement("h3");
    todaysDate.textContent = today;
    document.getElementById("city-info").appendChild(todaysDate);
}

var displayNext1Date = function() {
    var next1Date = document.createElement("h3");
    next1Date.textContent = currentTime.add(1, "days").format('MM/DD');
    next1Date.className = "card-title";
    document.getElementById("next-1").appendChild(next1Date);
}

var displayNext2Date = function() {
    var next2Date = document.createElement("h3");
    next2Date.textContent = currentTime.add(2, "days").format('MM/DD');
    next2Date.className = "card-title";
    document.getElementById("next-2").appendChild(next2Date);
}

var displayNext3Date = function() {
    var next3Date = document.createElement("h3");
    next3Date.textContent = currentTime.add(3, "days").format('MM/DD');
    next3Date.className = "card-title";
    document.getElementById("next-3").appendChild(next3Date);
}

var displayNext4Date = function() {
    var next4Date = document.createElement("h3");
    next4Date.textContent = currentTime.add(4, "days").format('MM/DD');
    next4Date.className = "card-title";
    document.getElementById("next-4").appendChild(next4Date);
}

var displayNext5Date = function() {
    var next5Date = document.createElement("h3");
    next5Date.textContent = currentTime.add(5, "days").format('MM/DD');
    next5Date.className = "card-title";
    document.getElementById("next-5").appendChild(next5Date);
}

displayDates();
