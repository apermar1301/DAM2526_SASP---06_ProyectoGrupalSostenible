# RECYCLO

## 💡 Idea: “EcoPuntos” – Contenedores inteligentes con recompensas locales

### 1️⃣ Qué es

* Un **sistema de contenedores inteligentes** donde los usuarios depositan residuos (plástico, papel, vidrio, electrónicos pequeños…).
* Cada vez que reciclan, reciben **“puntos digitales”** en su cuenta.
* Esos puntos se pueden **canjear en comercios locales o actividades sostenibles**.

### 2️⃣ Problema que resuelve

* Baja tasa de reciclaje por falta de motivación.
* Fomenta consumo responsable y economía local.
* Reduce residuos que acaban en vertederos o contaminando.

### 3️⃣ Público objetivo

* Familias y personas preocupadas por el medio ambiente.
* Comercios locales que quieran atraer clientes sostenibles.
* Ayuntamientos o administraciones locales que buscan incentivar reciclaje.

### 4️⃣ Sostenibilidad y ODS

* ODS 11: Ciudades y comunidades sostenibles.
* ODS 12: Producción y consumo responsables.
* ODS 13: Acción por el clima.
* Beneficios: fomenta hábitos sostenibles, reduce residuos y CO₂, impulsa la economía local.

### 5️⃣ Economía circular

* Incentiva la **reutilización y reciclaje de materiales**.
* Premia el comportamiento sostenible, cerrando el **círculo de consumo y reutilización**.
* Potencial para integrar con empresas locales que reutilicen los materiales recogidos.

### 6️⃣ Ciclo de vida

* **Diseño:** contenedores con sensores o QR para registrar depósitos.
* **Uso:** los usuarios depositan residuos y reciben puntos.
* **Mantenimiento:** limpieza de contenedores y actualización de la app/web.
* **Fin de vida:** contenedores reciclables y actualizables, puntos redimibles para servicios sostenibles.

### 7️⃣ Funcionalidades web con JavaScript

* Perfil de usuario con saldo de puntos.
* **Simulación interactiva**: al “depositar” un residuo, se suman puntos.
* Mapa de comercios locales donde canjear puntos (JS + mapa interactivo).
* Ranking de usuarios que más reciclan (gamificación).
* Acordeones para explicar sostenibilidad, economía circular y ODS.

### 8️⃣ Ecodiseño de la web

* Ligera y rápida, optimizada para móviles.
* Uso mínimo de imágenes pesadas, tipografía accesible.
* Contrastes claros y navegación simple (accesible).

# Estructura de la web

## 1️⃣ Estructura de la web

Propondría estas páginas y secciones:

```
📦 EcoPuntos/
 ┣ index.html                # Página de bienvenida
 ┣ 📂 pages/
 ┃ ┣ producto.html           # Qué es EcoPuntos, cómo funciona
 ┃ ┣ sostenibilidad.html     # ODS y beneficios ambientales
 ┃ ┣ economia-circular.html  # Principios de economía circular aplicados
 ┃ ┣ ciclo-vida.html         # Ciclo de vida del sistema de contenedores
 ┃ ┣ mapa.html               # Mapa de comercios locales y simulación puntos
 ┃ ┣ equipo.html             # Quiénes somos y reparto de tareas
 ┣ 📂 css/
 ┃ ┗ styles.css
 ┣ 📂 js/
 ┃ ┗ main.js
 ┣ 📂 assets/
 ┃ ┣ logo.png
 ┃ ┣ iconos/                 # Iconos de reciclaje, ODS, puntos
 ┃ ┗ img/                    # Imágenes de contenedores, mapas, ejemplos
 ┗ README.md
```

### Página por página:

1. **index.html**

   * Hero section: logo, slogan, llamada a la acción (“Descubre EcoPuntos”).
   * Breve introducción animada con JS.
   * Navegación a las secciones principales.

2. **producto.html**

   * Explicación de qué es EcoPuntos.
   * Problema que resuelve.
   * Público objetivo.
   * JS: acordeón para “Cómo funciona”.

3. **sostenibilidad.html**

   * ODS relacionados (iconos + descripción).
   * Riesgos y oportunidades ambientales y sociales.
   * JS: secciones desplegables o tabs.

4. **economia-circular.html**

   * Principios aplicados.
   * Comparativa con modelo tradicional.
   * Beneficios claros.

5. **ciclo-vida.html**

   * Diseño, desarrollo, uso, mantenimiento, fin de vida.
   * Diagrama visual (SVG o imagen ligera).
   * JS: popups informativos al pasar por cada fase.

6. **mapa.html**

   * Mapa interactivo de comercios locales.
   * Simulación de puntos al depositar residuos.
   * Ranking de usuarios (gamificación).

7. **equipo.html**

   * Integrantes + foto/icono + tareas realizadas.
   * Breve diario de trabajo.

---

## 2️⃣ Paleta de colores

Queremos transmitir **sostenibilidad, confianza y gamificación**:

| Color           | Uso principal                               | Hex     |
| --------------- | ------------------------------------------- | ------- |
| Verde principal | Botones, encabezados, iconos de reciclaje   | #2E7D32 |
| Verde claro     | Hover botones, fondos de secciones          | #81C784 |
| Azul sostenible | Enlaces, enlaces hover, títulos secundarios | #0288D1 |
| Amarillo puntos | Resaltar puntos de usuario, badges, iconos  | #FBC02D |
| Gris neutro     | Fondos secundarios, texto menos relevante   | #F5F5F5 |
| Gris oscuro     | Texto principal                             | #212121 |

💡 **Tip:** evitar imágenes muy pesadas para mantener la web **ligera y sostenible**.

---

## 3️⃣ Tipografías

* **Fuente principal (títulos y headers):**

  * **Poppins** o **Montserrat** (moderna y clara, buena para lectura digital).
  * Usar en H1, H2, H3.

* **Fuente secundaria (cuerpo de texto):**

  * **Roboto** o **Open Sans** (legible en cualquier dispositivo).
  * Usar en párrafos, listas y acordeones.

* **Uso recomendado:**

  * H1/H2: Poppins Bold (impacto visual).
  * H3/H4: Poppins Medium.
  * Párrafos y listas: Roboto Regular.
  * Botones: Poppins Medium, mayúsculas para llamar la atención.

---

## 4️⃣ Diseño y estilo general

### Layout

* **Header:** fijo, navegación clara (Home, Producto, Sostenibilidad, Economía circular, Ciclo de vida, Mapa, Equipo).
* **Footer:** contacto, enlaces a GitHub Pages, créditos, mini iconos de ODS.
* **Grid / Flexbox:** secciones divididas de forma clara, adaptable a móvil.

### Componentes con JS

* **Acordeones y tabs:** para explicaciones extensas (ODS, ciclo de vida).
* **Mapa interactivo:** puntos en comercios locales.
* **Ranking y simulación de puntos:** contador dinámico.

### Botones y CTAs

* Botones verdes con hover amarillo claro.
* Efecto “pulse” para llamar a interactuar con puntos o simulaciones.

### Iconografía

* Iconos de reciclaje, energía, ODS y puntos.
* Estilo plano, minimalista, consistentes con la paleta.

### Imágenes y assets

* Imágenes ligeras, preferiblemente SVG para contenedores y gráficos.
* Evitar fotos pesadas; usar ilustraciones minimalistas para mantener **sostenibilidad digital**.


# Reparto de trabajo

Perfecto, Álvaro 👍
Vamos a hacer un **reparto equitativo, claro y defendible delante del profe**, de forma que:

* Cada persona tenga **HTML + contenido + responsabilidad real**
* El CSS y JS estén **compartidos**, pero con partes bien delimitadas
* El historial de Git refleje trabajo equilibrado

Voy a asumir **3 personas**:

* **Tú (Álvaro)**
* **Compañero/a A**
* **Compañero/a B**

Si luego quieres cambiar nombres, no pasa nada.

---

## 📦 Estructura final del proyecto (Recyclo)

```
📦 recyclo/
 ┣ index.html
 ┣ 📂 pages/
 ┃ ┣ producto.html
 ┃ ┣ sostenibilidad.html
 ┃ ┣ economia-circular.html
 ┃ ┣ ciclo-vida.html
 ┃ ┣ mapa.html
 ┃ ┣ equipo.html
 ┣ 📂 css/
 ┃ ┗ styles.css
 ┣ 📂 js/
 ┃ ┗ main.js
 ┣ 📂 assets/
 ┃ ┣ img/
 ┃ ┣ iconos/
 ┗ README.md
```

---

## 👤 REPARTO DE ARCHIVOS Y RESPONSABILIDADES

### 🧑‍💻 1️⃣ Álvaro – Coordinación + identidad visual

**Rol:** Coordinador del proyecto + branding + base técnica

#### Archivos a tu cargo

* `index.html`
* `pages/producto.html`
* `README.md` (estructura inicial + revisión final)

#### Responsabilidades

* Página principal (hero, eslogan, navegación)
* Explicación clara de **qué es Recyclo y cómo funciona**
* Definir y aplicar:

  * Nombre de la marca
  * Eslogan
  * Identidad visual básica
* Coordinar estructura común de HTML
* Revisión final del README

#### CSS / JS

* Definir variables CSS:

  * colores
  * tipografías
* Header y footer comunes
* JS: navegación, menú responsive

👉 **Justificación para la presentación**

> “He diseñado la identidad del proyecto, la página principal y la explicación del servicio, asegurando coherencia visual y técnica.”

---

### 🧑‍💻 2️⃣ Compañero/a A – Sostenibilidad y ODS (RA3)

**Rol:** Contenido sostenible + impacto social y ambiental

#### Archivos a su cargo

* `pages/sostenibilidad.html`
* `pages/economia-circular.html`

#### Responsabilidades

* Relación directa con **ODS**
* Riesgos y oportunidades del servicio
* Explicar:

  * Modelo tradicional
  * Problemas actuales
  * Cómo Recyclo aplica economía circular
* Texto razonado (no copiado)

#### CSS / JS

* Estilos de:

  * tarjetas de ODS
  * secciones informativas
* JS:

  * acordeones / tabs para ODS
  * secciones desplegables

👉 **Justificación para la presentación**

> “Me he encargado de analizar y justificar la sostenibilidad del proyecto y su relación con los ODS y la economía circular.”

---

### 🧑‍💻 3️⃣ Compañero/a B – Ciclo de vida + gamificación

**Rol:** Análisis técnico + interacción con el usuario

#### Archivos a su cargo

* `pages/ciclo-vida.html`
* `pages/mapa.html`
* `pages/equipo.html`

#### Responsabilidades

* Análisis del **ciclo de vida del servicio**
* Simulación del sistema de EcoPuntos
* Mapa de comercios locales
* Página del equipo y reparto de tareas

#### CSS / JS

* Estilos de:

  * línea de tiempo (ciclo de vida)
  * rankings / puntos
* JS:

  * contador de EcoPuntos
  * simulación de reciclaje
  * ranking de usuarios

👉 **Justificación para la presentación**

> “He desarrollado la parte interactiva del proyecto y el análisis del ciclo de vida del servicio.”

---

## ⚖️ Por qué este reparto es EQUITATIVO

✔ Todos tienen **mínimo 2 páginas HTML**
✔ Todos tocan **HTML + CSS + JS**
✔ Todos trabajan **contenido + técnica**
✔ Cada rol es **defendible oralmente**
✔ GitHub reflejará trabajo real de cada uno

---

## 🔄 Recomendación para GitHub (muy importante)

* Cada uno trabaja en su rama:

  * `alvaro`
  * `sostenibilidad`
  * `interaccion`
* Commits tipo:

  * `Añadida estructura de sostenibilidad y ODS`
  * `Implementado simulador de EcoPuntos`
  * `Diseño inicial del index y branding Recyclo`

---

Si quieres, en el siguiente mensaje puedo:

* Hacer **un checklist por sesión de clase**
* Prepararte **el guion exacto para la presentación oral**
* O empezar directamente con **la estructura del index.html**

Tú mandas 🚀

