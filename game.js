const readlineSync = require('readline-sync');

let player = {
    name: userName,
    userHealth: 20,
    inventory: [],
}

let enemies = [
{
    name: "Helgan Guard",
    enemyHealth: 30,
    loot: "Steel Helmet",
},
{
    name: "Imperial Soldier",
    enemyHealth: 35,
    loot: "Steel Shield",
},
{
    name: "Stormcloak Soldier",
    enemyHealth: 25,
    loot: "Light Boots",
}
]
let enemyHealth = 10; /////Temporary fix

let enemy = undefined

 /////////// FUNCTIONS \\\\\\\\\\

function diceRoll(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function enemyEncounter(enemy) {
    diceRoll(1, 4)
    if (diceRoll === 1) {
        enemy = enemies[0]
    } else if (diceRoll === 2) {
        enemy = enemies[1]
    } else if (diceRoll === 3) {
        enemy = enemies[2]
    }
}

function openInventory () {
    console.log(player.inventory)
}

function calculateEnemyDamage () {
    console.log(player.userHealth -= enemyAttack)
}

function checkUserHealth () {
    console.log(player.userHealth)
}

function checkEnemyHealth () {
    console.log(wildPokemonEncounter.wildPokemonHealth)
}

function attackEnemy () {
    console.log(attackPower)
}



const name = readlineSync.question("Ahh you're finally awake! What is your name?");

readlineSync.question('Welcome to Helgan keep ' + name + ', This is where you will start your journey to find out who you are.\n Press Enter to begin. ');
    var userName = name
const options =['Walk', 'Exit', 'Print'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const random = getRandomInt(100)
player.health -= random

function pickUp() {
    let loots = enemies.loot
}


function walk() {
    const attackPower = Math.floor(Math.random() * 3 +1);
    const enemyCriticalHit = Math.floor(Math.random() * 5);
    let userHealth = 20;

    const index = readlineSync.keyInSelect(options, 'What will you do Dovahhkin?');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(player);
    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking around and taking in the scenery of Skyrim.');
        } else if (key >= .3) {
            enemyEncounter(name)
            console.log('***Combat music kicks in***' + enemy + ' stoped you and draw his sword!\n What would you like to do?');

            while(userHealth > 0 ) {


                const user = readlineSync.question('Enter "a" to attack, or enter "r" to run! ');




                switch (user) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("You can't escape! " + enemy + " attacked you, causing a damage total of: " + enemyCriticalHit + " Hit Points.");
                        } else {
                            console.log('You ran away successfully. You live to fight another day!');
                            break;
                        }
                    case 'a':
                        enemyHealth -= attackPower;
                        console.log('You attacked  ' + enemy + ' with ' + attackPower + ' Hit Points.');

                        userHealth -= enemyCriticalHit;
                        console.log('Enemy attacked you with ' + enemyCriticalHit + ' Hit Points.');

                        
                        if (enemyHealth <= 0) {
                            loot = "Boots"
                            let prize = loot;
                            console.log('Nice work! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + loot ); // + pickUp
                            if (loot === "Boots") {
                                pickUp(loot);
                            }
                        } else if (userHealth <= 0) {
                            console.log(enemy + ' has defeated you. You died ☠️! You will respawn at the nearest keep.');
                        }
                }
            }
        }
    }
}

while(player.userHealth > 0) {
    function userRestore() {
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    walk();
}


