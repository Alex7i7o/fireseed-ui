/* Developed by FireSeed - Fueling Innovation */

/**
 * Haptic feedback utility
 * Safe wrapper around navigator.vibrate for touch devices (Android, webviews).
 * Degrades gracefully on devices/browsers that do not support navigator.vibrate (e.g., iOS Safari).
 */
export const haptics = {
  success: () => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([15, 50, 15]); // Two short crisp taps
    }
  },
  error: () => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([50, 50, 50, 50]); // Heavy warning buzz
    }
  },
  warning: () => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([30, 40, 30]);
    }
  },
  light: () => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10); // Micro tap for clicks
    }
  },
  heavy: () => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(40); // Solid click for confirmations
    }
  }
};
