# BITÁCORA DEL PROYECTO
## Café Origen Analítica

### 1. Descripción de la actividad

Se realizó una revisión del conjunto de datos correspondiente a las ventas de Café Origen, compuesto por 12 registros.

El objetivo fue identificar la estructura de los datos, reconocer sus propiedades, determinar los tipos de información y detectar posibles problemas de calidad.

### 2. Diccionario de datos

El diccionario de datos permite identificar cada propiedad del array, su tipo de dato y su significado.

| Propiedad | Tipo de dato | Significado |
|---|---|---|
| id | Number | Identificador único de cada venta. |
| fecha | String | Fecha en la que se realizó la venta (AAAA-MM-DD). |
| cliente | String | Código que identifica al cliente. |
| producto | String | Nombre del producto vendido. |
| ciudad | String | Ciudad asociada al registro de venta. |
| cantidad | Number | Número de unidades adquiridas. |
| precio | Number | Precio unitario del producto en pesos colombianos. |

**Estructura:** Los datos están almacenados en un array de objetos de JavaScript denominado `ventas`.

### 3. Casos borde detectados

Después de revisar los registros se identificaron tres situaciones que requieren atención.

#### Caso 1. Inconsistencia en los nombres de las ciudades

**Hallazgo:**

Se encontraron dos formas de escribir Medellín:

- Medellín
- medellín

**Decisión:**

Estandarizar los nombres de las ciudades utilizando una escritura uniforme.

**Justificación:**

Evitar que una misma ciudad sea interpretada como dos valores diferentes durante los filtros y agrupaciones.

#### Caso 2. Cantidad igual a cero

**Hallazgo:**

El registro con ID 8 presenta una cantidad de cero unidades.

**Información del registro:**

- Cliente: C06.
- Producto: Origen Huila 500 g.
- Ciudad: Cali.
- Cantidad: 0.
- Precio: 42000.

**Decisión:**

Conservar el registro y marcarlo para revisión antes de incluirlo en los análisis de ventas efectivas.

**Justificación:**

Es necesario determinar si corresponde a una venta cancelada, un error de digitación o un registro válido.

#### Caso 3. Validación de los códigos de clientes

**Hallazgo:**

Se identificaron códigos de clientes desde C01 hasta C08. Algunos aparecen repet