# AXIS Architecture Studio 🏗️

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> Una plataforma web inmersiva de estilo "Technical Minimalist" para un estudio de arquitectura de alto nivel.

## 📋 Descripción del Proyecto

AXIS es una **Single Page Application (SPA)** desarrollada con React y Vite. El proyecto se centra en la estética brutalista y la precisión técnica, utilizando animaciones suaves y un sistema de diseño modular.

La aplicación incluye un portafolio dinámico, galerías narrativas y un sistema de contacto serverless completamente funcional.

## ✨ Características Principales

* **Arquitectura SPA:** Navegación fluida sin recargas usando `react-router-dom`.
* **Diseño Técnico:** Sistema de diseño personalizado con Tailwind CSS v4 (Grid, Tipografía Mono/Sans).
* **Rutas Dinámicas:** Generación automática de páginas de detalle de proyectos basada en Slugs.
* **Formulario Funcional:** Integración con **EmailJS** para envío de correos sin backend.
* **Responsive:** Navegación adaptativa (Desktop/Móvil) y layouts flexibles.

## 🛠️ Tech Stack

* **Core:** React 18+, Vite.
* **Estilos:** Tailwind CSS v4.
* **Routing:** React Router DOM v6.
* **Servicios:** EmailJS (Browser SDK).
* **Iconos:** Lucide React.

## 🚀 Instalación y Uso Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/eduardomendoza87/Axis-Architecture-Studio-Web
    cd axis-architecture-web
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y agrega tus claves de EmailJS:
    ```env
    VITE_EMAILJS_SERVICE_ID=tu_service_id
    VITE_EMAILJS_TEMPLATE_ID=tu_template_id
    VITE_EMAILJS_PUBLIC_KEY=tu_public_key
    ```

4.  **Correr servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

```text
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables
│   ├── layout/      # Navbar, Footer, Layouts
│   └── ui/          # Botones, Cards, ScrollReveal
├── data/            # "Base de datos" estática (projects.js)
├── pages/           # Vistas principales (Home, Contact, Work)
├── routes/          # Configuración de rutas
