let gameEngine = new ClickCounter();

let clickButton = document.querySelector('.click-img');
let displayCount = document.querySelector('.click-counter');
let resetButton = document.querySelector('.reset-btn');
let purchaseCompanion = document.querySelector('.purchase-companion');
let displayCompanion = document.querySelector('.companion-count');
let displayCompanionCost = document.querySelector('.companion-cost');
let multiplierButton = document.querySelector('.click-multiplier');
let displayMultiplierCost = document.querySelector('.multiplier-cost');
let displayMultiplierCount = document.querySelector('.multiplier-count');



displayCount.innerHTML = "Clicking Count: " + gameEngine.clickCount;
displayCompanionCost.innerHTML = gameEngine.companionCost;
displayCompanion.innerHTML = "Companion Count: " + gameEngine.companionCount;

function update() {
    displayCount.innerHTML = "Clicking Count: " + gameEngine.clickCount.toFixed(0);
    displayCompanionCost.innerHTML = gameEngine.companionCost;
    displayCompanion.innerHTML = "Companion Count: " + gameEngine.companionCount;
    displayMultiplierCost.innerHTML = gameEngine.multiplierCost.toFixed(0);
    displayMultiplierCount.innerHTML = gameEngine.multiplierCount; 
    
}

clickButton.onclick = function () {
    gameEngine.countClick()
    displayCount.innerHTML = "Clicking Count: " + gameEngine.clickCount;
}
resetButton.onclick = function () {
    gameEngine = new ClickCounter();
    update();
}

wireUpPurchaseCompanionButton();

function wireUpPurchaseCompanionButton() {
    purchaseCompanion.onclick = function () {
        if (gameEngine.clickCount >= gameEngine.companionCost) {
            gameEngine.purchaseCompanion();
            update();
           
        }
    };
}

wireUpPurchaseMultiplier();
function wireUpPurchaseMultiplier() {
    multiplierButton.onclick = function () {
        if (gameEngine.clickCount >= gameEngine.multiplierCost) {
            gameEngine.purchaseMultiplier();
            update();
            timer();
            
           
        }
    }

}
function timer() { 
    gameEngine.countClick();
    gameEngine.incrementClicks();
    gameEngine.incrementWithPurchaseCompanions();
    update();
}
setInterval(timer, 1500);

