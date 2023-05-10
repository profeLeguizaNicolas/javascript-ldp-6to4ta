**var**: Es la forma antigua de declarar variables en JavaScript. 
Las variables declaradas con var tienen un alcance de función y pueden ser accedidas dentro de la función en la que se declararon, 
incluso si están dentro de bloques de código (if, for, while, etc.). También tienen una característica llamada "hoisting" 
que hace que la declaración de la variable se mueva al comienzo de su ámbito, lo que significa que la variable puede ser usada antes de ser declarada 
sin lanzar un error. Sin embargo, esto puede causar confusión y errores difíciles de detectar, 
por lo que se recomienda evitar el uso de var en la mayoría de los casos.
```js
function ejemploVar() {
  var variable1 = "Hola";
  if (true) {
    var variable2 = "Mundo";
  }
  console.log(variable1 + " " + variable2);
}

ejemploVar(); // Imprime "Hola Mundo" en la consola
```

**let**: Es la forma moderna de declarar variables en JavaScript. Las variables declaradas con let tienen un alcance de bloque y solo pueden ser accedidas dentro del bloque en el que se declararon. Esto significa que no hay "hoisting" y las variables deben ser declaradas antes de ser usadas. Además, no se pueden redeclarar en el mismo ámbito, lo que evita errores de reasignación accidental.
```js
function ejemploLet() {
  let variable1 = "Hola";
  if (true) {
    let variable2 = "Mundo";
    console.log(variable1 + " " + variable2); // Imprime "Hola Mundo" en la consola
  }
  console.log(variable1 + " " + variable2); // Lanza un error en la consola porque variable2 no está definida
}

ejemploLet();
```
**const**: Es similar a let en cuanto a su alcance de bloque, pero se utiliza para declarar variables que no van a ser reasignadas. Una vez que se le asigna un valor a una variable constante, ese valor no puede ser cambiado. Esto hace que sea una buena práctica usar const para declarar variables que no deberían cambiar en el código, lo que ayuda a prevenir errores y hace el código más legible. Sin embargo, es importante tener en cuenta que si se trata de un objeto o un arreglo, se puede modificar su contenido aunque no se pueda reasignar la variable.
```js
function ejemploConst() {
  const PI = 3.14159;
  PI = 2; // Lanza un error en la consola porque PI no puede ser reasignada
}

ejemploConst();
```








