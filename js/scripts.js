function Pizza(pizzaSize, quantity) {
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.toppings = [];
};

Pizza.prototype.price = function() {
  var standardPrice = 7

  if (this.pizzaSize === "medium") {
    standardPrice += 2;
  } else if (this.pizzaSize === "large") {
    standardPrice =+ 4;
  }

  if (this.toppings.length === 1) {
    standardPrice += .25;
  } else if (this.toppings.length === 2) {
    standardPrice += .50;
  } else if (this.toppings.length === 3) {
    standardPrice += .75;
  } else if (this.toppings.length === 4) {
    standardPrice += 1;
  } else if (this.toppings.length === 5) {
    standardPrice += 1.25;
  } else if (this.toppings.length === 6) {
    standardPrice += 1.5;
  } else if (this.toppings.length === 7) {
    standardPrice += 1.75;
  } else if (this.toppings.length === 8) {
    standardPrice += 2;
  } else if (this.toppings.length === 9) {
    standardPrice += 2.25;
  } else if (this.toppings.length === 10) {
    standardPrice += 2.5;
  }

  return standardPrice;
};

$(function() {
  $(".cart").hide();

  $("form#create-pizza").submit(function(event) {
    event.preventDefault();

    newPizza = new Pizza();


  });
});
