
/* javascript */

var topText = document.getElementById("hoverText");
        topText.addEventListener("mouseover", function() {
            topText.textContent = "Advanced Profit";
        });
        topText.addEventListener("mouseout", function() {
            topText.textContent = "Advanced Placement";
        });

var acorn = document.getElementById("acorn");
var currentImage = 1;
var totalImages = 6;
    
    acorn.addEventListener("click", function() {
        currentImage++;
        if (currentImage > totalImages) {
            currentImage = 6;
        }
        acorn.src = "assets/acorn" + currentImage + ".png";    
    });

        

const bottomText = document.getElementById("bottomText");
const lettersToChange = "llege";
const replacementText = "rrupt";
let currentIndex = 0;
        
    document.getElementById("acorn").addEventListener("click", function () {
        if (currentIndex < lettersToChange.length) {
            const currentLetter = lettersToChange[currentIndex];
            const corruptText = bottomText.textContent.replace(currentLetter, replacementText[currentIndex]);
            bottomText.textContent = corruptText;
            currentIndex++;
        }
    });

