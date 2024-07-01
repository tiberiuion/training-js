//Bean counting

//You can get the Nth character, or letter, from a string by writing [N] after the string (for example, string[2]). The resulting value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

// Your code here.
function countBs(str) {
   return countChar(str, str[0]);
}

// Define the function countChar that takes (str: a string) and (char: a character to count)
function countChar(str, char) {
    
    //define a variable and store the result. Set it to zero by default.
    let result = 0;
    
    // Define a for loop that iterates through each letter of the string
    for (let i = 0; i < str.length; i++) {
        // if the current chracter str[i] matches the character we're counting AND the
        // Note: I spent some time trying some clever things to match the case of the query character with the case of the current character in the loop strp[i].
        // I didn't realise the double equals operator alos checks for case.
        if(str[i] == char) {
            result++
        }
    }
    return result;
}

console.log(countBs("BOb"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
