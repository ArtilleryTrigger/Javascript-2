const prc = Number(prompt("enter price:"));
const tax = Number(prompt("enter tax:"));
var totalprc = 0;
function totalPrice(prc, tax) {
    const totalprc = prc + (prc*tax)/100;
    return totalprc;
}
console.log(totalPrice(prc, tax));

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
function findAll(str,index){
    let strind = str.split("");
    if(strind.includes(index)){
        for(let i=0;i<str.length; i++){
            if(strind[i] === index)
            console.log(`${i} "${index}"`);
        }
    }else{
        console.log('Character not found');
    }
}
findAll(str,'e')

