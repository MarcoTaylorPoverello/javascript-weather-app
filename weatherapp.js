

window.addEventListener("DOMContentLoaded", (event) => {
    const apiKey = "5632ecba87d5d909fa5a99cc1e3352fd";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function getWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
        
            var data = await response.json();

            document.querySelector('.region').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
            document.querySelector('.maxtemp').innerHTML = Math.round(data.main.temp_max) + "°C";
            document.querySelector('.lowtemp').innerHTML = Math.round(data.main.temp_min) + "°C";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "./images/cloudy.png";
            } else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "./images/sun.png"
            } else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "./images/rainy-day.png"
            } else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "./images/snow.png"
            } else if(data.weather[0].main == "Thunderstorm"){
                weatherIcon.src = "./images/storm.png"
            } else if(data.weather[0].main == "Mist")
                weatherIcon.src = "./images/mist.png"

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        
        }
    }

    searchButton.addEventListener("click", () => {
        getWeather(searchBox.value);
    })

    getWeather();
});