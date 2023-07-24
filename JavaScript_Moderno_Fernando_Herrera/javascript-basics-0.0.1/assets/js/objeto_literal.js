const personaje = {

    nombre: 'Sofía Nieto',
    codeName: 'Frida',
    vivo: false,
    edad: 50,
    coords: {
        Lat: 34.034,
        Lon: -118.70
    },
    trajes: ['Bióloga', 'Civil', 'Deportivo', 'sjbfskbdf', 'Last suite'] ,
    direccion: {
        zip: '108000, 90565',
        ubicacion: 'Malibú, California'
    },
    'Última película': 'Infinity war'
};

console.log('Nombre: ', personaje);
 console.log('Nombre: ', personaje.nombre);
 console.log('Coordenadas (latitud): ', personaje.coords.Lat);
 console.log('edad', personaje.edad);
 console.log('Número de trajes',personaje.trajes.length );
 console.log('ÚLTIMO TRAJE ES: ', personaje.trajes[personaje.trajes.length-1]);

 const x = 'vivo';

 
 console.log('¿Está vivo?: ', personaje[x]);
console.log('Última película', personaje['Última película'])
//Crear una propiedad en el objeto en una nueva ejecución:

personaje.casado= true;
//Borrar una propiedad de un objeto:

 delete personaje.edad;

 //trabajar el objeto como si fuera arreglo:

 const entriesPares = Object.entries(personaje);
 console.log(entriesPares);

 //Una vez definido el objeto ¿cómo hacerlo inmutable?

 Object.freeze(personaje);

 personaje.peso = 1000000;
personaje.codeName= 'asdbhkasbd';
 console.log(personaje);

 //Congela las propiedades pero no a los objetos dentro del objeto. 

 personaje.coords.Lat = 12.123;
 console.log(personaje);
 //Para bloquear la propiedad de un objeto dentro del objeto:

 const propiedades = Object.getOwnPropertyNames(personaje);
 const valores = Object.values(personaje);
 console.log(propiedades, valores);

