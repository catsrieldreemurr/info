// References 
const interestImage = document.getElementById("interestImage");
const interestText = document.getElementById("interestText");

// global variables 
let imageReferences = [
    { // BFDI
        path: "../images/interests/BFDI.png",
        text: "Battle for Dream Island"
    }, 
    { // Doors
        path: "../images/interests/Doors.png",
        text: "Roblox: Doors"
    }, 
    { // Forsaken
        path: "../images/interests/Forsaken.png",
        text: "Forsaken"
    }, 
    { // Gamedev
        path: "../images/interests/Gamedev.png",
        text: "Game Development"
    }, 
    { // Pressure
        path: "../images/interests/Pressure.png",
        text: "Pressure"
    }, 
]

let currentImage = 0;

interestImage.addEventListener("click", () => {
    if(currentImage < imageReferences.length - 1){
        currentImage += 1;
    }
    else {
        currentImage = 0
    }
    console.log(currentImage)
    interestImage.src = imageReferences[currentImage].path;
    interestText.innerHTML = imageReferences[currentImage].text;
})

