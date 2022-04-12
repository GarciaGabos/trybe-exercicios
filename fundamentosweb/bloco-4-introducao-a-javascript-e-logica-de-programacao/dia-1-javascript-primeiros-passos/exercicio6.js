let nomedepeca = "RaiNHA"

if (nomedepeca.toLowerCase () === "rei") {
    console.log ("Apenas uma casa para qualquer direcao");

}

else if (nomedepeca.toLowerCase () === "rainha") {
    console.log ("Horizontais e diagonais todas as casas");
    
}

else if (nomedepeca.toLowerCase () === "bispo") {
    console.log ("Diagonais em todas as casas");
    
}
else {
    console.log ("Nao e uma peca correta")
}