//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
//const city = document.getElementById('city');
const getweather = (city) => {
    //const cityName = document.getElementById('cityName');
    cityName = document.getElementById('cityName');
    cloud_pct = document.getElementById('cloud_pct');
    temp = document.getElementById('temp');
    temp2 = document.getElementById('temp2');
    feels_like = document.getElementById('feels_like');
    humidity = document.getElementById('humidity');
    humidity2 = document.getElementById('humidity2');
    min_temp = document.getElementById('min_temp');
    max_temp = document.getElementById('max_temp');
    wind_speed = document.getElementById('wind_speed');
    wind_speed2 = document.getElementById('wind_speed2');
    wind_degrees = document.getElementById('wind_degrees');
    sunrise = document.getElementById('sunrise');
    sunset = document.getElementById('sunset');

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}


Submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("Delhi")