// A data final para a contagem regressiva (14 de Outubro de 2025)
const countdownDate = new Date("October 06, 2025 00:00:00").getTime();

// Atualiza a contagem a cada 1 segundo
const countdownFunction = setInterval(function() {

    // Pega a data e hora de hoje
    const now = new Date().getTime();

    // Encontra a distância entre agora e a data final
    const distance = countdownDate - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com id="countdown"
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = `<span>${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
    }

    // Se a contagem terminar, escreve um texto
    if (distance < 0) {
        clearInterval(countdownFunction);
        if (countdownElement) {
            countdownElement.innerHTML = "<span>A GINCANA COMEÇOU!</span>";
        }
    }
}, 1000); // 1000ms = 1 segundo