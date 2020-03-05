
class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost =100;
    }
    countClick() {
        this.clickCount++;
    }
    getCompanionCount(){
        return 0;
    }
    getCompanionCount(){
        return this.companionCount;
    }
    purchaseCompanion(){
        if(this.clickCount >= this.companionCost){
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = Math.round(this.companionCost * 1.1);
        }
    
    }

    }
