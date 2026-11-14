/* Developed by FireSeed - Fueling Innovation */
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  it('renderiza correctamente el contenido de texto', () => {
    render(<Button>Comenzar Ahora</Button>);
    expect(screen.getByRole('button', { name: /comenzar ahora/i })).toBeInTheDocument();
  });

  it('ejecuta onClick cuando no está deshabilitado', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Acción</Button>);
    fireEvent.click(screen.getByRole('button', { name: /acción/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('no ejecuta onClick cuando disabled=true', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Bloqueado</Button>);
    fireEvent.click(screen.getByRole('button', { name: /bloqueado/i }));
    expect(handleClick).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: /bloqueado/i })).toBeDisabled();
  });

  it('bloquea interacción y muestra spinner cuando isLoading=true', () => {
    const handleClick = vi.fn();
    render(<Button isLoading onClick={handleClick}>Cargando</Button>);
    const button = screen.getByRole('button', { name: /cargando/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
