# Portafolio Web — Presencia digital

Una landing page de portafolio profesional desarrollada con React + Vite y CSS puro, diseñada para convertir visitas en contactos.

## 🚀 Características

- **SPA completa** con navegación por anclas
- **Diseño responsivo** mobile-first
- **CSS puro** (sin frameworks de UI)
- **Paleta profesional** en azules, blanco y negro
- **SEO optimizado** con metadatos completos
- **Formulario de contacto** funcional
- **Portafolio interactivo** con previews de proyectos
- **4 paquetes de servicios** claramente diferenciados

## 🎨 Paleta de colores

- **Azul primario:** #0A64FF
- **Azul oscuro:** #0B1B2B  
- **Cian acento:** #1EC8FF
- **Blanco:** #FFFFFF
- **Gris claro:** #ECEFF3

## 📦 Instalación y desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Construir para producción
npm run build

# 4. Previsualizar build de producción
npm run preview
```

## ⚙️ Personalización

### 1. Editar información de paquetes
Modifica el archivo `src/data/packages.json`:

```json
{
  "packages": [
    {
      "key": "landing",
      "title": "Tu paquete",
      "price": 3000,
      "features": ["Característica 1", "Característica 2"]
    }
  ]
}
```

### 2. Actualizar proyectos del portafolio
Edita `src/data/projects.json`:

```json
{
  "projects": [
    {
      "title": "Nombre del proyecto",
      "vercelUrl": "https://tu-proyecto.vercel.app",
      "cover": "/projects/tu-imagen.jpg",
      "description": "Descripción del proyecto",
      "tags": ["React", "CSS", "Responsive"]
    }
  ]
}
```

### 3. Cambiar información de contacto
En `src/sections/Contact.jsx` y `src/sections/Footer.jsx`, actualiza:

- Número de WhatsApp
- Email de contacto
- Redes sociales
- Ubicación

### 4. Personalizar colores y estilos
Modifica las variables CSS en `src/styles/theme.css`:

```css
:root {
  --color-primary: #0A64FF;
  --color-secondary: #0B1B2B;
  --color-accent: #1EC8FF;
  /* ... más variables */
}
```

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.jsx      # Botón con variantes
│   ├── Header.jsx      # Navegación sticky
│   ├── PricingCard.jsx # Tarjetas de paquetes
│   └── ProjectCard.jsx # Tarjetas de proyectos
├── sections/           # Secciones principales
│   ├── Hero.jsx       # Sección hero
│   ├── Packages.jsx   # Paquetes de servicio
│   ├── Projects.jsx   # Portafolio
│   ├── Benefits.jsx   # Beneficios
│   ├── Contact.jsx    # Formulario de contacto
│   └── Footer.jsx     # Pie de página
├── styles/
│   └── theme.css      # Sistema de diseño
├── data/
│   ├── packages.json  # Datos de paquetes
│   └── projects.json  # Datos de proyectos
└── App.jsx            # Componente raíz
```

## 🎯 Secciones incluidas

1. **Hero** - Impacto inicial con CTAs principales
2. **Paquetes** - 4 opciones de servicio con precios
3. **Proyectos** - Portafolio con links a sitios live
4. **Beneficios** - ¿Por qué tener una página web?
5. **Contacto** - Formulario funcional + información
6. **Footer** - Links adicionales y redes sociales

## 📱 Responsive design

- **Mobile-first:** Optimizado desde 360px
- **Breakpoints:** 640px (tablet), 768px (desktop), 1024px (large)
- **Grid flexible:** Se adapta automáticamente
- **Imágenes optimizadas:** Lazy loading incluido

## 🔧 Tecnologías utilizadas

- **React 18** - Biblioteca de interfaz
- **Vite** - Build tool y dev server
- **CSS Puro** - Sin frameworks adicionales
- **SVG Icons** - Iconografía inline optimizada

## 📈 Performance y SEO

- **Lighthouse 90+** en Performance y Best Practices
- **Metadatos completos** Open Graph y Twitter Cards
- **Semántica HTML5** con roles ARIA
- **Contraste AA** cumplido en todos los elementos
- **Focus visible** para navegación por teclado

## 🚀 Despliegue

El proyecto está optimizado para desplegarse en:

- **Vercel** (recomendado)
- **Netlify** 
- **GitHub Pages**
- **Cualquier hosting estático**

```bash
# Build para producción
npm run build

# La carpeta 'dist' contiene los archivos listos para subir
```

## 📄 Licencia

Este proyecto es de uso libre para portafolios profesionales.

---

**¿Necesitas ayuda?** Contacta a través del formulario en la página o por WhatsApp.
