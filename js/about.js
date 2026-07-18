const gaming = document.getElementById("gaming-secret");
const popup = document.getElementById("secretMission");
const achievement = document.getElementById("achievementPopup");

const choices = popup ? popup.querySelectorAll(".game-choice") : [];

if (gaming && popup) {
    gaming.addEventListener("click", function(){
        popup.classList.add("active")
    });
}

choices.forEach(function(choice) {
    choice.addEventListener("click", function() {
        popup.classList.remove("active");
        achievement.classList.add("active");
    });
});

const closeAchievement = document.getElementById("closeAchievement");
if (closeAchievement && achievement){
    closeAchievement.addEventListener("click", function() {
        achievement.classList.remove("active");
    });
}

const baking = document.getElementById("baking-secret");
console.log(baking);
const bakingMission = document.getElementById("bakingMission");
const bakeButton = document.getElementById("bakeCookie");
const cookieCounter = document.getElementById("cookieCounter");
const bakingAchievement = document.getElementById("bakingAchievement");
const closeBaking = document.getElementById("closeBaking");

let cookies = 0;
if (baking && bakingMission){
    baking.addEventListener("click", function() {
        bakingMission.classList.add("active");
    });
}

if(bakeButton){
    bakeButton.addEventListener("click", function (){
         cookies++;

    cookieCounter.textContent =
    "Cookies baked:" + cookies;
    if (cookies === 5) {
        bakingMission.classList.remove("active");
        bakingAchievement.classList.add("active");
    } 
    });
}

if(closeBaking) {
    closeBaking.addEventListener("click", function() {
        bakingAchievement.classList.remove("active");
        cookies = 0;
        cookieCounter.textContent =
        "Cookies Baked: 0";
    });
}
