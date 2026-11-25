---
titulo: Gas-System
resumen: Gestión de conductores, vehículos, rutas y combustible sobre microservicios. Hice el frontend.
anio: 2025
orden: 5
seccion: caso
estado: academico
estadoDetalle: Proyecto de Aplicaciones Distribuidas. Estuvo desplegado en Google Cloud con Kubernetes; hoy se levanta en local con Docker Compose.
equipo: 'Equipo de cuatro. El frontend es mío por completo: los 28 commits de ese repositorio.'
parte:
  - Construí el panel web en Next.js con las vistas de conductores, vehículos, usuarios, rutas y combustible.
  - Añadí control de acceso por rol, de modo que cada usuario solo ve las funciones que le corresponden.
  - Implementé la exportación de reportes en PDF y el tablero con gráficas.
  - En el backend, separé lecturas y escrituras del servicio de vehículos para que las consultas vayan a una réplica de la base de datos.
decisiones:
  - titulo: Un servicio por dominio
    texto: Conductores, vehículos, rutas, combustible y autenticación son servicios independientes detrás de una API gateway, cada uno con su propia red de Docker.
  - titulo: Réplica para lecturas
    texto: Las consultas, que son la mayoría, van a una réplica y no cargan la base principal, que solo recibe escrituras.
  - titulo: Monitoreo desde el inicio
    texto: El sistema incluye Prometheus y Grafana para ver el estado de los servicios.
figuras:
  - src: ../../assets/casos/gas-tablero.png
    alt: Tablero de Gas-System con el total de vehículos, conductores activos, rutas en curso, pérdida potencial de combustible y tasa de anomalías.
    pie: El tablero, con el sistema completo corriendo en local sobre Docker.
  - src: ../../assets/casos/gas-vehiculos.png
    alt: Tabla de gestión de vehículos con placa, marca, modelo, año, kilometraje, tipo de motor, categoría y estado.
    pie: Gestión de vehículos con búsqueda, columnas configurables y exportación. Datos de prueba.
enlaces:
  - texto: Código del frontend
    url: https://github.com/Application-Distributed-Gasoline-System/Frontend
  - texto: Código del backend
    url: https://github.com/Application-Distributed-Gasoline-System/Backend
---

Una flota de vehículos que consume combustible necesita saber quién conduce qué, por qué ruta y cuánto gasta. Gas-System lo resuelve con una arquitectura de microservicios en NestJS que se comunican por NATS y gRPC, y un panel web desde donde se administra todo.
