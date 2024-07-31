        // search input area
let input = document.querySelector(".search");
let btn = document.querySelector(".submit");


        // container area
let temperature = document.querySelector(".temp");
let cityname = document.querySelector(".name");
let countryname = document.querySelector(".country");
let time = document.querySelector(".time");
let date = document.querySelector(".date");
let icon = document.querySelector(".icon");
let condition = document.querySelector(".condition");


        // second area
let cloud = document.querySelector(".clouds");
let humidity = document.querySelector(".humids");
let wind = document.querySelector(".winds");


function fetchdata(){
    console.log(input.value)
}
btn.addEventListener("click", fetchdata);

fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9a01012f8fa0847a6c1da9bd58353c95")