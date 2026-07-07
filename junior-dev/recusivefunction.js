/*
a recusive function is a function that calls itself.
->since this creates an endless loop you need to find a way
to terminator. that is using a return statement and if < condition>
*/
function salareyGrossPromptprocess() {
    let gross =prompt("Enter your gross salary");
    if(gross>0){
        let tax = gross * 0.2;
        let net = gross - tax;
        console.log("your net salary is ",net);
    }else{
        console.log("you entered an invalid gross salary");
        salareyGrossPromptprocess();
    }
}
salaryGrossPromptprocess();