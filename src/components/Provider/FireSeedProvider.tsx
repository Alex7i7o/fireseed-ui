/* Developed by FireSeed - Fueling Innovation */
import React, { createContext, useContext, useMemo, useEffect } from 'react';

export interface FireSeedThemeTokens {
  primaryMain?: string;
  primarySurface?: string;
  primaryHover?: string;
  accentMain?: string;
  accentHover?: string;
  accentAmber?: string;
  accentGlow?: string;
  techPeriwinkle?: string;
  creamSilk?: string;
  background?: string;
  card?: string;
  foreground?: string;
  border?: string;
}

export type PredefinedTheme = 'fireseed' | 'violettPilates' | 'estetica';

export const fireseedThemes: Record<PredefinedTheme, FireSeedThemeTokens> = {
  fireseed: {
    primaryMain: '#120524',
    primarySurface: '#241142',
    primaryHover: '#31165a',
    accentMain: '#FBBF24',
    accentHover: '#f59e0b',
    accentAmber: '#E67E22',
    accentGlow: 'rgba(251, 191, 36, 0.35)',
    techPeriwinkle: '#9EA2E2',
    creamSilk: '#FFF6DF',
    background: '#0D041A',
    card: '#120524',
    foreground: '#FFF6DF',
    border: 'rgba(158, 162, 226, 0.22)'
  },
  violettPilates: {
    primaryMain: '#1E0826',       // Ciruela / Violeta Imperial
    primarySurface: '#2E103B',    // Púrpura de Estudio
    primaryHover: '#3E164F',
    accentMain: '#E0A96D',        // Champagne / Oro Rosado
    accentHover: '#C68B4E',
    accentAmber: '#D97706',
    accentGlow: 'rgba(224, 169, 109, 0.35)',
    techPeriwinkle: '#C084FC',    // Lavanda Suave
    creamSilk: '#FFF8EE',         // Seda Marfil
    background: '#14051B',
    card: '#1E0826',
    foreground: '#FFF8EE',
    border: 'rgba(192, 132, 252, 0.22)'
  },
  estetica: {
    primaryMain: '#0F172A',       // Slate Marino Nocturno
    primarySurface: '#1E293B',    // Pizarra Elevada
    primaryHover: '#334155',
    accentMain: '#F43F5E',        // Rosa Carmesí Estética
    accentHover: '#E11D48',
    accentAmber: '#FB7185',
    accentGlow: 'rgba(244, 63, 94, 0.35)',
    techPeriwinkle: '#94A3B8',    // Plateado Clínico
    creamSilk: '#F8FAFC',         // Blanco Nube
    background: '#090D16',
    card: '#0F172A',
    foreground: '#F8FAFC',
    border: 'rgba(148, 163, 184, 0.22)'
  }
};

interface FireSeedContextType {
  themeName?: PredefinedTheme;
  tokens: FireSeedThemeTokens;
}

const FireSeedContext = createContext<FireSeedContextType>({
  tokens: fireseedThemes.fireseed
});

export function useFireSeedTheme() {
  return useContext(FireSeedContext);
}

export interface FireSeedProviderProps {
  theme?: PredefinedTheme | FireSeedThemeTokens;
  children: React.ReactNode;
  global?: boolean; // Inyecta las variables en document.documentElement si es true
  className?: string;
}

export function FireSeedProvider({
  theme = 'fireseed',
  children,
  global = false,
  className
}: FireSeedProviderProps) {
  const tokens = useMemo(() => {
    if (typeof theme === 'string') {
      return fireseedThemes[theme] || fireseedThemes.fireseed;
    }
    return { ...fireseedThemes.fireseed, ...theme };
  }, [theme]);

  const cssVariables = useMemo(() => {
    const vars: Record<string, string> = {};
    if (tokens.primaryMain) vars['--color-primary'] = tokens.primaryMain;
    if (tokens.primarySurface) vars['--color-card'] = tokens.primarySurface;
    if (tokens.primaryHover) vars['--color-primary-hover'] = tokens.primaryHover;
    if (tokens.accentMain) vars['--color-accent'] = tokens.accentMain;
    if (tokens.accentHover) vars['--color-accent-hover'] = tokens.accentHover;
    if (tokens.accentAmber) vars['--color-accent-active'] = tokens.accentAmber;
    if (tokens.accentGlow) vars['--color-accent-glow'] = tokens.accentGlow;
    if (tokens.techPeriwinkle) vars['--color-muted'] = tokens.techPeriwinkle;
    if (tokens.creamSilk) vars['--color-foreground'] = tokens.creamSilk;
    if (tokens.background) vars['--color-background'] = tokens.background;
    if (tokens.card) vars['--color-card'] = tokens.card;
    if (tokens.foreground) vars['--color-foreground'] = tokens.foreground;
    if (tokens.border) vars['--color-border'] = tokens.border;
    return vars;
  }, [tokens]);

  useEffect(() => {
    if (global && typeof document !== 'undefined') {
      const root = document.documentElement;
      Object.entries(cssVariables).forEach(([key, val]) => {
        root.style.setProperty(key, val);
      });
    }
  }, [global, cssVariables]);

  const themeName = typeof theme === 'string' ? theme : undefined;

  return (
    <FireSeedContext.Provider value={{ themeName, tokens }}>
      {global ? (
        children
      ) : (
        <div
          data-fireseed-theme={themeName || 'custom'}
          style={cssVariables as React.CSSProperties}
          className={className}
        >
          {children}
        </div>
      )}
    </FireSeedContext.Provider>
  );
}

