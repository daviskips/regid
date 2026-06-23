// comparison operators
// comparison operators evaluate to only true or false.

/*
And -> &&
truth table -> all possible combinations
val1 && val2
combinations are
val1 && val2
combinations are
val1 && val2
val2 && val1
-> for all statements to be true for the result to be true
*/

let val1 = true;
let val2 = true;
let result1 = val1 && val2;

console.log(`val1=${val1} val2=${val2} val1&&val2=${result1}`);

let mercy_age = 15;
let mercy_balance = 50000;

// if mercy age is greater than 18 and has more than 20k in her account
let is_greater_than_18 = mercy_age > 18; // true or false
console.log(`is mercy age greater than 18 ${is_greater_than_18}`);
let has_more_than_20k_balance = mercy_balance > 20000;
console.log(`mercy has more than 20k ${has_more_than_20k_balance}`);
console.log(`mercy's age is greater than 18 and has more than 20k in her account ${is_greater_than_18 && has_more_than_20k_balance}`);

let simplified = mercy_age > 18 && mercy_balance > 20000;
console.log(`simplified ${simplified}`);
console.log(`further simplification is ${mercy_age > 18 && mercy_balance > 20000}`);

/*
OR operator ||
At least one statement has to be true for the whole expression to be true
*/
console.log(`mercy age is greater than 18 or she has more than 20k in her account ${is_greater_than_18 || has_more_than_20k_balance}`);

/*
NOT operator !
Inverts the boolean value
*/
console.log(`this is not true = ${!true}`);
console.log(`this is false = ${!false}`);