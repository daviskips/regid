/*
1.named function.
2.anonymous function:<without a name>
->a function can be assigned to variable.
->a variable can reference a function
*/
function areCircle(r) {
    return Math.PI * r * r; //are of function
} //named function
//
let age = 23;

let samsage = age; //age=23

let ac = arecircle;
/*
what is the value of ac and what is
it,
->hint <use typeof>
*/
console.log(typeof ac); //function

//create a named function
function test() {
    console.log("davis kiplangat");
}
// assign that function to a variable
let myfunction = test; //function reference
// the variable now reffers to the function
//my function = test
//remove the original function
test = null; //remove the original function
//call the function using the variable
myfunction(); //davis kiplangat
//test(); //error test is not a function

let myfunction2 = function () {
    console.log("davis kiplangat");
} 