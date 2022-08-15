// const readlineSync = require('readline-sync');
// const name = readlineSync.question("Ahh you're finally awake! What is your name?");
// // const inventory = readlineSync
// class Player {
//     constructor(name, playerHealth, inventory) {
//         this.playerName = name,
//         this.playerHealth = playerHealth,
//         this.inventory = []
//         //Why player doesn't start with a weapon??
//     }
//     isAlive(){
//         return this.playerHealth > 0
//     }
// }
// let hero = ['hero', 20, "Trouser"]
// class enemies {
//     constructor(name, enemyHealth, loots) {
//         this.enemyName = name,
//         this.enemyHealth = enemyHealth,
//         this.loots = []
//     }
// }
// let helgenGuard = new enemies ("Helgan Guard", 30, 'Steel Helmet')
// let empireGuard = new enemies ("Imperial Soldier", 35, "Steel Shield")

// // Create a function that extract an item from the enemy
// let stormCloak = ["Stormcloak Soldier", 25, "Light Boots"]
// stormCloak.pop("Light Boots");
// console.log(stormCloak);
// // The create a function that push that item to the player
// hero.push("Light Boots ");
// console.log(hero);

// while (hero.isAlive()) {
//     const input = readlineSync.keyIn("[w]walk\n[p]print\n[q]quit", {limit: 'wpq'})
//         if (input === 'w') walk(hero)
//         if (input === 'p') {
//             console.log(hero)
//             readlineSync.question ('ENTER to go back')
//         }
//         if (input === 'q')readlineSync.questionInt(hero, NaN)
//         walk()
// }
// let enemyHealth = 10; /////Temporary fix

const readlineSync = require('readline-sync');

let player = {
    name: userName,
    userHealth: 20,
    inventory: [],
}

let enemy = [
{
    helganGuard: "Helgan Guard",
    enemyHealth: 30,
    loot: "Steel Helmet",
},
{
    imperialSoldier: "Imperial Soldier",
    enemyHealth: 35,
    loot: "Steel Shield",
},
{
    stormcloakSoldier: "Stormcloak Soldier",
    enemyHealth: 25,
    loot: "Light Boots",
}
]
let enemyHealth = 10; /////Temporary fix



 /////////// FUNCTIONS \\\\\\\\\\

function rollEncounter(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function enemyEncounter(enemy) {
    diceRoll(1, 3)
    if (diceRoll === 1) {
        helganGuard = enemy
    } else if (diceRoll === 2) {
        imperialSoldier = enemy
    } else if (diceRoll === 3) {
        stormcloakSoldier = enemy
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



let prize = player.inventory;

function walk() {
    const attackPower = Math.floor(Math.random() * 3 + 10);
    const enemyCriticalHit = Math.floor(Math.random() * 5 + 3);
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

                        if (enemyHealth <= 0) {
                            console.log('Nice work! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + loot ); // needs to randomize loot
                            let loot = Math.random();
                            if (loot <= .7) {
                                prize.push(loot);
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
    // userRestore = function() {
    //     userActive = true;
    //     userHealth = 20
    // };
    // userRestore();
    walk();
}