let i = 0, sum = 0;
while (i < 6) {
    sum = sum + i;
    console.log(i);
    i++;
}
console.log(`Total is : ${sum}`);

// do-while
let a = 6, 
    summ = 0;
do {
    summ += a;
} while (a < 5);
console.log(summ);
//for loops
let counter = 0;
for (let b = 0; b < 50; b++ ) {
    //console.log("b", b);
    counter += b;
}
console.log(counter);

let counterr = 0;
for (let c = 0; c <= 50; c++ ) {
    //console.log("c", c);
    c % 10 === 0 ? (counterr += c) : null;
}
console.log(counterr);

let brand = "Clarusway"
for (let d = 0; d < brand.length; d++ ) {
    console.log(`${d+1}: ${brand[d]}`);
}
console.log(brand.length);

let brandd = "Clarusway"
for (let e = 0, f = brandd.length; e < brandd.length; e++, f--) {
    console.log(e + 1, brandd[e], f, brandd[f - 1]);
}

let bests = ["Clarusway", "Google", "Amazon", "Tesla"]
for(let g = 0 ; g<bests.length; g++){
    console.log(g+1,":",bests[g]);
    document.write("<h1>",g+1,":",bests[g],"</h1>");
}
// break
let h = 0;
while (h < 10) {
    console.log(h);
    if(h === 6){
        break;
    }
    h++;
}
let ı = 0;
while (ı < 10) {
    ı++;
    if(!(ı % 3 === 0)){
        console.log(ı);
        continue;
    }
}

let j = 0;
for(j = 0; j <7; j++){
    if (j===2 || j === 4) {
        continue;
    }
    console.log(j);
}

let text = "Clarusway";
let newText = "";
for(k = 0; k < text.length; k++){
    console.log(text[text.length - (k + 1)]);
    newText = newText + text[text.length - (k + 1)]
}
console.log(newText);
document.write(newText);

for(let l = 0; l<=10; l++){
    for(m=0; m<=10; m++){
        document.write(`${l} * ${m} = ${l * m}`, "</br>")
    }
}

const numbers = [13, 34, 24, 67, 23, 90];
let results = 0;
for (let z = 0; z < numbers.length; z++){
    results += numbers[z];
}
console.log(results);

let x = 5;
resultss = 1;
for(v = 1; v <= x; v++) {
    resultss = resultss * v;
}
console.log(resultss);

for (let i = 1; i<= 100; i++ ) {
	if(i%3 === 0 && i%5 === 0) {
	    console.log(` ${i} is FizzBuzz`)
	} else if (i%3 === 0) {
	    console.log(`${i} is Fizz`)
	} else if (i%5 === 0) {
	    console.log(`${i} is Buzz`) 
	} else {
	    console.log(`${i} is another number`)
	}
}


const number = parseInt(prompt('Terim sayısını girin:'));
let n1 = 1, n2 = 2, ns;

console.log('Fibonacci:');

for (let ü = 1; ü < number; ü++) {
    
    ns = n1 + n2;
    n1 = n2;
    n2 = ns;
}
console.log(n1);

const res = prompt('kelime giriniz:');
function reverse(res){
    return res.split("").reverse().join("");
}
console.log(reverse(res));












