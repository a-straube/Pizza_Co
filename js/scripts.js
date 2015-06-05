function Pizza(pizzaSize, quantity, toppings) {
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.toppings = toppings;
};

Pizza.prototype.price = function() {
  var standardPrice = 7

  if (this.pizzaSize === "medium") {
    standardPrice += 2;
  } else if (this.pizzaSize === "large") {
    standardPrice += 4;
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

  if (this.quantity === 2) {
    standardPrice *= 2;
  } else if (this.quantity === 3) {
    standardPrice *= 3;
  } else if (this.quantity === 4) {
    standardPrice *= 4;
  } else if (this.quantity === 5) {
    standardPrice *= 5;
  } else if (this.quantity === 6) {
    standardPrice *= 6;
  } else if (this.quantity === 7) {
    standardPrice *= 7;
  } else if (this.quantity === 8) {
    standardPrice *= 8;
  } else if (this.quantity === 9) {
    standardPrice *= 9;
  } else if (this.quantity === 10) {
    standardPrice *= 10;
  }

  return standardPrice;
};

function updateTextOnPage(selector, text) {
  $(selector).text(text);
}

$(function(){
  $(".cart").hide();

  $("form#create-pizza").submit(function(event) {
    event.preventDefault();

    var newPizzaSize = $("#pizza-size :selected").val();
    var newPizzaToppings = [];
    $("#toppings input:checkbox:checked").each(function() {
      newPizzaToppings.push($(this).val());
    });
    var newPizzaQuantity = parseInt($("#quantity :selected").val());

    newPizza = new Pizza(newPizzaSize, newPizzaQuantity, newPizzaToppings);

    // newPizza.toppings.push(newPizzaToppings);

    updateTextOnPage("#pizza-price", newPizza.price());

    $(".create-pizza").hide();
    $(".cart").show();
  });
});
