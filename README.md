# 🚀 Fireseed UI

Una librería de componentes interactivos, modulares y de alto rendimiento, diseñada bajo un enfoque estricto de componentes reutilizables tipo "Lego". Pensada para maquetar interfaces con una estética premium, limpia y minimalista.

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + Vite (TypeScript con `verbatimModuleSyntax` activado).
- **Estilos:** Tailwind CSS v4 (Nativo, sin dependencias de PostCSS viejas).
- **Animaciones:** Framer Motion (Física de resortes y gestos premium).
- **Utilidades:** `clsx` + `tailwind-merge` (Fusión de clases dinámicas inteligente).

---

## 📐 Reglas de Arquitectura

1.  **Atomicidad Extrema:** Cada componente es independiente, controla su propio estado visual y delega la lógica pesada a Custom Hooks independientes.
2.  **Cero CSS Externo:** Todo el diseño está integrado de manera responsiva mediante clases nativas de Tailwind.
3.  **Tipado Robusto:** Interfaces de TypeScript estrictas, heredando propiedades nativas del DOM o de Framer Motion mediante uniones de tipos literales. Prohibido el uso de `any`.
4.  **Exportación Nombrada (Barriles):** Arquitectura basada en carpetas por componente con archivos `index.ts` locales y globales para evitar colisiones de nombres.

---

## 📦 Estructura del Proyecto

```text
src/
├── components/          # La cuna de los Legos
│   ├── Button/          # Componente Button
│   │   ├── Button.tsx   # Lógica y maquetación
│   │   └── index.ts     # Exportación local
│   └── index.ts         # Enchufe maestro de la librería
├── utils/
│   └── cn.ts            # Función controladora de estilos (clsx + twMerge)
└── index.css            # Directiva central de Tailwind v4
```
