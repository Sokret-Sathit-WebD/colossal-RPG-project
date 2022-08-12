const readlineSync = require('readline-sync');
const name = readlineSync.question("Ahh you're finally awake! What is your name?");
class Player {
    constructor(name, playerHealth, inventory) {
        this.playerName = name,
        this.playerHealth = playerHealth,
        this.inventory = []
    }
    isAlive(){
        return this.playerHealth > 0
    }
}
const hero = new Player ('hero', 20)
class enemies {
    constructor(name, enemyHealth, loots) {
        this.enemyName = name,
        this.enemyHealth = enemyHealth,
        this.loots = []
    }
}
let helgenGuard = new enemies ("Helgan Guard", 30, 'Steel Helmet')
let empireGuard = new enemies ("Imperial Soldier", 35, "Steel Shield")
let stormCloak = new enemies ("Stormcloak Soldier", 25, "Light Boots")

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

// let enemy = undefined

 /////////// FUNCTIONS \\\\\\\\\\

function diceRoll(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}
function enemyEncounter(enemies) {
    diceRoll(1, 4)
    if (diceRoll === 1) {
        enemies = helgenGuard
    } else if (diceRoll === 2) {
        enemies = empireGuard
    } else if (diceRoll === 3) {
        enemies = stormCloak
    }
}
readlineSync.question('Welcome to Helgan keep ' + name + ', This is where you will start your journey to find out who you are.\n Press Enter to begin. ');
var playerName = hero
const options =['Walk', 'Exit', 'Print'];

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// const random = getRandomInt(100)
// hero.health -= random

// function pickUp() {
//     let loots = enemies.loots
// }

function walk() {
    const attackPower = Math.floor(Math.random() * 3 +1);
    const enemyCriticalHit = Math.floor(Math.random() * 5);
    let playerHealth = 20;
    
    const index = readlineSync.keyInSelect(options, 'What will you do Dovahhkin?');
    
    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print') {
        console.log(hero);
    } else if (options[index] === 'Walk') {
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking around and taking in the scenery of Skyrim.');
        } else if (key >= .3) {
            enemyEncounter(enemies)
            console.log('***  Combat music kicks in  ***' + enemyEncounter + ' stoped you and draw his sword!\n What would you like to do?');         
            while(playerHealth > 0 ) {
                const player = readlineSync.question('Enter "a" to attack, or enter "r" to run! ');
                switch (player) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("You can't escape! " + enemies + " attacked you, causing a damage total of: " + enemyCriticalHit + " Hit Points.");
                        } else {
                            console.log('You ran away successfully. You live to fight another day!');
                            break;
                        }
                        case 'a':
                            let enemyHealth = enemies ///Temporary fix
                            enemyHealth -= attackPower;
                            console.log('You attacked  ' + enemies + ' with ' + attackPower + ' Hit Points.');
                            
                            playerHealth -= enemyCriticalHit;
                            console.log('Enemy attacked you with ' + enemyCriticalHit + ' Hit Points.');
                            
                            if (enemyHealth <= 0) {
                                loots = []
                                let prize = loots;
                                console.log('Nice work! You defeated ' + enemies + '.\n' + enemies + ' left behind: ' + loots ); // + pickUp
                                if (loot === "Boots") {
                                    pickUp(loot);
                                }
                            } else if (playerHealth <= 0) {
                                console.log(enemies + ' has defeated you. You died ☠️! You will respawn at the nearest keep.');
                            }
                        }
                    }
                }
            }
        }
        
        while(hero.playerHealth > 0) {
            function playerRestore() {
                playerActive = true;
                playerHealth = 40;
            };
            playerRestore();
            walk();
        }
        
        
        
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