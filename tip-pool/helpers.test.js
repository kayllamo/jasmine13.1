describe('payment total tests', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();  
    });

    it('should sum all bill payments', function (){
        expect(sumPaymentTotal('billAmt').toEqual(100));

        billAmtInput.value = 300;
        tipAmtInput.value = 20;

        expect(sumPaymentTotal('billAmt').toEqual(400));
    });

    it('should sum all tip payments', function(){
        expect(sumPaymentTotal('tipAmt').toEqual(20));

        billAmtInput.value = 300;
        tipAmtInput.value = 20;

        expect(sumPaymentTotal('tipAmt').toEqual(40));
    });

    it('should sum all tip percents', function(){
        expect(sumPaymentTotal('tipPercent').toEqual(20));

        billAmtInput.value = 300;
        tipAmtInput.value = 20;

        expect(sumPaymentTotal('tipPercent').toEqual(27));
    });



})