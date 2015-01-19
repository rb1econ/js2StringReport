input = prompt("Please enter any word, literally any word will do.");

alert("You entered " + input+". The first letter of your word is " + input.charAt(0) + ". If you were yelling, you would've typed " + input.toUpperCase() + ". The second, third and fourth letters of your word are: " + input.substring(1,4) + ". The word you typed has " + input.length + "characters long.");

