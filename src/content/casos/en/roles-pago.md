---
titulo: FERIAUTO, Payroll
resumen: Monthly payroll for an Ecuadorian company, with IESS contributions, income tax and employer cost, built for the semester's integration project.
anio: 2026
orden: 4
seccion: caso
estado: academico
stack: [Python, Flask, SQLite, Excel]
rol: 'I wrote almost all of the code: the calculation engine, the Excel export and the home page that brings the four modules together.'
metricas:
  - valor: '16/17'
    texto: commits are mine
  - valor: '4'
    texto: labor regimes
  - valor: '33'
    texto: documents in the library
estadoDetalle: The semester's integration project. It runs locally, with one SQLite database per person.
equipo: The semester's integration project. 16 of the repository's 17 commits are mine.
parte:
  - 'The payroll engine: earnings, IESS contributions, income tax, net pay and employer cost.'
  - 'Four labor regimes: Código del Trabajo, LOSEP, LOEP and LOES.'
  - The payroll summary, the org chart and the editable salary scales.
  - The Excel export with live formulas, and the checks that verify it.
  - The home page that brings the project's four modules together, plus a searchable library of 33 documents.
decisiones:
  - titulo: One database per person
    texto: Everyone runs their own copy with their own SQLite database. On a host without a disk the database would be lost and everyone would share the same data.
  - titulo: Calculations checked by hand
    texto: The engine is compared against cases solved by hand, and a second check verifies the structure and formulas of the exported Excel files.
  - titulo: Read-only mode
    texto: With a password set in the environment, the app can be reviewed publicly without anyone changing the data.
figuras:
  - src: ../../../assets/casos/roles-pago.png
    alt: Home page of the FERIAUTO integration project with its four modules and the payroll toolbar.
enlaces:
  - texto: Code
    url: https://github.com/seby10/roles-pago-ec
---

The semester's integration project ties four courses together around FERIAUTO: entrepreneurship, tax obligations, payroll and severance. I built the app that calculates the monthly payroll for an Ecuadorian company and puts the deliverables from all four modules in one place.
