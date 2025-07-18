# Contabilidad

Este repositorio contiene un esqueleto de backend para un sistema de ERP. El backend está construido con **Node.js** y **Express** y agrupa distintas áreas contables y administrativas.

## Estructura

- `backend/` código fuente del servidor
  - `src/app.js` punto de entrada de la aplicación
  - `src/routes/` define las rutas de cada módulo
  - `src/controllers/` contiene las funciones que responden a cada ruta
  - `src/models/` espacio para modelos de datos (actualmente vacío)

## Funcionalidades incluidas

- Libro de compras y ventas automático
- Envío de DTE al SII (facturas, boletas, NC, ND)
- Informes financieros y contables
- Gestión de clientes y proveedores
- Emisión de cotizaciones y órdenes de compra
- Conciliación bancaria
- Remuneraciones y liquidaciones

Cada módulo expone rutas HTTP que actualmente devuelven mensajes de ejemplo. Sirven como base para incorporar la lógica real en el futuro.

## Uso

1. Instalar dependencias (requiere conexión a internet):

   ```bash
   cd backend
   npm install
   ```

2. Iniciar el servidor:

   ```bash
   npm start
   ```

El servidor escucha por defecto en el puerto `3000`.
