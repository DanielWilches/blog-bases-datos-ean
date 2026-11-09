# DataEngBlog — Blog Académico de Bases de Datos (Universidad EAN)

Este repositorio contiene la solución completa de software y contenido investigativo para la actividad de **Bases de Datos** del espacio académico **Diseño e Implementación de Sistemas de Información (Facultad de Ingeniería, Universidad EAN)**.

El blog está diseñado bajo una arquitectura de **sitio web estático puro (HTML5 semántico, CSS3 modular con diseño responsivo y tema oscuro/claro, y Vanilla JavaScript)**, lo que permite que funcione de inmediato abriéndolo en cualquier navegador y que sea **100% compatible y desplegable en GitHub Pages sin necesidad de instalar dependencias ni compilar Node.js**.

---

## 🚀 Guía Rápida de Despliegue en GitHub Pages

Para publicar tu blog en internet de forma gratuita y obtener tu enlace público `https://<tu-usuario>.github.io/<tu-repositorio>/`, sigue estos 4 sencillos pasos:

### Paso 1: Crear un nuevo repositorio en GitHub
1. Ingresa a tu cuenta de [GitHub](https://github.com) y crea un nuevo repositorio público (por ejemplo: `blog-bases-datos-ean`).
2. **No** selecciones la opción de inicializar con README ni con .gitignore (lo crearemos desde tu máquina local).

### Paso 2: Inicializar Git y subir los archivos
Abre tu terminal (PowerShell o Git Bash) dentro de la carpeta `blog-bases-datos` y ejecuta los siguientes comandos:

```bash
# 1. Asegúrate de estar dentro de la carpeta del blog
cd "blog-bases-datos"

# 2. Inicializar el repositorio Git local
git init

# 3. Agregar todos los archivos al seguimiento
git add .

# 4. Crear el commit inicial
git commit -m "feat: Blog académico de bases de datos EAN listo para GitHub Pages"

# 5. Configurar la rama principal como 'main'
git branch -M main

# 6. Conectar tu repositorio local con GitHub (reemplaza con tu URL real de GitHub)
git remote add origin https://github.com/<TU_USUARIO_GITHUB>/blog-bases-datos-ean.git

# 7. Subir el código a GitHub
git push -u origin main
```

### Paso 3: Activar GitHub Pages en el Repositorio
1. En GitHub, dirígete a la pestaña **Settings** (Configuración) de tu repositorio.
2. En el menú lateral izquierdo, haz clic en **Pages** (dentro de la sección *Code and automation*).
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona la rama `main` y en la carpeta deja `/ (root)`.
4. Haz clic en el botón **Save** (Guardar).

### Paso 4: ¡Tu blog está en vivo! 🎉
En aproximadamente 60 a 90 segundos, GitHub Pages generará tu sitio web público. Verás un recuadro verde que dice:
> **"Your site is live at https://<TU_USUARIO_GITHUB>.github.io/blog-bases-datos-ean/"**

*¡Listo! Este es el enlace público que debes incluir en la portada y entrega de tu trabajo de la Universidad EAN.*

---

## 📂 Estructura de Archivos del Proyecto

```text
blog-bases-datos/
├── index.html                   # Portal principal con buscador interactivo y temario
├── README.md                    # Esta guía de despliegue
├── css/
│   └── styles.css               # Sistema de diseño con modo oscuro/claro y variables
├── js/
│   └── main.js                  # Lógica interactiva: búsqueda, temas, copiado de SQL
├── paginas/                     # Páginas estáticas que responden a los 9 temas de la guía
│   ├── motor-bd.html            # 1. ¿Qué es un motor de bases de datos?
│   ├── bd-relacional.html       # 2. ¿Qué características tiene una base de datos relacional?
│   ├── bd-no-relacional.html    # 3. ¿Qué es una base de datos no relacional?
│   ├── nosql-actualidad.html    # 4. Bases de datos no relacionales en la actualidad
│   ├── motores-licenciados.html  # 5. Motores relacionales licenciados más utilizados
│   ├── motores-opensource.html  # 6. Motores relacionales Open Source
│   ├── normalizacion.html       # 7. ¿Qué es la normalización de base de datos?
│   ├── formas-normales.html     # 8. ¿Qué formas normales existen? (1FN a 5FN + Caso práctico)
│   └── seguridad-bd.html        # 9. Criterios para estrategias de seguridad
└── noticias/                    # Entradas cronológicas del blog sobre últimas noticias
    ├── noticia-1-vector-databases.html           # Bases de datos vectoriales & IA (Feb 2026)
    ├── noticia-2-postgresql-mysql-evolucion.html # Postgres 17/18 y MySQL 9 (Ene 2026)
    └── noticia-3-arquitecturas-htap.html        # Convergencia HTAP OLTP/OLAP (Nov 2025)
```

---

## ✨ Características Técnicas Destacadas
- **Navegación Intuitiva**: Menú superior fijo con efecto *glassmorphism*, migas de pan (*breadcrumbs*) y navegación secuencial anterior/siguiente en cada artículo.
- **Buscador en Tiempo Real**: Filtra instantáneamente por términos como "PostgreSQL", "seguridad", "normalización" o "NoSQL".
- **Alternador de Tema**: Soporte completo para modo oscuro y claro con persistencia en `localStorage`.
- **Copiado de Bloques de Código**: Botón de copiado interactivo en un clic con retroalimentación visual para todas las sentencias SQL y DDL.
- **Rigor Académico**: Cada artículo incluye tablas comparativas de nivel de ingeniería, diagramas vectoriales SVG y citas bibliográficas en formato **APA 7**.
