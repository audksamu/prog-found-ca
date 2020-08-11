// question 1
var carBrand = "Tesla";

// question 2
var person = {
    name: "Thea",
    age: "11"
};

// question 3
var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// question 4
var ageArray = [11, 40, 76,  4, 23];
for (var i = 0; i < ageArray.length; i++) {
    console.log(ageArray[i]);
}

// question 5
for (var i = 15; i <= 25; i++) {
    console.log(i);
} 

// question 6
for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
} 

// question 7
var stockArray = [
    {product: "dogfood", price: 37, inStock: false}, 
    {product: "catfood", price: 57, inStock: true}
];
for (var i = 0; i < stockArray.length; i++) {
    console.log (stockArray.map(txt => txt.price)[i], stockArray.map(txt => txt.inStock)[i]); 
}

// question 8
function whatIDontLike (inputText) {
    console.log ("I don't like", inputText);
}
whatIDontLike("risk");

// question 9
function subStract (minuend, subtrahend) {
    console.log (minuend - subtrahend);
}

// question 10
var colorArray= [];
function addColor (color) {
   colorArray.push (color);        
}
addColor ("red");


