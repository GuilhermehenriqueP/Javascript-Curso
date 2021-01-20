var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("buscando Pacientes");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;

        var paciente = JSON.parse(resposta);

        paciente.forEach(function(paciente) {
            adiconaPacienteTabela(paciente);
        });
        

    })

    xhr.send();
})