//37edbcbc96ac8cc8f0421c70095d055b
const apiKey = "37edbcbc96ac8cc8f0421c70095d055b";

const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const desc = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

const months =
    [
        'January', 'February',
        'March', 'April',
        'May', 'June', 
        'July','August', 
        'September', 'October',
        'November', 'December'
    ];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.textContent = `${month} ${day} ${year}`;


const app = document.getElementById('app');
const getWeather = async () => {
    try {
        const cityName = document.getElementById('searchBarInput').value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const weatherDataFetch = await fetch(url, {

            headers: {
                Accept: 'application/json'
            }
        });

        const weatherData = await weatherDataFetch.json()
        console.log(weatherData);

        city.textContent = `${weatherData.name}`;
        desc.textContent = `${weatherData.weather[0].main}`
        console.log(weatherData.weather[0].icon);
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`
        tempMax.innerHTML =`${weatherData.main.temp_max}°C`;
        tempMin.innerHTML =`${weatherData.main.temp_min}°C`;

    } catch (error) {
        console.log(error)
    }
}