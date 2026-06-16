// Captura os elementos pelo ID
const inputNumero = document.getElementById('numeroInput');
const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultadoTabuada');

// Adiciona o evento de clique ao botão
btnGerar.addEventListener('click', () => {
    // Pega o valor do input e converte para número
    const centimetros = parseFloat(inputNumero.value);

    // Verifica se o valor é um número válido
    if (!isNaN(centimetros)) {
        // Realiza a conversão
        const metros = centimetros / 100;
        
        // Exibe o resultado na div
        divResultado.innerHTML = `<p><strong>${centimetros} cm</strong> equivalem a <strong>${metros} m</strong>.</p>`;
    } else {
        // Exibe um alerta caso o campo esteja vazio ou inválido
        divResultado.innerHTML = `<p style="color: red;">Por favor, digite um número válido.</p>`;
    }
});