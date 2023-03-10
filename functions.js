export {sayHello, currentDate, clock}

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

function getYear(){}
function getMonth(){}
function getDay(){}
function getHours(){}
function getMinutes(){}
function getSeconds(){}

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
