
export {sayHello, currentDate, clock, browserlat, browserLong, browserCoords, getCityFromAPI, clickEffect};

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log("lat: " + lat + "\n" + "long: " + long);

    let showCoords = document.getElementById("location");
    showCoords.innerHTML = `<div>lat: ${lat} <br> long: ${long} </div>`
}

function sum(num1,num2){
    return num1 + num2
}

function sayHello(){
    alert("Hello")
    console.log("Hello");
}

function currentDate(){
    return new Date()
}

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    let time = hours + ":" + minutes + ":" + seconds

    document.getElementById("clock").innerText = time;
    // document.getElementById("clock").textContent = time;

    setTimeout(clock,1000)
    return time;
}
clock();


// function setClockTimeout(){
//     setInterval(function(){ clock() }, 1000);
// }




// function alertFunction(currentDate){
//     alert(currentDate)
// }









//this says to get the current gps coordinates from the user's browser using users's position
function showCoordsAPI(){
    return navigator.geolocation.getCurrentPosition(browserCoords);
}

function browserCoords(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}

//this manipulates what to do with gps data
function browserlat(position){
    let lat = position.coords.latitude;
    return lat
}

function browserLong(position){
    let long = position.coords.longitude;
    return long
}

function getCity(){
    navigator.geolocation.getCurrentPosition()
}




// function openWeatherAPICall() {
// }

function clickEffect(e){
    let d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";
    d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('mousemove', clickEffect);

function getCityFromAPI(position){
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude.toFixed(2);
        let long = position.coords.longitude.toFixed(2);
        let limit = 2;
        let url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=${limit}&appid=${OPENWEATHER_API_KEY}`

        fetch(url)
            .then((resp) =>
                resp.json()
            )
            .then((apiData) => {
                    console.log(apiData)
                    let cityDiv = document.getElementById("cityDiv");
                    // return cityDiv.innerHTML += "Weather for " + apiData[0].name
                    return cityDiv.innerHTML = apiData[0].name

                }
                // console.log(apiData)
            )
    })
}
window.onload=getCityFromAPI;






function currentLocation(position) {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let showCoords = document.getElementById("location");
        showCoords.innerHTML = `<div>lat: ${lat} <br> long: ${long} </div>`
        console.log("lat: " + lat + "\n" + "long: " + long);
    })
}
currentLocation();







let  iframeDiv =  document.getElementById("iframeBorderDiv");
iframeDiv.addEventListener("mousedown", mouseDown)

function mouseDown(e) {
    e.preventDefault();
    // console.log('test');
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    let prevX = e.clientX;
    let prevY  = e.clientY;
    // console.log('test');

    function mouseMove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY -  e.clientY;
        console.log(newX,newY);

        const rect =  iframeDiv.getBoundingClientRect();

        iframeDiv.style.left = rect.left - newX + "px"
        iframeDiv.style.top = rect.top - newY + "px"

        prevX = e.clientX;
        prevY = e.clientY;
    }
    function mouseUp(e) {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mousemove", mouseUp)

    }

}

    // iframeDiv.style.top= '50%';
    // function mouseMove(e){
    //     e.preventDefault();
//         iframeDiv.style.left = `${e.clientX}px`
//         iframeDiv.style.top = `${e.clientY}px`
//         console.log( e.clientX + "," + e.clientY );
//         // console.log('click');
//
//     }
//     iframeDiv.addEventListener("mousedown", mouseMove, false);
//
//
//     function mouseUp(e) {
//         // alert("drag has stopped")
//         e.preventDefault();
//         iframeDiv.style.left = `${e.clientX}px`
//         iframeDiv.style.top = `${e.clientY}px`
//     }
//     iframeDiv.addEventListener("dragend", mouseUp, false);
// }
// clickNDrag();
// window.onload = clickNDrag;










