// Banco de preguntas expandido basado en el mapa oficial de Carreras Técnicas Formosa 2026
const preguntas = [
    {
        id: 1,
        texto: "¿Qué área temática te entusiasma o te genera más curiosidad estudiar?",
        opciones: [
            { texto: "Programación, desarrollo de aplicaciones y automatización de sistemas.", perfil: "tecnologia" },
            { texto: "Cuidado de la salud, medicina y primeros auxilios.", perfil: "salud_guardavidas" },
            { texto: "Diseño gráfico, producción de contenidos audiovisuales y comunicación.", perfil: "arte_comunicacion" },
            { texto: "Procesos químicos industriales, mecatrónica o telecomunicaciones avanzadas.", perfil: "tecnologia_avanzada" },
            { texto: "Producción del campo, cuidado de animales y gestión del medio ambiente.", perfil: "agro_forestal" }
        ]
    },
    {
        id: 2,
        texto: "Si pudieras elegir un proyecto práctico para trabajar hoy, ¿cuál preferirías?",
        opciones: [
            { texto: "Diseñar la identidad visual de una marca o realizar streaming/locución.", perfil: "arte_comunicacion" },
            { texto: "Optimizar el rendimiento de un cultivo agropecuario o gestionar producción avícola/apícola.", perfil: "agro_forestal" },
            { texto: "Instalar sensores de automatización en maquinarias o analizar muestras químicas.", perfil: "tecnologia_avanzada" },
            { texto: "Crear una base de datos para una empresa o entrenar una Inteligencia Artificial.", perfil: "tecnologia" },
            { texto: "Diseñar planes de seguridad comunitaria, rescate en ambientes acuáticos o asistencia médica.", perfil: "salud_guardavidas" }
        ]
    },
    {
        id: 3,
        texto: "¿En qué tipo de entorno laboral regional te proyectas en el futuro?",
        opciones: [
            { texto: "En centros de salud, escuelas deportivas o en la vía pública velando por la seguridad.", perfil: "salud_guardavidas" },
            { texto: "En el Polo Científico y Tecnológico o grandes plantas industriales modernas.", perfil: "tecnologia_avanzada" },
            { texto: "En estudios de grabación, agencias de diseño, canales de televisión o radios.", perfil: "arte_comunicacion" },
            { texto: "Trabajando de forma remota o en oficinas analizando software y sistemas.", perfil: "tecnologia" },
            { texto: "Al aire libre, coordinando proyectos en fincas, áreas forestales o reservas naturales.", perfil: "agro_forestal" }
        ]
    },
    {
        id: 4,
        texto: "¿Cuál de estas problemáticas actuales de Formosa te gustaría ayudar a resolver?",
        opciones: [
            { texto: "Mejorar la productividad y sustentabilidad de nuestros campos, bosques y alimentos.", perfil: "agro_forestal" },
            { texto: "Impulsar la conectividad por telecomunicaciones y la infraestructura tecnológica pesada.", perfil: "tecnologia_avanzada" },
            { texto: "Ayudar a que los comercios locales se digitalicen con aplicaciones y herramientas de IA.", perfil: "tecnologia" },
            { texto: "Fomentar la cultura local a través del diseño, la música social y los medios digitales.", perfil: "arte_comunicacion" },
            { texto: "Asegurar la prevención, salud integral y el cuidado físico de las familias formoseñas.", perfil: "salud_guardavidas" }
        ]
    },
    {
        id: 5,
        texto: "En tus tareas cotidianas o estudios previos, ¿cuál solía ser tu mayor fuerte?",
        opciones: [
            { texto: "Tu capacidad de expresión verbal, creatividad manual o destreza artística.", perfil: "arte_comunicacion" },
            { texto: "Tu resistencia física, empatía para cuidar a otros o vocación de servicio.", perfil: "salud_guardavidas" },
            { texto: "Tu lógica para desarmar cosas, entender circuitos o hacer experimentos.", perfil: "tecnologia_avanzada" },
            { texto: "Tu facilidad con la informática, manejo de archivos y organización digital.", perfil: "tecnologia" },
            { texto: "Tu conexión con la naturaleza y gusto por el trabajo de campo o manufactura básica.", perfil: "agro_forestal" }
        ]
    },
    {
        id: 6,
        texto: "Si tuvieras que elegir una habilidad técnica rápida para aprender de inmediato, sería:",
        opciones: [
            { texto: "Operación y configuración de equipos de Inteligencia Artificial o Streaming.", perfil: "tecnologia" },
            { texto: "Técnicas de reanimación, salvamento acuático o entrenamiento físico integral.", perfil: "salud_guardavidas" },
            { texto: "Mecatrónica aplicada, desarrollo multiplataforma o análisis industrial.", perfil: "tecnologia_avanzada" },
            { texto: "Producción forestal, apicultura o cuidado de cultivos extensivos de forraje.", perfil: "agro_forestal" },
            { texto: "Diseño de comunicación visual o producción multimedia en medios de comunicación.", perfil: "arte_comunicacion" }
        ]
    }
];

// Mapeo detallado según las sedes reales mostradas en el mapa de Oferta Estatal 2026
const ofertasFormosa = {
    tecnologia: {
        carrera: "Desarrollo de Software, Inteligencia Artificial y Streaming",
        instituciones: "Tu perfil aplica para las áreas en auge de la provincia. Tienes opciones clave como el <strong>ISFDyT FAC</strong> (Tecnicatura Superior en Desarrollador de Software) y los trayectos de <strong>TTPI Auxiliar en Inteligencia Artificial</strong> y <strong>TTP en Streaming</strong> dictados en sedes como Las Lomitas, Clorinda, Laguna Blanca, Ibarreta y El Colorado."
    },
    tecnologia_avanzada: {
        carrera: "Mecatrónica, Telecomunicaciones y Química Industrial",
        instituciones: "Tu camino está en la alta tecnología e industria pesada. Tu opción ideal es el prestigioso <strong>Instituto Politécnico Formosa</strong> (Capital), el cual dicta las Tecnicaturas Superiores en Mecatrónica, Desarrollo de Software Multiplataforma, Química Industrial y Telecomunicaciones."
    },
    agro_forestal: {
        carrera: "Producción Agropecuaria, Forestal, Apicultura y Alimentos",
        instituciones: "Perfecto para el desarrollo productivo del interior. Cuentas con ofertas de <strong>Tecnicatura Superior en Tecnología de los Alimentos</strong> (El Colorado y Laguna Naick Neck), <strong>TS en Producción Forestal</strong> (General Güemes, Palo Santo, Pirané) e institutos de formación profesional (Apicultura en San Martín 2, El Espinillo o Villafañe; Producción Caprina en El Chorro y Fortín Cabo I. Lugones)."
    },
    arte_comunicacion: {
        carrera: "Diseño de Comunicación Visual, Periodismo Multimedia y Música",
        instituciones: "Tu perfil es creativo y comunicacional. Cuentas con el <strong>ISA Albertazzi</strong> (TS en Diseño de Comunicación Visual y TS de Música Social), el <strong>ISPAF</strong> (TS en Streaming y Locución Integral) y sedes regionales como Laguna Blanca que dictan la <strong>TS en Periodismo Multimedia</strong>."
    },
    salud_guardavidas: {
        carrera: "Educación Física, Guardavidas, Sanidad y Seguridad",
        instituciones: "Orientado al servicio público y el bienestar corporal. Puedes optar por el <strong>ISFD en Educación Física</strong> (TTP Inicial en Guardavidas), el <strong>ISFD para el Nivel Inicial</strong> (TS en Gestión Integral, Negocios y Empresas), la <strong>Escuela Normal</strong> (TTP en Asistencia Administrativa) o el <strong>Instituto de Formación Policial</strong> (Oficial de Policía TS en Seguridad Pública)."
    }
};

// --- EL RESTO DE LA LÓGICA DE RENDERIZADO Y CÁLCULO SE MANTIENE ---

const container = document.getElementById('questions-container');

preguntas.forEach((q, index) => {
    let qDiv = document.createElement('div');
    qDiv.className = 'question-group';
    
    let htmlOpciones = q.opciones.map((op, i) => `
        <label class="option-label mb-2">
            <div class="form-check m-0">
                <input class="form-check-input" type="radio" name="pregunta${q.id}" value="${op.perfil}" id="p${q.id}o${i}" required>
                <span class="form-check-label text-dark ms-2">${op.texto}</span>
            </div>
        </label>
    `).join('');

    qDiv.innerHTML = `
        <div class="h6 fw-semibold text-secondary mb-2">${index + 1}. ${q.texto}</div>
        <div class="d-flex flex-column">${htmlOpciones}</div>
    `;
    container.appendChild(qDiv);
});

function calcularResultado() {
    const form = document.getElementById('vocational-form');
    const formData = new FormData(form);
    
    let puntajes = { tecnologia: 0, tecnologia_avanzada: 0, agro_forestal: 0, arte_comunicacion: 0, salud_guardavidas: 0 };
    let totalRespondidas = 0;

    for (let pair of formData.entries()) {
        const perfilSeleccionado = pair[1];
        if (puntajes.hasOwnProperty(perfilSeleccionado)) {
            puntajes[perfilSeleccionado]++;
        }
        totalRespondidas++;
    }

    if (totalRespondidas < preguntas.length) {
        alert("Por favor, responde las 6 preguntas para obtener una mejor recomendación.");
        return;
    }

    let perfilGanador = Object.keys(puntajes).reduce((a, b) => puntajes[a] > puntajes[b] ? a : b);

    document.getElementById('quiz-section').classList.add('d-none');
    document.getElementById('result-section').classList.remove('d-none');

    document.getElementById('carrera-resultado').innerText = ofertasFormosa[perfilGanador].carrera;
    document.getElementById('universidad-resultado').innerHTML = ofertasFormosa[perfilGanador].instituciones;
}

function reiniciarTest() {
    document.getElementById('vocational-form').reset();
    document.getElementById('result-section').classList.add('d-none');
    document.getElementById('quiz-section').classList.remove('d-none');
}
