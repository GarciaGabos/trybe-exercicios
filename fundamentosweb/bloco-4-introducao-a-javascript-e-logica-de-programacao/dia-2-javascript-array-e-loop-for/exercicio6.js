//Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 10, 2, 19, 70, 8, 100, 2, 35, 27];

let impar = 0

for (i=0 ; i<numbers.length ; i += 1){
    if (numbers[i]%2 !== 0){
        impar += 1
    }
}

console.log(impar)