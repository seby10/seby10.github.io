---
titulo: Detector de velocidad y placas
resumen: Mide la velocidad de vehículos en video, decide la sanción con lógica difusa y lee la placa.
anio: 2026
orden: 3
seccion: caso
estado: academico
stack: [Python, YOLOv8, DeepSORT, Lógica difusa]
rol: 'Calibré la lógica difusa y programé la votación que elige la lectura correcta de la placa.'
estadoDetalle: Proyecto final de Inteligencia Artificial. Funciona con cámara web o con video; no está desplegado.
equipo: Equipo de dos.
parte:
  - Ajusté el sistema difuso al límite de 20 km/h del campus y generé el dataset sintético con el que se calibró.
  - Programé el búfer de lecturas de placa, que vota entre todas las lecturas de un mismo vehículo y evita enviar dos correos por la misma placa.
  - Reentrené el modelo de caracteres y limpié el código, retirando la librería de OCR que ya no se usaba.
decisiones:
  - titulo: Votar en vez de leer una vez
    texto: Una sola lectura de la placa puede salir borrosa. El sistema guarda todas las del recorrido y se queda con la que más se repite.
  - titulo: Lógica difusa para la sanción
    texto: La velocidad no pasa de «bien» a «multa» de golpe. Las reglas difusas convierten los km/h en horas de sanción de forma gradual.
  - titulo: Seguimiento entre fotogramas
    texto: Para medir la velocidad hay que saber que el vehículo que cruza la segunda línea es el mismo que cruzó la primera. DeepSORT le asigna un identificador estable.
figuras:
  - src: ../../assets/casos/detector-video.png
    alt: Tablero del detector procesando un video del campus. Dos líneas de referencia cruzan la calle; el panel derecho muestra la placa detectada, difuminada aquí, a 4,3 km/h con 93 % de confianza.
    pie: Un vehículo medido a 4,3 km/h y su placa leída con 93 % de confianza. La placa está difuminada a propósito.
  - src: ../../assets/casos/detector-difuso.png
    alt: Dos gráficas de lógica difusa. Arriba, la velocidad de 25 km/h cae en la categoría «infracción». Abajo, el resultado es de 40 horas de sanción.
    pie: A 25 km/h el sistema difuso asigna 40 horas de sanción.
---

Dentro del campus de la universidad el límite es de 20 km/h. El proyecto propone vigilarlo con una cámara: detecta cada vehículo con YOLOv8, lo sigue entre fotogramas con DeepSORT y calcula su velocidad con el tiempo que tarda entre dos líneas a distancia conocida. Si excede el límite, decide la sanción con lógica difusa, lee la placa con una red neuronal propia y avisa al propietario por correo.
