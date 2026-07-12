# PAMPA — Estudio de Arquitectura

Landing page premium para el estudio de arquitectura PAMPA. Diseñada con un enfoque minimalista, tipografía serif y una paleta oscura que resalta la obra arquitectónica.

## Requisitos

- [Bun](https://bun.sh/) instalado en tu sistema.
- VS Code (o el editor de tu preferencia).

## Abrir el proyecto en VS Code

Sigue estos pasos exactos para ejecutar el proyecto en tu entorno local:

1. **Clona o descarga el proyecto** en tu máquina.
2. **Abre VS Code**.
3. Ve a **Archivo → Abrir carpeta...** (`File → Open Folder...`).
4. Selecciona la **carpeta raíz del proyecto** (donde se encuentra `package.json`) y haz clic en **Abrir**.
5. Abre la terminal integrada de VS Code con `` Ctrl + ` `` (o **Terminal → Nueva terminal**).
6. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   bun install
   ```

7. Una vez finalizada la instalación, ejecuta el servidor de desarrollo:

   ```bash
   bun run dev
   ```

8. Abre tu navegador y visita la URL que aparece en la terminal, normalmente:

   ```
   http://localhost:8080
   ```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `bun run dev` | Inicia el servidor de desarrollo en `localhost:8080`. |
| `bun run build` | Genera la versión de producción. |
| `bun run start` | Inicia la versión de producción generada. |

## Tecnologías principales

- TanStack Start
- React 19
- Vite 7
- Tailwind CSS v4
- TypeScript
