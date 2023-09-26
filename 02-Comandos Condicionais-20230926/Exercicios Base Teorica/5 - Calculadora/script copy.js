var operacao, numero1, numero2, resultado;

// informando a operacao para a calculadora

operacao = prompt("Informe a operação");
numero1 = parseInt(prompt("Informe o 1º número"));
numero2 = parseInt(prompt("Informe o 2º número"));

if (operacao === '+') {
    resultado = numero1 + numero2;
    document.write("O resultado da soma é : " + resultado);
} else if (operacao === '-') {
           resultado = numero1 - numero2;
           document.write("O resultado da subtração é : " + resultado);
       } else if (operacao === '*') {
                  resultado = numero1 * numero2;
                  document.write("O resultado da multiplicação é : " + resultado);
              } else if (operacao === '/') {
                         resultado = numero1 / numero2;
                         document.write("O resultado da divisão é : " + resultado);
                     }
