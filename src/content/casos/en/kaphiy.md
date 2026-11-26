---
titulo: Kaphiy
resumen: QR ordering for a coffee shop, with an API, a real-time kitchen dashboard and a customer app.
anio: 2026
orden: 1
seccion: caso
estado: probado-detenido
stack: [Next.js, NestJS, PostgreSQL, WebSocket, Playwright]
rol: 'I built the real-time kitchen dashboard, the API authentication and the tests.'
metricas:
  - valor: '45/74'
    texto: commits are mine
  - valor: '4'
    texto: people on the team
  - valor: '0'
    texto: apps to install before ordering
estadoDetalle: We tested it with the client and stopped after evaluating its economic viability. The Praliné landing page is still in use.
equipo: Team of four. 45 of the 74 commits in the repository are mine.
parte:
  - Kitchen dashboard in Next.js with real-time orders, products, ingredients, metrics and history.
  - JWT authentication and PIN access for baristas in the API.
  - Kitchen module with WebSocket so orders arrive without reloading.
  - Unit, integration and end-to-end tests with Vitest and Playwright.
  - The ordering flow with the AI assistant in the customer app.
decisiones:
  - titulo: Web instead of a native app
    texto: The customer scans a QR code at the table and orders from the browser, without installing anything.
  - titulo: Real time with WebSocket
    texto: The kitchen sees the order as soon as it's confirmed.
  - titulo: A database without a fixed server
    texto: Serverless PostgreSQL to keep operating costs low.
enlaces:
  - texto: Customer app
    url: https://kaphiy-ia.vercel.app
  - texto: Kitchen dashboard
    url: https://kaphiy.vercel.app
  - texto: Praliné landing page
    url: https://praline-nfc-landing.vercel.app/
  - texto: Code
    url: https://github.com/Arkasys-GDP/Kaphiy
figuras:
  - src: ../../../assets/casos/kaphiy-cocina.png
    alt: Kaphiy kitchen dashboard with two active orders, their products, notes and buttons to mark them as paid or start preparing them.
    pie: The kitchen dashboard gets orders in real time, with each customer's notes.
  - src: ../../../assets/casos/kaphiy-menu.png
    alt: Praliné menu in the customer app on a phone, with categories and prices.
    pie: The customer app, which you open by scanning a QR code at the table.
  - src: ../../../assets/casos/praline-landing.png
    alt: Praliné Coffee House landing page with the link to the menu.
    pie: The Praliné landing page, the part the coffee shop still uses.
---

Praliné Coffee House wanted its customers to order from their table without waiting or installing an app. Kaphiy is the system we built for that: the customer scans a QR code, sees the menu and sends their order, and the kitchen gets it on a real-time dashboard.
