# Arreglos

## Ejercicio 18

Crea un programa a partir de las siguientes instrucciones:

1. Crea una variable llamada `nombres` con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
2. Pedile al usuario que ingrese un nombre e insertalo al final del arreglo que creaste en el paso 1.
3. Pedile al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
4. Recorre el arreglo e imprimilo.

Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

```
Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo
```

[solución](ejercicio-18.js)

## Ejercicio 19

Escribe un programa que:

1. Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
2. Elimine el segundo elemento.
3. Recorra e imprima el arreglo.

Ejemplo:

```
Ingresa un número> 5
1
3
4
5
```


[solución](ejercicio-19.js)

## Ejercicio 20

Imprime la matriz en la consola, el resultado final debe ser el siguiente:

```javascript
const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];
```

```markdown
Grupo 1:
  Pablo
  Maria
  Pedro
Grupo 2:
  Diana
  Juan
  Federico
Grupo 3:
  Roberto
  Daniel
  Sandra
```

**Nota 1:** utiliza ciclos anidados para solucionar este ejercicio
**Nota 2:** agrega dos espacios al principio de cada nombre

[solución](ejercicio-20.js)

## Ejercicio 21

Completa el siguiente programa para imprimir los números que sean mayores a 10.

```javascript
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá
```

El resultado debería ser el siguiente:

```
23
40
12
67
24
39
```

**Nota:** este ejercicio lo debes hacer con ciclos y sin ayuda de la función `filter` de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros números.

[solución](ejercicio-21.js)

## Ejercicio 22

Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

```javascript
const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
```

El resultado debería ser el siguiente:

```
11
```

**Nota:** este ejercicio lo debes hacer con ciclos y sin ayuda de la función `filter` de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.

[solución](ejercicio-22.js)
