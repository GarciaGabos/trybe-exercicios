let x = 40
let y = 70
let z = 70

if (x > 0 && y > 0 && z > 0 && x+y+z === 180) {
    console.log("Isso e um triangulo");
}
else if (x < 0 || y < 0 || z < 0){
    console.log ("Um dos angulos e negativo");
}

else {
    console.log("Nao e um triangulo");
}