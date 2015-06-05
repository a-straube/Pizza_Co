describe('Pizza', function() {
  it("creates a new pizza", function() {
    var testPizza = new Pizza("large", 1);
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.quantity).to.equal(1);
  });
});
