function gerarConversao() {
    const numeroInput = document.getElementById('numeroInput');
    let numero = parseInt(numeroInput.value);

    const resultadoDiv = document.getElementById('resultadoConversao');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p>Digite um número válido!</p>';
        return;
    }

    resultadoDiv.innerHTML += `<h2>Conversão do número ${numero}: </h2>`;

    
    let resultado = numero * 60;
    resultadoDiv.innerHTML += `<p>${numero} min em segundos é = ${resultado} seg</p>`;
    
}


const btnGerar = document.getElementById('btnGerar')
btnGerar.addEventListener('click', gerarConversao)