1. Crea un array con los números del 1 al 10, y luego utiliza un bucle para imprimir cada número en la consola.

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

```
2. Crea un array con varios nombres, y luego utiliza un bucle para imprimir cada nombre en la consola.

```js
const nombres = ['Juan', 'María', 'Pedro', 'Ana'];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

```
3.Crea un array con los números del 1 al 5, y luego utiliza el método map() para multiplicar cada número por 2 y almacenar el resultado en un nuevo array.
```js
const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log(numerosMultiplicados); // [2, 4, 6, 8, 10]

```
***Sin map()***
```js
/*Para entender un poco más el ejemplo vamos a resolverlo sin el método map()*/

function multNumeros(numeros){      //creo una funcion que recorra el arreglo y multiplique a cada elemento * 2
    const numeroMultiplicados=[];   //creo el nuevo arreglo

//recorro el arrelo y multiplico cada elemento * 2
    for(let i = 0; i < numeros.length; i++){
        numeroMultiplicados.push(numeros[i] * 2);
    }
    
    return numeroMultiplicados;  //retorno el nuevo arreglo
}
const arr = multNumeros(numeros); //llamo a la funcion y le asigno el valor retornado a la constante arr
console.log(arr);  //muestro el nuevo arreglo arr por consola
```

```js
//usando funcion anonima

const arr = function (numeros) {
  const numeroMultiplicados = [];
  for (let i = 0; i < numeros.length; i++) {
    numeroMultiplicados.push(numeros[i] * 2);
  }
  return numeroMultiplicados;
};
console.log(arr(numeros));

```

```js 
//usando funcion flecha
const arr = numeros => {
    const numeroMultiplicados = [];
    for (let i = 0; i < numeros.length; i++) {
        numeroMultiplicados.push(numeros[i] * 2);
    }   
    return numeroMultiplicados;
}
console.log(arr(numeros));
```

4. Crea un array con varios números y utiliza el método filter() para filtrar los números pares y almacenarlos en un nuevo array.

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); // [2, 4, 6, 8, 10]

```

```js
const arr = (numeros) => {
  const numerosPares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      numerosPares.push(numeros[i]);
    }
  }
  return numerosPares;
}
console.log(arr(numeros));
```

5. Crea dos arrays con algunos números, y luego utiliza el método concat() para unir ambos arrays en uno solo.
```js
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const numerosConcatenados = numeros1.concat(numeros2);

console.log(numerosConcatenados); // [1, 2, 3, 4, 5, 6]

```




