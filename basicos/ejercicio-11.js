
let number = prompt("Ingresa un numeero: ");

if(number%3 === 0 && number%5 === 0) console.log("bingbong");
else if(number%5 === 0) console.log("bing");
else if(number%3 === 0) console.log("bong");
else console.log(`Su numero ${number} no es multiplo ni de 3 ni de 5`);


//switch

let numUsuario = parseFloat(prompt("Indique un número: "))

switch(true){
  case (numUsuario % 3 == 0 && numUsuario % 5 == 0):
    console.log("bingbong")
    break
  case (numUsuario % 3 == 0):
    console.log("bing")
    break
  case (numUsuario % 5 == 0):
    console.log("bong")
    break
  default:
    console.log(numUsuario)
    break
  }
