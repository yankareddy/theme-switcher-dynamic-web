let bgContainerEl = document.getElementById("bgContainer");
let themeUserInputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");

themeUserInputEl.addEventListener("keydown", function(Event) {
    let userInput = themeUserInputEl.value;
    if (Event.key === "Enter" && (userInput !== "Light" && userInput !== "Dark")) {
        alert("Enter the valid theme")
    } else {
        if (Event.key === "Enter" && userInput !== "Light") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        } else {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        }
    }
})