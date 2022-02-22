console.log("Digite 0 para sair");
do {
  let num = Number(prompt("digite um número ou digite 0 para sair"));
  if (num == 0 || isNaN(num)) {
    let sair = confirm("Confirma saída?"); 
    if (sair) {
      break;       
    } else {
      continue;   
    }
  }
  if (num % 2 == 0) {
    console.log("O dobro de " + num + " é: " + num * 2);
  } else {
    console.log("O triplo de  " + num + " é: " + num * 3);
  }
} while (true); 

console.log("Goodbye!!!");