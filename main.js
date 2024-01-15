//1
function countVowels(inputString) 
{
    const lowercaseString = inputString.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCount = lowercaseString.split('').reduce((count, char) => {
        if (vowels.includes(char)) {
            return count + 1;
        }
        return count;
    }, 0);

    return vowelCount;
}

const inputString = "vinay";
const result = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${result}`);


// 2
function countConsonants(inputString) {
    const lowercaseString = inputString.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonantCount = lowercaseString.split('').reduce((count, char) => {
        if (/^[a-z]$/.test(char) && !vowels.includes(char)) {
            return count + 1;
        }
        return count;
    }, 0);

    return consonantCount;
}

const inputString2 = "this is me ";
const result2 = countConsonants(inputString2);
console.log(`Number of consonants in "${inputString}": ${result}`);

//3
function reverseString(inputString) {
    const reversedString = inputString.split('').reverse().join('');
    return reversedString;
}

const inputString3 = "Hello my name is vinay";
const reversedResult3 = reverseString(inputString3);
console.log(`Original String: ${inputString3}`);
console.log(`Reversed String: ${reversedResult3}`);

//4 
function isPalindrome(inputString) {
    const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}

const palindromeString = "madam ";
const nonPalindromeString = "vinay";

console.log(`Is "${palindromeString}" a palindrome? ${isPalindrome(palindromeString)}`);
console.log(`Is "${nonPalindromeString}" a palindrome? ${isPalindrome(nonPalindromeString)}`);

//5
function countWords(inputString) {
    const wordMatches = inputString.match(/\b\w+\b/g);
    return wordMatches ? wordMatches.length : 0;
}

const inputString5 = "my name is vinay bhandari";
const numberOfWords5 = countWords(inputString5);
console.log(`Number of words in "${inputString5}": ${numberOfWords5}`);

//6
function findLongestWord(inputString) {
    const wordMatches = inputString.match(/\b\w+\b/g);

    if (!wordMatches) {
        return false; 
    }
    const longestWord = wordMatches.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');

    return longestWord;
}

const inputString6 = "in this program i will find biggest word.";
const longestWord6 = findLongestWord(inputString6);
console.log(`Longest word in "${inputString6}": ${longestWord6}`);

//7
function removeVowels(inputString) {
    const stringWithoutVowels = inputString.replace(/[aeiou]/gi, '');

    return stringWithoutVowels;
}
const inputString7 = "vinay bhandari";
const result7 = removeVowels(inputString);
console.log(`Original String: ${inputString7}`);
console.log(`String without any vowels: ${result7}`);

//8
function containsOnlyAlphabets(inputString) {
    const expr = /^[a-zA-Z]+$/;
    return expr.test(inputString);
}

const stringWithAlphabets = "vinay";
const stringWithNonAlphabets = "vinay7777";

console.log(`Contains only alphabets? ${containsOnlyAlphabets(stringWithAlphabets)}`); // true
console.log(`Contains only alphabets? ${containsOnlyAlphabets(stringWithNonAlphabets)}`); // false

//9
function countUppercaseLetters(inputString) {

    const uppercaseMatches = inputString.match(/[A-Z]/g);

    return uppercaseMatches ? uppercaseMatches.length : 0;
}
const inputString9 = "Vinay BHANDARI";
const numberOfUppercaseLetters = countUppercaseLetters(inputString9);
console.log(`Number of uppercase letters in "${inputString9}": ${numberOfUppercaseLetters}`);

//10
function countLowercaseLetters(inputString) {
    const lowercaseMatches = inputString.match(/[a-z]/g);
    return lowercaseMatches ? lowercaseMatches.length : 0;
}

const inputString10 = "Hello World!";
const numberOfLowercaseLetters = countLowercaseLetters(inputString10);
console.log(`Number of lowercase letters in "${inputString10}": ${numberOfLowercaseLetters}`);
