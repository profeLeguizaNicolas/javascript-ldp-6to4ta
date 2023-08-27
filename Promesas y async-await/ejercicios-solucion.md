## Todos los ejercicios se realizan utilizando la API https://jsonplaceholder.typicode.com/
### Leer la documentacion de la API - Analizar los recursos que ofrece
### Realizar los ejercicios utilizando *fetch*

1 Realizar una solicitud GET básica del recurso post 1
   
   ```js
   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
   ```
2 Enviar datos en una solicitud POST al recurso /post con los siguientes datos:
```
    title: 'Nuevo post',
    body: 'Contenido del nuevo post',
    userId: 1
```
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Nuevo post',
    body: 'Contenido del nuevo post',
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
3 Realizar una solicitud GET y manejar errores de red. Ejemplo /post/99999 (no existe)
```js
fetch('https://jsonplaceholder.typicode.com/posts/99999')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo completar la solicitud');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
4 Realizar una solicitud GET con parámetros de consulta. Ejemplo /post/${postId} postId puede tomar cualquier valor válido
```js
const postId = 1;
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
5 Realizar una solicitud GET con async/await del recurso /post/1
```js
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```   





