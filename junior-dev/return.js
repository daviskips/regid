/*
1.Exit code
2.return any required data
*/

function sayMyName() {
    let first_name ="samsson";//statement 1
    console.log('First Name ${first_name}'); // statement 2
    let second_name ="johana"; //statement 3
    console.log('second_name ${second_name}'); // statement 4
    let full_Name = '${first_name} ${second_name}'; //statement 5
    console.log('names are ${full_name}'); //statement 6
}

let sayMyNamevalue =sayMyName();

console.log('function returned ${sayMyName}');

/*
senario 1:
leave it as it is and look at the results.
-what happens
senario 2:after the second statement inside the functi0n
put a return.
-what happens (exists the function exactly where the return statement is)
senario 3:after the fourth statement inside the function
put a return.
-what happens(exists the function exactly where the return statement is)
senario 4:put a return statement anywhere inside your function and return
a string of your choice
senario 5:put a return statement anywhere inside your function and return
a number of your choice
senario 6:put a return statement anywhere inside your function and return
a boolean of your choice
*/