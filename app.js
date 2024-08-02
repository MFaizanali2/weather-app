// search input area
let input = document.getElementById("search");
let btn = document.getElementById("submit");
let API_KEY = "6a2cbb94ad82ec57712155442fb8198c";
let weather = document.querySelector(".weather");

console.log(input.value)


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
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${API_KEY}`;
    fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        getdata(data);
        console.log(data)
    })
    .catch((err) =>{
        console.log(err)
    })
   
    } 
    console.log(input.value)
    
}

function getdata(data){

    const { temp, feels_like } = data.main;
    const {speed} = data.wind;
    let updatedTemp = Math.floor(temp);
    let feelMax = Math.floor(feels_like);
    let { main, icon, id } = data.weather[0];
    let urlImg;

    weather.innerHTML = `
     <div class="container">
            <h3 class="brand">The Weather</h3>

            <h1 class="temp" id="temp">${updatedTemp} <sup>o</sup></h1>
        <div class="city">
            <h1 class="name" id="name">${data.name}</h1>
            <h4 class="country" id="country">${data.sys.country}</h4>
            <small>
                <span class="time" id="time">">${data.timezon}</span>
                <span class="date" id="date">Sunday july 28</span>
            </small>
        </div>
        <div class="app">
            <img src="./assests/images/clouds.png" class="icon" id="icon" width="50" height="50" alt="icon">
            <span class="condition" id="condition">Cloudy</span>
        </div>
        </div>`
}
btn.addEventListener("click", checkdata);













// function getdata(data){
    
//     let dt13 = new Date(data.sys.sunset * 1000);
//     let dt12 = new Date(data.sys.sunset * 1000);
//     let dt11 = new Date(data.sys.sunset * 1000);
//     let dt10 = new Date(data.sys.sunset * 1000);
//     let dt8 = new Date(data.sys.sunset * 1000);
//     let dt7 = new Date(data.sys.sunset * 1000);
//     let dt6 = new Date(data.sys.sunset * 1000);
//     let dt5 = new Date(data.sys.sunset * 1000);
//     let dt4 = new Date(data.sys.sunset * 1000);



//     wind.innerHTML = `${data.wind.speed} m/s`;
//     humidity.innerHTML = `${data.main.humidity}%`;
//     cloud.innerHTML = `${data.clouds.all}%`;
//     countryname.innerHTML = `${data.sys.country}`;
//     let dt1 = new Date(data.dt * 1000);
//     condition.innerHTML = `${data.weather[0].description}`;
//     let dt = new Date(data.dt * 1000);
//     icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     temperature.innerHTML = `${Math.floor(data.main.temp - 273.15)}°C`;
//     cityname.innerHTML = `${data.name}`;

    
//     console.log(data)
// }
