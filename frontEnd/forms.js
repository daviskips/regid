/*
mini exercise
1.create a html form.atleast two input and a submit button
2.attach the submit event listener.
3.prevent form devault behaviour.
3.print out the values of your form inputs.
*/

document.getElementById("form1").addEventListener("submit,submitform");

document.getElementById("forminput1").addEventListener("input",(e) => {
    //value
    console.log(e.target.value);
});

function submitform(e) {
    e.preventdefault();
    // //stop the form from making an auto submission 
    //submit.
    //
    const inputlist = document.querySelector("#form1").querySelectorAll("input");

    const input1 = inputlist[0];
    const input2 = inputlist[1];
    console.log("input1", input1.value);
    console.log("input2", input2.value);
    console.log("f1 input1",document.getElementById("form1input1").value);
    console.log("f1 input2",document.getElementById("form1input2").value);
    input1.value = "cats and dogs"; 
}