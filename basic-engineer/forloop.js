/*
---> for loop -> mostly ment for numbers 
--> combination of using while for number
loops: 1:start point, 2:condition ,3:aftereach itteraction
combines it  into one statement
 for(startpint;condition;aftereachiteration){

}

*/

//use this while loop to make a for loop

let k = 0; // starting point

//condition:k<20
while (k < 20) {
    console.log("k", k);
    k =k + 1; // after each iteration
}

for  (let k = 0; k <20; k = k + 1) {
    console.log("k", k);
}


function getNumbers() {
    let number1;
    let number2;


    while (true) {
        number1 = Number(prompt("Enter the first number (greater than 1):"));

        if (!isNaN(number1) && number1 > 1) {
            break;
        }

        alert("Invalid input. enter a number greater than 1.");
    }

    
    while (true) {
        number2 = Number(prompt("Enter the second number (greater than 1):"));

        if (!isNaN(number2) && number2 > 1) {
            break;
        }

        alert("Invalid input.  enter a number greater than 1.");
    }


    generateTable(number1, number2);
}

function generateTable(number1, number2) {

    if (isNaN(number1) || isNaN(number2) || number1 <= 1 || number2 <= 1) {
        console.log("Invalid numbers.");
        return;
    }


    for (let i = number1; i <= number2; i++) {
        console.log(`Multiplication Table for ${i}`);

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }

        console.log("---");
    }

}

getNumbers();














