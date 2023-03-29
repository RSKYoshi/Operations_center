







// let lat = position.coords.latitude.toFixed(2);
// let long = position.coords.longitude.toFixed(2);
let key = OPENWEATHER_API_KEY
let layer = "precipitation_new"
let z = 1
let x = 1
let y = 1
// let units = "imperial"
// let lang = "en"

// let url = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${key}`
// let url = `https://maps.openweathermap.org/maps/2.0/weather/1h/HRD0/4/1/6?&appid=${key}`
let url = `http://maps.openweathermap.org/maps/2.0/weather/${layer}/${z}/${x}/${y}?appid=${key}`
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city name},${country code}&appid=${key}`
fetch(url)
    .then(resp => {
        // if(!resp.ok) throw new Error(resp.statusText);
        return resp.json()
    })
    .then(apiData => {
        // app.showWeather(apiData);
        console.log(apiData);
    })