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


function data() {
    let url = ("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9a01012f8fa0847a6c1da9bd58353c95")
    fetch(url)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((err) =>{
        console.log(err)
    })

    
}

btn.addEventListener("click", data);
