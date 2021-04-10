$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {

    $("#spinner").toggle();
    $(".frase").hide();

    $.get(urlBusca,function (dados) {
        var posicaoAleatoria = Math.floor(Math.random()*dados.length);
        trocaFrase(dados[posicaoAleatoria]);

    }).fail(function () {
        $("#erro").show();
    
    }).always(function () {
        $("#spinner").toggle();
    
    });
}

function buscaFrase() {

    var idBusca = $("#frase-id").val();
    var jsonBusca = {id: idBusca};

    if(idBusca == ""){
        alert("Adicone um número válido.");
    }else{
        $("#spinner").toggle();
        $(".frase").hide();

        $.get(urlBusca, jsonBusca, trocaFrase).fail(function () {
            $("#erro").toggle();

        }).always(function () {
            $("#spinner").toggle();
        });
    }

    console.log("Clicou!! com " + idBusca);
}

function trocaFrase(dadosBusca) {
        console.log(dadosBusca);
        $(".frase").text(dadosBusca.texto);
        atualizaTempoInicial(dadosBusca.tempo);
        atualizaTamanhoFrase();
        $("#erro").hide();
        $(".frase").show();
}