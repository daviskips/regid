const apiURL="https://api.exchangerate-api.com/v4/latest/usd";
function convertcurrency() {
    const fromcurency = document.getElementById("fromcurrency");
    const tocurrency = document.getElementById("tocurrency");
    let rates = {};
const amount =document.getElementById("amount").value;
// load currencies
 fetch(apiURL)
 .then(res => res.json())
 .then(data => {
    rates =data.rates;
    for(let currency in rates) {
        let option1 = document.createElement('option');
        let option2 = document.createElement("option");

        option1.value = option2.value = currency;
        option1.text = option2.text = currency;
        frocurrency.appendchild(option);
        const result = (amount/rates[from]) *rates[to];


        const from = fromcurrency.value;
        const to = tocurrency.value;
        
        document.getElementById("result").innerText =
        '${amount} ${from} = ${result.toFixed(2)} ${to}';

    }
 })
}