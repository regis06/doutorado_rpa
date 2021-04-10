var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function() {
    var httpConnect = new XMLHttpRequest();

    httpConnect.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    httpConnect.addEventListener("load", function () {
        
        var msgErro = document.querySelector("#erro-buscar");

        if (this.status == 200) {
            var jsonHttp = JSON.parse(this.responseText);
            msgErro.classList.add("invisivel");
            jsonHttp.forEach(function (paciente) {
                adicionaNaTabela(paciente);
            });

        }else{
            msgErro.classList.remove("invisivel");
            msgErro.classList.add("mensagem-erroB");
            console.log(this.status);
        }

        console.log(this.responseText);
        
        console.log(jsonHttp);
    });
    

    httpConnect.send();
});