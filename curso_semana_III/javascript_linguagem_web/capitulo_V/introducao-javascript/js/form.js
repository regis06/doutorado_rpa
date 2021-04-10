var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(formulario);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    formulario.reset();

});

function obtemPacienteDoForm(form){
    
     var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function montaTd(conteudo, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = conteudo;
    
    return td;
}

function montaTr(dados){
    var tr = document.createElement("tr");
    tr.classList.add("paciente");
    tr.appendChild(montaTd(dados.nome, "info-nome"));
    tr.appendChild(montaTd(dados.peso, "info-peso"));
    tr.appendChild(montaTd(dados.altura, "info-altura"));
    tr.appendChild(montaTd(dados.gordura, "info-gordura"));
    tr.appendChild(montaTd(dados.imc, "info-imc"));

    return tr;
}