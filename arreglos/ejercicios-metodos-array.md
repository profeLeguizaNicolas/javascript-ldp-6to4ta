# Metodos array
## map()
#### Ejercicio 1: 
Duplicar elementos de un arreglo.
```js
const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map((numero) => numero * 2);

console.log(duplicados); // Resultado: [2, 4, 6, 8, 10]

```
#### Ejercicio 2: 
Convertir temperaturas de Celsius a Fahrenheit

```js 
const temperaturasCelsius = [25, 30, 15, 10, 5];

const temperaturasFahrenheit = temperaturasCelsius.map((celsius) => (celsius * 9) / 5 + 32);

console.log(temperaturasFahrenheit); // Resultado: [77, 86, 59, 50, 41]

```

#### Ejercicio 3: 
Extraer el nombre de un arreglo de objetos

```js
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 20 },
];

const nombres = personas.map((persona) => persona.nombre);

console.log(nombres); // Resultado: ['Juan', 'María', 'Pedro']

```
#### Ejercicio 4: 
Calcular el cuadrado de los números negativos de un arreglo

```js
const numeros = [-2, 5, -10, 8, -3];

const cuadradosNegativos = numeros.map((numero) => {
  if (numero < 0) {
    return numero ** 2;
  } else {
    return numero;
  }
});

console.log(cuadradosNegativos); // Resultado: [4, 5, 100, 8, 9]

```
## filter()
#### Ejercicio 1: 
Filtrar números pares de un arreglo

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares); // Resultado: [2, 4, 6, 8, 10]

```

#### Ejercicio 2: 
Filtrar nombres que empiezan con una letra específica

```js
const nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Carlos'];

const letraInicial = 'M';

const nombresFiltrados = nombres.filter((nombre) => nombre.charAt(0) === letraInicial);

console.log(nombresFiltrados); // Resultado: ['María']

```

#### Ejercicio 3: 
Filtrar objetos basados en una condición
```js
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 20 },
  { nombre: 'Ana', edad: 35 },
];

const personasFiltradas = personas.filter((persona) => persona.edad >= 30);

console.log(personasFiltradas);
// Resultado:
// [
//   { nombre: 'María', edad: 30 },
//   { nombre: 'Ana', edad: 35 }
// ]

```
#### Ejercicio 4: 
Filtrar elementos de un arreglo basados en una función externa
```js
const numeros = [1, 2, 3, 4, 5];

function esMayorA2(numero) {
  return numero > 2;
}

const numerosFiltrados = numeros.filter(esMayorA2);

console.log(numerosFiltrados); // Resultado: [3, 4, 5]

```


## some()

#### Ejercicio 1: 
Verificar si al menos un número cumple con una condición

```js
const numeros = [1, 2, 3, 4, 5];

const hayNumerosPares = numeros.some((numero) => numero % 2 === 0);

console.log(hayNumerosPares); // Resultado: true

```

#### Ejercicio 2: 
Verificar si al menos una palabra contiene una letra específica

```js
const palabras = ['manzana', 'pera', 'banana', 'naranja'];

const letra = 'a';

const hayPalabrasConLetra = palabras.some((palabra) => palabra.includes(letra));

console.log(hayPalabrasConLetra); // Resultado: true

```
#### Ejercicio 3: 
Verificar si al menos una persona es mayor de edad

```js
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 17 },
  { nombre: 'Pedro', edad: 20 },
];

const esMayorDeEdad = personas.some((persona) => persona.edad >= 18);

console.log(esMayorDeEdad); // Resultado: true

```
#### Ejercicio 4: 
Verificar si al menos un elemento de un arreglo cumple una condición externa

```js
const numeros = [1, 2, 3, 4, 5];

function esMayorA5(numero) {
  return numero > 5;
}

const hayNumerosMayoresA5 = numeros.some(esMayorA5);

console.log(hayNumerosMayoresA5); // Resultado: false

```
## every()
Ejercicio 1: Verificar si todos los números son mayores que cero

```js
const numeros = [1, 2, 3, 4, 5];

const sonTodosPositivos = numeros.every((numero) => numero > 0);

console.log(sonTodosPositivos); // Resultado: true

```

#### Ejercicio 2: 
Verificar si todas las palabras tienen al menos tres caracteres

```js
const palabras = ['manzana', 'pera', 'banana', 'naranja'];

const tienenTresCaracteres = palabras.every((palabra) => palabra.length >= 3);

console.log(tienenTresCaracteres); // Resultado: true

```

#### Ejercicio 3: 
Verificar si todas las personas son mayores de edad

```js
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 17 },
  { nombre: 'Pedro', edad: 20 },
];

const sonTodosMayoresDeEdad = personas.every((persona) => persona.edad >= 18);

console.log(sonTodosMayoresDeEdad); // Resultado: false

```

#### Ejercicio 4: 
Verificar si todos los elementos de un arreglo cumplen una condición externa

```js
const numeros = [1, 2, 3, 4, 5];

function esMenorA10(numero) {
  return numero < 10;
}

const todosMenoresA10 = numeros.every(esMenorA10);

console.log(todosMenoresA10); // Resultado: true

```
## reduce()
#### Ejercicio 1: 
Sumar todos los elementos de un arreglo

```js
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(suma); // Resultado: 15

```

#### Ejercicio 2: 
Concatenar elementos de un arreglo en una cadena

```js
const palabras = ['Hola', ' ', 'Mundo', '!'];

const cadena = palabras.reduce((acumulador, palabra) => acumulador + palabra, '');

console.log(cadena); // Resultado: 'Hola Mundo!'

```
#### Ejercicio 3: 
Encontrar el número máximo de un arreglo

```js
const numeros = [10, 5, 8, 3, 12];

const maximo = numeros.reduce((acumulador, numero) => (acumulador > numero ? acumulador : numero));

console.log(maximo); // Resultado: 12

```

#### Ejercicio 4: 
Calcular el promedio de un arreglo de números

```js
const numeros = [5, 10, 15, 20, 25];

const promedio = numeros.reduce((acumulador, numero, indice, arreglo) => {
  acumulador += numero;
  if (indice === arreglo.length - 1) {
    return acumulador / arreglo.length;
  } else {
    return acumulador;
  }
}, 0);

console.log(promedio); // Resultado: 15

```

## find()

#### Ejercicio 1: Encontrar el primer número par de un arreglo

```js
const numeros = [1, 3, 5, 2, 4, 6];

const numeroPar = numeros.find((numero) => numero % 2 === 0);

console.log(numeroPar); // Resultado: 2

```

#### Ejercicio 2: Encontrar la primera palabra que empieza con una letra específica

```js
const palabras = ['manzana', 'pera', 'banana', 'naranja'];

const letraInicial = 'p';

const palabraEncontrada = palabras.find((palabra) => palabra.charAt(0) === letraInicial);

console.log(palabraEncontrada); // Resultado: 'pera'

```
#### Ejercicio 3: Encontrar el primer objeto que cumple una condición específica

```js
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 20 },
];

const personaEncontrada = personas.find((persona) => persona.edad > 25);

console.log(personaEncontrada);
// Resultado:
// { nombre: 'María', edad: 30 }

```
#### Ejercicio 4: Encontrar el primer elemento de un arreglo basado en una función externa

```js
const numeros = [1, 2, 3, 4, 5];

function esMayorA3(numero) {
  return numero > 3;
}

const primerElementoCumpliendoCondicion = numeros.find(esMayorA3);

console.log(primerElementoCumpliendoCondicion); // Resultado: 4

```

## findIndex()







