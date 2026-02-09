# 📝 Notas – Parte de Sostenibilidad (Daniel)

Dejo aquí un resumen rápido de **lo que he hecho**, **cómo está ahora mismo el proyecto** y **qué queda pendiente**, para que nos aclarar antes de hacer el merge.

---

## 👤 Mi parte del proyecto

Me he encargado de la parte de:

- **Sostenibilidad y ODS.html**
- **Economía circular.html**
- **Estilos específicos de estas páginas (sostenibilidad-circular.css)**
- **Un poco de JS para la interacción (acordeones) (uso general)**

### 📄 Páginas que he hecho
- `pages/sostenibilidad.html`
- `pages/economia-circular.html`

Las dos:
- Tienen la estructura final que se supone que usaremos
- Comparten cabecera (la de styles.css que hizo Alvaro) (revisar propuestas)
- Tienen el contenido completo y explicado por si sirve de ejemplo

---

## 🎨 CSS

He creado un CSS aparte para no mezclar cosas:

- `css/sostenibilidad-circular.css`

Aquí está todo lo relacionado con:
- Colores del proyecto
- Fondos de secciones
- Diseño responsive
- Grid de los ODS
- Estilos del acordeón

👉 **No he tocado** el CSS común del header, menú, logo, etc.  
Eso es parte del trabajo común (la parte de Álvaro).
No he querido tocar nada de ahí por no dar error en el merge.

---

## ⚙️ JavaScript

En `js/main.js` está hecho:

- El acordeón de los ODS
- Solo se abre uno a la vez
- Funciona bien en móvil y en pantalla grande

El JS:
- Solo actúa donde hay botones de ODS
- No depende del menú ni del index
- No rompe nada del resto del proyecto
(recomiendo que metais todo el código en el mismo main.js ya que es universal)

---

## 🧱 Estado actual del proyecto

Ahora mismo hay una cosa a tener en cuenta:

- Mis páginas usan **la estructura definitiva del header que hizo Álvaro**
- El `index.html` todavía usa una estructura más antigua

Por eso puede que ahora:
- el index se vea distinto
- el logo no funcione igual en todas

⚠️ **Esto es normal**, es solo que falta unificarlo todo.

---

## 👤 Cosas que quedan por hacer (Álvaro)

Para que todo quede cerrado del todo, faltaría:

- Unificar la cabecera del index con la del resto
- Dejar el header, menú y logo solo en el CSS común
- Revisar rutas finales (index → pages, logo en `resource/`)

Cuando eso esté hecho:
- Mis páginas encajan sin tocar nada
- Todo se verá igual
- No habrá líos con el merge

---

## 🟢 Resumen rápido

- Mi parte está acabada
- Funciona correctamente
- Está separada del código común
- Está lista para integrarse sin conflictos

Perdón por tanta docu, porfa, miren el PROPUESTAS.md y me dicen 👍
