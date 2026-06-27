# Taller GitHub Pages - Sitio Web Modular

## Propósito del sitio

Este sitio web fue desarrollado para el taller formativo de la asignatura Aplicaciones y Tecnologías de la Web. Su objetivo es aplicar buenas prácticas de organización, modularidad y publicación de proyectos web mediante GitHub Pages.

## Arquitectura aplicada

El proyecto fue organizado utilizando una estructura modular, separando responsabilidades en distintas carpetas:

- `/components`: contiene componentes reutilizables como header y footer.
- `/css`: contiene los estilos visuales del sitio.
- `/js`: contiene la lógica principal de JavaScript.
- `/data`: contiene datos externos en formato JSON.
- `index.html`: estructura principal del sitio.

Esta arquitectura permite mantener el código más ordenado, reutilizable y fácil de modificar.

## Justificación de la arquitectura

Se utilizó una separación por componentes para reducir la repetición de código y facilitar el mantenimiento. Además, los datos fueron separados del HTML mediante un archivo JSON, permitiendo actualizar contenido sin modificar directamente la estructura principal del sitio.

## Ventajas

- Mejor organización del proyecto.
- Código más fácil de mantener.
- Separación entre estructura, estilos, lógica y datos.
- Uso de componentes reutilizables.
- Publicación sencilla mediante GitHub Pages.

## Limitaciones

- El sitio es estático.
- No utiliza base de datos.
- La carga de datos JSON depende del navegador y del servidor donde se publique.

## Enlace al sitio publicado

https://witobarfuu.github.io/taller-github-pages/index.html
