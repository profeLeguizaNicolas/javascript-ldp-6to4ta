# JSON
JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que se utiliza comúnmente para transmitir y almacenar información estructurada. Es fácilmente legible tanto para humanos como para máquinas, lo que lo hace muy popular para la comunicación entre aplicaciones y el almacenamiento de configuraciones.

La estructura básica de un objeto JSON consta de pares clave-valor, donde las claves son cadenas de texto y los valores pueden ser cadenas, números, booleanos, objetos, matrices u otros valores JSON válidos.
```js
{
  "nombre": "Juan",
  "edad": 30,
  "soltero": true,
  "intereses": ["programación", "viajes", "fotografía"]
}
```
En este ejemplo, tenemos un objeto JSON que representa información sobre una persona llamada Juan. El objeto contiene cuatro pares clave-valor: "nombre", "edad", "soltero" e "intereses". "nombre" es una cadena, "edad" es un número, "soltero" es un booleano y "intereses" es una matriz de cadenas.

Además de los objetos, JSON también admite matrices, que son listas ordenadas de valores. Ejemplo de una matriz JSON:
```js
{
  "frutas": ["manzana", "banana", "naranja", "uva"]
}
```
En este ejemplo, tenemos un objeto que contiene una clave "frutas", cuyo valor es una matriz de cadenas que representa diferentes tipos de frutas.

Los archivos JSON generalmente se guardan con la extensión ".json". Aquí hay un ejemplo de cómo se vería un archivo JSON completo:
```js
{
  "usuario": {
    "nombre": "Maria",
    "edad": 25,
    "email": "maria@example.com"
  },
  "productos": [
    {
      "nombre": "Camiseta",
      "precio": 20.99,
      "disponible": true
    },
    {
      "nombre": "Pantalón",
      "precio": 34.95,
      "disponible": false
    }
  ]
}
```
En este ejemplo, el archivo JSON contiene un objeto con dos claves: "usuario" y "productos". "usuario" tiene un objeto anidado que representa la información del usuario, y "productos" tiene una matriz de objetos que representan diferentes productos con sus detalles respectivos.

JSON se utiliza ampliamente en el desarrollo web y de aplicaciones para transmitir datos entre el servidor y el cliente, así como para el almacenamiento de configuraciones y datos estructurados. Su simplicidad y legibilidad lo hacen una elección popular para estas tareas.
