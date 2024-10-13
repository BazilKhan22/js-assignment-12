// 1. Hat-Tail program

var hatTailOptions = ["Hat", "Tail"];
var hatTailResult = hatTailOptions[Math.floor(Math.random() * hatTailOptions.length)];
console.log("Hat-Tail Result: " + hatTailResult);


// 2. Dice roll program

var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice Roll Result: " + diceRoll);


// 3. Random password generator

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var randomPassword = "";
for (var i = 0; i < 10; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log("Random Password: " + randomPassword);


