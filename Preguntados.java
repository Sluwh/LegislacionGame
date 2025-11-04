import java.util.ArrayList;
import java.util.Scanner;


class Pregunta {
    String enunciado;
    String[] opciones;
    int respuestaCorrecta;


    public Pregunta(String enunciado, String[] opciones, int respuestaCorrecta) {
        this.enunciado = enunciado;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
    }


    public boolean esCorrecta(int respuesta) {
        return respuesta == respuestaCorrecta;
    }


    public void mostrarPregunta() {
        System.out.println("─────────────────────────────────────────────────────────────────");
        String[] lineas = dividirTexto(enunciado, 63);
        for (String linea : lineas) {
            System.out.println("  " + linea);
        }
        System.out.println("─────────────────────────────────────────────────────────────────");
        System.out.println();
        for (int i = 0; i < opciones.length; i++) {
            System.out.println("    " + (i + 1) + ") " + opciones[i]);
        }
        System.out.println();
    }
    
    private String[] dividirTexto(String texto, int anchoMaximo) {
        if (texto.length() <= anchoMaximo) {
            return new String[]{texto};
        }
        java.util.ArrayList<String> lineas = new java.util.ArrayList<>();
        int inicio = 0;
        while (inicio < texto.length()) {
            int fin = Math.min(inicio + anchoMaximo, texto.length());
            if (fin < texto.length()) {
                int ultimoEspacio = texto.lastIndexOf(' ', fin - 1);
                if (ultimoEspacio > inicio) {
                    fin = ultimoEspacio + 1;
                }
            }
            lineas.add(texto.substring(inicio, fin).trim());
            inicio = fin;
        }
        return lineas.toArray(new String[0]);
    }
}


public class Preguntados {
    
    public static String centrarTexto(String texto, int ancho) {
        if (texto.length() >= ancho) {
            return texto.substring(0, ancho);
        }
        int espacios = (ancho - texto.length()) / 2;
        StringBuilder resultado = new StringBuilder();
        for (int i = 0; i < espacios; i++) {
            resultado.append(" ");
        }
        resultado.append(texto);
        while (resultado.length() < ancho) {
            resultado.append(" ");
        }
        return resultado.toString();
    }
    
    public static ArrayList<Pregunta> crearPreguntasDerechoCivil() {
        ArrayList<Pregunta> preguntas = new ArrayList<>();
        
        preguntas.add(new Pregunta(
            "¿Qué se entiende por \"estado civil\" en el derecho civil?",
            new String[]{
                "La profesión u ocupación de una persona.",
                "La situación jurídica de una persona en la familia y la sociedad.",
                "El nivel económico de una persona.",
                "La nacionalidad de una persona."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "¿Cuál de los siguientes es un medio hábil para constituir el estado civil?",
            new String[]{
                "Declaración jurada.",
                "Registro público.",
                "Acta notarial.",
                "Inscripción en el Registro Civil."
            },
            4
        ));
        
        preguntas.add(new Pregunta(
            "El \"registro civil\" tiene como función principal:",
            new String[]{
                "Registrar propiedades.",
                "Registrar los actos relativos al estado civil de las personas.",
                "Controlar los contratos laborales.",
                "Llevar registros comerciales."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "¿Qué se entiende por \"medios de prueba\"?",
            new String[]{
                "Instrumentos para probar un delito.",
                "Elementos que acreditan hechos o derechos ante la ley.",
                "Documentos comerciales.",
                "Testimonios verbales únicamente."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "¿Cuál de las siguientes afirmaciones es falsa respecto al Derecho Civil?",
            new String[]{
                "Regula relaciones entre particulares.",
                "Es una rama del derecho público.",
                "Incluye normas sobre familia y estado civil.",
                "Se aplica de forma supletoria a otras ramas del derecho."
            },
            2
        ));
        
        return preguntas;
    }
    
    
    public static ArrayList<Pregunta> crearPreguntasDerechoLaboral() {
        ArrayList<Pregunta> preguntas = new ArrayList<>();
        
        preguntas.add(new Pregunta(
            "El derecho laboral se caracteriza por:",
            new String[]{
                "Proteger únicamente al empleador.",
                "Regular las relaciones de trabajo.",
                "Ser una rama del derecho penal.",
                "No tener fundamentos constitucionales."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "El trabajo digno implica:",
            new String[]{
                "Cumplimiento de metas empresariales.",
                "Trabajo informal sin regulación.",
                "Condiciones laborales dignas y con derechos.",
                "Actividades voluntarias sin salario."
            },
            3
        ));
        
        preguntas.add(new Pregunta(
            "¿Cuál de los siguientes es un ejemplo de trabajo independiente?",
            new String[]{
                "Empleado de oficina.",
                "Obrero en fábrica.",
                "Artesano que vende sus productos.",
                "Maestro en una escuela pública."
            },
            3
        ));
        
        preguntas.add(new Pregunta(
            "¿Qué comprende la jornada laboral en Uruguay según la normativa vigente?",
            new String[]{
                "El tiempo durante el cual el trabajador está a disposición del empleador.",
                "Solo el tiempo efectivo de trabajo, excluyendo pausas y descansos.",
                "Las horas que el trabajador elige libremente cada día.",
                "Únicamente las horas extraordinarias."
            },
            1
        ));
        
        preguntas.add(new Pregunta(
            "¿Qué derecho protege la libertad sindical y la negociación colectiva?",
            new String[]{
                "Derecho civil.",
                "Derecho laboral.",
                "Derecho penal.",
                "Derecho administrativo."
            },
            2
        ));
        
        return preguntas;
    }
    
    
    public static ArrayList<Pregunta> crearPreguntasSeguridadSocial() {
        ArrayList<Pregunta> preguntas = new ArrayList<>();
        
        preguntas.add(new Pregunta(
            "La seguridad social se considera un:",
            new String[]{
                "Derecho económico.",
                "Derecho humano.",
                "Derecho penal.",
                "Derecho mercantil."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "¿Qué órgano gestiona la seguridad social en Uruguay?",
            new String[]{
                "Ministerio de Economía.",
                "Ministerio del Interior.",
                "Banco de Previsión Social (BPS).",
                "Tribunal de Cuentas."
            },
            3
        ));
        
        preguntas.add(new Pregunta(
            "¿Qué tipo de prestaciones cubre la seguridad social?",
            new String[]{
                "Solamente jubilaciones.",
                "Subsidios, asignaciones familiares y jubilaciones.",
                "Préstamos bancarios.",
                "Servicios médicos privados."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "Las jubilaciones y pensiones se otorgan en función de:",
            new String[]{
                "El tipo de contrato laboral.",
                "Las clases y causales establecidas por ley.",
                "El salario mínimo nacional.",
                "La voluntad del empleador."
            },
            2
        ));
        
        preguntas.add(new Pregunta(
            "¿Qué objetivo tiene la historia laboral?",
            new String[]{
                "Controlar los antecedentes judiciales.",
                "Registrar el desempeño académico.",
                "Documentar los aportes y períodos laborales de una persona.",
                "Servir como currículum vitae."
            },
            3
        ));
        
        return preguntas;
    }
    
    
    public static void ejecutarJuego(ArrayList<Pregunta> preguntas, String categoria, Scanner scanner) {
        int puntaje = 0;
        int numPregunta = 1;
        
        System.out.println();
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println(centrarTexto(categoria, 63));
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println();
        System.out.println();
        
        for (Pregunta p : preguntas) {
            System.out.println();
            String encabezado = "PREGUNTA " + numPregunta + " de " + preguntas.size();
            System.out.println("───────────────────────────────────────────────────────────────");
            System.out.println(centrarTexto(encabezado, 63));
            System.out.println("───────────────────────────────────────────────────────────────");
            System.out.println();
            
            p.mostrarPregunta();
            
            System.out.print("    > Ingrese el número de la respuesta correcta: ");
            int respuesta = scanner.nextInt();
            System.out.println();
            
            if (p.esCorrecta(respuesta)) {
                System.out.println("    ✓ ¡CORRECTO! ✓");
                puntaje++;
            } else {
                System.out.println("    ✗ INCORRECTO ✗");
            }
            
            System.out.println();
            System.out.println("─────────────────────────────────────────────────────────────────");
            numPregunta++;
        }
        
        System.out.println();
        System.out.println();
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println(centrarTexto("JUEGO TERMINADO", 63));
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println();
        System.out.println("    Puntaje final: " + puntaje + " / " + preguntas.size());
        
        double porcentaje = (puntaje * 100.0) / preguntas.size();
        System.out.println("    Porcentaje: " + String.format("%.1f", porcentaje) + "%");
        System.out.println();
        
        if (porcentaje == 100) {
            System.out.println("    ⭐ ¡PERFECTO! ¡Excelente trabajo! ⭐");
        } else if (porcentaje >= 80) {
            System.out.println("    👍 ¡Muy bien! ¡Buen trabajo! 👍");
        } else if (porcentaje >= 60) {
            System.out.println("    ✅ ¡Bien hecho! Puedes mejorar. ✅");
        } else {
            System.out.println("    📚 Sigue estudiando. ¡Tú puedes mejorar! 📚");
        }
        System.out.println();
    }
    
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println();
        System.out.println();
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println();
        System.out.println(centrarTexto("¡BIENVENIDO AL JUEGO DE PREGUNTADOS!", 63));
        System.out.println(centrarTexto("Legislación y Derecho", 63));
        System.out.println();
        System.out.println("═══════════════════════════════════════════════════════════════");
        System.out.println();
        System.out.println();
        System.out.println("    ───────────────────────────────────────────────────────────");
        System.out.println("    " + centrarTexto("SELECCIONE UN APARTADO", 57));
        System.out.println("    ───────────────────────────────────────────────────────────");
        System.out.println();
        System.out.println();
        System.out.println("    ┌─── 1 ───┐  Derecho Civil");
        System.out.println();
        System.out.println("    ┌─── 2 ───┐  Derecho Laboral");
        System.out.println();
        System.out.println("    ┌─── 3 ───┐  Seguridad Social");
        System.out.println();
        System.out.println();
        System.out.print("    > Ingrese el número de la opción elegida: ");
        
        int opcion = scanner.nextInt();
        System.out.println();
        
        ArrayList<Pregunta> preguntasSeleccionadas = new ArrayList<>();
        String categoria = "";
        
        switch (opcion) {
            case 1:
                preguntasSeleccionadas = crearPreguntasDerechoCivil();
                categoria = "Derecho Civil";
                break;
            case 2:
                preguntasSeleccionadas = crearPreguntasDerechoLaboral();
                categoria = "Derecho Laboral";
                break;
            case 3:
                preguntasSeleccionadas = crearPreguntasSeguridadSocial();
                categoria = "Seguridad Social";
                break;
            default:
                System.out.println();
                System.out.println("    ⚠ Opción inválida. Saliendo del juego.");
                System.out.println();
                scanner.close();
                return;
        }
        
        ejecutarJuego(preguntasSeleccionadas, categoria, scanner);
        
        scanner.close();
    }
}


