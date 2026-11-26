---
titulo: FERIAUTO, roles de pago
resumen: Rol de pagos de una nómina ecuatoriana, con IESS, impuesto a la renta y costo del empleador, dentro del proyecto integrador del semestre.
anio: 2026
orden: 4
seccion: caso
estado: academico
stack: [Python, Flask, SQLite, Excel]
rol: 'Escribí casi todo el código: el motor de cálculo, la exportación a Excel y la portada que integra los cuatro módulos.'
metricas:
  - valor: '16/17'
    texto: commits míos
  - valor: '4'
    texto: regímenes laborales
  - valor: '33'
    texto: documentos en la biblioteca
estadoDetalle: Proyecto integrador del semestre. Corre en local, con una base SQLite por persona.
equipo: Proyecto integrador del semestre. 16 de los 17 commits del repositorio son míos.
parte:
  - 'El motor de cálculo del rol de pagos: ingresos, aportes al IESS, impuesto a la renta, neto a recibir y costo del empleador.'
  - 'Cuatro regímenes laborales: Código del Trabajo, LOSEP, LOEP y LOES.'
  - El resumen de nómina, el organigrama y las escalas salariales editables.
  - La exportación a Excel con fórmulas y las pruebas que la verifican.
  - La portada que reúne los cuatro módulos del proyecto y una biblioteca de 33 documentos con búsqueda.
decisiones:
  - titulo: Una base por persona
    texto: Cada quien corre su copia con su propia base SQLite. En un hosting sin disco la base se perdería y todos compartirían los mismos datos.
  - titulo: Cálculos verificados a mano
    texto: El motor se compara contra casos resueltos a mano, y otra prueba revisa la estructura y las fórmulas de los Excel exportados.
  - titulo: Modo solo lectura
    texto: Con una clave en el entorno, la app se puede revisar en público sin que nadie cambie los datos.
figuras:
  - src: ../../../assets/casos/roles-pago.png
    alt: Portada del proyecto integrador FERIAUTO con sus cuatro módulos y la barra de herramientas de nómina.
enlaces:
  - texto: Código
    url: https://github.com/seby10/roles-pago-ec
---

El proyecto integrador del semestre une cuatro materias alrededor de FERIAUTO: emprendimiento, obligaciones tributarias, nómina y liquidación laboral. Construí la aplicación que calcula el rol de pagos mensual de una nómina ecuatoriana y reúne en un solo sitio los entregables de los cuatro módulos.
