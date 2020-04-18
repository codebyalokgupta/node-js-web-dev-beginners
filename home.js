let welcome = "Welcome to our website";
let price = 11;

// ternary operator example
//let welcome = (price > 10) ? "Hello Welcome to our website" : "Welcome to the discount world";
showMessage(welcome);

let percentage = 40;

changePercentOff(percentage);

// if statememnt example
/*if (1 === "1") {
    showMessage(welcome);
} else {
    showMessage("Welcome");
}
*/

// for loop example

/*for (let i = 1; i < 3; i++) {
    console.log(i);
}
*/

// while loop example

/*while (price > 5) {
    console.log(welcome, price);
    price--;
}
*/

// do while loop example

/*do {
    console.log(price);
    price--;
    console.log(price, "price after reduction");
}
while (price > 9);
*/

//function expression by defining function as a varaible

/* let myWelcomeFunction = function welcomeFunction() {

    console.log(welcome);

}

myWelcomeFunction();


*/

// passing values into functions

/* function welcomeMessage(message, name) {
    console.log(message, name);
}

welcomeMessage("Hello", "Alok");
welcomeMessage("Hello", "again");

*/

// function returning value

/* function updatedPrice(price) {
    newPrice = price + 10;
    return newPrice;
}



let updatedPriceValue = updatedPrice(price);
console.log(updatedPriceValue);

*/

// nested function example

/*
function discountedPrice(price) {
    console.log("initial price in discountedPrice function", price)

    let discountGenertor = function discountGenertor(discount) {
        console.log("inital discount vale in discountGenertor", discount)
        discountPrice = price - (discount * price / 100);
        console.log("calculated discount percentage in discountGenertor function is ", discountPrice)
        return discountPrice;
    }

    let finalPrice = discountGenertor(10);
    console.log("initial final price value in discountedPrice", finalPrice);
    return finalPrice;
}



let printPrice = discountedPrice(100);
console.log(printPrice);

*/

// definings objects

/*let person = {
    name: 'Alok',
    age: 35,
    student: false,
    showInfo: function (realAge) {
        showMessage("Alok's age is " + realAge);
    }
};
console.log(person.name);

person.showInfo(32);
*/

// using object in function

/*
let person = {
    name: 'Alok',
    age: 32,
    student: false
};


function changeAge(p) {
    p.age++;
}

changeAge(person);

showMessage(person.age);

*/

let now = new Date();

showMessage(now.toDateString());