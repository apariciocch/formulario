const form = document.getElementById('anxietyForm');
const resultParagraph = document.getElementById('resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let total = 0;
    const inputs = form.querySelectorAll('input[type="radio"]:checked');
    inputs.forEach(input => {
        total += parseInt(input.value, 10);
    });
    resultParagraph.textContent = `Puntaje total: ${total}`;
});
