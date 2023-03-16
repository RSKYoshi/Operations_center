export {sayHello, currentDate, clock}
let lat;
let long;

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


//this manipulates what to do with gps data
function coordsAPI(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long);

    //make the api call in here???
    

}




//this says to get the current gps coordinates from the user's browser using users's position
function showCoordsAPI(){
    navigator.geolocation.getCurrentPosition(coordsAPI);
}
showCoordsAPI();


// function openWeatherAPICall() {
// }




