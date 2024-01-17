function validarFormulario() {

    let valorA = parseFloat(document.getElementById('campoA').value);
    let valorB = parseFloat(document.getElementById('campoB').value);

    if (valorB > valorA) {
        exibirMensagem(true, 'Formulário válido!');
    } else {
        exibirMensagem(false, 'Número B deve ser maior que o número A.');
    }
}

function exibirMensagem(valido, mensagem) {
    let mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = mensagem;

    mensagemDiv.className = valido ? 'mensagem-positiva' : 'mensagem-negativa';
}