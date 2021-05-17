"use strict";
var mountains = [
    { name: "Kilimanjaro",
        height: 19341 },
    { name: "Everest",
        height: 29029 },
    { name: "Denali",
        height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0];
    if (mountains.length <= 0) {
        return "";
    }
    else {
        mountains.forEach(function (element) {
            if (element.height > tallestMountain.height) {
                tallestMountain = element.name;
            }
        });
        return tallestMountain;
    }
}
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
var products = [
    { name: "Aquafina",
        price: 1.49, },
    { name: "Purelife",
        price: 2.49 },
    { name: "SmartWater",
        price: 2.99 },
    { name: "Fiji",
        price: 3.49 },
    { name: "Evian",
        price: 3.99 }
];
function calcAverageProductPrice(products) {
    var averagePrice = products[0];
    if (products.length <= 0) {
        return 0;
    }
    else {
        var sum = 0;
        {
            for (var i = 0; i < products.length; i++) {
                sum += products[i].price;
            }
            averagePrice = sum / products.length;
            return averagePrice;
        }
    }
}
var AverageWaterPrice = calcAverageProductPrice(products);
console.log(AverageWaterPrice);
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(inventory) {
    var totalValue = inventory[0];
    if (inventory.length <= 0) {
        return 0;
    }
    else {
        var sum = 0;
        {
            for (var i = 0; i < inventory.length; i++) {
                sum += (inventory[i].product.price * inventory[i].quantity);
            }
            totalValue = sum;
            return totalValue;
        }
    }
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
//param is a variable, can call it anything you want to
