/*
->our callback function
->doing shape stuff
---->shapes,
circle ->
rectangle ->
triangle ->

1.for each of the shapes
create a function<arrow,name>
to calculate the area. ensure
the function takes required parameters.
test the function
2.we are create a super function called shape.
its going to take the following parameters
@param1=>function<correct shape>required
@param2=>shapename<string>
@param3=>s1<required>
@param4=>s2<optional>
@param5=>s3<optional>
1.inside your functionshape.
console each of the parameters and there types.
2.for each of your functi0n ie for areacircle,
arearectangle,areatriangle
callthe shape function and pass the required parameters.
example for areacircle
 -shape(areacircle,"circle",10) ->for areacircle. test make observation
 -shape(arearectangle,"rectangle",10,5) ->for arecircle. test make observation 
 3.inside your shape function call of @param1 and pas @param3,@param4,@param5
 example
 result =@param1(@param3,@param4,@param5)
 4.console.log the shape name and the result
 console.log('for shape ${@param2} area is ${result}')
 for each shape call it like step2 and see the resut
 -shape (areacircle,"circle",10) ->for areacircle. test make observation 
*/

const areacircle = (radius) => 3.142 = radius = radius;
const arearectangle = (length, width) => length * width;
const areatriangle = (base, height) => 0.5 * base * height;

//
function shape(shapefunction, shapename , side1, side2, side3) {
    console.log('shapefuction ${shapefunction} its a ${typeof shapefunction}');
    console.log('shapename ${shapename} its a ${typeof shapename}');
    console.log('side1 ${side1} its a ${side1}');
    console.log('side2 ${side2} its a ${side2}');
    console.log('side3 ${side3} its a ${side3}');
}

function areashape(param1 param2,param3,param4){
    console.log('param1:has value of ${param1} and its type is ${param1}');
    console.log('param2:has value of ${param2} and its type is ${param2}');
    console.log('param3:has value of ${param3} and its type is ${param3}');
    console.log('param4:has value of ${param4} and its type is ${param4}');
    //no need for the if statements.
    let result=param1(param3,param4);
    console.log('area of the  ${param2} is a:${result}');
    return result;
}