function verificaNum(num) {
  if (num <= 1) {
    return false;
  }

  if (num >= 2 && num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false; // Se for divisível por 2 ou 3, não é primo
  }

  // Verificar divisões a partir de 5 até a raiz quadrada do número
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false; // Se for divisível por i ou i + 2, não é primo
    }
  }

  return true; // Se não for divisível por nenhum dos casos acima, é primo
}

function printResult(num) {
  if (verificaNum(num)) {
    console.log(1);
  } else {
    console.log(0); //Não é primo
  }
}

// const inputN = parseInt(prompt("Digite um número maior que zero para verificar se é um número primo:"));
printResult(4294967295);
