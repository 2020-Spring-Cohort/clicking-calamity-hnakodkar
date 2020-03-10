let gameEngine = new ClickCounter();

let clickButton = document.querySelector('.click-img');
let displayCount = document.querySelector('.click-counter');
let resetButton = document.querySelector('.reset-btn');
let purchaseCompanion = document.querySelector('.purchase-companion')
let displayCompanion = document.querySelector('.companion-count');
let displayCompanionCost = document.querySelector('.companion-cost');
let multiplierButton = document.querySelector('.click-multiplier');
let displayMultiplierCost = document.querySelector('.multiplier-cost');
let displayMultiplierCount = document.querySelector('.multiplier-count');



displayCount.innerHTML = "Clicking Count: " + gameEngine.clickCount.toFixed(0);
displayCompanionCost.innerHTML = gameEngine.companionCost;
displayCompanion.innerHTML = "Companion Count: " + gameEngine.companionCount;

function update() {
    displayCount.innerHTML = "Clicking Count: " + gameEngine.clickCount.toFixed(0);
    displayCompanionCost.innerHTML = gameEngine.companionCost;
    displayCompanion.innerHTML = "Companion Count: " + gameEngine.companionCount;
    displayMultiplierCost.innerHTML = gameEngine.multiplierCost.toFixed(0);
    displayMultiplierCount.innerHTML = gameEngine.multiplierCount;
    togglingMultiplierButton();
    togglingCompanionButton();
}

clickButton.onclick = function () {
    gameEngine.countClick()
    displayCount.innerHTML = "Clicking Count: " + gameEngine.clickCount.toFixed(0);
}
resetButton.onclick = function () {
    gameEngine = new ClickCounter();
    update();
}

wireUpPurchaseCompanionButton();

function togglingMultiplierButton() {
    if (gameEngine.haveEnoughClicksToBuyMultiplier()) {
        multiplierButton.disabled = false;
    }
    else {
        multiplierButton.disabled = true;
    }
}
function togglingCompanionButton() {
    if (gameEngine.haveEnoughClicksToBuyCompanion()) {
        purchaseCompanion.disabled = false;
    }
    else {
        purchaseCompanion.disabled = true;
    }
}
function stopPlaySound () {
    document.getElementById("snare").load();
    document.getElementById("snare").play();
  }

function wireUpPurchaseCompanionButton() {
    purchaseCompanion.onclick = function () {
        if (gameEngine.clickCount >= gameEngine.companionCost) {
            gameEngine.purchaseCompanion();
            stopPlaySound();
            update();
           
        }
    }
}
function timer() { 
    gameEngine.incrementWithPurchaseCompanions();
    update();
}
setInterval(timer, 1000);

wireUpPurchaseMultiplier();
function wireUpPurchaseMultiplier() {
    multiplierButton.onclick = function () {
        if (gameEngine.clickCount >= gameEngine.multiplierCost) {
            gameEngine.purchaseMultiplier();
            stopPlaySound();
            update();
            
        }
    }

}

