//document.getElementBy...
/*const myDom = document.getElementById("dom")
console.log(myDom);*/
/*const instructor = document.getElementById("info");
console.log(instructor);*/
/*const ins = document.getElementById("instructor");
console.log(ins);*/

//Classname
/*const withClassName = document.getElementsByClassName('class-info');
console.log(withClassName[0]);
console.log(withClassName);*/

//Tagname
/*const cw = document.getElementsByTagName('h3')
console.log(cw);*/

//documnet.querySelector
/*console.log(document.querySelectorAll(".class-info"));
console.log(document.querySelector("#i̇nstructor"));
console.log(document.querySelectorAll("h3")); //All yapmazsak gördüğü ilk tag i alır
console.log(document.querySelectorAll(".class-info h3"));*/

//Manipulation
/*const brands = document.querySelector("#brands");
console.log(brands);
//brands.innerHTML += "<li>NioyaTech</li>"
brands.innerHTML = brands.innerHTML + "<li class='brand'>NioyaTech</li>";*/
/*const classBrands = document.querySelectorAll('.brand');
console.log(classBrands[3].innerText);*/

/*const copyRight = document.querySelector('footer p');
//console.log(copyRight);
copyRight.innerHTML = '<h1>&copy; 2021 clarusway.com</h1>';
//copyRight.innerText = '<h1>&copy; 2021 clarusway.com</h1>';*/

/*const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
];
const lessonElm = document.getElementById('lessons');
lessonList.forEach(element => {
    lessonElm.innerHTML += `<li class="lesson-item">${element.name}</li>`;
});*/

//setAttribute getAttribute
/*const mdn = document.querySelector('#mdn');
// console.log(mdn);
const mdnHrefAttr = mdn.getAttribute('href');
console.log(mdnHrefAttr);
mdn.setAttribute("href", "https://www.w3schools.com/")
mdn.innerHTML = 'W3Schools';*/

/*const insElm = document.querySelectorAll("#instructors li")
console.log(insElm);
insElm.forEach((item) => {
    console.log(item.innerText.includes('FrontEnd'));
    if (item.innerText.includes('FrontEnd')){
        item.setAttribute('class', 'front-end');
    }else if (item.innerText.includes('Backend')){
        item.setAttribute('class', 'back-end');
    }
});*/

/*const jsPrg = document.querySelector('#js-prg');
console.log(jsPrg);
jsPrg.style.color = 'green';
jsPrg.style.backgroundColor = 'red';
jsPrg.style.fontSize = '1rem';
jsPrg.style.margin = '10px';*/

/*const cwBanner = document.getElementById('cw-banner');
console.log(cwBanner);
console.log(cwBanner.classList);
cwBanner.classList.add('imp');
cwBanner.classList.remove('banner');*/

/*const cwQuote = document.querySelector('#quote-div');
console.log(cwQuote);
cwElm = document.createElement('h2');
console.log(cwElm);
cwElm.innerText = 'Clarusway';
cwQuote.appendChild(cwElm);*/