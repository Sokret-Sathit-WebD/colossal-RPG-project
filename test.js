const readlineSync = require('readline-sync');
console.log("Ahh you're finally awake! What is your name?");
const name = readlineSync.question("You! tell me your name at least, before we get our heads chopped off. \n Tell him your name >>> ");

let hp = 100

function walk(){
    const willFight = readlineSync.question('(a) attack, (i) inventory ')
    if(willFight === "f"){
        fight()
    } else if (willFight === "i"){
        checkInventory()
    }
}
function fight(){
    const winner = selectWinner()
}
while(hp > 0){
    walk()
}
