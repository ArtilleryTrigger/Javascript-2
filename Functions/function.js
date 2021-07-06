// function hello(){
    // console.log('hello world');
// }
// hello()

/*function sum(a,b){
    console.log(a+b);
}
sum(12,3)*/

/*function sum(a,b){
    return (a+b);
}
sum(12,3) //sonucu göremedik return ü yakala
let toplam = sum(12,3)
console.log('Result : ',toplam);
console.log(sum(12,3));
console.log(sum(13,5)+5);*/

/*function sum(){
    return('selam');
    console.log('Selam');
}
console.log(typeof sum());*/

/*function addTwo(number){
    return +number+2 //+ ile gelen stringi number yapıyoruz. numberın yanına / koyarsak number a 6 verirsek cevap 3 olur
}
console.log(addTwo('2'));*/

/*//selam('Hasan') //Hasan ı yazar
function selam(name = 'New User'){ //New User ı en son yazdım function a
    console.log(`Hello ${name}`)
}
//selam('Edward')
//selam('Mark')
selam()
selam('Yunus')
// DRY Don't Repeat Yourself*/

/*function sayHi(name){
    console.log(`Hello ${name}`);
    name = 'Ed'
    console.log(`Hello ${name}`);
}
let myName = 'Mark';
sayHi(myName)
console.log('Outside function', myName);*/

/*let student = {};
student.name = 'Mark'
function sayHi2(student){
    console.log(`Hello ${student.name} entry point`);
    student.name = 'John';
    console.log(`Hello ${student.name} first point`);
    student = {name : 'Leon'}
    console.log(`Hello ${student.name} inside function`);
}
sayHi2(student)
console.log(`Hello! ${student.name} from outside`);*/

/*function div(num1, num2){
    //console.log(num1/num2);
    if(num2 === 0){
        return console.log("Zero Division Error");
    }
    return (num1/num2);
}
console.log(div(12,3))*/

/*function div2(num1,num2){
    return num2 ? num1 / num2 : 'Zero Division Error'
}
console.log(div2(18,3));*/

/*function sum(...args){
    //console.log(arguments);
    let total = 0;
    for (let i=0; i < arguments.length; i++){
    total += arguments[i];
    }
    return(total)
}
console.log(sum(1,2,3,4,5));*/

/*function sum2(a,b, ...args){
    console.log(args);
    console.log(arguments);
    return a+b
}
console.log(sum2(1,2,3,4,5));*/


/*function sayHi1(){
    return 'Hello from sayhi1'
}
console.log(sayHi1());*/

/*const sayHi2 = function greet(){
    return 'Hello from sayhi2'
}
console.log(sayHi2());*/

/*const pascalNumber = function total(n){ //4+3+2+1
    if(n===1) return 1;
    return n + total(n-1)
}
console.log(pascalNumber(4));
console.log(typeof pascalNumber);*/

/*//Immediaetly invoked function expression
let result =(function triangle(num){
    if(num === 1) return 1;
    return num+ triangle(num-1);
    })(4);
console.log(result);*/

//result()
/*(function (n){
    var sum = 0;
    while (n>=0){
        sum += n;
        n--;
    }
    console.log('result : ', sum);
})(4);*/

/*function add100 (a){
    return a + 100;
}
console.log(add100(1));*/

/* const arrow = (a) => {
    return a + 100;
}
console.log(arrow(2));*/

/*const arrow = a=> a + 100;
console.log(arrow(2));*/

/*const user = 'Mark'
const sayHi = (userFirstName= 'New User') => `Welcome ${userFirstName}`
console.log(sayHi(user))*/

// Zero division Error
// const div = (num1,num2) => num1 / num2;
/*const div = (num1,num2) => {
    if(num2 === 0){
        return 'Zero Divisions';
    }
    return num1/num2
}*/
//const div = (num1,num2) => num2 === 0 ? 'Zero Divisions' : num1 / num2
//const div = (num1,num2) => num2 ?  num1 / num2 :'Zero Divisions';
//console.log(div(18,0)); //nasıl kaldıracağız bu durumu (yukardaki 4 durum için ortak kod bu)

/*const calcArea = radius => 3.14 * radius**2;
console.log(calcArea(5));*/

// this methodu
/*const cat = {
    name: 'Muezza',
    age: 8,
    whatName() {
        return this.name
    }
};
console.log(cat.whatName());  // Output: Muezza*/

//Object return ederken
/* //const car = () => { make: "Bmw" }
const car = () => ({ make: "Bmw" })
console.log(car()); */

//arrow function iief kullanımı
/*const iief = (num => num + 5)(10)
console.log(iief);*/