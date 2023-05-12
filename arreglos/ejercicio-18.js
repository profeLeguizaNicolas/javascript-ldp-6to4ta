let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];

const nombre1 = prompt("Ingrese un nombre");
nombres.push(nombre1);

const nombre2 = prompt("Ingrese otro nombre");
nombres[2] = nombre2;

for (let i = 0; i < nombres.length; i ++) {
  console.log(nombres[i]);
}
