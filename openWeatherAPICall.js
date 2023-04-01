
import {browserCoords, browserlat, browserLong} from "./functions.js"
let today = new Date();

//objective: on page load, show a functioning weather forecast

//this const app has several functions that may be activated via dot notation [ex: app.init()]
const app = {
    //this will initialize fetchWeather
    init: () => {
        // document
        //     .getElementById("weather")
        //     .innerHTML = app.fetchWeather
        app.fetchWeather();
        function clearForecast(){
            app.fetchWeather = ""
            // console.log("test");
        }
        // function getForecast(){
        //     app.fetchWeather();
        // }
        setInterval( ()=>{clearForecast();  app.fetchWeather()},15*60*1000);
    },
    //this fetchWeather key will make the API call using the user's current location based off browser
    fetchWeather: (position) => {
        navigator.geolocation.getCurrentPosition(position => {

            let lat = position.coords.latitude.toFixed(2);
            let long = position.coords.longitude.toFixed(2);
            let key = OPENWEATHER_API_KEY
            let units = "imperial"
            let lang = "en"

            let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units}&lang=${lang}`
            fetch(url)
                .then(resp => {
                    // if(!resp.ok) throw new Error(resp.statusText);
                    return resp.json()
                })
                .then(apiData => {
                    app.showWeather(apiData);
                    // console.log(apiData);
                    let weatherDiv = document.getElementById("weather");

                    //at index 0, I want the day to say "today" instead of the actual day name
                    for (let i = 0; i < 7; i++) {
                        for (let j = 0; j < 1; j++) {
                            // console.log([0]);
                            // console.log(today);
                            let currentDay = new Date(apiData.daily[i].dt * 1000).toDateString();
                            // console.log(currentDay);
                            // currentDay === today ? "today":currentDay
                            // console.log(currentDay.split(' '));
                            let dateArray = currentDay.split(' ');
                            // console.log(dateArray);
                            let replacementDay = dateArray[0];
                            // console.log(replacementDay);
                            // console.log(today);
                            // console.log(currentDay);
                            let onlyToday = new Date(apiData.daily[j].dt * 1000).toDateString();
                            // console.log(onlyToday);
                            let firstDay = onlyToday.split(' ')[0];
                            // console.log(firstDay);

                            if(replacementDay===firstDay){
                               replacementDay="Today"
                            }
                            // let weekArraySearch = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                            // let todayString = "Today"
                            // for (let k = 0; k < replacementDay.length; k++) {
                            //     replacementDay[0].replace("Sun", todayString)
                            // }
                            // for (let k = 0; k < dateArray.length; k++) {
                            //     replacementDay = dateArray[i].replace("", "Today")
                            // }


                            weatherDiv.innerHTML += `
                            <div class="apiBaseCardBorder">
                                 <div class="apiBaseCard">
                                    <img src="https://openweathermap.org/img/wn/${apiData.daily[i].weather[j].icon}@2x.png" 
                                    alt="img"/>
                                    <div>${replacementDay}</div>
                                    <hr class="hr">
                                    <div>${apiData.daily[i].weather[j].description}</div>
                                    <hr class="hr">
                                    <div>HI: ${apiData.daily[i].temp.max}°F</div>
                                    <div>Low: ${apiData.daily[i].temp.min}°F</div>
                                </div>
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
        // console.log(resp);
    //    starbucks lat: 29.4416905 long: -98.6661463
    }


}
app.init();

//to open nested objects in console.log
// console.log(JSON.stringify(yourObject, null, 2));