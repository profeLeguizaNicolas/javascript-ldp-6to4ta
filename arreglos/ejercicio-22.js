// Decalara array con datos
const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
let cont = 0 // Declarar e inicializar variable

// Crear bucle for para iterar cada valor de la lista por medio de la posicion
for(index of nums){
  // Condicional if para validar valores del array sean iguales a 1
  if(index === 1){
    cont++ // Contador
  }
}

console.log('La cantidad de unos es: ', cont)// Imprime a cantidad de unos encontrados en el array nums
