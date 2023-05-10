1. Escribe una función que acepte dos números como parámetros y devuelva su suma
```js
function sumar(num1, num2) {
  return num1 + num2;
}
console.log(sumar(2, 3)); // Output: 5
```
2. Escribe una función que acepte un número como parámetro y devuelva su valor absoluto.

```js
function valorAbsoluto(num) {
  if (num < 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(valorAbsoluto(-3)); // Output: 3
```
3. Escribe una función que acepte un arreglo de números como parámetro y devuelva el número mayor.

```js
function encontrarMayor(arr) {
  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}

console.log(encontrarMayor([2, 5, 1, 9])); // Output: 9
```
4. Escribe una función que acepte una cadena como parámetro y devuelva la cantidad de caracteres que tiene.

```js
function contarCaracteres(cadena) {
  return cadena.length;
}

console.log(contarCaracteres('Hola')); // Output: 4

```
5. Escribe una función que acepte un objeto como parámetro y devuelva la cantidad de propiedades que tiene.

```js
function contarPropiedades(objeto) {
  return Object.keys(objeto).length;
}

console.log(contarPropiedades({nombre: 'Juan', edad: 25, ciudad: 'Buenos Aires'})); // Output: 3
```
