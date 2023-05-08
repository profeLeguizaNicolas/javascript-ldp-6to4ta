1. Escribe una función que acepte un arreglo de números y una función callback que devuelva true si todos los elementos son positivos
 y false si hay elementos negativos.
```js
function verificarElementos(arr, condicion) {
  for (let i = 0; i < arr.length; i++) {
    if (!condicion(arr[i])) {
      return false;
    }
  }
  return true;
}

function esPositivo(num) {
  return num > 0;
}

console.log(verificarElementos([1, 2, 3, 4, 5], esPositivo)); // Output: true
console.log(verificarElementos([-1, 2, 3, 4, 5], esPositivo)); // Output: false

```
Usando funcion flecha
```js
const verificarElementos =  (arr, condicion) => {

  for (let i = 0; i < arr.length; i++) {

    if (!condicion(arr[i])) {
    
      return false;
    }
  }
 
  return true;
}

const esPositivo = num => num > 0;

console.log(verificarElementos([1, 2, 3, 4, 5], esPositivo)); // Output: true
console.log(verificarElementos([1, 2, 3, -4, 5], esPositivo)); // Output: false
```
2. Escribe una función que acepte un arreglo de objetos *presonas* con las propiedades *nombre*, *edad* y una función callback que devuelva un nuevo arreglo con los elementos donde la propiedad *edad* es mayor a 18.

```js
function filtrarElementos(arr, condicion) {
  let nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condicion(arr[i])) {
      nuevoArr.push(arr[i]);
    }
  }
  return nuevoArr;
}

function esMayorAEdad(persona) {
  return persona.edad >= 18;
}

let personas = [  {nombre: 'Juan', edad: 25},  {nombre: 'María', edad: 15},  {nombre: 'Pedro', edad: 20},  {nombre: 'Lucía', edad: 17}];

console.log(filtrarElementos(personas, esMayorAEdad)); // Output: [{nombre: 'Juan', edad: 25}, {nombre: 'Pedro', edad: 20}]

```
Usando funcion flecha
````js
const filtrarElementos = (arr, condicion) => {
  let nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condicion(arr[i])) {
      nuevoArr.push(arr[i]);
    }
  }
  return nuevoArr;
}

const  esMayorAEdad = (persona) => persona.edad >= 18;

let personas = [  {nombre: 'Juan', edad: 25},  {nombre: 'María', edad: 15},  {nombre: 'Pedro', edad: 20},  {nombre: 'Lucía', edad: 17}];

console.log(filtrarElementos(personas, esMayorAEdad)); // Output: [{nombre: 'Juan', edad: 25}, {nombre: 'Pedro', edad: 20}]
```

