import {currentDate, sayHello} from "./functions.js";


let youtubeVideo = document.getElementById("video");
youtubeVideo.setAttribute("src","https://www.youtube.com/embed/HdiKqg23D0o?controls=0" );
youtubeVideo.setAttribute("title","YouTube video player");
youtubeVideo.setAttribute("width","560");
youtubeVideo.setAttribute("height","315");
youtubeVideo.setAttribute("frameBorder","0");
youtubeVideo.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");










let div1 = document.getElementById("div1");
div1.addEventListener("click", sayHello);

let dateBtn = document.getElementById("dateButton");
dateBtn.addEventListener("click", function (){
    alert(currentDate())
})

