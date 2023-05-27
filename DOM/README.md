# ¿QUÉ ES DOM?
Cada vez que se carga una página el navegador genera de forma automática una estructura que contiene todos y cada
uno de los elementos de esa página. A través de mandatos de JavaScript, y otros lenguajes, podemos manipular de forma
dinámica estos elementos. El encargado de esto es el llamado DOM.
DOM significa Document Objet Model, y viene a traducirse más o menos como: modelo del objeto documento. Se trata
de una de las de las características con mayor influencia en el diseño dinámico de páginas web ya que permite manejar de
forma sencilla las páginas. 
DOM transforma una página en una estructura. Dicha estructura tiene forma de arbol y esta compuesta por **nodos**, de hecho a los nodos que dependen de otros se les suele llamar **nodos hijos** y al superior, **nodo padre**
#### Supongamos una página muy sencilla como la siguiente:
```html
<html>
  <head>
    <title>Ejemplo de página</title>
  </head>
  <body>
    <p>Esta página sólo tiene <b>una línea</b></p>
  </body>
</html>
```

#### Se transformará en el siguiente árbol:
![DOM](dom.png)

Este es un ejemplo muy sencillo. Como podemos imaginar, lo habitual en una página cualquiera por la que naveguemos
es que tenga muchísimos nodos, cientos de ellos.

### Tipos de nodos
Si bien existen hasta 12 tipos de nodos, para manipular mediante DOM nuestras páginas nos basta con los que
detallamos a continuación:

- **Documento**: es el principal, de él partirán todos los demás nodos que componen nuestra página. También le podemos llamar nodo raíz.
- **Elemento**: existirá uno por cada una de las etiquetas de HTML. De él pueden derivarse otros nodos.
- **Atributo**: representa los atributos de HTML.
- **Texto**: representa el texto de la página.







