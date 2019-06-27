var alphabet ="abcdefghijklmnopqrstuvwxyz";
var randomString = "";


while (randomString.length < 6) {
 var randomLetter = Math.floor(Math.random() * alphabet.length);
 var randomSet = alphabet[randomLetter];

  randomString += randomSet;

}

console.log(randomString);
