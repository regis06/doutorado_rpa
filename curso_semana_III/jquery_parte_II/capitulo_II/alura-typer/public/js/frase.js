$("#botao-frase").click(fraseAleatoria)

function fraseAleatoria() {
    $.get('http://localhost:3000/frases',function (dados) {
        
        var posicaoAleatoria = Math.floor(Math.random()*dados.length);
        console.log(dados);
        $(".frase").text(dados[posicaoAleatoria].texto);
        atualizaTempoInicial(dados[posicaoAleatoria].tempo);
        atualizaTamanhoFrase();
    });
}