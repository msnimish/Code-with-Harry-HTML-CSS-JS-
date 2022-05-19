console.log('This is tut 10');
let mygreet = function greet(name, bye="Good Bye"){
    // console.log(`Happy Birthday ${name} Many many Happy returns of the day ${bye}`);
    
    let msg = `Happy Birthday ${name} Many many Happy returns of the day ${bye}`;
    return msg;
}
let nam = "Arjun";
let val = mygreet(nam, "See you later!");
console.log(val);

const myObj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}

console.log(myObj.game());
 
