let m = parseFloat(prompt("Escriba su peso: "));
let h = parseFloat(prompt("Escriba su altura: "));
let bmi = m/(h**2);

if(bmi < 18.5) console.log(`La persona esta bajo de peso, su BMI es ${bmi}`);
else if (bmi > 18.5 && bmi < 24.9) console.log(`La persona esta normal de peso, su BMI es ${bmi}`);
else if (bmi > 25 && bmi < 29.9) console.log(`La persona esta en sobrepeso, su BMI es ${bmi}`);
else console.log(`La persona esta obeso, su BMI es ${bmi}`);


//usando switch
let peso = prompt("Indique su peso: ")
let altura = prompt("Indique su altura: ")

bmi = parseFloat(peso) / (parseFloat(altura))**2

switch(true){
  case (bmi < 18.5):
    console.log("Bajo de peso")
      break
  case (bmi >= 18.5 && bmi <= 24.9):
    console.log("Normal")
      break
  case (bmi >= 25 && bmi <= 29.9):
    console.log("Sobrepeso")
      break
  case (bmi >= 30):
    console.log("Obeso")
      break
  default:
    console.log("Ha digitado valores incorrectos")
      break
  }


