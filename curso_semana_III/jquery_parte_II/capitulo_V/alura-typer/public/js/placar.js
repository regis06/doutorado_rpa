function inserePlacar() {
    
    var usuario = "Regis"
    var numPalavras = $("#contador-palavras").text();
    
    var corpoTabela = $(".placar").find("tbody");
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.append(linha);

    $(".placar").slideDown(600);
    scrollPlacar();
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    var linha = $(this).parent().parent();
    
    linha.fadeOut(1000);

    setTimeout(function () {
        linha.remove();    
    },1000);
}

$("#botao-placar").click(function () {
    $(".placar").stop().slideToggle(600);
});

function scrollPlacar() {
    
    var posicaoPlacar = $(".placar").offset().top;

    console.log(posicaoPlacar + "px");

    $("html").animate({ 
        scrollTop: posicaoPlacar + "px"
    },1000);
}

$("#botao-sync").click(sincronizaPlacar);
const urlSync = "http://localhost:3001/placar";

function sincronizaPlacar() {
    var arraySync = [];

    $("tbody>tr").each(function () {
        var nomeTd = $(this).find("td:nth-child(1)").text();
        var scoreTd = $(this).find("td:nth-child(2)").text();
        console.log(nomeTd);
        console.log(scoreTd);

        var jsonScore = {
            usuario: nomeTd,
            pontos: scoreTd
        };
        
        arraySync.push(jsonScore);
    });

    var jsonArray = {
        placar: arraySync
    };

    console.log(jsonArray);

    $.post(urlSync, jsonArray, function () {
        $("#erro").hide();
        console.log("Scores enviados");
    }).fail(function () {
        $("#erro").show();
        console.log("Algo de errado aconteceu");
    });
}

function atualizaPlacar(){
    var updatePlacar = {};

    $.get(urlSync, function (dadosAtualizados) {
        console.log("Scores recuperados");
        console.log(dadosAtualizados);

        $(dadosAtualizados).each(function (posicaoDado) {
            console.log(this);
            var corpoTabela = $(".placar").find("tbody");
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find(".botao-remover").click(removeLinha);
            corpoTabela.append(linha); 
        });
    });
}