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

