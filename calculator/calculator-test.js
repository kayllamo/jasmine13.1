
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 8, rate: 5.8})).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 10000, years: 8, rate: 5.8})).toEqual('130.44');
});

/// etc
