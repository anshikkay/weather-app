const submitButton = document.getElementById('submit'); 
const cityvalue = document.getElementById('cityname'); 
const cityName = document.getElementById('city'); 
const card = document.querySelector('.result'); 
let SKY = document.getElementById('sky'); 
let TEMP = document.getElementById('temp'); 
let WIND = document.getElementById('wind'); 
let HUMIDITY = document.getElementById('humidity'); 
let background = document.querySelector("#background"); 
var gif = document.getElementById("gif"); 
let date = document.querySelector("#date"); 
  
function getWeatherByLocation() { 
    API = 'fb58db4c8848ec132eba31274e2a5ecb'; 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue.value}&appid=${API}`) 
  
         .then( 
             res => res.json() 
         ) 
         .then(data => { 
             console.log(data); 
             if (cityvalue.value === "") { 
                 alert("Please enter a city name"); 
                 return 
             } 
             else { 
                 city.innerHTML = data.name; 
                 HUMIDITY.innerHTML =`Humidity: ${data.main.humidity}%`; 
                 TEMP.innerHTML = `Temperature: ${ Math.round(data.main.temp - 273.15  )}°C`; 
                 WIND.innerHTML = data.wind.deg; 
                 WIND.innerHTML =`Wind Speed: ${data.wind.speed}km/hr`; 
                 SKY.innerHTML = data.weather[0].main; 
                 card.classList.remove("res1") 
                 date.innerHTML = getDate();; 
  
                 setBackground(data.weather[0].main) 
                 setGif(data.weather[0].main) 
             } 
         }) 
 } 
  
 submitButton.addEventListener('click', getWeatherByLocation); 
 cityvalue.addEventListener("keypress", function (event) { 
     if (event.key === "Enter") { 
         getWeatherByLocation(); 
     } 
     });