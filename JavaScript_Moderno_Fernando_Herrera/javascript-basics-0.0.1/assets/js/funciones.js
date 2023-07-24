function saludar(nombre){
    console.log(arguments);
    console.log("Hola " + nombre);
}

//El objetivo principal de una función es centralizar la lógica
//de un procedimiento que podemos ocupar varias veces.

saludar();


//otra forma para definir funciones: función anónima

const saludar2 = function (nombre){
    console.log("Saludar a " + nombre );
}

saludar2();
// let nombre = 'sofía nieto'
// saludar(nombre);

saludar('Frida Nieto', 26, true, 'De México');
saludar2('Sofía Ambriz ');

//Lambda functions:

const saludarFlecha = () =>{
    console.log("Hola flecha");
}
const saludarFlecha2 = (nombre) =>{
    console.log("Hola flecha " + nombre);
}

saludarFlecha();
saludarFlecha2('Mario Nieto');