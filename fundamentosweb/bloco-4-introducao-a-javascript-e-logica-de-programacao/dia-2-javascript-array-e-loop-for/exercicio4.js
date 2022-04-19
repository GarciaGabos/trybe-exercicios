let numbers = [5, 9, 3, 19, 70, 8, 0, 2, 35, 0];
let result = 0

for (i=0 ; i<numbers.length ; i += 1) {
    result += numbers[i];

}
media = result/numbers.length

if (media > 20) {
    console.log("media maior que 20")
}
else {
    console.log("media menor que 20")
}