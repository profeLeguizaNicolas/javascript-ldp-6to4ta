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


