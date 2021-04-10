var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var botaoReinicia = $("#botao-reiniciar");

$(function (){
    atualizaTamFrase();
    inicializaContadores();
    inicializaCronometro();
    botaoReinicia.click(reiniciaJogo);
});

function atualizaTamFrase(){
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
    campo.on("input", function() {
    
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    var tempoRestante = tempoInicial;
    campo.one("focus", function() {
        botaoReinicia.attr("disabled", true);
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                botaoReinicia.attr("disabled", false);
            }
        }, 1000);
    });
}

function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#tempo-digitacao").text(tempoInicial);
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    inicializaCronometro();
}