// Highest power of 2
// tempo = O(log n)
// espaço = O(1) 
function highestPowerOf2(N) {
    let count = 0;

    while (N % 2 === 0) {
        count += 1;
        N = N / 2;
    }

    return count;
}

console.log(highestPowerOf2(24)); //expected 3