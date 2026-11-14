/* Developed by FireSeed - Fueling Innovation */
import '@testing-library/jest-dom';

// Polyfills para jsdom en testing de componentes UI
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });

  // Mock navigator.vibrate para pruebas de haptics
  if (!navigator.vibrate) {
    navigator.vibrate = () => true;
  }
}
