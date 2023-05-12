// Declarar array con datos que son arrys
const mat = [ //array principal
  ["Pablo", "Maria", "Pedro"], //array 1
  ["Diana", "Juan", "Federico"], //array 2
  ["Roberto", "Daniel", "Sandra"] //array 3
]

// Crear bucle forr anidados para poder acceder a los arrays dentro del array principal
for(let indexA = 0; indexA < mat.length; indexA++){
  console.log('Grupo ', indexA+1) // iMprime un anuncio
  for(let indexB = 0; indexB < mat.length; indexB++){
    console.log(' ',mat[indexA][indexB]) //Imprime dato de los arrays dentro del array princiapl
  }
}
