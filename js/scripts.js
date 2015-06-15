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

  this.toppings.forEach(function() {
    standardPrice += .25;
  });

  standardPrice *= this.quantity;

  return standardPrice.toFixed(2);
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
