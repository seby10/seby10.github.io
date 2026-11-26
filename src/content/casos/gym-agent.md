---
titulo: gym-agent
resumen: Agente que genera rutinas semanales encadenando reglas de asociación, lógica difusa y un algoritmo genético.
anio: 2026
orden: 4
seccion: caso
estado: academico
stack: [Python, Streamlit, Apriori, Algoritmo genético]
rol: 'Diseñé el flujo de razonamiento y programé sus módulos y el orquestador.'
estadoDetalle: Proyecto de Inteligencia Artificial. Corre en local con Streamlit; no está desplegado.
equipo: Equipo de dos. 7 de los 9 commits son míos.
parte:
  - Diseñé el flujo de razonamiento en tres pasos y el orquestador que los une.
  - Programé los tres módulos — reglas de asociación con Apriori, estado físico con lógica difusa y rutina con un algoritmo genético — y el generador del historial de entrenamientos.
  - Escribí el informe técnico con cada decisión de diseño y sus alternativas.
decisiones:
  - titulo: Penalizar en vez de prohibir
    texto: Si el algoritmo genético rechazara toda rutina que supera la intensidad recomendada, con un usuario agotado casi ninguna sobreviviría. Las rutinas que se pasan reciben una penalización y la evolución las va descartando.
  - titulo: Umbrales con respaldo clínico
    texto: La fatiga se discretiza con los cortes de la escala ROF en lugar de percentiles, para que las reglas tengan sentido fisiológico.
  - titulo: Datos sintéticos, dicho de frente
    texto: No había historiales reales de gimnasio. Generé uno con patrones conocidos y lo documenté como la principal limitación del sistema.
figuras:
  - src: ../../assets/casos/gym-agent.png
    alt: Interfaz de gym-agent con el perfil del usuario a la izquierda y, a la derecha, la regla de asociación activa y la intensidad recomendada por la lógica difusa.
    pie: Cada paso del razonamiento queda a la vista, no solo la rutina final.
enlaces:
  - texto: Código
    url: https://github.com/seby10/gym-agent
---

Una rutina de gimnasio debería adaptarse a cómo llega cada persona ese día. El agente recibe el perfil del usuario y su estado de fatiga, energía y descanso, y genera una rutina de cinco días. Encadena tres técnicas: las reglas de asociación buscan señales de sobreentrenamiento en el historial, la lógica difusa decide qué intensidad puede tolerar el cuerpo hoy y el algoritmo genético arma la rutina que mejor cumple el objetivo sin pasarse de ese límite. La interfaz muestra el razonamiento de cada paso, no solo el resultado.
