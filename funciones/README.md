# Funciones
## Ejercicio 1
Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».
```js
const numeroMayor = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        return n1
    } else if (n2 > n1 && n2 > n3) {
        return n2
    } else if (n3 > n1 && n3 > n2) {
        return n3
    } else {
        return 'son iguales'
    }
}

const respuesta = numeroMayor(2, 8, 5);
console.log(respuesta) // respuesta: 8
```

## Ejercicio 2
Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
```js
const esVocal = (c) => {
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        return true
    }
    if (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
        return true
    }

    return false

}

const respuesta = esVocal('e');
console.log(respuesta) // respuesta: true
```

## Ejercicio 3
Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

```js
const generar_caracteres = (numero, caracter) => {
    let resp = ''
    for (let i = 0; i < numero; i++) {
        resp += caracter;
    }

    return resp;

}

const respuesta = generar_caracteres(7, 'x');
console.log(respuesta) // respuesta: xxxxxxx
```


## Ejercicio 4
Crear una función inversa() que calcule la inversión de una cadena y lo retorne. Por ejemplo, la cadena «Hola Mundo» debería retornar la cadena «odnum aloh» (retornar todo el String en minúsculas).
```js
const inversa = (cadena) => {

    let invertida = (cadena).toLowerCase().split('').reverse().join('');
    return invertida;

}

const respuesta = inversa('Hola Mundo');
console.log(respuesta); // respuesta: odnum aloh
```

## Ejercicio 5
Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.

```js 
const sumaArreglo = (arreglo) => {

    const longitudArreglo = arreglo.length;
    let sumaArreglo = 0;
    for (let i = 0; i < longitudArreglo; i++) {
        sumaArreglo += arreglo[i];
    }

    return sumaArreglo + longitudArreglo;
 }
const respuesta = sumaArreglo([2, 5, 7,##  2]);
consle.log(respuesta) // respuesta: 20

```

## Ejercicio 6
Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

```js
const multiplicarArreglo = (arreglo) => {

    const minimo = Math.min(...arreglo);
    const maximo = Math.max(...arreglo);
    return minimo * maximo;
}

const respuesta = sumaArreglo([2, 5, 7, 2]);
console.log(respuesta) // respuesta: 14

``` 
## Ejercicio 7
Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud de el nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

```js
const funcionArray = (array1, array2) => {

    let = nuevoArreglo = [...array1, ...array2];
    if (nuevoArreglo.length >= 10) {
        return true;
    } else {
        return false
    }

}

const respuesta = funcionArray([2, 5, 2, 3, 7, 2], [1, 5, 3, 3]);
console.log(respuesta) // respuesta: true

```
## Ejercicio 8
Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

```js
const funcionArray = (array1, array2) => {

    let = nuevoArreglo = [...array1, ...array2];
    nuevoArreglo = nuevoArreglo.map((elemento) => {
        return elemento * 2
    });

    return nuevoArreglo;


}

const respuesta = funcionArray([2, 5, 2], [1, 5, 3]);
console.log(respuesta) // respuesta: (6) [4, 10, 4, 2, 10, 6]

```

