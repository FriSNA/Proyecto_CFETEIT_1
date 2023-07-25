function saludar(nombre){
    // console.log(arguments);
    // console.log("Hola " + nombre);
    return [1, 2, 3, 4, 5];

    console.log('Soy un código que está después del return y jamás me voy a ejecutar');
}

//El objetivo principal de una función es centralizar la lógica
//de un procedimiento que podemos ocupar varias veces.

// saludar();


//otra forma para definir funciones: función anónima

// const saludar2 = function (nombre){
//     console.log(arguments);
//     console.log("Saludar a " + nombre );
    
// }

// saludar2();
// let nombre = 'sofía nieto'
// saludar(nombre);

const retornoDesaludar = saludar('Frida Nieto', 26, true, 'De México'); //1
console.log(retornoDesaludar[0], retornoDesaludar[3]);
saludar('Frida Nieto', 26, true, 'De México');
// saludar2('Sofía Ambriz ');

//Lambda functions:

// const saludarFlecha = () =>{
//     console.log("Hola flecha");
// }
// const saludarFlecha2 = (nombre) =>{
//     console.log("Hola flecha " + nombre);
// }

// saludarFlecha();
// saludarFlecha2('Mario Nieto');

function sumar (a, b, c, d, e){
    return a + b + c + d + e -a;
}


const sumarVarios = (a, b, c, d, e) => {
    return a + b + c + d + e -c;
}
// console.log(sumar(1,2,3,4,5)); //14
console.log(sumarVarios(1,2,3,4,5)); //12

//Cómo hacer una función flecha resumida aún más:
const sumarVarios_resumida = (a, b, c, d, e) => a + b + c + d + e -d;
console.log ('Función flecha resumida: ', sumarVarios_resumida(1,2,3,4,5)); //11

// function getAleatorio(){
//     return Math.random() ;

// }

// console.log(getAleatorio())

const getaleatorio2 = () => Math.random();
console.log(getaleatorio2());


const numeros = [12, 34, 23, 50];
const dobles = numeros.map(function(numero){
    return console. log (numero *2);
});

//No se pueden ejecutar operaciones asíncronas dentro de map();


const productos = [
{id: 'asdnjf213', nombre : 'Camiseta', precio: 3000},
{id: 'iuerwy832', nombre : 'trusa', precio: 200},
{id: 'jnhoty890', nombre : 'Pantalón', precio: 8000},
{id: 'jnhoty890', nombre : 'Traje', precio: 10000},
{id: 'jskjdhbff', nombre : 'Calcetines', precio: 120},
];

const productosConDescuento= productos.map(function (producto){
    if (producto.precio <1000) return producto;

    return {
        ...producto,
        precio: producto.precio * 0.9
    }
});
//Retorno temprano

console.log(productosConDescuento); 


const productosDescuento = productos.map(producto => producto.id); 
   
const productosDescuento2 = productos.map(({nombre})=> nombre); 

console.log(productosDescuento); 
console.log(productosDescuento2); 

//método Filter

const esBarato = producto => producto.precio <1000;
const esCaro =producto => !esBarato(producto);
const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);

console.log(productosBaratos);
console.log(productosCaros);

const numerosS =[1,2,3,4,3,45,1,3,3,3];
const numerosUnicos = numerosS.filter((numero, posicion, numeros) =>{
return posicion === numerosS.indexOf(numero);
});

console.log(numerosUnicos);

