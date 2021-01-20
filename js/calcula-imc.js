var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValido = true;

    var tdImc = paciente.querySelector(".info-imc");
    if(peso <= 0 || peso >= 1000){
        tdPeso.textContent = "Peso inválido!"
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3.00){
        tdAltura.textContent = "Altura inválida!"
        alturaEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValido  && pesoEhValido){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc;
    }


}

function calculaImc(peso, altura) { 
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}