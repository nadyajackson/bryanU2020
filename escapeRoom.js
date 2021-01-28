const readlineSync = require("readline-sync");
var playerName = readlineSync.question("Please enter your name. ");
var welcomeMessage = (`Welcome ${playerName} to the Escape Room.`);
console.log(`${welcomeMessage} \n You are in a room with one door and no windows. \n However, there is a hole in the wall. \n How will you leave this room?`)

//Boolean Flags
var isAlive = true;
var hasKey = false;

while(isAlive == true){
    menuOptions = readlineSync.keyIn('Press 1 to: Put hand in hole \n Press 2 to: Find the key \n Press 3 to Open the door ', {limit: '$<1-3>'});
    console.log(menuOptions);
    if(menuOptions == 1){
        console.log(`SHARK ATTACK!!!! ${playerName}, has died. GAME OVER! `);
        isAlive = false;
    }
    else if(menuOptions == 2 && hasKey == false){
        console.log(`${playerName} has collected the key`);
        hasKey = true;
    }
    else if(menuOptions == 2 && hasKey == true){
        console.log(`Hurry up Dummy you already have the key!`)
    }
    else if(menuOptions == 3 && hasKey == false){
        console.log("Darn it. The door is locked. If only you had a key.")
    }
    else if(menuOptions == 3 && hasKey == true){
        console.log(`Congratulations! ${playerName} you have escaped!`)
        isAlive = false;
    }
}


// hand in hole dead
// find key
// find key, find key dumbdumb
//open door, no key, no open
//open door, yes key, open

//if life === false then console.log("You have died. Try Again.") 