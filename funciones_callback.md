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
```js
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
Usando el método *filter*
```js

const objetoFiltrado = personas.filter(persona => persona.edad >= 18);
console.log(objetoFiltrado); // Output: [{nombre: 'Juan', edad: 25}, {nombre: 'Pedro', edad: 20}]
```

3. Escribe una función que acepte un arreglo de números y una función callback que devuelva la suma de los elementos del arreglo que cumplen cierta condición de pares.

```js
function sumarElementos(arr, condicion) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (condicion(arr[i])) {
      suma += arr[i];
    }
  }
  return suma;
}

function esPar(num) {
  return num % 2 === 0;
}

console.log(sumarElementos([1, 2, 3, 4, 5], esPar)); // Output: 6 (2 + 4)

```
Usando funcion flecha
```js
const sumarElementos = (arr, condicion) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (condicion(arr[i])) {
      suma += arr[i];
    }
  }
  return suma;
}

const esPar = num => num % 2 === 0;

console.log(sumarElementos([1, 2, 3, 4, 5], esPar)); // Output: 6 (2 + 4)

```
Usando el método *reduce*
```js
const pares = [5, 10, 2].filter(num => num % 2 === 0 );

const sumaPares = pares.reduce((acumulador, valActual) =>  acumulador + valActual);

console.log(sumaPares);
```
<table><tbody><tr><td></td><td>acumulador</td><td>valorActual</td><td>resultado</td></tr><tr><td>Primera</td><td>0</td><td>5</td><td>5</td></tr><tr><td>Segunda</td><td>5</td><td>10</td><td>15</td></tr><tr><td>Tercera</td><td>15</td><td>2</td><td>17</td></tr></tbody></table>


Explicacion metodo **reduce**
**Metodo reduce**
```js

const array = [5, 10, 2];
const sumatoria = array.reduce((acum, item, index, arr) => {
  return  acum = acum+ item;
}, 0);

//acum : acumulador
//item : elemento del arreglo, representa el elemento actual
//index : indice del elemento actual (no se usa en ente ejemplo)
//arr : referencia al arreglo (no se usa en este ejemplo)
// el 0 es el valor inicial del acumulador, si se omite comienza desde el primer elemento

console.log(sumatoria);
```
