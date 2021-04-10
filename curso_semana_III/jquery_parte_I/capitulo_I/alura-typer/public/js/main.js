var frase = $(".frase").text();
console.log(frase);
var numPalavras = frase.split(" ").length;
console.log(numPalavras);
$("#tamanho-frase").text(numPalavras);

