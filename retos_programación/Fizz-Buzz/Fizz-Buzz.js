/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// function fizzbuzz() {
//     let numbers = Array.from({ length: 100 }, (_, index) => index + 1);
  
//   numbers.forEach((i) => {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//       } else if (i % 3 === 0) {
//         console.log("fizz");
//       } else if (i % 5 === 0) {
//         console.log("buzz");
//       } else {
//         console.log(i);
//       }
//     });
//   }
  
//  console.log(fizzbuzz()) ;

function fizzbuzz() {
    let numbers = Array.from({ length: 100 }, (_, index) => index + 1);
  
    numbers.forEach((i) => {
      const number =
        i % 3 === 0 && i % 5 === 0
          ? "fizzbuzz"
          : i % 3 === 0
          ? "fizz"
          : i % 5 === 0
          ? "buzz"
          : i;
  
      console.log(number);
    });
  }
  
  fizzbuzz();




// if x % 2 = 0 entonces fizz 

// if x % 5 = 0 entonces buzz

// if x % 5 y x % 3 = 0 entonces fizzbuzz

