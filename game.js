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

const readlineSync = require('readline-sync');
const name = readlineSync.question("Ahh you're finally awake! What is your name?");
readlineSync.question('Welcome to Helgan keep ' + name + ', This is where you will start your journey to find out who you are.\n Press Enter to begin. ');

const enemies = ['Helgan Guard', 'Empire Guard', 'Storm Cloak'];
const loots = ['Steel Helmet', 'Steel Shield', 'Light Boots'];
var prize = [];
let playerHealth = 20;
const options = ['Walk', 'Print', 'Exit'];
let pickUp = loots[Math.floor(Math.random() * loots.length)];

 /////////// FUNCTIONS \\\\\\\\\\

function walk() {
    const attackPower = Math.floor(Math.random() * 3 + 10);
    const enemy = enemies [Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 30;
    const enemiesAttack = Math.floor(Math.random() * (5 - 3) + 2);

    const index = readlineSync.keyInSelect(options, 'What will you do Dovahhkin?');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(name + ': \n ' + playerHealth + '\nloots: ' + pickUp);
    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key < .305) {
            console.log('Walking around and taking in the scenery of Skyrim.')
        }
        else if (key < .705) {
            console.log('Trinkets, Odds and ends...that sort of things')
        }
        else {
            console.log('*** Combat music kicks in *** ' + enemy + ' stops you and draw his sword!\n What would you like to do?')
        

            while(enemiesHealth > 0 && playerHealth > 0 ) {

                const player = readlineSync.question('Enter "r" to run, or enter "a" to attack ::: ');

                switch (player) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("Face me Nord!! " + enemy + " attacked you, causing a damage total of: " + enemiesAttack + " Hit Points.");
                        } else {
                            console.log('You ran away successfully. You live to fight another day Dragonborn!');
                            break;
                        }
                    case 'a':
                        enemiesHealth -= attackPower;
                        console.log('You attacked  ' + enemy + ' with ' + attackPower + ' Hit Points.');

                        playerHealth -= enemiesAttack;
                        console.log('Enemy attacked you with ' + enemiesAttack + ' Hit Points.');

                        if (enemiesHealth <= 0) {
                            console.log('FOR SKYRIMMMMMMMMMMMMMMMMMMMMMMM! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + pickUp ); // needs to randomize loot
                            let loot = Math.random();
                            if (loot <= .9) {
                                prize.push(pickUp);
                            }
                        } else if (playerHealth <= 0) {
                            console.log(enemy + ' has defeated you. You died ☠️! You will respawn at the nearest keep.');
                        }
                }
            }
        }
    }
}

while(playerHealth > 0) {
    userRestore = function() {
        userActive = true;
        playerHealth = 40;
    };
    userRestore();
    walk();
}