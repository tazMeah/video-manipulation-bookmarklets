function flipX(){
   if (document.querySelector("video").style.transform === "scaleX(-1)"){ 
        document.querySelector("video").style.transform = ""; 
    } else {
        document.querySelector("video").style.transform="scalex(-1)";
    } 
}


function flipY(){
    if (document.querySelector("video").style.transform === "scaleY(-1)") { 
        document.querySelector("video").style.transform = ""; 
    } else { 
        document.querySelector("video").style.transform="scaley(-1)";
    } 
}


function rotate(){
    if (document.querySelector("video").style.transform === "rotate(270deg)"){ 
        document.querySelector("video").style.transform = ""; 
    } else if (document.querySelector("video").style.transform === "rotate(180deg)") { 
        document.querySelector("video").style.transform  = "rotate(270deg)"; 
    } else if (document.querySelector("video").style.transform === "rotate(90deg)"){ 
        document.querySelector("video").style.transform = "rotate(180deg)"; 
    } else { 
        document.querySelector("video").style.transform = "rotate(90deg)"; 
    } 
}