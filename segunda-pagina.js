// ============================================================
// JavaScript - Conversor Kelvin → Celsius com Termômetro
// ============================================================

(function() {
    "use strict";

    // Elementos do DOM
    const kelvinInput = document.getElementById('kelvinInput');
    const converterBtn = document.getElementById('converterBtn');
    const celsiusSpan = document.getElementById('celsiusValor');
    const mercurio = document.getElementById('mercurio');

    // Limites para o termômetro (mapeamento visual)
    const K_MIN = 0;        // 0 K = -273.15 °C
    const K_MAX = 373.15;   // 373.15 K = 100 °C
    const ALTURA_MIN = 2;   // % mínima da coluna
    const ALTURA_MAX = 94;  // % máxima da coluna

    /**
     * Atualiza a altura e cor do mercúrio no termômetro
     * @param {number} kelvin - Valor em Kelvin
     */
    function atualizarTermometro(kelvin) {
        // Calcula a altura proporcional
        let altura = ((kelvin - K_MIN) / (K_MAX - K_MIN)) * (ALTURA_MAX - ALTURA_MIN) + ALTURA_MIN;
        altura = Math.max(ALTURA_MIN, Math.min(ALTURA_MAX, altura));
        mercurio.style.height = altura + '%';

        // Muda a cor do mercúrio conforme a temperatura
        const celsius = kelvin - 273.15;
        if (celsius < -50) {
            mercurio.style.background = 'linear-gradient(180deg, #4a8af4 0%, #2a6ad4 100%)';
        } else if (celsius < 0) {
            mercurio.style.background = 'linear-gradient(180deg, #6ab0f7 0%, #4a8af4 100%)';
        } else if (celsius < 30) {
            mercurio.style.background = 'linear-gradient(180deg, #f5a623 0%, #e8921a 100%)';
        } else {
            mercurio.style.background = 'linear-gradient(180deg, #f15b4a 0%, #d43f2e 100%)';
        }
    }

    /**
     * Converte Kelvin para Celsius e atualiza a interface
     */
    function converterKelvinParaCelsius() {
        // Obtém o valor e trata vírgula como ponto
        let rawValue = kelvinInput.value.trim().replace(',', '.');
        
        // Validação de campo vazio
        if (rawValue === '') {
            celsiusSpan.textContent = '⏳ digite um valor';
            return;
        }

        // Converte para número
        const kelvin = Number(rawValue);

        // Validação de número inválido
        if (isNaN(kelvin)) {
            celsiusSpan.textContent = '❌ inválido';
            return;
        }

        // Cálculo da conversão
        const celsius = kelvin - 273.15;
        const celsiusFormatado = celsius.toFixed(2);
        celsiusSpan.textContent = celsiusFormatado + ' °C';

        // Atualiza o termômetro
        atualizarTermometro(kelvin);
    }

    // ---------- EVENTOS ----------
    
    // Clique no botão Converter
    converterBtn.addEventListener('click', converterKelvinParaCelsius);

    // Tecla Enter no campo de input
    kelvinInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            converterKelvinParaCelsius();
        }
    });

    // ---------- INICIALIZAÇÃO ----------
    // Define valor padrão se estiver vazio
    if (kelvinInput.value.trim() === '') {
        kelvinInput.value = '300';
    }
    // Executa a conversão inicial
    converterKelvinParaCelsius();

})();