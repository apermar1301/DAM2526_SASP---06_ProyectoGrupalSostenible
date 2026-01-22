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

