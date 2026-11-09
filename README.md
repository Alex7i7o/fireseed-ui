# 🚀 Fireseed UI

Una librería de componentes interactivos, modulares y de alto rendimiento, diseñada bajo un enfoque estricto de componentes reutilizables tipo **"Lego"** y el estándar **Native-First** para aplicaciones móviles y de escritorio.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript (Strict mode, sin `any`).
- **Estilos:** Tailwind CSS v4 (Design Tokens semánticos y CSS variables dinámicas).
- **Animaciones:** Framer Motion (Física de resortes elásticos con amortiguación natural de 200ms a 400ms).
- **Iconografía:** Lucide React.
- **Utilidades:** `clsx` + `tailwind-merge` (`cn`), `haptics` (vibración táctil segura para móviles).

---

## 🧱 Catálogo de Legos

### 🔹 Átomos
- **`Button`:** Botón interactivo con variantes (`solid`, `glow`, `inset`, `outline`, `ghost`, `destructive`, `link`), tamaños accesibles (`min-h-[44px]`), soporte háptico y estado `isLoading`.
- **`Badge`:** Etiquetas de estado (`solid`, `secondary`, `outline`, `success`, `warning`, `error`, `glow`) con indicador de pulso luminoso (`dot`).
- **`InputField`:** Campo de texto con etiquetas accesibles, iconos izquierdo/derecho y mensajes de error con `aria-invalid`.
- **`SelectField`:** Selector desplegable flotante estilizado con esquinas redondeadas y microanimación.
- **`Checkbox`:** Casilla de verificación con estado indeterminado y microanimación elástica.
- **`Radio` & `RadioGroup`:** Selector radial con indicador de selección animado por resorte.
- **`Avatar` & `AvatarGroup`:** Avatares con iniciales automáticas, fallback e indicadores de estado.
- **`Tooltip`:** Indicador flotante direccional con desenfoque de fondo y retardo configurable.
- **`Slider`:** Control de rango con posicionamiento geométrico exacto 1:1 y sincronización en tiempo real.
- **`Separator`:** Divisores sutiles con soporte para gradientes técnicos y etiquetas intermedias.
- **`Skeleton`:** Efecto de carga shimmer para evitar saltos de pantalla (CLS).
- **`Switch`:** Interruptor ergonómico con transición física de resorte y feedback háptico.
- **`InlineCode` & `StepBadge`:** Decoradores de código y pasos numerados.

### 🔸 Moléculas
- **`FeedbackButton`:** Botón con máquina de estados asíncrona (`idle` → `loading` → `success` con ancho bloqueado y vibración).
- **`Modal`:** Diálogo híbrido inteligente: centrado en PC y **Bottom Sheet** deslizable con tirador táctil en celular (`< 640px`).
- **`ConfirmModal`:** Diálogo de confirmación rápida con advertencia háptica y acciones destructivas/positivas.
- **`Calendar`:** Cuadrícula mensual interactiva con modo individual, rango de fechas, indicadores de eventos y feedback háptico.
- **`DatePicker`:** Selector de fecha con popover flotante y navegación mensual elástica.
- **`DropdownMenu`:** Menú contextual flotante con soporte para atajos de teclado y acciones destructivas.
- **`MultiSelect<T>` (Combobox):** Selector múltiple genérico desacoplado con búsqueda en tiempo real, chips y click-outside.
- **`Tabs`:** Pestañas segmentadas con pastilla de fondo deslizante mediante `layoutId` de Framer Motion.
- **`Breadcrumb`:** Migas de pan navegables con separadores configurables.
- **`Pagination`:** Barra numérica con cálculo inteligente de elipsis y navegación ergonómica.
- **`Stepper & Timeline`:** Guía secuencial de pasos con indicadores de progreso dinámico.
- **`PasswordRequirements`:** Indicador dinámico en tiempo real de seguridad de contraseñas.
- **`StarRating`:** Calificador de estrellas interactivo y modo solo lectura.
- **`Accordion`:** Secciones desplegables animadas con cálculo elástico de altura.
- **`StatCard`:** Tarjeta de métricas ejecutivas con indicadores de variación porcentual.
- **`EmptyState`:** Estado visual guiado para listas o grillas vacías.

### 🔷 Organismos & Utilidades
- **`Table & DataTable`:** Tablas técnicas con cabeceras estilizadas y contenedor con scroll horizontal seguro.
- **`Drawer`:** Panel lateral deslizante para navegación y formularios complejos.
- **`Card Modular`:** Conjunto modular (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`).
- **`Callout`:** Alertas y notas destacadas.
- **`Sidebar`:** Barra lateral adaptable con buscador de legos y acordeones colapsables.
- **`AnimateIn`:** Envoltorio de entrada acelerado por GPU con física de desaceleración.
- **`CodeBlock`:** Bloque de código estilo IDE con syntax highlighting Prism, copiado al portapapeles y descarga de archivos.
- **`FireSeedProvider`:** Proveedor de temas multi-cliente para inyección dinámica de tokens sin recargar.

---

## 📦 Instalación

```bash
npm install fireseed-ui framer-motion lucide-react
```

### 1. Importar los Estilos
En el punto de entrada de tu aplicación (`main.tsx` o `App.tsx`):

```tsx
import 'fireseed-ui/style.css';
```

### 2. Configuración de Temas (Multi-Empresa)
Envuelve tu aplicación en el `<FireSeedProvider>` para activar tokens dinámicos:

```tsx
import { FireSeedProvider, Button } from 'fireseed-ui';
import 'fireseed-ui/style.css';

export default function App() {
  return (
    // Presets disponibles: 'fireseed' | 'violettPilates' | 'estetica' o customTokens
    <FireSeedProvider theme="fireseed">
      <Button variant="solid">Explorar Catálogo</Button>
    </FireSeedProvider>
  );
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
