let input = document.querySelector(".search");
let btn = document.querySelector(".submit")

fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9a01012f8fa0847a6c1da9bd58353c95")