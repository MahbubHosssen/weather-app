const searchInput = document.getElementById("search-input")
const tempCountry = document.querySelector(".temp h2")
const searchBtn = document.getElementById("search-btn")
const temperature = document.querySelector(".temp h1")
const humidity = document.querySelector(".humidity-flex p")
const wind = document.querySelector(".wind-flex p")
const weatherImage = document.querySelector(".temp img")

const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "76c52913887f2427e9162249c8c17d8d";

async function loadApi(country){
    let res = await fetch(url + country + "&appid=" + apiKey + "&units=metric")
    let data = await res.json()
    return data;
    
}
async function displayWeather(){
    const data = await loadApi(searchInput.value)
    tempCountry.innerText = searchInput.value
    temperature.innerText = `${Math.round(data.main.temp)}°c`;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed}km/h`;
    
    if(data.weather[0].main == "Clouds"){
        weatherImage.src = "./images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherImage.src = "./images/clear.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherImage.src = "./images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherImage.src = "./images/mist.png"
    }else if(data.weather[0].main == "Rain"){
        weatherImage.src = "./images/rain.png"
    }else if(data.weather[0].main == "Snow"){
        weatherImage.src = "./images/snow.png"
    }else if(data.weather[0].main == "Fog"){
        weatherImage.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Haze"){
        weatherImage.src = "images/drizzle.png"
    }
}
searchBtn.addEventListener("click", displayWeather)

