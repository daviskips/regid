*/
comparison operators evaluate to only true or false
1.Equality==
2. Strict Equality ===
3. Inequality !=
4. Strict Inequality !==
--JS --
*/

let numb1="23"
let numb2=23
 
//string===number => false
//numb1==numb2 ->type conversation
let strictEqual=numb2===numb2//boolean
console.log('numb1=${numb1}===numb2=${numb2}
    Ans ${strict equal}its type is ${typeof strict equal})
    letnon strictEquality=numb1==numb2
    console.log('numb1=${numb1}==numb2=${numb2}
        Ans ${nonstrictEquality} its type is ${typesof nonstrictEquality}')

        let val1="hello"
        let val2="how are you"
//different types should be equal
//string is not equal number
let strictinequality=val1!==val2
console.log('val1=${val1}!==val2=${val2}
    Ans ${strictinequality} its type is ${typeof strictInequality}')
//"30"not equal to 30 ->false
let Inequality=val1!=val2
console.log('val1=${val1}!=val2=${val2}
    ans ${Inequality} its type is ${typeof Inequality}')
