var a;
var aa;
var aaa;


function add (a,b){
    console.log(a+b)
}
add(3,4)

let b;    
let bb;
let bbb;


let abc = function add (a,b){
    console.log(a+b)
}
// bu yöntemle window da yer kaplamıyor.

// 'use strict'  
// kuralları katı şekilde uygula demek

let c=5

// let c=4  4 olmuyor ama var olsaydı sorun olmazdı

// function stack (){
    // stack()
// }

// stack() 
// yukarısı sonsuz döngüye giriyor
let d = 5;
console.log(d)
{
    let d = 8;
    console.log(d)
}
console.log(d)

var e = 6;
var f = 2;

console.log(e-f)
console.log(e+f)
console.log(e*f)
console.log(e/f)
console.log(e**f)

//increment decrement
var g=6;
var h=2;
g = --h
console.log({g})
console.log({h})

var ı=6;
var i=2;
ı = i--
console.log({ı})
console.log({i})

var j = 5;

console.log(j++)
console.log(j)
var l = 5;
var k = ++l
console.log({l})
console.log({k})
var n = 5;
var m = n++
console.log({n})
console.log({m})

o = 6
ö = 2
console.log(o%ö)

var p = 6;
var r = 2;
var s = 6;
var ş = 2;
var t = 6;
var u = 2;
var ü = 6;
var v = 2;
var y = 6;
var z = 2;

console.log(p=r, {p},{r})
console.log(s+=ş, {s},{ş})
console.log(t-=u, {t},{u})
console.log(ü*=v, {ü},{v})
console.log(y%=z, {y},{z})

var ab = 2;
var ba = '2';
console.log(ab==ba)
var ac = 2;
var ca = '2';
console.log(ac===ca)

var ad = 2;
var da = '2';
console.log(ad !== da)
console.log(ad != da)

let age = 14;

console.log(age >= 14)
console.log(age > 14)

console.log(false == false)
console.log(Boolean(0) == false)
console.log(Boolean('0') == false)
console.log(0 == false)
console.log('0' === false)
console.log(typeof null)
console.log(null == false)
console.log(null == true)
console.log(null+3)
console.log(null == 0)
console.log(Boolean(null) == false)
console.log(Boolean(null) == Boolean(0))
console.log(typeof NaN)
// isNaN ile type kontrolü yapıcaz
// aşağıda kullanıcıdan alınan veri sayı mı değil mi onu yapıyoruz
/*var af ;
while(isNaN(af)){
    af = prompt("Enter a Number")
    af = Number(af)
    console.log(af, typeof ArrayBuffer)
}
*/
console.log(015+025)
console.log(15+025)
console.log(015+25)
console.log(15+25)


console.log(9 < 8)
console.log(9 < 8 < 7)
console.log(false < 7) //yukardaki böyle görüyor 9 < 8 false olduğundan false da 0 gibi düşünüyor.

console.log('Clarusway'> 'clarusway') //67 > 99 false
console.log('C' .charCodeAt())
console.log('c' .charCodeAt())
console.log('Clarusway'< 'clarusway')
var ag = '5';
var ah = 3;
console.log(ag-ah);
var ag = '5';
var ah = '3';
console.log(ag+ah);

let aı = 100+50*3;
console.log(aı)

// Logical operators && || !

let ai = 2 && 3;
console.log(ai);

let x = 0 && false;
console.log(x);

let aj = 2 || 3;
console.log(aj);

let ak = 0 || 1;
console.log(!ak) //verilen değerin boolen tersini döndürür
console.log(ak)

let password = 'pass';
console.log(password.length)
let passwordd = 'passn';
console.log(passwordd.length >= 5);
let passworddd = 'passn';
console.log(passworddd.length >= 5 && passworddd.includes('@'));
console.log(passworddd.length >= 5 || passworddd.includes('@'));
let passwordddd = 'p@s';
console.log(passwordddd.length >= 5 || passwordddd.includes('@') && passwordddd.length >5);


// Nullish operator

var al = null;
console.log(al ?? 'Hello') //null vs text output text
console.log(al ?? 2) // null vs text output text
var am;
console.log(am ?? 'Hello') // undefined vs text output text
console.log(am ?? 2) // undefined nu vs text output text
var an = '';
console.log(an ?? 'Hello') //null vs text output text
console.log(an ?? 2) // null vs text output text



// If else yapıları

let score = 50;
if (score >= 50){
    console.log('Congratulate');
}
let scored = 49;
if (scored >= 50){
    console.log('Congratulate');
}//sonuç vermedi
let scoredd = 49;
if (!(scoredd >= 50)){
    console.log('Congratulate');
}//not verdiğimiz için doğru verdi
let scoreddd = 50;
if (scoreddd >= 50) console.log('Congratulate');

let scoredddd = 81;
if (scoredddd > 80) {
    console.log('Tebrikler');
}else{
    console.log('Daha çok çalışmalısın')
}

//Ternary Operatör
let scoreddddd = 81;
scoreddddd > 80 ? console.log('Tebrikler') : console.log('Daha çok çalışmalısın');

let scoredddddd = 80;
if (scoredddddd > 80) {
    console.log('Tebrikler');
}else if (scoredddddd >= 50){
    console.log('Fena değil');
}else{
    console.log('Daha çok çalışmalısın')
}

/*let scoreddddddd = prompt("Sınavdan kaç aldın?");
if (scoreddddddd > 80) {
    console.log('Tebrikler');
}else if (scoreddddddd >= 50){
    console.log('Fena değil');
}else{
    console.log('Daha çok çalışmalısın')
}*/ // kullanıcıdan alıyoruz

let userName;
userName ? console.log(`Hello ${userName}`) : console.log(`Please login`);

let userNamed = 'Mark'
userNamed ? console.log(`Hello ${userNamed}`) : console.log(`Please login`);

// ifelse if ternary
let scoredddddddd = 49;
scoredddddddd > 80 ? console.log('Tebrikler') : scoredddddddd >= 50 ? console.log('Fena değil'): console.log('Daha çok çalışmalısın');

// Switch Case Statements

var text;
var fruits = 'Apple';

switch (fruits){
    case "Banana":
        text = "Banana is good";
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
    
}
console.log(text); // 'apple' girersek çıktı vermiyor o yüzden toLowerCase kuralı yapıcaz

//toLowerCase()

var textt;
var fruitss = 'APple';
fruitss = fruitss.toLowerCase();

switch (fruitss){
    case "Banana":
        textt = "Banana is good";
        break;
    case "Lemon": // lemon da yazsa orange de yazsa aynı sonuç
    case "Orange":
        textt = "I am not a fan of orange.";
        break;
    case "Apple":
        textt = "How you like them apples?";
        break;
    default:
        textt = "I have never heard of that fruit...";
    }
    console.log(text); 

    //Bir gün değişkeni
    //Switch case pzt - çar - per -cmts in class
    //Salı ve cuma ise TW var

var çıktı;
var gün = 'cumartesi';
gün = gün.toLowerCase();
switch (gün){
    case "pazartesi":
    case "çarşamba":
    case "perşembe":
    case "cumartesi":
        çıktı = "in class günü";
        break;
    case "salı":
    case "cuma":
        çıktı = "workshop günü"
        break;
    default:
        çıktı = "tatil";
}
console.log(çıktı);
