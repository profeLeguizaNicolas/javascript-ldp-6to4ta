# JavaScript Array Methods – Ejemplos prácticos
### Los  Methods más utilizados en JavaScript

#### Array Method – map()

Nos permite recorrer a través del array y cambiar los elementos dentro de él, devolviendo un nuevo array con la misma longitud que el original.

Ahora veamos un ejemplo practico utilizando dicho método de arreglo.

```js
//arreglo de objetos
const numeros = [1, 2, 3, 4, 5];

//devolver un nuevo arreglo con los números multiplicados por 5
const resultado = numeros.map((item) => {
    return item * 5;
})
console.log(resultado); // [5, 10, 15, 20, 25]
```
#### Array Method – filter()

el método filter reduce el contenido de el arreglo a sólo los elementos que pasan la prueba establecida por la función suministrada, muy importante retorna un nuevo arreglo.

Ahora veamos un ejemplo practico utilizando dicho método de arreglo.

```js
//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//mostrar sueldos mayores a 5000
const resultado = usuarios.filter((item) => {
    return item.sueldo > 5000;
})

//resultado
console.log(resultado)
/* [{id: 2, nombre: 'Cristian', correo: 'cristian@correo.com', sueldo: 7800},
{id: 3, nombre: 'Dorys', correo: 'dorys@correo.com', sueldo: 6500},
{id: 4, nombre: 'Andrés', correo: 'andres@correo.com', sueldo: 6200}] */
```

#### Array Method – some()
El método some() determina si al menos un elemento del array cumple la prueba que la función suministrada ha implementado. Si localiza un elemento en el array para el que la función especificada devuelve true; en caso contrario, devuelve false, muy importante el arreglo no se modifica.

Ahora veamos un ejemplo practico utilizando dicho método de arreglo

```js
//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//saber si existe algún usuario que se llame Andrés
const resultado = usuarios.some((item) => {
    return item.nombre === "Andrés";
})

//resultado
console.log(resultado) //true
```

#### Array Method – every()
Cada elemento de el arreglo se somete a la prueba suministrada, por la función proporcionada utilizando el método every(). todos los elementos del arreglo deben cumplir la prueba Devuelve un resultado booleano. Devuelve true si cumplen todos con dicha prueba y devuelve false si al menos una no cumple.

Ahora veamos un ejemplo practico utilizando dicho método de arreglo.

```js
//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//saber si todos los usuarios tienen el sueldo de 6500
const resultado = usuarios.every((item) => {
    return item.sueldo === 6500;
})

//resultado
console.log(resultado) //false
```

#### Array Method – reduce()
El método reduce() pasa el valor de retorno del cálculo en el elemento anterior y ejecuta una función de devolución de llamada «reductor» proporcionada por el usuario en cada elemento de el arreglo. Al ejecutar el reductor en todo el arreglo se obtiene un único valor como resultado final.

El «valor de retorno del cálculo anterior» no existe cuando se ejecuta inicialmente la llamada de retorno. Si se da uno, se puede sustituir por un valor inicial. En caso contrario, se utiliza el valor inicial del elemento del array en el índice 0, y la iteración comienza con el elemento siguiente (índice 1 en lugar de índice 0).
Ahora veamos un ejemplo practico utilizando dicho método de arreglo.

```js
//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//mostrar el sueldo total de todos los usuarios
const resultado = usuarios.reduce((total, item) => {
    return total + item.sueldo;
}, 0)

//resultado
console.log("Sueldo total de los usuarios: " + resultado) //Sueldo total de los usuarios: 26100
```

#### Array Method – find()
El método find() devuelve el primer elemento de un arreglo dada que cumple la función de comprobación. Y devuelve undefined si ningún valor satisface la función de comprobación.

Ahora veamos un ejemplo practico utilizando dicho método de arreglo.

```js
//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//mostrar los datos del usuario Cristian
const resultado = usuarios.find((item) => {
    return item.nombre === "Cristian";
}, 0)

//resultado
console.log(resultado) //{id: 2, nombre: 'Cristian', correo: 'cristian@correo.com', sueldo: 7800}

```
#### Array Method – findIndex()
El método findIndex() devuelve el primer miembro de un arreglo cuyo índice coincide con la función de comprobación suministrada. Se devuelve -1 si ningún elemento pasa el método de comprobación.

Ahora veamos un ejemplo practico utilizando dicho método de arreglo.

```js
//arreglo de objetos
const usuarios = [
    { id: 1, nombre: "Alejandro", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", correo: "daniela@correo.com", sueldo: 2100 },
];

//mostrar la posicion del arreglo en la que se encuentra la usuario Daniela
const resultado = usuarios.findIndex((item) => {
    return item.nombre === "Daniela";
}, 0)

//resultado
console.log(resultado) //4
```
