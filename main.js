const form = document.getElementById('anxietyForm');
const resultParagraph = document.getElementById('resultado');
const puntajeCell = document.getElementById('puntaje');
const indiceCell = document.getElementById('indice');
const diagnosticoCell = document.getElementById('diagnostico');
const totalEaaSpan = document.getElementById('totalEaa');

const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const fechaEvInput = document.getElementById('fechaEv');
const derivadoPorInput = document.getElementById('derivadoPor');
const evaluadoPorInput = document.getElementById('evaluadoPor');
const derivadoAInput = document.getElementById('derivadoA');

const infoNombre = document.getElementById('infoNombre');
const infoEdad = document.getElementById('infoEdad');
const infoFechaEv = document.getElementById('infoFechaEv');
const infoDerivadoPor = document.getElementById('infoDerivadoPor');
const infoEvaluadoPor = document.getElementById('infoEvaluadoPor');
const infoDerivadoA = document.getElementById('infoDerivadoA');
const infoPuntaje = document.getElementById('infoPuntaje');
const infoIndice = document.getElementById('infoIndice');
const infoDiagnostico = document.getElementById('infoDiagnostico');
const recomendacionesList = document.getElementById('recomendaciones');
const informeSection = document.getElementById('informe');
const exportarBtn = document.getElementById('exportarWord');

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
        diagnostico = 'Dentro de límites normales (No hay ansiedad presente)';
    } else if (indice <= 59) {
        diagnostico = 'Presencia de ansiedad leve a moderada';
    } else if (indice <= 74) {
        diagnostico = 'Presencia de ansiedad marcada a severa';
    } else {
        diagnostico = 'Presencia de ansiedad en grado máximo';
    }
    puntajeCell.textContent = total;
    indiceCell.textContent = indice;
    diagnosticoCell.textContent = diagnostico;
    totalEaaSpan.textContent = total;
    resultParagraph.textContent = `Puntaje total: ${total}`;

    infoNombre.textContent = nombreInput.value;
    infoEdad.textContent = edadInput.value;
    infoFechaEv.textContent = fechaEvInput.value;
    infoDerivadoPor.textContent = derivadoPorInput.value;
    infoEvaluadoPor.textContent = evaluadoPorInput.value;
    infoDerivadoA.textContent = derivadoAInput.value;
    infoPuntaje.textContent = total;
    infoIndice.textContent = indice;
    infoDiagnostico.textContent = diagnostico;

    recomendacionesList.innerHTML = '';
    let recomendaciones = [];
    if (indice <= 44) {
        recomendaciones = [
            'Objetivo: Prevención y promoción del bienestar emocional.',
            'Mantener hábitos saludables de sueño, alimentación y ejercicio físico para fortalecer la salud mental.',
            'Practicar técnicas de relajación como respiración consciente o mindfulness, incluso en ausencia de síntomas.',
            'Fomentar actividades recreativas, sociales y hobbies que generen placer y autorregulación emocional.',
            'Promover espacios de diálogo sobre emociones con personas de confianza.',
            'Realizar una evaluación psicológica anual como parte del cuidado preventivo integral.'
        ];
    } else if (indice <= 59) {
        recomendaciones = [
            'Objetivo: Detección temprana y regulación emocional.',
            'Iniciar sesiones psicoeducativas para reconocer síntomas de ansiedad y sus detonantes.',
            'Introducir rutinas estructuradas que disminuyan la sobrecarga cognitiva y emocional.',
            'Aplicar ejercicios diarios de respiración diafragmática o meditación guiada (10–15 minutos).',
            'Evitar la exposición continua a noticias alarmantes o contenidos que generen estrés.',
            'Establecer horarios de sueño regulares y limitar el uso de pantallas antes de dormir.'
        ];
    } else if (indice <= 74) {
        recomendaciones = [
            'Objetivo: Intervención terapéutica activa y soporte emocional.',
            'Iniciar terapia psicológica de orientación cognitivo-conductual centrada en el manejo de pensamientos disfuncionales.',
            'Identificar factores estresantes mediante registros diarios y trabajar en su afrontamiento adaptativo.',
            'Promover el autocuidado emocional a través de estrategias de reestructuración cognitiva.',
            'Evaluar impacto funcional (laboral, social, académico) y considerar ajustes temporales si es necesario.',
            'Coordinación con médico general para evaluación de síntomas físicos asociados (taquicardia, insomnio, cefaleas).'
        ];
    } else {
        recomendaciones = [
            'Objetivo: Intervención intensiva y multidisciplinaria.',
            'Derivar a psiquiatría para evaluación psicofarmacológica urgente.',
            'Iniciar proceso psicoterapéutico intensivo con sesiones semanales (o bisemanales según riesgo clínico).',
            'Diseñar un plan de contención emocional con apoyo familiar o red de soporte.',
            'Establecer rutinas diarias estructuradas que disminuyan la incertidumbre y sensación de descontrol.',
            'Evaluar riesgo asociado a comorbilidades (depresión, ideación suicida, trastornos psicosomáticos) y tomar medidas de seguridad si aplica.'
        ];
    }

    recomendaciones.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recomendacionesList.appendChild(li);
    });

    informeSection.style.display = 'block';
});

if (exportarBtn) {
    exportarBtn.addEventListener('click', () => {
        const contenido = informeSection.innerHTML;
        const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${contenido}</body></html>`;
        const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'informe.doc';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
