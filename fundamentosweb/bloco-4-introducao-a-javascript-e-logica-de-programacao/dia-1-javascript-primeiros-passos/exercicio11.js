let salarioBruto = 1500;

if (salarioBruto <= 1556.94) {
    let INSS = salarioBruto*0.08;
    console.log ("O Salario liquitdo e " + (salarioBruto - INSS));
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 1903.98){
    let INSS = salarioBruto*0.09;
    console.log ("O Salario liquitdo e " + s(salarioBruto - INSS));
}

else if (salarioBruto >= 1903.99 && salarioBruto <= 2594.93){
    let INSS = salarioBruto*0.09;
    let IR = salarioBruto*0.075 - 142.80;

    console.log ("O Salario liquitdo e " + (salarioBruto - (INSS + IR)));
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 2826.65){
    let INSS = salarioBruto*0.11;
    let IR = salarioBruto*0.075 - 142.80;

    console.log ("O Salario liquitdo e " + (salarioBruto - (INSS + IR)));
}

else if (salarioBruto >= 2826.67 && salarioBruto <= 3751.05){
    let INSS = salarioBruto*0.11;
    let IR = salarioBruto*0.15 - 354.80;

    console.log ("O Salario liquitdo e " + (salarioBruto - (INSS + IR)));
}

else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68){
    let INSS = salarioBruto*0.11;
    let IR = salarioBruto*0.225 - 636.13;

    console.log ("O Salario liquitdo e " + (salarioBruto - (INSS + IR)));
}

else if (salarioBruto >= 4664.69 && salarioBruto <= 5189.82){
    let INSS = salarioBruto*0.11;
    let IR = salarioBruto*0.275 - 869.36;

    console.log ("O Salario liquitdo e " + (salarioBruto - (INSS + IR)));
}

else if (salarioBruto >= 4664.69 && salarioBruto <= 5189.82){
    let INSS = 570.88
    let IR = salarioBruto*0.275 - 869.36;

    console.log ("O Salario liquitdo e " + (salarioBruto - (INSS + IR)));
}


/*A INSS 
R$ 1.556,94: alíquota de 8%
R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR 
Até R$ 1.903,98: isento de imposto de renda
R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/
