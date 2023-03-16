
//objective: on page load, show a functioning weather forecast

const app = {
    init: () => {
        // document
        //     .getElementById("weather")
        //     .innerHTML = app.fetchWeather
        app.fetchWeather();
    },
    fetchWeather: (position) => {
        //fetch weather using the lat/long from browser
        // let queryParams = new URLSearchParams({
        //     // lat: position.coords.latitude.toFixed(2),
        //     // long: position.coords.longitude.toFixed(2),
        //     APPID: "",
        //     lat: 29.4534574,
        //     long: -98.6640584,
        //     lang: "en",
        //     units: "imperial"
        // })
        // console.log(queryParams);
        let lat = 29.4534574
        let long = -98.6640584
        let key = ""
        let units = "metric"
        let lang = "en"

        // let url = `https://api.openweathermap.org/data/3.0/onecall?${queryParams}`
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=${units}&lang=${lang}`
        //API call
        fetch(url)
            .then(resp=>{
                if(!resp.ok) throw new Error(resp.statusText);
                return resp.json()
            })
            .then(apiData=>{
                app.showWeather(apiData);
            })

    },
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