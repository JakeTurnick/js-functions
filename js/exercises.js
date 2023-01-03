(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  //Takes two numbers and returns with the larger number
  //max() compares two numbers and returns the larger one
  //max(1, 2) --> returns '2'
  function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } return num2;
  };

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------


  //maxOfThree() returns the highest number of 3 provided
  //maxOfThree(1, 2, 3) --> returns '3'
  function maxOfThree(n1, n2, n3) {
    return Math.max(n1, n2, n3);
  };

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  
  //isVowel() compares an input letter to a list of values, returning true if it is a vowel and false if it's not
  //isVowel('a') --> returns 'true' // isVowel('b') --> returns 'false'
  function isVowel(letter) {
    switch(letter) {
      case 'a': case 'e': case 'i': case 'o': case 'u':
        return true;
    };
    return false;
  };


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  //rovarspraket() doubles consonants and adds an 'o' between them, ignoring vowels
  //rovarspraket('hello') --> returns 'hohelollolo' (hello -> hoh e lol lol o)
  function rovarspraket(string) {
    let letters = string.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u', ' '];
    let newString = ``;
    letters.forEach(letter => {
      //if a letter is not a vowel repeat the letter with and 'o'
      if (!vowels.includes(letter)) {
        newString += `${letter}o${letter}`;
      } else {
        newString += letter;
      };
    });
    // console.log(newString);
    return newString;
  };

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  //sum() takes an arry and adds each number onto an accumulated total
  //sum([1, 2, 3, 4]) --> returns '10'
  function sum(arr) {
    return arr.reduce((accum, curr) => accum + curr);
  }

  //multiply() takes an array and multiplies each to an accumulated total
  //multiply([1, 2, 3, 4]) --> returns '24'
  function multiply(arr) {
    return arr.reduce((accum, curr) => accum * curr);
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  //reverse() breaks down a string into letters, puts them into a new array backwards, then joins the array into a string
  //reverse('elloh') --> returns 'hello'
  function reverse(str) {
    let splitStr = str.split('');
    let rts = [];
    splitStr.forEach(letter => rts.unshift(letter));
    let reversed = rts.join('');
    return reversed;
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  //findLongestWord() takes an array of words and compares each word's length. 
  //If the length of the word is more than the current longest, its length becomes the new longest.
  //findLongestWord(['hi', 'hey', 'hello']) --> returns '5' (hello is 5 letters)
  function findLongestWord(arr) {
    let longest = '';
    arr.forEach(word => {
      if (word.length > longest) {
        longest = word.length;
      }
    });

    return longest;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  //filterLongWords() takes an array and a limit of characters per word.
  //if a word goes over the cap it is added to a new array which is returned
  //filterLongWords(['hi', 'hey', 'hello'], 2) --> returns ['hey', 'hello']
  function filterLongWords(arr, cap) {
    let longWords = arr.filter(word =>  word.length > cap);
    return longWords;
  }

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------


  
  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
