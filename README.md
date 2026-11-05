# 🚀 Fireseed UI

Una librería de componentes interactivos, modulares y de alto rendimiento, diseñada bajo un enfoque estricto de componentes reutilizables tipo **"Lego"** y el estándar **Native-First** para aplicaciones móviles y de escritorio.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript (Strict mode, sin `any`).
- **Estilos:** Tailwind CSS v4 (Design Tokens semánticos y CSS variables dinámicas).
- **Animaciones:** Framer Motion (Física de resortes elásticos Apple de 200ms a 400ms).
- **Iconografía:** Lucide React.
- **Utilidades:** `clsx` + `tailwind-merge` (`cn`), `haptics` (vibración táctil segura para móviles).

---

## 🧱 Catálogo de Legos

### 🔹 Átomos
- **`Button`:** Botón interactivo con variantes (`solid`, `glow`, `inset`, `outline`, `ghost`, `destructive`, `link`), tamaños accesibles (`min-h-[44px]`), soporte háptico y estado `isLoading`.
- **`Badge`:** Etiquetas de estado (`solid`, `secondary`, `outline`, `success`, `warning`, `error`, `glow`) con indicador de pulso luminoso (`dot`).
- **`InputField`:** Campo de texto con etiquetas accesibles, iconos izquierdo/derecho y mensajes de error con `aria-invalid`.
- **`Textarea`:** Área de texto multilínea autoajustable.
- **`SelectField`:** Selector nativo estilizado que preserva la accesibilidad y los selectores nativos de iOS y Android.
- **`Skeleton`:** Efecto de carga shimmer para evitar saltos de pantalla (CLS).
- **`Switch`:** Interruptor tipo iOS con transición física de resorte y feedback háptico.
- **`InlineCode` & `StepBadge`:** Decoradores de código y pasos numerados.

### 🔸 Moléculas
- **`FeedbackButton`:** Botón con máquina de estados asíncrona (`idle` → `loading` → `success` con tilde y vibración).
- **`Modal`:** Diálogo híbrido inteligente: centrado en PC y **Bottom Sheet** deslizable con tirador táctil en celular (`< 640px`).
- **`ConfirmModal`:** Diálogo de confirmación rápida con advertencia háptica y acciones destructivas/positivas.
- **`MultiSelect<T>` (Combobox):** Selector múltiple genérico desacoplado con búsqueda en tiempo real, chips y click-outside.
- **`Tabs`:** Pestañas segmentadas con pastilla de fondo deslizante mediante `layoutId` de Framer Motion.
- **`PasswordRequirements`:** Indicador dinámico en tiempo real de seguridad de contraseñas.
- **`StarRating`:** Calificador de estrellas interactivo y modo solo lectura.
- **`Accordion`:** Secciones desplegables animadas con cálculo elástico de altura.
- **`StatCard`:** Tarjeta de métricas ejecutivas con indicadores de variación porcentual.
- **`EmptyState`:** Estado visual guiado para listas o grillas vacías.

### 🔷 Organismos
- **`Card`:** Conjunto modular (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`).
- **`Callout`:** Alertas y notas destacadas.
- **`Sidebar`:** Barra lateral adaptable para navegación de aplicaciones y paneles de administración.
- **`AnimateIn`:** Envoltorio de entrada con desvanecimiento y resplandor.

---

## 📦 Instalación

```bash
npm install fireseed-ui framer-motion lucide-react
```

### Configuración de Temas (Theming)
En tu archivo de estilos principal (`theme.css` o `index.css`):

```css
@import "tailwindcss";

@theme {
  --color-primary-main: var(--fs-primary-main, #110021);
  --color-accent-main: var(--fs-accent-main, #fdcc04);
}
```

---

## 💻 Ejemplo de Uso

```tsx
import { useState } from 'react';
import { Button, Modal, FeedbackButton, MultiSelect } from 'fireseed-ui';

export default function MiApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="glow" onClick={() => setIsOpen(true)}>
        Abrir Ventana
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Mi Ventana">
        <p className="text-white/80">Contenido totalmente modular.</p>
        <FeedbackButton
          initialText="Confirmar Acción"
          onClick={async () => {
            await new Promise((r) => setTimeout(r, 1000));
          }}
        />
      </Modal>
    </div>
  );
}
```

---

*Developed by FireSeed - Fueling Innovation*
