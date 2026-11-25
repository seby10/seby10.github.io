---
titulo: Kaphiy
resumen: Pedidos por QR para una cafetería, con API, panel de cocina en tiempo real y app para clientes.
anio: 2026
orden: 1
seccion: caso
estado: probado-detenido
estadoDetalle: Se probó con el cliente y se detuvo al evaluar la viabilidad económica. La landing de Praliné sigue en uso.
equipo: Equipo de cuatro. 45 de los 74 commits del repositorio son míos.
parte:
  - Panel de cocina en Next.js con pedidos en tiempo real, productos, ingredientes, métricas e historial.
  - Autenticación con JWT y acceso de barista por PIN en la API.
  - Módulo de cocina con WebSocket para que los pedidos lleguen sin recargar.
  - Pruebas unitarias, de integración y de extremo a extremo con Vitest y Playwright.
  - El flujo de pedido con el asistente de IA en la app de clientes.
decisiones:
  - titulo: Web en lugar de app nativa
    texto: El cliente escanea un QR en la mesa y pide desde el navegador, sin instalar nada.
  - titulo: Tiempo real con WebSocket
    texto: La cocina ve el pedido en cuanto se confirma.
  - titulo: Base de datos sin servidor fijo
    texto: PostgreSQL serverless para mantener bajo el costo de operación.
enlaces:
  - texto: App de clientes
    url: https://kaphiy-ia.vercel.app
  - texto: Panel de cocina
    url: https://kaphiy.vercel.app
  - texto: Landing de Praliné
    url: https://praline-nfc-landing.vercel.app/
  - texto: Código
    url: https://github.com/Arkasys-GDP/Khapiy
nota:
  texto: Lo construimos, lo probamos en la cafetería y los números no dieron. Un sistema puede funcionar y aun así no convenir.
  fecha: Borrador
figuras:
  - src: ../../assets/casos/kaphiy-cocina.png
    alt: Panel de cocina de Kaphiy con dos pedidos activos, sus productos, notas y botones para marcar pagado o iniciar la preparación.
    pie: El panel de cocina recibe los pedidos en tiempo real, con las notas de cada cliente.
  - src: ../../assets/casos/kaphiy-menu.png
    alt: Menú de Praliné en la app de clientes, en un teléfono, con categorías y precios.
    pie: La app de clientes, a la que se entra escaneando un QR en la mesa.
  - src: ../../assets/casos/praline-landing.png
    alt: Landing de Praliné Coffee House con el acceso al menú.
    pie: La landing de Praliné, la parte que la cafetería sigue usando.
---

Praliné Coffee House quería que sus clientes pidieran desde la mesa sin esperar ni instalar una aplicación. Kaphiy es el sistema que construimos para eso: el cliente escanea un código QR, ve el menú y envía su pedido, y la cocina lo recibe en un panel en tiempo real.
