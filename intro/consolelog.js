*/
console.log-->debugging by printing
out information in the screen

console.log->ensure you writeyour consoles
in such away that they help you figer out the issue.away
*/
const sallaryGross=60000;//instruction
//console.log(sallaryGross) ! ->more information
console.log("Gross salary of ",sallaryGross,"paye is",paye)
//->
const nhif=2500
console.log("NHIF deduction is",nhif)
const sha=2000
console.log("SHA deduction is",sha)
const totalDeductions=nhif+sha+paye
console.log("Total deductions are",totalDeductions)
const sallaryNet=sallaryGross-totalDeductions
console.log("Net sallary is",sallaryNet)