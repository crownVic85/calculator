
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 5,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('372.86');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 20061,
    years: 5,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('374.00');
});

it("should handle high interest rates", function() {
  const values = {
    amount: 15000,
    years: 10,
    rate: 30
  };
  expect(calculateMonthlyPayment(values)).toEqual('395.43');
});

it("should handle low interest rates", function() {
  const values ={
    amount: 15000,
    years: 6,
    rate: 1.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('214.73');
})