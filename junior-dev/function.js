/*
function allow you to write reusable bits of code.
to use to dry(do not repeat your self) bu using code bl0ck

/{/code block/}/
syntax;
function <name;variable namee convection> (<parameters>){
/code block/
}

//big rule import rule.
-> a function executes only when called.
->callinga function is telling the
function to do its work.
*/
create a simple function that 
when ypou call it it alerts
you on the current time .
*/

function timealert() {
    const date= new Date();
    alert('time stamp; ${date.toIsostring()}');
}
/*
call a function use thefunction name then
()->brackets
*/
timealert();//calling function