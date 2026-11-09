# ☕ Café Origen Analítica

## Descripción del proyecto

Café Origen Analítica es un proyecto desarrollado en JavaScript que busca organizar, validar y analizar información relacionada con las ventas de productos de café.

El proyecto utiliza un conjunto de datos que contiene información de clientes, productos, fechas, ciudades, cantidades y precios.

Su propósito es aplicar conceptos de programación y análisis de datos para identificar inconsistencias y mejorar la calidad de la información.

## Objetivos

- Organizar los registros de ventas mediante arrays de objetos.
- Identificar los tipos de datos y sus propiedades.
- Detectar problemas de calidad en la información.
- Aplicar métodos de JavaScript para procesar los datos.
- Desarrollar habilidades de análisis y validación de información.

## Tecnologías utilizadas

- JavaScript.
- Node.js.
- Visual Studio Code.
- Git.
- GitHub.

## Estructura del proyecto

```text
cafe-origen-analitica/
│
├── src/
│   └── ventas.js
│
├── bitacora.md
│
├── README.md
│
└── .gitignore
```

## Estructura de los datos

El conjunto de datos está compuesto por 12 registros de ventas.

Cada registro contiene las siguientes propiedades:

| Campo | Descripción |
|---|---|
| id | Identificador de la venta. |
| fecha | Fecha de la venta. |
| cliente | Código del cliente. |
| producto | Producto vendido. |
| ciudad | Ciudad asociada a la venta. |
| cantidad | Unidades vendidas. |
| precio | Precio unitario. |

## Casos de calidad identificados

Durante la revisión inicial se encontraron tres situaciones:

1. Inconsistencia en la escritura de los nombres de las ciudades.
2. Un registro presenta cantidad igual a cero.
3. Los códigos de clientes requieren validación mediante una tabla de referencia.

Las decisiones tomadas se encuentran documentadas en el archivo `bitacora.md`.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar a la carpeta

```bash
cd cafe-origen-analitica
```

### 3. Ejecutar el archivo JavaScript

```bash
node src/ventas.js
```

**Nota:** El archivo debe contener el código JavaScript correspondiente para que pueda ejecutarse.

## Autor

Proyecto desarrollado como ejercicio práctico de programación y análisis de datos.

**Camilo Jaramillo**

Estudiante de RIWI | Técnico en Desarrollo de Software – CESDE.