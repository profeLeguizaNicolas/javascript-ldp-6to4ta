# Funciones CallBacks
En JavaScript, las funciones son ciudadanos de primera clase, lo que significa que pueden ser pasadas como argumentos a otras funciones y también pueden ser devueltas como resultados de otras funciones. **Una función callback es simplemente una función que se pasa como argumento a otra función y se ejecuta en algún momento dentro de esa función principal.**
Las funciones callback son muy utilizadas en JavaScript, especialmente en situaciones asincrónicas, como manejo de eventos, peticiones AJAX y temporizadores. Aquí tenes algunos ejemplos para comprender mejor cómo funcionan las funciones callback:
### Ejemplo 1: Manejo de Eventos
Supongamos que tenemos un botón en una página web y queremos que se ejecute una función cuando se hace clic en él:
```js
// Definimos la función callback
function handleClick() {
  console.log("¡Botón clickeado!");
}

// Agregamos el evento y pasamos la función callback
document.querySelector("#miBoton").addEventListener("click", handleClick);
```
En este ejemplo, la función handleClick es la función callback que se ejecutará cuando se haga clic en el botón.
### Ejemplo 2: Temporizador
Si queremos ejecutar una función después de cierto tiempo:
```js
function miCallback() {
  console.log("¡Tiempo transcurrido!");
}

// Llamamos a setTimeout y pasamos la función callback
setTimeout(miCallback, 3000); // Ejecutará miCallback después de 3 segundos (3000 milisegundos)
```
### Ejemplo 3: Peticiones AJAX
Cuando hacemos una solicitud a un servidor y queremos manejar la respuesta:
```js
function manejarRespuesta(respuesta) {
  console.log("Respuesta recibida:", respuesta);
}

function realizarPeticion(url, callback) {
  // Simulamos una petición AJAX exitosa
  const respuestaSimulada = "Datos de respuesta...";
  callback(respuestaSimulada);
}
realizarPeticion("https://ejemplo.com/api/data", manejarRespuesta);
```
En este caso, la función manejarRespuesta es una función callback que manejará la respuesta de la solicitud AJAX.

Las funciones callback son una parte fundamental de la programación asincrónica en JavaScript, ya que permiten ejecutar código en momentos específicos, como cuando se completa una tarea, se recibe una respuesta del servidor, etc.



