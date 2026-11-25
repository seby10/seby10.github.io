---
titulo: Simulador financiero
resumen: Simulación de créditos e inversiones para una cooperativa, con solicitud en línea y verificación biométrica.
anio: 2026
orden: 2
seccion: caso
estado: academico
estadoDetalle: Proyecto de Ingeniería Económica. Tiene configuración de despliegue para Render y Vercel; hoy corre en local.
equipo: 'Equipo de seis. 52 de los 103 commits son míos, la mayoría en el backend.'
parte:
  - Gran parte del backend en NestJS, en sus módulos y en las piezas comunes del servidor.
  - Los cargos del crédito, incluido el que reparte un porcentaje del monto entre las cuotas, y su reflejo en la tabla de amortización.
  - La protección CSRF, la configuración de despliegue y las pruebas de extremo a extremo.
decisiones:
  - titulo: Dos sistemas de amortización
    texto: El simulador compara el sistema francés, de cuota fija, con el alemán, de capital fijo, para que el cliente vea la diferencia antes de pedir.
  - titulo: Cuota y total por separado
    texto: El seguro de desgravamen se calcula sobre el saldo pendiente, así que la tabla separa la cuota fija del total que cambia cada mes.
  - titulo: Sin administrador por defecto
    texto: La cuenta de administración la crea el seed a partir de variables de entorno; ninguna contraseña queda en el código.
figuras:
  - src: ../../assets/casos/simulador-amortizacion.png
    alt: Tabla de amortización de un crédito de 10 000 dólares a 24 meses por el sistema francés, con abono, interés, cuota, seguro y saldo de cada mes.
    pie: Un crédito de 10 000 dólares a 24 meses, cuota por cuota.
  - src: ../../assets/casos/simulador-panel.png
    alt: Panel de administración con accesos a tipos de crédito, pólizas a plazo fijo y solicitudes recibidas.
    pie: El panel desde el que la institución configura tasas, cargos y revisa solicitudes.
enlaces:
  - texto: Código
    url: https://github.com/seby10/simulador-financiero
---

Una cooperativa necesita que sus clientes entiendan cuánto pagarán antes de pedir un crédito. El sistema simula créditos por los sistemas francés y alemán y depósitos a plazo fijo, recibe la solicitud en línea con verificación biométrica del rostro y le da a la institución un panel para configurar tasas, cargos y planes, y revisar las solicitudes.
