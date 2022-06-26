function pizzaOven(crust, sause, cheese, topping) {
    let pizza = {
        "crustType": crust,
        "sauceType": sause,
        "cheeses": cheese,
        "toppings": topping,
        "printPizza": function() {
            console.log("Crust: " + pizza.crustType);
            console.log("Sauce: " + pizza.sauceType);
            console.log("Cheeses: " + pizza.cheeses);
            console.log("toppings:" + pizza.toppings);
        }
    }
    return pizza;
}

function randomPizza() {
    let pizza = {
        "crustType": randomCrust(),
        "sauceType": randomSauce(),
        "cheeses": randomCheese(),
        "toppings": randomTopping(),
        "printPizza": function() {
            console.log("Crust: " + pizza.crustType);
            console.log("Sauce: " + pizza.sauceType);
            console.log("Cheeses: " + pizza.cheeses);
            console.log("toppings: " + pizza.toppings);
        }
    }
    return pizza;
}

function randomCrust() {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return "Stuffed Crust";
            break;
        case 1:
            return "Thin Crust";
            break;
        case 2:
            return "Hand Tossed";
            break;
        case 3:
            return "Deep Dish";
            break;
    }
}

function randomSauce() {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return "Traditional";
            break;
        case 1:
            return "Marinara";
            break;
        case 2:
            return "Pesto";
            break;
        case 3:
            return "Buffalo";
            break;
    }
}

function randomCheese() {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return "Mozzarella";
            break;
        case 1:
            return "Feta";
            break;
        case 2:
            return "Ricotta";
            break;
        case 3:
            return "Goat";
            break;
    }
}

function randomTopping() {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return "Pepperoni";
            break;
        case 1:
            return "Mushroom";
            break;
        case 2:
            return "Extra Cheese";
            break;
        case 3:
            return "Sausage";
            break;
    }
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1:");
pizza1.printPizza();
console.log("\n");

var pizza2 = pizzaOven("hand toosed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2:");
pizza2.printPizza();
console.log("\n");

var pizza3 = pizzaOven("stuffed crust", "pesto", ["mozzarella", "goat"], ["extra cheese", "green pepper", "fresh garlic"]);
console.log("Pizza 3:");
pizza3.printPizza();
console.log("\n");

var pizza4 = pizzaOven("thin crust", "buffalo", ["ricotta"], ["sausage", "onion", "black olives"]);
console.log("Pizza 4:");
pizza4.printPizza();
console.log("\n");

var pizza5 = randomPizza();
console.log("Random Pizza:");
pizza5.printPizza();
console.log("\n");