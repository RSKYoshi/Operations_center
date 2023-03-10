import {currentDate, sayHello, clock} from "./functions.js";


let youtubeVideo = document.getElementById("video");
youtubeVideo.setAttribute("src","https://www.youtube.com/embed/HdiKqg23D0o?controls=0" );
youtubeVideo.setAttribute("title","YouTube video player");
youtubeVideo.setAttribute("width","560");
youtubeVideo.setAttribute("height","315");
youtubeVideo.setAttribute("frameBorder","0");
youtubeVideo.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");

let flexboxFroggy = document.getElementById("flexFrog");
flexboxFroggy.setAttribute("src", "https://flexboxfroggy.com/")
flexboxFroggy.setAttribute("width","900");
flexboxFroggy.setAttribute("height","643");







// let div1 = document.getElementById("div1");
// div1.addEventListener("click", sayHello);

// let date = document.getElementById("clock");
// datebox.addEventListener("click", function (){
//     alert(currentDate())
// })
// date.innerText = clock();

