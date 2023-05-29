//base de datos
const productos = [
  {
    id: 1,
    nombre: "Placa Base",
    precio: 200,
    codigo: "123",
  },
  {
    id: 2,
    nombre: "CPU Intel Core I9",
    precio: 2000,
    codigo: "456",
  },
  {
    id: 3,
    nombre: "Tarjeta Grafica",
    precio: 1200,
    codigo: "678",
  },
  {
    id: 4,
    nombre: "PC Escritorio Home",
    precio: 1000,
    codigo: "91011",
  },

  {
    id: 5,
    nombre: "PC Escritorio Gamer",
    precio: 2000,
    codigo: "121314",
  },
];

//obtener referencia del boton
const boton = document.getElementById("btnListar");
const botonLimpiar = document.getElementById("btnLimpiar");
//obtener referencia al cuerpo de la tabla
const tabla = document.getElementById("datosTabla");

//agregar el listener
boton.addEventListener("click", () => {
  //Cargar la tabla
  //leer la base de datos (array de objetos)
  productos.forEach((producto) => {
    //crear fila
    const tr = document.createElement("tr");

    //crear la celda nombre y adjuntarla a la fila
    let tdId = document.createElement("td");
    tdId.textContent = producto.id;
    tr.appendChild(tdId);

    //crear la celda nombre y adjuntarla a la fila
    let tdNombre = document.createElement("td");
    tdNombre.textContent = producto.nombre;
    tr.appendChild(tdNombre);

    //crear la celda precio y adjuntarla a la fila
    let tdPrecio = document.createElement("td");
    tdPrecio.textContent = producto.precio;
    tr.appendChild(tdPrecio);

    //crear la celda precio y adjuntarla a la fila
    let tdCodigo = document.createElement("td");
    tdCodigo.textContent = producto.codigo;
    tr.appendChild(tdCodigo);

    //agregar la fila tr al body de la tabla
    tabla.appendChild(tr);
  });
});

botonLimpiar.addEventListener("click", () => {
    tabla.innerHTML = "";
})