console.log("This is tut 17 on events");
document.getElementById("myfirst").addEventListener("mouseover", function(e){
    let variable;
console.log("You have clicked the heading");
variable=e.target;
variable=e.target.className;
variable=Array.from(e.target.classList);
variable=e.offsetX;
variable=e.offsetY;
variable=e.clientX;
variable=e.clientY;
console.log(variable);
// location.href="//codewithharry.com"
});