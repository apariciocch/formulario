const form = document.getElementById('anxietyForm');
const resultParagraph = document.getElementById('resultado');
const puntajeCell = document.getElementById('puntaje');
const indiceCell = document.getElementById('indice');
const diagnosticoCell = document.getElementById('diagnostico');
const totalEaaSpan = document.getElementById('totalEaa');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let total = 0;
    const inputs = form.querySelectorAll('input[type="radio"]:checked');
    inputs.forEach(input => {
        total += parseInt(input.value, 10);
    });
    const indice = total * 1.25;
    let diagnostico = '';
    if (total <= 44) {
        diagnostico = 'Normal';
    } else if (total <= 59) {
        diagnostico = 'Ansiedad Leve';
    } else if (total <= 74) {
        diagnostico = 'Ansiedad Moderada';
    } else {
        diagnostico = 'Ansiedad Severa';
    }
    puntajeCell.textContent = total;
    indiceCell.textContent = indice.toFixed(2);
    diagnosticoCell.textContent = diagnostico;
    totalEaaSpan.textContent = total;
    resultParagraph.textContent = `Puntaje total: ${total}`;
});
