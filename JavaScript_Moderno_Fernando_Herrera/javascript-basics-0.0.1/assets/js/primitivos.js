let nombre = 'Bruja Escarlata'; 
console.log(nombre);
//No tiene let debido a que se estaría reinicializando la variable nombre y causaría un error en el código- 
//En este caso solo se está cambiando el valor de "nombre". Con "var" pareciera que funciona pero habría problemas más adelante

nombre = 'Wanda Maswijdwiedof';

  console.log(nombre);
// /*  */
  //El operador interno typeof te dice de qué tipo es tu variable.

  console.log(typeof nombre);

  nombre = 123;

  
  console.log(typeof nombre);

  let superPoder;
  
  console.log(typeof superPoder);

  let esNull= null;
  
  console.log(typeof esNull);

  //El principal uso de Symbol es identificar propiedades de manera
  //única

  let symbol1 = Symbol('a');
  let symbol2 = Symbol('a');

  console.log(typeof symbol1);
console.log(symbol1 === symbol2);

