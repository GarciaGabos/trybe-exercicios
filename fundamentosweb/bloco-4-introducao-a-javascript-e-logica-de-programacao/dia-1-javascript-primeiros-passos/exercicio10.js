const venda = 40
const producao = 10
let quantidade = 1000

if (venda >= 0 && producao >= 0) {
    console.log (quantidade*(venda - (producao*1.2)));
}

else {
    console.log ("Valor menor que Zero");
}