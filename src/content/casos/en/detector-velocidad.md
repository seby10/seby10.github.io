---
titulo: Speed and License Plate Detector
resumen: Measures vehicle speed from video, decides the penalty with fuzzy logic and reads the license plate.
anio: 2026
orden: 3
seccion: caso
estado: academico
stack: [Python, YOLOv8, DeepSORT, Fuzzy logic]
rol: 'I tuned the fuzzy logic and wrote the voting step that picks the correct plate reading.'
metricas:
  - valor: '20 km/h'
    texto: calibrated campus speed limit
  - valor: '1'
    texto: email per plate, no duplicates
  - valor: '2'
    texto: people on the team
estadoDetalle: Final project for the Artificial Intelligence course. It works with a webcam or a video file; it isn't deployed.
equipo: Team of two.
parte:
  - I tuned the fuzzy system to the campus 20 km/h limit and generated the synthetic dataset used to calibrate it.
  - I wrote the plate reading buffer, which votes across all readings of the same vehicle and avoids sending two emails for the same plate.
  - I retrained the character model and cleaned up the code, removing the OCR library we no longer used.
decisiones:
  - titulo: Vote instead of reading once
    texto: A single plate reading can come out blurry. The system keeps every reading along the vehicle's path and picks the one that shows up most often.
  - titulo: Fuzzy logic for the penalty
    texto: Speed doesn't jump from "OK" to "ticket" in one step. The fuzzy rules turn km/h into penalty hours gradually.
  - titulo: Tracking across frames
    texto: To measure speed, you need to know that the vehicle crossing the second line is the same one that crossed the first. DeepSORT gives it a stable ID.
figuras:
  - src: ../../../assets/casos/detector-video.png
    alt: Detector dashboard processing a video of the campus. Two reference lines cross the street; the right panel shows the detected plate, blurred here, at 4.3 km/h with 93% confidence.
    pie: A vehicle measured at 4.3 km/h and its plate read with 93% confidence. The plate is blurred on purpose.
  - src: ../../../assets/casos/detector-difuso.png
    alt: Two fuzzy logic charts. On top, a speed of 25 km/h falls into the "violation" category. Below, the result is 40 penalty hours.
    pie: At 25 km/h the fuzzy system assigns 40 penalty hours.
---

The speed limit inside the university campus is 20 km/h. The project proposes enforcing it with a camera: it detects each vehicle with YOLOv8, tracks it across frames with DeepSORT and calculates its speed from the time it takes to travel between two lines a known distance apart. If the vehicle is over the limit, the system decides the penalty with fuzzy logic, reads the plate with our own neural network and emails the owner.
