const prc = Number(prompt("enter price:"));
const tax = Number(prompt("enter tax:"));
var totalprc = 0;
function totalPrice(prc, tax) {
    const totalprc = prc + (prc*tax)/100;
    return totalprc;
}
console.log(totalPrice(prc, tax));

