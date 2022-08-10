// ### **Project Requirements:**

// 1. Console must greet player with a fun message
// 2. Console must ask for the player's name and store it
// 3. Walking:
// - The console will ask the user to enter a "w" to walk
// - Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// - Use a while loop to control this flow.
// 1. If a wild enemy appears:
// - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// - The user can decide to attack or run
// - If attacking, a random amount of damage will be dealt between a min and max
// - If running, there will be a 50% chance of escaping
// - After the player attacks or runs the enemy attacks back for a random damage amount
// - The player and enemy will attack each other in a loop until one of them passes out or dies.
// - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
// - If the enemy kills the player the console prints a cool death message and the game ends
// 1. Inventory
// - When the player kills enemies, they are awarded with items
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory

const readlineSync = require('readline-sync')
console.log("Hey you, you're finally awake. What's your name? ")
const name = readlineSync.question("You! tell me your name atleast, before we get our heads chopped off. \n Tell him your name >>> ");

class player {
    constructor(name, health, inventory) {
    this.name = name,
    this.hp = health,
    this.inventory = []
    // alive = true
}
isAlive(){
    return this.health > 0
}}
const hero = new player ('player', 40)
console.log("Welcome to Skyrim " +name+ " ...I used to be an adventurer just like you \n...untill I took an arrow to the knee ")
class enemySkyrim {
    constructor(name, health, loots) {
        this.health = health
        this.originalHp = health
        this.alive = true
        this.run = true
        this.name = name
        this.loots = loots
}}
let helgenGuard = new enemySkyrim ('Helgen Guard', 30, 'Steel helmet')
let empireGuard = new enemySkyrim ('Empire guard', 40, 'steel shield')
let stormCloak = new enemySkyrim ('Stormcloak soldier', 45, 'bow')
while (hero.isAlive()) {
    const input = readlineSync.keyIn("[W]Walk\n [P]Print\n [Q]Quit")
    // Assignmet operator "=" , ex. a=10
    // Comparison operator "==" equal value but Not type, so when compare string with number, JS converts any string to a number
    // Strict equality comparison operator "===" equal alue And type, returns false for the values which are not of a similar type
    if (input === 'W') walk(hero)
    if (input === 'P') {
        console.log(hero)
        readlineSync.question('Enter to go back')
    }
    if (input === 'Q') readlineSync.questionInt(hero, NaN)
    function walk(randomEnemy = Math.floor(Math.random() * 3)) {
        let rollDie = Math.floor(Math.random() * 4)
        console.log(rollDie)
    if (rollDie == 0) {
        readlineSync.question(name + "Trinkets, odds and end, that sort of things")
    }
    if (rollDie == 1) {
        readlineSync.question(name + "Hey you!...you look familiar")
    }
    if (rollDie == 2) {
        readlineSync.question(name + "Need a ride?")
    }
    if (rollDie == 3) {
        let randomEnemy = Math.floor(Math.random() * 3)
        console.log(randomEnemy)
        function battleEnemy(randomEnemy) {
            if (randomEnemy == 0) {
                randomEnemy = encounter(helgenGuard, hero, 30, 5, randomEnemy);
            }
            if (randomEnemy == 1) {
                randomEnemy = encounter(empireGuard, hero, 40, 10, randomEnemy);
            }
            if (randomEnemy == 2) {
                randomEnemy = encounter(stormCloak, hero, 45, 15, randomEnemy);
            }
            return randomEnemy!== 3
        }
        if (!battleEnemy(randomEnemy)) {
            if (!battleEnemy(0)) {
                readlineSync.question("***Scream 'FOR SKYRIMMMMMMMMMMMMMM' ")
                hero.alive = false
            }
        }
    }
    if (hero.health <= 0) {
        endGame (hero)
    }
    }
}

// let enemyHealth = 10; /////Temporary fix
// let prize = "You have saved Skyrim from danger yet again Dovahhkin";



 /////////// FUNCTIONS \\\\\\\\\\

// function rollEncounter(min, max) {
//     return Math.floor(Math.random() * (max-min) + min);
// }

// function rollDie() {
//     let roll = Math.floor(Math.random() * (max-min) + min);
//     console.log('Rolled: ${roll}');
// }

// function enemyEncounter() {
//     rollDie((1, 3))
//     if (rollDie == 1) {
//         helgenGuard = enemy
//     } else if (rollDie == 2) {
//         empireGuard = enemy
//     } else if (rollDie == 3) {
//         stormCloak = enemy
//     }
// }

// function openInventory () {
//     console.log(player.inventory)
// }

// function calculateEnemyDamage () {
//     console.log(player.userHealth -= enemyAttack)
// }

// function checkUserHealth () {
//     console.log(player.userHealth)
// }

// function checkEnemyHealth () {
//     console.log(wildPokemonEncounter.wildPokemonHealth)
// }

// function attackEnemy () {
//     console.log(attackPower)
// }

// //////////// FUNCTIONS \\\\\\\\\\

// const name = readlineSync.question("Ahh you're finally awake! What is your name?  ");

// readlineSync.question('Welcome to Helgan keep ' + name + ', This is where you will start your journey to find out who you are.\n Press Enter to begin. ');
//     var userName = name
// const options =['Walk', 'Exit', 'Print'];


// let max = 40
// let min = 10

// function game() {
//     const attackPower = Math.floor(Math.random() * (max-min) + min);
//     const enemyCriticalHit = Math.floor(Math.random() * (max-min) + min);
//     // let player.hp = 20;
//     let enemyHealth = 10;
//     const index = readlineSync.keyInSelect(options, 'What will you do Dovahhkin?');

//     if (options[index] === 'Exit') {
//         return userHealth = 0;
//     } else if (options[index] === 'Print') {
//         console.log(player);
//     } else if (options[index] === 'Walk') {
//         let key = Math.random();
//         if (key <= .33) {
//             console.log('Walking around and taking in the scenery of Skyrim.');
//         } else if (key >= .33) {
//             console.log('***   Combat music kicks in   ***' + enemyEncounter + ' stoped you and draw his sword!\n What would you like to do?');

//             while(userHealth > 0 && enemyHealth > 0) {


//                 const user = readlineSync.question('Enter "r" to run, or enter "b" to battle! ');

//                 // let inGame = true;//////////
//                 // let inBattle = false;/////////

               

//                 switch (user) {
//                     case 'r':
//                         const run = Math.random();
//                         if (run < .5) {
//                             console.log("You can't escape! " + enemy + " attacked you, causing a damage total of: " + enemyCriticalHit + " Hit Points.");
//                         } else {
//                             console.log('You ran away successfully. You live to fight another day!');
//                             break;
//                         }
//                     case 'b':
//                         enemyHealth -= attackPower;
//                         console.log('You attacked  ' + enemy + ' with ' + attackPower + ' Hit Points.');

//                         userHealth -= enemyCriticalHit;
//                         console.log('Enemy attacked you with ' + enemyCriticalHit + ' Hit Points.');
                                           
//                         if (enemyHealth <= 0) {
//                             console.log('Nice work! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + pickUp ); // + pickUp
//                             let loot = Math.random();
//                             if (loot <= .7) {
//                                 prize.push(pickUp); //(pickUp)
//                             }
//                         } else if (userHealth <= 0) {
//                             console.log(enemy + ' has defeated you. You died ☠️! You will respawn at the nearest keep.');
//                         }
//                 }
//             }
//         }
//     }
// }

// while(player.hp > 0) {
//     userRestore = function() {
//         userActive = true;
//         userHealth = 20;
//     };
//     userRestore();
//     game();
// }






