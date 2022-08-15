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
        if (key <= .3) {
            console.log('Walking around and taking in the scenery of Skyrim.');
        } else if (key >= .3) {
            console.log('***Combat music kicks in***' + enemies + ' stoped you and draw his sword!\n What would you like to do?');

            while(enemiesHealth > 0 && playerHealth > 0 ) {

                const player = readlineSync.question('Enter "a" to attack, or enter "r" to run ');

                switch (player) {
                    case 'r':
                        const run = Math.random();
                        if (run < .5) {
                            console.log("Face me Noed!! " + enemy + " attacked you, causing a damage total of: " + enemiesAttack + " Hit Points.");
                        } else {
                            console.log('You ran away successfully. You live to fight another day!');
                            break;
                        }
                    case 'a':
                        enemiesHealth -= attackPower;
                        console.log('You attacked  ' + enemy + ' with ' + attackPower + ' Hit Points.');

                        playerHealth -= enemiesAttack;
                        console.log('Enemy attacked you with ' + enemiesAttack + ' Hit Points.');

                        if (enemiesHealth <= 0) {
                            console.log('Nice work! You defeated ' + enemy + '.\n' + enemy + ' left behind: ' + pickUp ); // needs to randomize loot
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
        playerHealth = 20;
    };
    userRestore();
    walk();
}