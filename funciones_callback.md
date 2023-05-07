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
