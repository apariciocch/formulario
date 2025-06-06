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
    const indice = Math.round(total * 1.25);
    let diagnostico = '';
    if (indice <= 44) {
        diagnostico = 'Dentro de límites normales. No hay ansiedad presente';
    } else if (indice <= 59) {
        diagnostico = 'Presencia de ansiedad leve';
    } else if (indice <= 74) {
        diagnostico = 'Presencia de ansiedad moderada a severa';
    } else {
        diagnostico = 'Presencia de ansiedad en grado máximo';
    }
    puntajeCell.textContent = total;
    indiceCell.textContent = indice;
    diagnosticoCell.textContent = diagnostico;
    totalEaaSpan.textContent = total;
    resultParagraph.textContent = `Puntaje total: ${total}`;
});
