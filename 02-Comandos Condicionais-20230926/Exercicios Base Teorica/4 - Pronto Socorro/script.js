var faixa, qtdFaixa1 = 0, qtdFaixa2 = 0; qtdFaixa3 = 0, qtdFaixa4 = 0;

for (var i = 1; i <= 6; i++){
        faixa = parseInt(prompt("Informe a faixa"));
        switch (faixa) {
        case 1: qtdFaixa1 = qtdFaixa1 + 1;
                break;
        case 2: qtdFaixa2 = qtdFaixa2 + 1;
                break;
        case 3: qtdFaixa3 = qtdFaixa3 + 1;
                break;
        case 4: qtdFaixa4 = qtdFaixa4 + 1;
                break;
        }
}

document.write("Faixa 1 : " + qtdFaixa1 + "\n");
document.write("Faixa 2 : " + qtdFaixa2 + "\n");
document.write("Faixa 3 : " + qtdFaixa3 + "\n");
document.write("Faixa 4 : " + qtdFaixa4 + "\n");
