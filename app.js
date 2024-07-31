// search input area
let input = document.getElementById("search");
let btn = document.getElementById("submit");



    // container area
let temperature = document.getElementById("temp");
let cityname = document.getElementById("name");
let countryname = document.getElementById("country");
let time = document.getElementById("time");
let date = document.getElementById("date");
let icon = document.getElementById("icon");
let condition = document.getElementById("condition");


// second area
let cloud = document.getElementById("clouds");
let humidity = document.getElementById("humids");
let wind = document.getElementById("winds");


function checkdata() {
    if(input.value.trim() === ""){
        alert("Please enter a city name");
    }else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=9a01012f8fa0847a6c1da9bd58353c95`)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        getdata(data);
    })
    .catch((err) =>{
        console.log(err)
    })
   
    } 
    
}

let weather = document.querySelector(".weather")
function getdata(data){
    
    // let dt13 = new Date(data.sys.sunset * 1000);
    // let dt12 = new Date(data.sys.sunset * 1000);
    // let dt11 = new Date(data.sys.sunset * 1000);
    // let dt10 = new Date(data.sys.sunset * 1000);
    // let dt8 = new Date(data.sys.sunset * 1000);
    // let dt7 = new Date(data.sys.sunset * 1000);
    // let dt6 = new Date(data.sys.sunset * 1000);
    // let dt5 = new Date(data.sys.sunset * 1000);
    // let dt4 = new Date(data.sys.sunset * 1000);



    // wind.innerHTML = `${data.wind.speed} m/s`;
    // humidity.innerHTML = `${data.main.humidity}%`;
    // cloud.innerHTML = `${data.clouds.all}%`;
    // countryname.innerHTML = `${data.sys.country}`;
    // let dt1 = new Date(data.dt * 1000);
    // condition.innerHTML = `${data.weather[0].description}`;
    // let dt = new Date(data.dt * 1000);
    // icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // temperature.innerHTML = `${Math.floor(data.main.temp - 273.15)}°C`;
    // cityname.innerHTML = `${data.name}`;



    weather.innerHTML = `
    <div class="container">
            <h3 class="brand">The Weather</h3>

            <h1 class="temp" id="temp">16 <sup>o</sup></h1>
        <div class="city">
            <h1 class="name" id="name">Karachi</h1>
            <h4 class="country" id="country">Pk</h4>
            <small>
                <span class="time" id="time">06:09</span>
                <span class="date" id="date">Sunday july 28</span>
            </small>
        </div>
        <div class="app">
            <img src="./assests/images/clouds.png" class="icon" id="icon" width="50" height="50" alt="icon">
            <span class="condition" id="condition">Cloudy</span>
        </div>
        </div>
        
    
    <div class="panel">
        <form class="locationinput">
            <input type="text" placeholder="Search location" class="search" id="search">
            <button type="submit" class="submit" id="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <ul class="cities">
            <li>Karachi</li>
            <li>New York</li>
            <li>Paris</li>
            <li>Berlin</li>
        </ul>

        <ul class="details">
            <h3>Weather Details</h3>
            <li>
                <span>Cloudy</span>
                <span class="clouds" id="clouds">89%</span>
            </li>

            <li>
                <span>Humidity</span>
                <span class="humids" id="humids">64%</span>
            </li>

            <li>
                <span>Windy</span>
                <span class="winds" id="winds">8km/h</span>
            </li>

            
        </ul>
        </div>`
    
    console.log(data)
}
btn.addEventListener("click", checkdata);
