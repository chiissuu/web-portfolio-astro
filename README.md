# Portfolio Astro

Portfolio personal de Jesus Leon Romero Atienza, construido con Astro y componentes React puntuales para comportamiento de scroll.

## Estructura

```text
public/
  assets/        Imagenes, logos e iconos publicos
  docs/          Documentos descargables como el CV
  js/            JavaScript global de navegacion
src/
  components/   Secciones reutilizables de la pagina
  i18n/          Textos y rutas por idioma
  layouts/      Layout base HTML
  pages/        Rutas Astro
  styles/       Estilos globales
```

## Rutas

- `/es/`: portfolio principal en espanol.
- `/en/`: portfolio principal en ingles.
- `/es/tools/` y `/en/tools/`: pagina de herramientas.
- `/es/services/` y `/en/services/`: pagina de servicios.
- `/`: redireccion estatica hacia `/es/`.

## Comandos

Ejecutar desde la raiz del proyecto:

| Comando | Accion |
| :-- | :-- |
| `npm install` | Instala dependencias |
| `npm run dev` | Arranca el servidor local |
| `npm run build` | Genera la version de produccion en `dist/` |
| `npm run preview` | Previsualiza el build |

## Notas pendientes

- Actualizar el PDF real del CV cuando este listo.
- Sustituir los enlaces placeholder de proyectos y LinkedIn.
- Refinar el contenido de proyectos cuando haya repositorios o demos finales.
