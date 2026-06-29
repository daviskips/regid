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
/*
Are of triangle
0.5*L*W
*/
//base=undefined,height=undefined
function areaOfTriangle(base, height) {
    console.log('base, height is ${base} its type ${typeof base}');
    console.log('height is ${height} its type ${typeof height}');
    const area = 0.5 *base*height;
    console.log(
        'for triangle with base ${base} and height ${height} area is ${area}',
    );
}

/*
senario 1;
call the areaofTriangle function dont passany argument.<>
areaofTriangle()
senario 2;
call function pass base of 20 and no width
 areaofTriangle(20) // output
 senario 3;
 call  function pass baseof 20 and the height of 30
 areoFTriangle(20,30)
 senario 4;
 create variable base1=50 and varible height1=60
 areaofTriangle(base1,height1)
 senario5;
 create variable base2="hello" and variable height2=true
 areaofTriangle(base1,height1)
 */