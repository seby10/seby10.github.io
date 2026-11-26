---
titulo: Financial Simulator
resumen: Loan and investment simulator for a credit union, with online applications and biometric verification.
anio: 2026
orden: 2
seccion: caso
estado: academico
stack: [NestJS, Next.js, Prisma, PostgreSQL]
rol: 'I wrote a large part of the backend: the loan charges, CSRF protection and deployment.'
metricas:
  - valor: '52/103'
    texto: commits are mine
  - valor: '6'
    texto: people on the team
  - valor: '2'
    texto: amortization methods
estadoDetalle: Engineering Economics course project. It has deployment config for Render and Vercel; today it runs locally.
equipo: 'Team of six. 52 of the 103 commits are mine, mostly on the backend.'
parte:
  - A large part of the NestJS backend, across its modules and the shared server pieces.
  - The loan charges, including the one that spreads a percentage of the loan amount across the installments, and how they show up in the amortization table.
  - CSRF protection, the deployment config and the end-to-end tests.
decisiones:
  - titulo: Two amortization methods
    texto: The simulator compares the French method, with a fixed payment, and the German method, with fixed principal, so the customer sees the difference before applying.
  - titulo: Payment and total shown separately
    texto: Credit life insurance is calculated on the outstanding balance, so the table separates the fixed payment from the total, which changes every month.
  - titulo: No default admin
    texto: The seed creates the admin account from environment variables; no password lives in the code.
figuras:
  - src: ../../../assets/casos/simulador-amortizacion.png
    alt: Amortization table for a $10,000 loan over 24 months using the French method, with principal, interest, payment, insurance and balance for each month.
    pie: A $10,000 loan over 24 months, payment by payment.
  - src: ../../../assets/casos/simulador-panel.png
    alt: Admin dashboard with links to loan types, fixed-term deposit policies and received applications.
    pie: The dashboard where the institution configures rates and charges and reviews applications.
enlaces:
  - texto: Code
    url: https://github.com/seby10/simulador-financiero
---

A credit union needs its customers to understand how much they'll pay before they apply for a loan. The system simulates loans under the French and German methods, as well as fixed-term deposits. It takes applications online with biometric face verification and gives the institution a dashboard to configure rates, charges and plans, and to review applications.
