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
// - If the user enters 'ventory
const readlineSync = require('readline-sync');
console.log("Ahh you're finally awake! What is your name?");
const name = readlineSync.question("You! tell me your name at least, before we get our heads chopped off. \n Tell him your name >>> ");
let player = {
    name: userName,
    userHealth: 20,
    inventory: [],
}

let enemy = [
{
    helganGuard: "Helgan Guard",
    enemyHealth: 30,
    treasure: "Steel Helmet",
},
{
    imperialSoldier: "Imperial Soldier",
    enemyHealth: 35,
    treasure: "Steel Shield",
},
{
    stormcloakSoldier: "Stormcloak Soldier",
    enemyHealth: 25,
    treasure: "Light Boots",
}
]
let enemyHealth = 10; /////Temporary fix



 /////////// FUNCTIONS \\\\\\\\\\

function diceRoll(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}
function enemyEncounter(enemy) {
    diceRoll(1, 3)}
    if (diceRoll == 1) {
        helganGuard = enemy
    } else if (diceRoll == 2) {
        imperialSoldier = enemy
    } else if (diceRoll == 3) {
        stormcloakSoldier = enemy
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




readlineSync.question('Welcome to Helgan keep ' + name + ', This is where you will start your journey to find out who you are.\n Press Enter to begin. ');
    var userName = name
const options =['Walk', 'Exit', 'Print'];

function game() {
    const attackPower = Math.floor(Math.random() * 3 + 10);
    const enemyCriticalHit = Math.floor(Math.random() * 5 + 1);
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
            console.log('***Combat music kicks in***' + enemyEncounter + ' stoped you and draw his sword!\n What would you like to do?');

            while(userHealth > 0 ) {


                const user = readlineSync.question('Enter "r" to run, or enter "a" to attack! ');

                let inGame = true;
                let inBattle = false;


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
                        
                        let loot = 'boots'
                        if (enemy = dead ){
                            inventory.push(loot) 
                       
                        // if (enemyHealth <= 0) {
                        //     console.log('Nice work! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + loot ); // + pickUp
                        //     let loot = Math.random();
                        //     if (loot === 'boots') {
                        //         pickUp(loot);
                        //     }
                        } else if (userHealth <= 0) {
                            console.log(enemy + ' has defeated you. You died ☠️! You will respawn at the nearest keep.');
                        }
                }
            }
        }
    }
}
function 
while(player.userHealth > 0) {
    userRestore = function() {
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}