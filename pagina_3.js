function converterDolarParaReal() {
    const dolarInput = document.getElementById('dolarInput');

    let dolar = parseFloat(dolarInput.value);

    const resultadoDiv = document.getElementById('ResultadodaConversao');

    const cotacao = 5.11;

    let resultado = dolar * cotacao;

    resultadoDiv.innerHTML = `<h2>Conversão<\h2>
    <p>US$ ${dolar.toFixed(2)} equivalem a r$ ${resultado.toFixed(2)}<\p>`;
}

const btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click', converterDolarParaReal);