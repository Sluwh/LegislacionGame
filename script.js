// Datos de las preguntas
const preguntas = {
    civil: [
        {
            enunciado: "¿Qué se entiende por \"estado civil\" en el derecho civil?",
            opciones: [
                "La profesión u ocupación de una persona.",
                "La situación jurídica de una persona en la familia y la sociedad.",
                "El nivel económico de una persona.",
                "La nacionalidad de una persona."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "¿Cuál de los siguientes es un medio hábil para constituir el estado civil?",
            opciones: [
                "Declaración jurada.",
                "Registro público.",
                "Acta notarial.",
                "Inscripción en el Registro Civil."
            ],
            respuestaCorrecta: 3
        },
        {
            enunciado: "El \"registro civil\" tiene como función principal:",
            opciones: [
                "Registrar propiedades.",
                "Registrar los actos relativos al estado civil de las personas.",
                "Controlar los contratos laborales.",
                "Llevar registros comerciales."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "¿Qué se entiende por \"medios de prueba\"?",
            opciones: [
                "Instrumentos para probar un delito.",
                "Elementos que acreditan hechos o derechos ante la ley.",
                "Documentos comerciales.",
                "Testimonios verbales únicamente."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "¿Cuál de las siguientes afirmaciones es falsa respecto al Derecho Civil?",
            opciones: [
                "Regula relaciones entre particulares.",
                "Es una rama del derecho público.",
                "Incluye normas sobre familia y estado civil.",
                "Se aplica de forma supletoria a otras ramas del derecho."
            ],
            respuestaCorrecta: 1
        }
    ],
    laboral: [
        {
            enunciado: "El derecho laboral se caracteriza por:",
            opciones: [
                "Proteger únicamente al empleador.",
                "Regular las relaciones de trabajo.",
                "Ser una rama del derecho penal.",
                "No tener fundamentos constitucionales."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "El trabajo digno implica:",
            opciones: [
                "Cumplimiento de metas empresariales.",
                "Trabajo informal sin regulación.",
                "Condiciones laborales dignas y con derechos.",
                "Actividades voluntarias sin salario."
            ],
            respuestaCorrecta: 2
        },
        {
            enunciado: "¿Cuál de los siguientes es un ejemplo de trabajo independiente?",
            opciones: [
                "Empleado de oficina.",
                "Obrero en fábrica.",
                "Artesano que vende sus productos.",
                "Maestro en una escuela pública."
            ],
            respuestaCorrecta: 2
        },
        {
            enunciado: "¿Qué comprende la jornada laboral en Uruguay según la normativa vigente?",
            opciones: [
                "El tiempo durante el cual el trabajador está a disposición del empleador.",
                "Solo el tiempo efectivo de trabajo, excluyendo pausas y descansos.",
                "Las horas que el trabajador elige libremente cada día.",
                "Únicamente las horas extraordinarias."
            ],
            respuestaCorrecta: 0
        },
        {
            enunciado: "¿Qué derecho protege la libertad sindical y la negociación colectiva?",
            opciones: [
                "Derecho civil.",
                "Derecho laboral.",
                "Derecho penal.",
                "Derecho administrativo."
            ],
            respuestaCorrecta: 1
        }
    ],
    seguridad: [
        {
            enunciado: "La seguridad social se considera un:",
            opciones: [
                "Derecho económico.",
                "Derecho humano.",
                "Derecho penal.",
                "Derecho mercantil."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "¿Qué órgano gestiona la seguridad social en Uruguay?",
            opciones: [
                "Ministerio de Economía.",
                "Ministerio del Interior.",
                "Banco de Previsión Social (BPS).",
                "Tribunal de Cuentas."
            ],
            respuestaCorrecta: 2
        },
        {
            enunciado: "¿Qué tipo de prestaciones cubre la seguridad social?",
            opciones: [
                "Solamente jubilaciones.",
                "Subsidios, asignaciones familiares y jubilaciones.",
                "Préstamos bancarios.",
                "Servicios médicos privados."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "Las jubilaciones y pensiones se otorgan en función de:",
            opciones: [
                "El tipo de contrato laboral.",
                "Las clases y causales establecidas por ley.",
                "El salario mínimo nacional.",
                "La voluntad del empleador."
            ],
            respuestaCorrecta: 1
        },
        {
            enunciado: "¿Qué objetivo tiene la historia laboral?",
            opciones: [
                "Controlar los antecedentes judiciales.",
                "Registrar el desempeño académico.",
                "Documentar los aportes y períodos laborales de una persona.",
                "Servir como currículum vitae."
            ],
            respuestaCorrecta: 2
        }
    ]
};

const nombresCategorias = {
    civil: "Derecho Civil",
    laboral: "Derecho Laboral",
    seguridad: "Seguridad Social"
};

// Estado del juego
let estado = {
    categoria: null,
    preguntaActual: 0,
    puntaje: 0,
    preguntasActuales: []
};

// Elementos del DOM
const pantallaBienvenida = document.getElementById('pantallaBienvenida');
const pantallaJuego = document.getElementById('pantallaJuego');
const pantallaResultados = document.getElementById('pantallaResultados');
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const categoriaNombre = document.getElementById('categoriaNombre');
const preguntaTexto = document.getElementById('preguntaTexto');
const opcionesContainer = document.getElementById('opcionesContainer');
const contadorPregunta = document.getElementById('contadorPregunta');
const puntajeActual = document.getElementById('puntajeActual');
const progresoFill = document.getElementById('progresoFill');
const feedback = document.getElementById('feedback');
const feedbackTexto = document.getElementById('feedbackTexto');
const puntajeFinal = document.getElementById('puntajeFinal');
const porcentajeFinal = document.getElementById('porcentajeFinal');
const mensajeFinal = document.getElementById('mensajeFinal');
const btnJugarOtraVez = document.getElementById('btnJugarOtraVez');
const btnCambiarCategoria = document.getElementById('btnCambiarCategoria');
const btnVolverMenu = document.getElementById('btnVolverMenu');

// Función para barajar array (Fisher-Yates shuffle)
function barajarArray(array) {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}

// Inicializar juego
function iniciarJuego(categoria) {
    estado.categoria = categoria;
    estado.preguntaActual = 0;
    estado.puntaje = 0;
    // Barajar las preguntas antes de empezar
    estado.preguntasActuales = barajarArray(preguntas[categoria]);
    
    mostrarPantalla('juego');
    mostrarPregunta();
}

// Mostrar pregunta
function mostrarPregunta() {
    const pregunta = estado.preguntasActuales[estado.preguntaActual];
    
    categoriaNombre.textContent = nombresCategorias[estado.categoria];
    preguntaTexto.textContent = pregunta.enunciado;
    contadorPregunta.textContent = `Pregunta ${estado.preguntaActual + 1} de ${estado.preguntasActuales.length}`;
    puntajeActual.textContent = estado.puntaje;
    
    // Calcular progreso
    const progreso = ((estado.preguntaActual) / estado.preguntasActuales.length) * 100;
    progresoFill.style.width = progreso + '%';
    
    // Limpiar opciones anteriores
    opcionesContainer.innerHTML = '';
    
    // Crear botones de opciones
    pregunta.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'opcion-btn';
        const span = document.createElement('span');
        span.textContent = opcion;
        btn.appendChild(span);
        // Usar touchstart para mejor respuesta en móvil
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (!btn.disabled) {
                seleccionarRespuesta(index);
            }
        }, { passive: false });
        btn.addEventListener('click', () => {
            if (!btn.disabled) {
                seleccionarRespuesta(index);
            }
        });
        opcionesContainer.appendChild(btn);
    });
}

// Seleccionar respuesta
function seleccionarRespuesta(indice) {
    const pregunta = estado.preguntasActuales[estado.preguntaActual];
    const opcionBtns = document.querySelectorAll('.opcion-btn');
    
    // Deshabilitar todos los botones
    opcionBtns.forEach(btn => btn.disabled = true);
    
    // Verificar respuesta
    const esCorrecta = indice === pregunta.respuestaCorrecta;
    
    // Marcar respuesta correcta
    opcionBtns[pregunta.respuestaCorrecta].classList.add('correcta');
    
    // Marcar respuesta incorrecta si es necesario
    if (!esCorrecta) {
        opcionBtns[indice].classList.add('incorrecta');
    }
    
    // Actualizar puntaje
    if (esCorrecta) {
        estado.puntaje++;
        puntajeActual.textContent = estado.puntaje;
    }
    
    // Mostrar feedback
    mostrarFeedback(esCorrecta);
    
    // Continuar después de 1.5 segundos (optimizado para móvil)
    setTimeout(() => {
        ocultarFeedback();
        siguientePregunta();
    }, 1500);
}

// Mostrar feedback
function mostrarFeedback(esCorrecta) {
    feedback.classList.remove('oculto');
    const feedbackContent = feedback.querySelector('.feedback-content');
    
    if (esCorrecta) {
        feedbackContent.className = 'feedback-content correcto';
        feedbackTexto.textContent = 'CORRECTO';
    } else {
        feedbackContent.className = 'feedback-content incorrecto';
        feedbackTexto.textContent = 'INCORRECTO';
    }
}

// Ocultar feedback
function ocultarFeedback() {
    feedback.classList.add('oculto');
}

// Siguiente pregunta
function siguientePregunta() {
    estado.preguntaActual++;
    
    if (estado.preguntaActual < estado.preguntasActuales.length) {
        mostrarPregunta();
    } else {
        mostrarResultados();
    }
}

// Mostrar resultados
function mostrarResultados() {
    const total = estado.preguntasActuales.length;
    const porcentaje = (estado.puntaje / total) * 100;
    
    // Actualizar progreso final
    progresoFill.style.width = '100%';
    
    // Mostrar estadísticas
    puntajeFinal.textContent = estado.puntaje;
    porcentajeFinal.textContent = porcentaje.toFixed(1) + '%';
    
    // Mostrar mensaje final
    let mensaje = '';
    if (porcentaje === 100) {
        mensaje = '⭐ ¡PERFECTO! ¡Excelente trabajo! ⭐';
    } else if (porcentaje >= 80) {
        mensaje = '👍 ¡Muy bien! ¡Buen trabajo! 👍';
    } else if (porcentaje >= 60) {
        mensaje = '✅ ¡Bien hecho! Puedes mejorar. ✅';
    } else {
        mensaje = '📚 Sigue estudiando. ¡Tú puedes mejorar! 📚';
    }
    mensajeFinal.textContent = mensaje;
    
    mostrarPantalla('resultados');
}

// Cambiar pantalla
function mostrarPantalla(pantalla) {
    pantallaBienvenida.classList.remove('activa');
    pantallaJuego.classList.remove('activa');
    pantallaResultados.classList.remove('activa');
    
    switch(pantalla) {
        case 'bienvenida':
            pantallaBienvenida.classList.add('activa');
            break;
        case 'juego':
            pantallaJuego.classList.add('activa');
            break;
        case 'resultados':
            pantallaResultados.classList.add('activa');
            break;
    }
}

// Event listeners - optimizado para móvil
categoriaBtns.forEach(btn => {
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const categoria = btn.getAttribute('data-categoria');
        iniciarJuego(categoria);
    }, { passive: false });
    btn.addEventListener('click', () => {
        const categoria = btn.getAttribute('data-categoria');
        iniciarJuego(categoria);
    });
});

// Event listeners optimizados para móvil
const setupButton = (button, callback) => {
    button.addEventListener('touchstart', (e) => {
        e.preventDefault();
        callback();
    }, { passive: false });
    button.addEventListener('click', callback);
};

setupButton(btnJugarOtraVez, () => {
    iniciarJuego(estado.categoria);
});

setupButton(btnCambiarCategoria, () => {
    mostrarPantalla('bienvenida');
});

setupButton(btnVolverMenu, () => {
    if (confirm('¿Estás seguro de que quieres volver al menú? Se perderá el progreso actual.')) {
        mostrarPantalla('bienvenida');
    }
});

