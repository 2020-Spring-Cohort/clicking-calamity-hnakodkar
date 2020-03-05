describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
    })
    describe('countClick() records clicks and ClickCount can give the clickCount', () => {
        
        it('countClick() 1 time should result in a clickCount of 1.', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2.', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
    describe('Clicking Companions:', () => {
        it("ClickCount should have 0 when new.", () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });

        it("ClickCount should have 1 companion after 100 clicks.",() =>{
            for(let i = 0; i<100; i++) {
                underTest.countClick()
            }
            underTest.purchaseCompanion()
            expect(underTest.getCompanionCount()).toBe(1);
        });
        it("ClickCount should be able to purchase more clicking companions.",() =>{
            for (let i = 0; i<220; i++){
                underTest.countClick()
            }
            underTest.purchaseCompanion()
            underTest.purchaseCompanion()
            expect(underTest.getCompanionCount()).toBe(2);
         });

        it("the cost of purchase companion goes up by 10%.",() =>{
            for (let i = 0; i<100; i++){
                underTest.countClick()
            }
            underTest.purchaseCompanion()
            expect(underTest.companionCost).toBe(Math.round(100 * 1.1));
        
         });

         it("The cost of each Clicking Companion will go up with each purchase by 10%.",() =>{
             
            for (let i = 0; i<210; i++){
                underTest.countClick();
            } 
                underTest.purchaseCompanion()
                underTest.purchaseCompanion()
                expect(underTest.clickCount).toBe(0);
                expect(underTest.companionCost).toBe(121);
           
         })


});
   

});