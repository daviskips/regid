/*
1.declare variablaes name in the global scope.
2.create function call sayMyName
 console.log("the name and line number")
 -remember to call the function
3.declare variable name inside a function.
at the start
 assign it a different name . print out the name
 and the line number
4.create an if statement:inside the function pass atruthy
 condition of your choice.
 inside the block console.log name
 and its line number
5.inside the first if statement at the start
 declare variable name give it a new name.
console.log name and the line number.
6.inside the function after the if block 
console.log name and line number.
7.try declaring the same variable name 
 in the same scope.
 */

 let name ="davis";

 function sayMyName() {
    let name ="Mila";

    console.log('name ${name} line ${15}');
    if (true) {
        let name ="mildred";
        console.log('name ${name} line ${26]');
    }
    console.log('name ${name} line ${23}');davis
 }