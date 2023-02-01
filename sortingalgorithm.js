
/*  Exove developer test 1A.
    Sorting function that sorts list of words by ASCII code of the character. 
    Sorting is done comparing the third character then the second character 
    and then first character. The smallest ASCII code is the first on the sorted list.
*/
function sortByAscii(wordList) {
    wordList.sort(function(a,b) {
        for (let i = 2; i >= 0; i--) {
            var comp = a.charCodeAt(i)-b.charCodeAt(i);
            if (comp != 0) {
                return comp;
            }
        }
    });
    return wordList;
}

// Test words
const wordList = ["BOAT", "Locomotive", "Poet", "Accelerate", "GOLF", "ACCIDENTAL", "Submarine"];

// Console.log to check the order of the words.
console.log(sortByAscii(wordList))