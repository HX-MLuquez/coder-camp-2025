# INDEXADO

Google **no reindexa una aplicación web automáticamente cada vez que subimos un cambio**. El proceso de indexación depende de cómo Google descubre y rastrea tu sitio.

---

### 🔎 Cómo funciona el indexado de Google

1. **Rastreo (Crawling):** Googlebot visita el sitio según la frecuencia que ya tiene registrada (puede ser horas, días o semanas).
2. **Indexación:** procesa el contenido nuevo o actualizado y lo guarda en su índice.
3. **Posicionamiento (Ranking):** decide cuándo y cómo mostrar la página en resultados.

---

### ⏱️ ¿Cuánto tarda en actualizar?

- Si el sitio es **nuevo o con poco tráfico**, Google puede tardar **días o incluso semanas** en reflejar cambios.
- En sitios con **autoridad o visitas frecuentes**, el rastreo es mucho más rápido (a veces en horas).
- Cambios críticos (como **title, meta description o canonical**) pueden demorar más en verse reflejados en los resultados.

---

### ⚡ Cómo acelerar el indexado

1. **Google Search Console**

   - Subir **sitemap.xml**.
   - Usar la opción _"Inspeccionar URL"_ → _"Solicitar indexación"_ cuando subas cambios importantes.

2. **Sitemap actualizado**

   - Asegurarse de que tu sitemap incluya todas las páginas importantes y que se actualice automáticamente.

3. **Enlaces internos y externos**

   - Si otras páginas enlazan a tu contenido nuevo, Google lo descubrirá más rápido.

4. **Servidor rápido + HTTPS**

   - Google prioriza sitios accesibles y veloces.

---

👉 En resumen: **Google no indexa automáticamente cada push o cambio que se hace en una app**. Normalmente revisa el sitio de forma periódica, y la actualización puede tardar de horas a semanas.
Si se requiere que sea inmediato, la clave es **Google Search Console**.


---

## Aplicaciones con React implementar Helmet

Para mejorar el SEO en aplicaciones React, se puede utilizar la librería [React Helmet](https://github.com/nfl/react-helmet). Esta permite gestionar el `<head>` del documento de forma dinámica.

### Instalación

```bash
npm install react-helmet
```

### Uso básico

```jsx
import { Helmet } from "react-helmet";

function MyComponent() {
  return (
    <>
      <Helmet>
        <title>Mi Página</title>
        <meta name="description" content="Descripción de mi página" />
      </Helmet>
      <h1>Hola, mundo!</h1>
    </>
  );
}
```

### Consideraciones

- **Actualización dinámica:** Helmet actualiza el `<head>` cada vez que el componente se renderiza.
- **Rutas:** En aplicaciones con enrutamiento, cada ruta puede tener su propio `<Helmet>` para definir títulos y metadatos específicos.

```jsx
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/about">
        <Helmet>
          <title>Sobre Nosotros</title>
          <meta name="description" content="Información sobre nuestra empresa" />
        </Helmet>
        <About />
      </Route>
    </div>
  );
}
```


---

## Despliegue en NETLIFY

Para capturar todas las redirecciones, utilice /*  /index.html   200el _redirectsarchivo.

Según la documentación de netlify, el _redirectsarchivo debe estar en el directorio de compilación raíz.

```json
{
  "name": "coder-camp",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```


Para aplicar la lógica de redirecciones de CRA a un proyecto de Vite, puedes seguir un enfoque similar, modificando el script de `build` en tu `package.json` para copiar el archivo `_redirects` a la carpeta de compilación después de que Vite haya terminado de construir la aplicación.

-----

### **Cómo agregar \_redirects a un proyecto de Vite**

Vite, por defecto, compila tu aplicación y la coloca en la carpeta **`dist`** (a diferencia de `build` en CRA). Por lo tanto, el script de `build` necesita ser modificado para copiar el archivo de redirecciones a esta carpeta.

1.  **Crea el archivo `_redirects`**:
    En la **carpeta raíz** de tu proyecto (la misma donde se encuentra `package.json`), crea un nuevo archivo llamado **`_redirects`**. Dentro de este archivo, agrega tus reglas de redirección. Por ejemplo:

    ```
    /* /index.html   200
    /mi-ruta   /otra-ruta   301
    ```

    La primera línea es crucial para aplicaciones de una sola página (SPA), ya que garantiza que las rutas internas de la aplicación funcionen correctamente al recargar la página o al acceder directamente a ellas.

2.  **Modifica el script `build` en `package.json`**:
    Abre tu archivo **`package.json`** y encuentra la sección de `scripts`. Modifica el script de `build` para que, después de que Vite termine de compilar (`vite build`), se copie el archivo `_redirects` a la carpeta `dist`.

    ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build && cp _redirects dist/_redirects",
      "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    }
    ```

      - El comando **`&&`** asegura que el segundo comando (`cp _redirects dist/_redirects`) solo se ejecute si el primero (`vite build`) se completa con éxito.
      - El comando **`cp`** (de **c**o**p**y) es el equivalente en sistemas basados en Unix (macOS, Linux) a `copy` en Windows. Si estás en Windows, es posible que necesites usar el comando `copy` o una alternativa multiplataforma como `xcopy`. Una opción más robusta y que funciona en ambos sistemas es usar la librería **`cpr`** o **`copyfiles`** y agregarla como un script de post-compilación.

Con esta modificación, cada vez que ejecutes `npm run build` o `yarn build`, Vite compilará tu aplicación y luego el archivo `_redirects` se copiará automáticamente a la carpeta `dist`, listo para ser desplegado.