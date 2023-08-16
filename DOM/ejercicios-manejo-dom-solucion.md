
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


/**
 * Ejercicio 2: Mostrar un mensaje cuando el mouse entra en un elemento.
 */

const div = document.querySelector("#miDiv");
div.addEventListener('mouseenter', ()=> div.textContent = "Mouse dentro del elemento");
div.addEventListener('mouseleave', ()=> div.textContent = "Pasa el mouse aquí");

/**
 * Ejercicio 3: Contador de clics en un botón.
 */

const btnContador = document.querySelector('#contador');
const p = document.querySelector('#contadorTexto');
let contador=0;
btnContador.addEventListener('click', () => {
  contador++;
  p.textContent=`numero de clics: ${contador}`;
});

/**
 * Ejercicio 4: Cambiar una imagen al hacer clic en ella.
 */

const imagen = document.querySelector('#imagen');
imagen.addEventListener('click', ()=>{
  if (imagen.src.endsWith("imagen1.png")) {
    imagen.src = "imagen2.png";
  } else {
    imagen.src = "imagen1.png";
  }
});

/**
 * Ejercicio 5: Validar un formulario antes de enviarlo.
 */

const formulario = document.querySelector('#miFormulario');
formulario.addEventListener('submit', (event)=>{
  const nombre = document.querySelector('#nombre').value;
  if(nombre == ''){
    alert("Por favor, ingresa tu nombre");
  }else{
    event.preventDefault();
  }
})
