// const cars = ['Audi', 'Opel', 'Fiat']
// console.log(typeof cars);
// console.log(cars);

// const numbers = new Array(2,10)
// console.log(numbers);
// const numbers2 = new Array(10)
// console.log(numbers2);

// const cars = ['Audi', 'Opel', 'Fiat']
// console.log('lenght of car :',cars.length);

// const cars = ['Audi', 'Opel', 'Fiat']
// const cars2 = ['BMW','Ferrari']
// const cars3 = cars.concat(cars2, 'Mercedes',2021)
// console.log(cars);
// console.log(cars2);
// console.log(cars3);
// console.log(typeof(cars+cars2)); //array string e döndü
// console.log(cars+cars2);

// const points = [40, 100, 1, 5, 25, 10]
// console.log(points.sort()); // sıralama string mantıkla ilerliyor
// console.log(points.sort(function(a, b){return a - b})); //sayıları düzgün sıralamaya yarıyor

// const cars = ['Audi', 'Opel', 'Fiat']
// cars.push('Renault')
// console.log(cars);
// cars.pop() //parametre almaz hep sonuncuyu siler
// console.log(cars);

// const cars = ['Audi', 'Opel', 'Fiat']
// console.log(cars.shift());
// console.log(cars);
// const added = cars.unshift('VW')
// console.log(cars);
// console.log('Geri dönen',added);

// const cars = ['Audi', 'Opel', 'Fiat']
// console.log(cars);
// cars[6] = 'vW'
// console.log(cars);
// console.log(cars[3]);
// cars = ['vW']
// console.log(cars); //method larla içeriğini değiştirirsin ama atama olarak olmaz

//splice methodu
// var names = ["John", "Edward", "Victor"]
// var deleted = names.splice (1,2, "Mark", "James") // 1,0 olursa hiç silmez sona ekler
// console.log('deleted',deleted);
// console.log('names',names);

//slice metodu
// const months = ['Jan', 'March', 'April', 'June', 'July'];
// console.log(months.slice(1,3));
// console.log(months.slice(1,-2));
// console.log(months.slice(-2,-4));
// console.log(months);
// console.log(months.reverse()); //orjinali de değiştirir
// console.log(months);

// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// const x = colors.indexOf("Green", 3)
// const x = colors.indexOf("Gray") //returns -1
// console.log(x)
// const colors = ["Red", "Yellow", "Green", "Blue", "Green", "Red", "Yellow", "Blue"];
// const last = colors.lastIndexOf("Blue", -2)
// const last1 = colors.lastIndexOf("Gray") //bulamazsa da -1 veriyor
// console.log(last);
// console.log(last1);

//primitivler değişmez
// function test1(testData){
//     console.log(`inside function before operation ${testData.name}`);
//     testData = 10;
//     console.log(`inside function after operation ${testData.name}`);
// }
// const x = 5;
// test1(x);
// console.log(`outside function after operation ${x}`);

//Arraylerde durum
// function test2(testData) {
//   console.log(`inside function before operation ${testData}`);
//   testData = [2, 4, 6, 8];
//   testData.push(8)
//   console.log(`inside function after operation ${testData}`);
// }
// const arr = [1, 2, 3, 4];
// test2(arr);
// console.log(`outside function after operation ${arr}`);

// const arr = [1,2,3,4,5,6,7,8];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(x,typeof x);
/*const [t,u,v, ...others] = arr;
console.log(t,u,v);
console.log(others,Array.isArray(others)); //Array array midir?
console.log(arr instanceof Array); // Array array midir?
console.log(arr);*/
/*const arr = [3, 4]
const [x = 1,y = 1, z = 1] = arr
console.log(x,y,z); */

//destructuring assignment
/*let x = 5;
let y = 10;
[x, y] = [y, x];
console.log('x=',x,'y=',y);*/

//foreach ve for in boş elemanları atlar, for of ve for atlamaz.
/*const colors = ["Red","Yellow","Green","Blue", "Pink", "Purple", "Gray", "Lime"]
/*for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}*/
// for (i of colors) console.log(i);
// for (let i in colors) console.log(colors[i]);
// colors.forEach(i=>console.log(i))*/ //içerisine call back function alır