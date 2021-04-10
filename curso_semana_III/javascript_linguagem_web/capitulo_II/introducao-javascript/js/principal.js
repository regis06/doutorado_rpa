console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector("#primeiro-paciente");
var tdPeso = trPaciente.querySelector(".info-peso");
var tdAltura = trPaciente.querySelector(".info-altura");
var tdImc = trPaciente.querySelector(".info-imc");

var peso = parseFloat(tdPeso.textContent);
var altura = parseFloat(tdAltura.textContent);

var pesoValido = true, alturaValida = true;

var imc = peso/ (altura * altura);

if (peso <= 0 || peso >= 1000) {
    pesoValido = false;
    tdPeso.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3) {
    alturaValida = false;
    tdAltura.textContent = "Altura Inválida"
}

if (alturaValida && pesoValido) {
    tdImc.textContent = imc;
}else{
    tdImc.textContent = "IMC Inválido"
}