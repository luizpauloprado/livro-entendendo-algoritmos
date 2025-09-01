var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        
        j--;
        i++;
    }
};


// time: O(n^2)
// space: O(1)
var firstUniqChar = function(s) {
    for(let i=0; i < s.length; i++) { 
        let count = 0;

        for(let j=0; j < s.length; j++) { 
            if (s[j] === s[i] && j !== i) {
                 count += 1;
            }
        }
        
        if (count === 0) {
            return i;
        }
        
        count = 0;
    }
    
    return -1;
};

// time: O(n)
// space: O(n)
var firstUniqChar = function(s) {
    const letters = new Map();
    
    for(let i=0; i < s.length; i++) {
        const letter = s[i];
        letters.set(letter, (letters.get(letter) || 0) + 1);
    }
    
    for(let i=0; i < s.length; i++) {
        const letter = s[i];
        if (letters.has(letter) && letters.get(letter) === 1) {
            return i;
        }
    }
    
    return -1;
};