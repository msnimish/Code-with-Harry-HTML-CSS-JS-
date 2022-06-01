console.log("Welcome to tutorial 14.");
/*
element selectors:
1. Single element selector 
2. Multi element selector

*/

// 1. Single element selector 
let element = document.getElementById('box5');
// element = element.className; 
// element=element.childNodes;
// element=element.parentNode;
// element.style.color="blue";
// element.innerText="Harry is a good boy";
element.innerHTML="<b>Harry is a good boy</b>";
// console.log(element);

// let sel=document.querySelector('h1');
// let sel=document.querySelector('#myfirst');
// console.log(sel);

//2. Multi element selector
// let elems=document.getElementsByClassName("box");
let elems=document.getElementsByTagName("div");
console.log(elems);
