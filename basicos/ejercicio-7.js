let rnd = parseInt(Math.random() * 11);
let number = prompt("Adivina el numero: ");

if(rnd == number) console.log(`Tu numero ${number} y el aleatorio ${rnd}, Adivinaste!!`);
else console.log(`Tu numero ${number} y el aleatorio ${rnd}, no acertaste, intenta de nuevo`);
