
 * Ejercicio 1: Cambiar el color de fondo al hacer clic en un botón

<!-- ejercicio 1-->
<button id="cambiarColor">Cambiar color de fondo</button>
```js
const boton = document.querySelector("#cambiarColor");
boton.addEventListener('click', ()=>document.body.style.background="lightblue");
```
```html
<!-- ejercicio 1-->
<button id="cambiarColor">Cambiar color de fondo</button>
```

 * Ejercicio 2: Mostrar un mensaje cuando el mouse entra en un elemento.
```html
<!-- ejercicio 2-->
<div id="miDiv">Pasa el mouse aquí</div>
```
```js
const div = document.querySelector("#miDiv");
div.addEventListener('mouseenter', ()=> div.textContent = "Mouse dentro del elemento");
div.addEventListener('mouseleave', ()=> div.textContent = "Pasa el mouse aquí");
```

 * Ejercicio 3: Contador de clics en un botón.
```html
<!-- ejercicio 3-->
<button id="contador">Clickea</button>
<p id="contadorTexto">Número de clicks: 0</p>
```
```js
const btnContador = document.querySelector('#contador');
const p = document.querySelector('#contadorTexto');
let contador=0;
btnContador.addEventListener('click', () => {
  contador++;
  p.textContent=`numero de clics: ${contador}`;
});
```

 * Ejercicio 4: Cambiar una imagen al hacer clic en ella.
```html
<!--ejercicio 4-->
<img id="imagen" src="imagen1.png" width="200">
```html
```js
const imagen = document.querySelector('#imagen');
imagen.addEventListener('click', ()=>{
  if (imagen.src.endsWith("imagen1.png")) {
    imagen.src = "imagen2.png";
  } else {
    imagen.src = "imagen1.png";
  }
});
```
 * Ejercicio 5: Validar un formulario antes de enviarlo
```html
<!--ejercicio 5-->
<form id="miFormulario">
  <input type="text" id="nombre" placeholder="Nombre">
  <button type="submit">Enviar</button>
</form>
```
```js
const formulario = document.querySelector('#miFormulario');
formulario.addEventListener('submit', (event)=>{
  const nombre = document.querySelector('#nombre').value;
  if(nombre == ''){
    alert("Por favor, ingresa tu nombre");
  }else{
    event.preventDefault();
  }
})
```
/**
 * Ejercicio 5: Validar un formulario antes de enviarlo.
 */
```js
const formulario = document.querySelector("#miFormulario");
formulario.addEventListener("submit", (event) => {
  const nombre = document.querySelector("#nombre").value;
  if (nombre == "") {
    alert("Por favor, ingresa tu nombre");
  } else {
    event.preventDefault();
  }
});
```
/**
 * Ejercicio 6: Cambiar el color del texto al seleccionar un color en un input tipo color.
```js
const colorInput = document.querySelector("#colorInput");
const textoColor = document.querySelector("#textoColor");
colorInput.addEventListener("input", () => {
  const colorSeleccionado = colorInput.value;
  textoColor.style.color = colorSeleccionado;
});
```
/**
 * Ejercicio 7: Ocultar/mostrar un elemento al hacer clic en un botón.
 */
```js
const toggleBtn = document.querySelector("#toggleBtn");
const elementoOculto = document.querySelector("#elementoOculto");
toggleBtn.addEventListener("click", () => {
  if (elementoOculto.style.display === "none") {
    elementoOculto.style.display = "block";
  } else {
    elementoOculto.style.display = "none";
  }
});
```
/**
 * Ejercicio 8: Cambiar el tamaño de fuente de un párrafo con las teclas "+" y "-".
 */
```js
const texto = document.querySelector("#texto");
document.addEventListener("keydown", (event) => {
  if (event.key === "+") {
    texto.style.fontSize = "20px";
  } else if (event.key === "-") {
    texto.style.fontSize = "14px";
  }
});
```
/**
 * Ejercicio 9: Arrastrar y soltar un elemento en un contenedor.
```js
const contenedor = document.querySelector("#contenedor");
const elementoArrastrable = document.querySelector("#elementoArrastrable");

elementoArrastrable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "elementoArrastrable");
});

// contenedor.addEventListener("dragover", (event) => {colorInput

//   event.preventDefault();
// });

contenedor.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  if (data === "elementoArrastrable") {
    contenedor.appendChild(elementoArrastrable);
  }
});
```
/**
 * Ejercicio 10: Cambiar el fondo de un elemento al mantener presionada una tecla.

```js
const caja = document.getElementById("caja");
  document.addEventListener("keydown", function(event) {
    if (event.code == "Space") {
      console.log(event);
      caja.style.backgroundColor = "orange";
    }
  });

  document.addEventListener("keyup", (event) =>{
    if (event.code == "Space" ){
      caja.style.backgroundColor = "lightgray";
    }
  });

```

