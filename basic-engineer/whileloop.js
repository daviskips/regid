let n =0;
let condition = true;
//condition falsey we automatically exit the loop
while(condition){
    console.log("n is ",n);
    n=n+1;
    if(n>10){
        condition = false;
    }
}
/*
ccreate a function with any name
the function should take a parameter
@param is a number greater than 0
have the loop count down from this number use while loop
*/
function printnumbers(n =0){
    while(n>0){
        console.log(n);
        n--;
    }
}
printnumbers(10);

*/
function promptstudent() {
    let num1 = null;
    let num2 = null;
    while (true) {
        num1 = prompt("Enter the first number:");
        if (isNaN(num1)) {
            continue;
        }
        num2 = prompt("Enter the second number:");
        if (isNaN(num2)) {
            continue;
        }
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (num1<=0 || num2<=0) {
            continue;
        }
        break;
    }
    console.log("You entered valid numbers:", num1, num2);
    mathTable(num1, num2);
}
function mathTable(num1, num2) {
    if (!num1 || !num1 < 0 || !num2 || !num2 < 0) {
        console.error("ensure number1 and number2 are greater than 0");
        return;
    }
    let outerloop = 1;

    while (outerloop > 0) {
        doinnerloop(outerloop,num2);
        outerloop = outerloop - 1;
    }
}
function doinnerloop(outerloop,num2) {
    let innerloop = num2;
    while (innerloop > 0) {
        console.log(outerloop, "*", innerloop, "=", outerloop * innerloop);
        console.log(outerloop, "/", innerloop, "=", outerloop / innerloop);
        innerloop = innerloop - 1;
    }
}

