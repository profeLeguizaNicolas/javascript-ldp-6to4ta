let number = "";
let rnd = 0;
while(rnd !== number){
rnd = parseInt(Math.random() * 11);
number = prompt("Adivina el numero: ");
if(rnd == number) {
  console.log(`Tu numero ${number} y el aleatorio     ${rnd}, Adivinaste!!`);
  break;
}
else console.log(`Tu numero ${number} y el aleatorio ${rnd}, no acertaste, intenta de nuevo`);
  
}
