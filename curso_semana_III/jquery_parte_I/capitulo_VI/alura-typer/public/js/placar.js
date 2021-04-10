function inserePlacar() {
    
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Regis";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);

    corpoTabela.append(linha);
}

function novaLinha(usuario, numPalavras) {
    var colNome = $("<td>").text(usuario);
    var colPalavras = $("<td>").text(numPalavras);
    var colRemove = $("<td>");
    var ancora = $("<a>").addClass("botao-remover").attr("href","#");
    var icon = $("<i>").addClass("small material-icons").text("delete");

    var linha = $("<tr>");

    /*
    <a href="#" class="botao-remover">
        <i class="small material-icons">delete</i>
    </a> 
    */
    colRemove.append(ancora.append(icon));

    linha.append(colNome);
    linha.append(colPalavras);
    linha.append(colRemove);

    linha.find(".botao-remover").click(removeLinha);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();

    $(this).parent().parent().remove();
}