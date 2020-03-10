
class ClickCounter {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.multiplier = 1;
        this.multiplierCost = 10;
        this.multiplierCount = 0;
        this.multiplierRate = 1.1;
       
    }
    countClick() {
        this.clickCount += 1 * (Math.pow(1.2, this.multiplierCount));
    }
  
    getCompanionCount() {
        return this.companionCount;
    }
    purchaseCompanion() {
        if (this.haveEnoughClicksToBuyCompanion()) {
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = Math.round(this.companionCost * 1.1);
           
        }

    }
    incrementWithPurchaseCompanions() {
        for (let i = 0; i < this.companionCount; i++) {
            this.countClick();
        }
    }
    
    purchaseMultiplier(){
        if (this.haveEnoughClicksToBuyMultiplier()) {
            this.clickCount -= this.multiplierCost;
            this.multiplierCount++;
            this.multiplierCost = Math.round(this.multiplierCost * 1.1);

        }
    }   
    haveEnoughClicksToBuyMultiplier() {
        return this.clickCount >= this.multiplierCost;
    }
    haveEnoughClicksToBuyCompanion() {
        return this.clickCount >= this.companionCost;
    }

    getClickCount(){
        return Math.round(this.clickCount);
    }  
}
