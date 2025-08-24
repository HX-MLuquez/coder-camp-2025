# CoderCamp. 2025

## Introduction

CoderCamp is an innovative platform designed to help individuals learn and enhance their coding skills through interactive lessons and projects.

## Features

- **Interactive Learning**: Engage with hands-on coding exercises and real-world projects.
- **Community Support**: Join a community of learners and experienced developers for guidance and collaboration.
- **Flexible Curriculum**: Learn at your own pace with a variety of courses and resources.


---

## Crear un `sitemap.xml` y `robots.txt` 

### 1. **Generador de Sitemap XML (online)**
- **XML-Sitemaps.com**:  
  https://www.xml-sitemaps.com  
  *(Herramienta más completa, gratis hasta 500 páginas)*

**Pasos:**
1. Ingresa tu URL: `https://codercamp-2025.netify.app`
2. Haz clic en "Start"
3. Descarga el archivo `sitemap.xml`
4. Súbelo a la raíz de tu proyecto en Netlify

---

### 2. **Generador de robots.txt (online)**
- **Robots.txt Generator**:  
  https://www.robotstxt.org/generator.html

**Configuración recomendada para tu sitio:**
```txt
User-agent: *
Allow: /
Disallow: /private/
Sitemap: https://codercamp-2025.netify.app/sitemap.xml
```

---

### 3. **Solución todo-en-uno (local)**
Si usas Node.js, instala este paquete:
```bash
npm install sitemap-generator-cli --save-dev
```

**Generar sitemap:**
```bash
npx sitemap-generator https://codercamp-2025.netify.app -o public/sitemap.xml
```

**Crear robots.txt manualmente:**
1. Crea un archivo `public/robots.txt` con:
```txt
User-agent: *
Allow: /
Sitemap: https://codercamp-2025.netify.app/sitemap.xml
```

---

### 4. **Implementación en Netlify**
1. Coloca ambos archivos en la **carpeta pública** de tu proyecto:
   - `/public/sitemap.xml`
   - `/public/robots.txt`

2. Verifica que sean accesibles via:
   - `https://codercamp-2025.netify.app/sitemap.xml`
   - `https://codercamp-2025.netify.app/robots.txt`

---

### 5. **Verificación en Google Search Console**
1. Registra tu sitio:  
   https://search.google.com/search-console/
2. En "Sitemaps", ingresa `sitemap.xml`
3. Usa la herramienta "Inspección de URL" para forzar indexación

![Google Search Console](https://i.imgur.com/4NK0Y9m.png)

---

**Tiempo estimado:**  
Google suele indexar sitios nuevos en 3-7 días después de agregar el sitemap y robots.txt. Tu puntaje SEO de 92% es excelente - ahora solo necesitas darle tiempo a Google para rastrear tu contenido.
