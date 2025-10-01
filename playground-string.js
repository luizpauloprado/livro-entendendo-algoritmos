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
// space: O(n) - O(1)
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Pula espaços em branco
    while (i < s.length && s[i] === ' ') i++;
    
    // Verifica sinal
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Constrói o número
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }
    
    const value = result*sign;
    const min = -Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    
    if (value < min) return min; 
    if (value > max) return max;
    
    return value;
};

// no aaa or no bbb
function abString(A, B) {
    let a = A;
    let b = B;
    let result = '';

    while (a > 0 || b > 0) {
        // const lastTwo = result.slice(-2);
        const length = result.length;
        const lastTwo = result[result.length - 1] + result[result.length - 2];

        if (lastTwo === 'aa') {
            result += 'b';
            b--;
        } else if (lastTwo === 'bb') {
            result += 'a';
            a--;
        } else {
            if (a > b) {
                result += 'a';
                a--;
            } else {
                result += 'b';
                b--;
            }
        }
    }

    return result;
}

console.log("no aaa or no bbb");
console.log(abString(3, 4));
console.log(abString(3, 3));