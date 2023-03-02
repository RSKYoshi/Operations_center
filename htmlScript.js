import {currentDate, sayHello} from "./functions.js";




let div1 = document.getElementById("div1");
div1.addEventListener("click", sayHello);

let dateBtn = document.getElementById("dateButton");
dateBtn.addEventListener("click", function (){
    alert(currentDate())
})