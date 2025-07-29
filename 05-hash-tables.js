const book = {};
book['apple'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;

console.log("Prices:"); 
console.log(book); // { apple: 0.67, milk: 1.49, avocado: 1.49 }

const check_voter = (name) => {
  if (voted[name]) {
    console.log("kick them out!");
  } else {
    voted[name] = true;
    console.log("let them vote!");
  }
}

console.log("Voters:"); 
check_voter("tom"); // let them vote!
check_voter("mike"); // let them vote!
check_voter("mike"); // kick them out!