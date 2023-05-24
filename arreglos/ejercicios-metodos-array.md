# Metodos array
### map()
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

