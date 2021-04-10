var campo = document.querySelector("#filtrar-tabela");

campo.addEventListener("input",function(){
    
    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(function(element){

        var nome = element.querySelector(".info-nome").textContent;

        var expressao = new RegExp(campo.value,"i");

        if (campo.value.length > 0) {
            if (!(expressao.test(nome))){
                element.classList.add("invisivel");
            }else{
                element.classList.remove("invisivel");
            }
        }else{
            element.classList.remove("invisivel");
        }
    });
});