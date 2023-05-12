numberArray = [] //Declarra array vacio
const getNumber = parseInt(prompt('Ingrese un número ')) //Declarar varoable y almcanar dato en ella

// Crear bucle for para agregar un dato a la lista
for(let index = 1; index <= getNumber; index++){
  numberArray.push(index) //Agregar el dato index al array
}

// Crear bucle for para imprimir los datos de la lista
for(let index = 0; index < numberArray.length; index++){
  // Condicional if para validar y eliminar el dato con el indice correspondiente
  if(index === 1){
    numberArray.splice(index,index) //Elimina el dato del indice seleccionado
  }
  console.log(numberArray[index]) //Imprimir cada dato del array por medio del incide
}
