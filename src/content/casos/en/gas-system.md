---
titulo: Gas-System
resumen: Driver, vehicle, route and fuel management built on microservices.
anio: 2025
orden: 5
seccion: caso
estado: academico
stack: [Next.js, Microservices, Docker, Kubernetes]
rol: 'I built the whole frontend: role-based views, PDF reports and a dashboard with charts.'
metricas:
  - valor: '28/28'
    texto: frontend commits
  - valor: '5'
    texto: services, one per domain
  - valor: '4'
    texto: people on the team
estadoDetalle: Distributed Applications course project. It was deployed on Google Cloud with Kubernetes; today it runs locally with Docker Compose.
equipo: 'Team of four. The frontend is entirely mine: all 28 commits in that repository.'
parte:
  - I built the web dashboard in Next.js with the driver, vehicle, user, route and fuel views.
  - I added role-based access control, so each user only sees the features that apply to them.
  - I implemented PDF report export and the dashboard with charts.
  - On the backend, I split reads and writes in the vehicle service so queries go to a database replica.
decisiones:
  - titulo: One service per domain
    texto: Drivers, vehicles, routes, fuel and authentication are independent services behind an API gateway, each with its own Docker network.
  - titulo: A replica for reads
    texto: Queries, which are most of the traffic, go to a replica and don't load the main database, which only takes writes.
  - titulo: Monitoring from the start
    texto: The system includes Prometheus and Grafana to check the state of the services.
figuras:
  - src: ../../../assets/casos/gas-tablero.png
    alt: Gas-System dashboard with total vehicles, active drivers, routes in progress, potential fuel loss and anomaly rate.
    pie: The dashboard, with the full system running locally on Docker.
  - src: ../../../assets/casos/gas-vehiculos.png
    alt: Vehicle management table with plate, make, model, year, mileage, engine type, category and status.
    pie: Vehicle management with search, configurable columns and export. Test data.
enlaces:
  - texto: Frontend code
    url: https://github.com/Application-Distributed-Gasoline-System/Frontend
  - texto: Backend code
    url: https://github.com/Application-Distributed-Gasoline-System/Backend
---

A vehicle fleet that burns fuel needs to know who drives what, on which route and how much it spends. Gas-System handles this with a microservices architecture in NestJS, where the services talk over NATS and gRPC, plus a web dashboard where everything is managed.
