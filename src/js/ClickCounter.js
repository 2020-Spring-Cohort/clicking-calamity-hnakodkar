
class ClickCounter {
    constructor() {
        this.clickCount = 150;
        this.companionCount = 0;
        this.companionCost = 100;
        this.multiplier = 1.0;
        this.multiplierCost = 10;
        this.multiplierCount = 0;
        this.multiplierRate = 1.1;
       
    }
    countClick() {
        this.clickCount++;
    }
    getCompanionCount() {
        return 0;
    }
    getCompanionCount() {
        return this.companionCount;
    }
    purchaseCompanion() {
        if (this.clickCount >= this.companionCost) {
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = Math.round(this.companionCost * 1.1);
           
        }

    }

    incrementClicks() {
        this.clickCount += this.multiplier;
        return this.clickCount;
    }
    incrementWithPurchaseCompanions() {
        for (let i = 0; i < this.companionCount; i++) {
            this.incrementClicks();
        }
    }
    
    purchaseMultiplier(){
        if (this.clickCount >= this.multiplierCost.toFixed(0)) {
            this.clickCount -= this.multiplierCost.toFixed(0);
            this.multiplierCount++;
            this.multiplierCost += 1 * (Math.pow(1.2, this.multiplierCount));
        }
    }     
}
