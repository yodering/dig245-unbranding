
/* javascript */

var topText = document.getElementById("top-text");
    topText.addEventListener("mouseover", function() {
        topText.textContent = "Advanced Profit";
        });
    topText.addEventListener("mouseout", function() {
        topText.textContent = "Advanced Placement";
        });

var acorn = document.getElementById("acorn");
var h2 = document.getElementById("click")
    acorn.addEventListener("mouseover", function() {
        h2.classList.toggle('infade')
    });
    acorn.addEventListener("mouseout", function() {
        h2.classList.toggle('infade')
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

const bottomText = document.getElementById("bottom-text");
const lettersToChange = "llege";
const replacementText = "rrupt";
let index = 0; 
    document.getElementById("acorn").addEventListener("click", function () {
        if (index < lettersToChange.length) {
            const current = lettersToChange[index];
            const corruptText = bottomText.textContent.replace(current, replacementText[index]);
            bottomText.textContent = corruptText;
            index++;
        }
    });


console.log("College Board has faced criticism for its percieved corruption and monopoly-like practices.")
console.log("Such criticism concerns the high costs of its services, lack of transparency in scoring and question selection, and heavily reliance on its standardized tests in college.")
console.log("AP, or Advanced Placement exams cost on average $100, where the SAT costs around $50. To those that are unable to afford these steep costs, there is potential for them to miss out on college credit, and even a reduced chance in college admissions, when coursework is considered heavily at top universities.")
console.log("With limited competition in the standardized testing market, some argue that College Board wields excessive power and control, which can hinder fairness and equity in education.")
console.log("Some links for reference: https://highschool.latimes.com/fountain-valley-high-school/opinion-the-college-board-is-a-corrupt-monopolistic-money-scheme/")
console.log("https://millermedianow.org/8317/opinions/headline-how-college-board-makes-millions-off-of-students-each-year/")
console.log("https://www.uchscommander.com/opinions/2021/06/07/corrupt-college-board-creates-monopoly/")
console.log("Figma design: https://www.figma.com/file/3py9cStknQ3p0wfvzMSc6H/corrupt-board?type=design&node-id=0%3A1&mode=design&t=0BWyt10gmZ6nJXIS-1")
