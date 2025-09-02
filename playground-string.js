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

// String to integer - ATOI
// time: O(n)
// space: O(n) - O(k)
var myAtoi = function(s) {
    if (!s) return 0;
    
    const chars = [...s];
    
    const validChars = new Map();
    validChars.set("0", 0);
    validChars.set("1", 1);
    validChars.set("2", 2);
    validChars.set("3", 3);
    validChars.set("4", 4);
    validChars.set("5", 5);
    validChars.set("6", 6);
    validChars.set("7", 7);
    validChars.set("8", 8);
    validChars.set("9", 9);
    
    const validSigns = new Map();
    validSigns.set("+", "+");
    validSigns.set("-", "-");
    
    if (validChars.has(chars[0]) === false 
        && validSigns.has(chars[0]) === false 
        && chars[0] !== " ") return 0;
    
    const result = [];
    
    for(let i=0;i < chars.length; i++) {
        const previous = chars[i-1];
        const current = chars[i];
        const next = chars[i+1];
        
        if (validChars.has(previous) && validChars.has(current) === false) {
            break;
        }
        
        if (validSigns.has(previous) && validSigns.has(current)) {
            break;
        }
        
        if (validSigns.has(current) && next === " ") {
            break;
        }
        
        if (validSigns.has(current) && validChars.has(next) === false) {
            break;
        }
        
        if (validChars.has(current) === false && validSigns.has(current) === false && current !== " ") {
            break;
        }
        
        
        if (validSigns.has(current) && validChars.has(next)) {
            result.push(current);
            continue;
        }
        
        if (validChars.has(current)) {
            result.push(current);
            continue;
        }
    }

    if (result.length === 0) return 0;
    
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    const value = parseInt(result.join(""), 10);
    
    if (value < min) return min; 
    if (value > max) return max;
    
    return value;
};