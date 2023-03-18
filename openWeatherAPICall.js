
import {browserCoords, browserlat, browserLong} from "./functions.js"
//objective: on page load, show a functioning weather forecast

//this const app has several functions that may be activated via dot notation [ex: app.init()]
const app = {
    //this will initialize fetchWeather
    init: () => {
        // document
        //     .getElementById("weather")
        //     .innerHTML = app.fetchWeather
        app.fetchWeather();
    },
    //this fetchWeather key will make the API call using the user's current location based off browser
    fetchWeather: (position) => {
        navigator.geolocation.getCurrentPosition(position => {

            let lat = position.coords.latitude.toFixed(2);
            let long = position.coords.longitude.toFixed(2);
            let key = OPENWEATHER_API_KEY
            let units = "metric"
            let lang = "en"

            let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units}&lang=${lang}`
            fetch(url)
                .then(resp => {
                    // if(!resp.ok) throw new Error(resp.statusText);
                    return resp.json()
                })
                .then(apiData => {
                    app.showWeather(apiData);
                    console.log(apiData);
                    let weatherDiv = document.getElementById("weather");
                    for (let i = 0; i < 7; i++) {
                        for (let j = 0; j < 1; j++) {
                            const week = [ ]


                            weatherDiv.innerHTML += `
                            
                            <div id="apiBaseCard">
                                <div>${new Date(apiData.daily[i].dt * 1000).toDateString()}</div>
                                <hr>
                                <div>${apiData.daily[i].weather[j].description}</div>
                            </div>
                        
                        `
                        }
                    }



                })



        })
    },
        //fetch weather using the lat/long from browser
        // let queryParams = new URLSearchParams( {
            // lat: position.coords.latitude.toFixed(2),
            // long: position.coords.longitude.toFixed(2),
            // APPID: OPENWEATHER_API_KEY,
        //     appid: OPENWEATHER_API_KEY,
        //     lat: 29.4534574,
        //    long: -98.6640584,
        //     lang: "en",
        //     units: "imperial"
        // })
        // console.log(queryParams);
        // let lat = browserCoords
        // let long = browserCoords
        // let lat = 29.4534574
        // let long = -98.6640584
        // let key = '585c78787d7c11f15ac5fdcfde8c9bc9'
        // let units = "metric"
        // let lang = "en"

        // let url = `https://api.openweathermap.org/data/2.5/onecall?${queryParams}`
        // let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units}&lang=${lang}`
        //API call
        // fetch(url)
        //     .then(resp=>{
                // if(!resp.ok) throw new Error(resp.statusText);
                // return resp.json()
            // })
            // .then(apiData=>{
            //     app.showWeather(apiData);
                // console.log(apiData);
            // })
    // },
    // getLocation: (e)=>{
    //     navigator.geolocation.getCurrentPosition(app.coordinateParams)
    // },
    // coordinateParams: (position) => {
    //     let lat = position.coords.latitude.toFixed(2);
    //     let long = position.coords.longitude.toFixed(2);
    // },
    showWeather: (resp) => {
        console.log(resp);
    }


}
app.init();

//to open nested objects in console.log
// console.log(JSON.stringify(yourObject, null, 2));