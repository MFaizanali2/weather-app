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

    
    console.log(data)
}
btn.addEventListener("click", checkdata);
