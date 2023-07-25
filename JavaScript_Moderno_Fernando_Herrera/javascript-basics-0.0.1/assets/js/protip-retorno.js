// function crearPersona (nombre, apellido){
//   return { nombre, apellido}  
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido} ); //lo que está entre ({}) es lo que se regresa como un objeto. y no el cuerpo de mi función.
  
const persona = crearPersona('Sofía', 'Nieto');
console.log(persona);

function imprimeArgumentos (){
console.log(arguments)
}



const imprimeArgumentos2 = (edad, ...args) => console.log({edad, args});

imprimeArgumentos2(10, true, false, 'String ', 'Hola');