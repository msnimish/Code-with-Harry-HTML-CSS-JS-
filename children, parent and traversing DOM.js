console.log("Welcome to tut 15");
let cont=document.querySelector(".container");
let nodeName = cont.childNodes[3].nodeName;
let nodeType = cont.childNodes[3].nodeType;
console.log(nodeName);
console.log(nodeType);

// Node Types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container= document.querySelector("div.container");

// console.log(container.firstElementChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount); // count of child elements

// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);