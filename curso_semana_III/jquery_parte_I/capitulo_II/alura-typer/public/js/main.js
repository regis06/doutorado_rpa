var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function (){
    
    var caracteresCampo = campo.val();

    var palavrasCampo = campo.val().split(/\S+/).length-1;

    console.log(palavrasCampo);

    var conteudoSemEspaco = caracteresCampo.replace(/\s+/g,'');

    var qtdCaracteres = conteudoSemEspaco.length;

    $("#contador-caracteres").text(qtdCaracteres);

    $("#contador-palavras").text(palavrasCampo);
});
